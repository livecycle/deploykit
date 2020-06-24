import type { Definition, GroupVersionKind } from "./types.ts";
import { mergeWithArrayConcat } from "../../../utils/object.ts";
import { dirname } from "https://deno.land/std/path/mod.ts";
import {
  appendToObject,
  getType,
  getImports,
  getImportPath,
  formatComment,
} from "./utils.ts";
import { compileType } from "./compile_type.ts";

function writeType(name: string, def: Definition): string {
  let interfaceDef = `
  ${def.description && formatComment(def.description)}
  export type ${name} = ${compileType(def)}`;
  let gvk = def["x-kubernetes-group-version-kind"] as
    | GroupVersionKind[]
    | null;
  if (
    gvk && gvk.length > 0 &&
    Object.keys(def.properties || {}).includes("apiVersion")
  ) {
    let apiVersion = [gvk[0].group, gvk[0].version].filter((x) => x != "")
      .join("/");
    let funcDef = `
export function create${name}<T extends Omit<${name}, "apiVersion" | "kind">>(data:T):${name} & T & Pick<${name}, "apiVersion" | "kind">{
  return {apiVersion: "${apiVersion}", kind: "${gvk[0].kind}", ...data}
}
`;
    return [interfaceDef, funcDef].join("");
  }
  return interfaceDef;
}

export function generateDefs(
  openApi: { definitions: { [key: string]: Definition } },
  options: {
    externalRefs: { [key: string]: string };
  } = { externalRefs: {} },
) {
  let files = Object.entries(openApi.definitions).map(([key, def]) => ({
    ...getType(key),
    def,
  }))
    .reduce(
      (acc, next) =>
        mergeWithArrayConcat(
          acc,
          { [next.location]: [{ name: next.name, def: next.def }] },
        ),
      {} as { [key: string]: { name: string; def: Definition }[] },
    );
  return Object.entries(files).map(([location, types]) => {
    let header = `/* Generated for ${location} */`;
    let imports = types.flatMap((x) => getImports(x.def, options.externalRefs))
      .reduce(
        (acc, next) =>
          mergeWithArrayConcat(acc, { [next.location]: [next.name] }),
        {},
      ) as { [key: string]: string[] };

    let importHeader = Object.entries(imports).filter(([importLocation]) =>
      importLocation !== location
    )
      .map(([importLocation, names]) =>
        `import { ${[...new Set(names)].join(",")}} from "${
          getImportPath(dirname(location), importLocation)
        }"`
      ).join("\n");

    let typesContent = types.map(({ name, def }) => writeType(name, def)).join(
      "\n",
    );

    return {
      location,
      content: [header, importHeader, typesContent].join("\n"),
    };
  });
}

export function addStubModules(
  locations: string[],
): { location: string; content: string }[] {
  let tree = {};
  for (let l of locations) {
    appendToObject(dirname(l).split("/"), true, tree);
  }
  let nodesToVisit = [{ path: "", node: tree as any }];
  let results = [] as { location: string; content: string }[];
  for (
    let current = nodesToVisit.shift();
    current != null;
    current = nodesToVisit.shift()
  ) {
    let { node, path } = current;
    if (node === true) continue;
    results.push(
      {
        location: path + "/mod.ts",
        content: Object.keys(node).map((x) =>
          `
export * as ${x.replace(/-/g, "_")} from "./${x}/mod.ts"
`
        ).join(""),
      },
    );
    nodesToVisit.push(
      ...Object.entries(node).map(([name, node]) => ({
        path: [path, name].filter((x) => x !== "").join("/"),
        node,
      })),
    );
  }

  return results;
}
