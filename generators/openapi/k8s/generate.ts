import type { Definition, GroupVersionKind } from "./types.ts";
import { mergeWithArrayConcat } from "../../../utils/object.ts";
import { relative, dirname } from "https://deno.land/std/path/mod.ts";

function getType(fullname: string) {
  if (fullname.startsWith("io.k8s.")) {
    fullname = fullname.substring("io.k8s.".length);
  }
  const fragments = fullname.split(".");
  const name = fragments.pop()!;

  return { name, location: [...fragments, "mod.ts"].join("/") };
}

function formatTSPropName(propName: string) {
  if (propName.includes("-")) {
    return `["${propName}"]`;
  }
  return propName;
}

const formatComment = (s: string) => `/** ${s.replace(/\/*/g, "")} */`;

export function compileType(def: Definition): string {
  if (typeof def.$ref === "string") {
    return getType(def.$ref.substring("#/definitions/".length)).name;
  }
  if (def.type === "object") {
    const { required = [], properties = {}, additionalProperties } = def;
    return (
      `{
${
        Object.entries(properties).map(([key, prop]) =>
          `
  ${prop.description ? formatComment(prop.description) : ""}
  ${formatTSPropName(key)}${
            prop.required || required.includes(key) ? "" : "?"
          }:${compileType(prop)};
  `
        ).join("")
      }
${additionalProperties &&
          `[key:string]: ${compileType(additionalProperties)}` || ""}
}`
    );
  }
  if (def.type === "string") {
    if (def.enum && def.enum.length) {
      return def.enum.map((x) => JSON.stringify(x)).join(" | ");
    }
    switch (def.format) {
      case "int-or-string":
        return "string | number";

      default:
        return "string";
    }
  }
  if (def.type === "array") {
    if (def.items) {
      return `${compileType(def.items)}[]`;
    }

    return "any[]";
  }

  if (def.type === "boolean") {
    return "boolean";
  }

  if (def.type === "number" || def.type === "integer") {
    return "number";
  }

  if (def.type === "null") {
    return "null";
  }

  return "any";
}

function getImports(
  def: Definition,
  external: { [key: string]: string },
): { name: string; location: string }[] {
  if (def.type === "object") {
    return [
      ...Object.values(def.properties || {}).flatMap((x) =>
        getImports(x, external)
      ),
      ...(def.additionalProperties
        ? getImports(def.additionalProperties, external)
        : []),
    ];
  }
  if (def.type === "array") {
    return def.items ? getImports(def.items, external) : [];
  }
  if (def.$ref) {
    let fullName = def.$ref.substring("#/definitions/".length);
    let { name, location } = getType(fullName);
    return [{ name: name, location: external[fullName] || location }];
  }

  return [];
}

function getImportPath(from: string, to: string) {
  if (to.startsWith("https://") || to.startsWith("http://")) {
    return to;
  }
  return relative(from, to);
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

    let typesContent = types.map(({ name, def }) => {
      let interfaceDef = `export type ${name} = ${compileType(def)}`;
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
export function create${name}(data:Omit<${name}, "apiVersion" | "kind">):${name}{
  return {apiVersion: "${apiVersion}", kind: "${gvk[0].kind}", ...data}
}
`;
        return [interfaceDef, funcDef].join("");
      }
      return interfaceDef;
    }).join("\n");

    return {
      location,
      content: [header, importHeader, typesContent].join("\n"),
    };
  });
}

function appendToObject<T>(path: string[], value: T, target: any) {
  let finalNode = path.pop()!;
  for (let node of path) {
    target[node] = target[node] || {};
    target = target[node];
  }
  target[finalNode] = value;
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
