import { parseAll } from "https://deno.land/std@0.103.0/encoding/yaml.ts";
import {
  CRD,
  generateFromCRDs,
} from "./generators/openapi/crd/generate_crd.ts";
import {
  addStubModules,
  generateDefs,
} from "./generators/openapi/k8s/generate.ts";
import { parse } from "https://deno.land/std@0.103.0/flags/mod.ts";
import { dirname, normalize } from "https://deno.land/std@0.103.0/path/mod.ts";
import { Definition } from "./generators/openapi/k8s/types.ts";

let args = parse(Deno.args);
let sources = JSON.parse(
  Deno.readTextFileSync(args.input || "./generated/k8s/sources.json"),
) as { native: string[]; crds: string[] };

let crds = (await Promise.all(sources.crds.map(async (s) => {
  return parseAll(await fetch(s).then((x) => x.text())) as CRD[];
}))).flat();

let k8s = (await Promise.all(sources.native.map(async (x) => {
  return {
    version: x,
    schema: await fetch(
      `https://raw.githubusercontent.com/kubernetes/kubernetes/${x}/api/openapi-spec/swagger.json`,
    ).then((x) => x.json()) as { definitions: { [key: string]: Definition } },
  };
})));

for (
  let { base, results } of [
    { base: "./generated/k8s/crds", results: generateFromCRDs(crds) },
    ...k8s.map(({ version, schema }) => ({
      base: `./generated/k8s/${version}`,
      results: generateDefs(schema),
    })),
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
