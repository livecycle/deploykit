import {
  generateDefs,
  addStubModules,
} from "../generators/openapi/k8s/generate.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";
import { normalize, dirname } from "https://deno.land/std/path/mod.ts";
const { args } = Deno;

let params = parse(args);

let inputSrc: string = params["input"] ||
  "https://github.com/kubernetes/kubernetes/blob/v1.18.3/api/openapi-spec/swagger.json?raw=true";

let output: string = params["output"];

if (output === null) {
  throw "Missing arguement '--output'";
}

let data = (inputSrc.startsWith("http://") || inputSrc.startsWith("https://"))
  ? await fetch(inputSrc).then((x) => x.json())
  : JSON.parse(await Deno.readTextFile(inputSrc));
let results = generateDefs(data);
console.info(
  `Found ${
    Object.keys(data.definitions).length
  } definitions for ${results.length} files`,
);
let stubs = addStubModules(results.map((x) => x.location));
for (let { location, content } of [...results, ...stubs]) {
  await Deno.mkdir(
    normalize([output, dirname(location)].join("/")),
    { recursive: true },
  );
  await Deno.writeTextFile(normalize([output, location].join("/")), content);
}
console.info("success");
