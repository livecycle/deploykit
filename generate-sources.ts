import { parseAll } from "https://deno.land/std/encoding/yaml.ts";
import {
  CRD,
  generateFromCRDs,
} from "./generators/openapi/crd/generate_crd.ts";
import {
  addStubModules,
  generateDefs,
} from "./generators/openapi/k8s/generate.ts";
import { dirname, normalize } from "https://deno.land/std/path/mod.ts";

let sources = JSON.parse(
  Deno.readTextFileSync("./generated/k8s/sources.json"),
) as { native: string; crds: string[] };

let crds = (await Promise.all(sources.crds.map(async (s) => {
  return parseAll(await fetch(s).then((x) => x.text())) as CRD[];
}))).flat();

let k8s = await fetch(sources.native).then((x) => x.json());

for (
  let { base, results } of [
    { base: "./generated/k8s/crds", results: generateFromCRDs(crds) },
    { base: "./generated/k8s/native", results: generateDefs(k8s) },
  ]
) {
  let stubs = addStubModules(results.map((x) => x.location));
  for (let { location, content } of [...results, ...stubs]) {
    console.log(
      normalize([base, dirname(location)].join("/")),
    );
    await Deno.mkdir(
      normalize([base, dirname(location)].join("/")),
      { recursive: true },
    );
    await Deno.writeTextFile(
      normalize([base, location].join("/")),
      content,
    );
  }
}

console.info("success");
