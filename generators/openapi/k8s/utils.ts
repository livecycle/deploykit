import { Definition } from "./types.ts";
import { relative } from "https://deno.land/std/path/mod.ts";
export function getType(fullname: string) {
  if (fullname.startsWith("io.k8s.")) {
    fullname = fullname.substring("io.k8s.".length);
  }
  const fragments = fullname.split(".");
  const name = fragments.pop()!;

  return { name, location: [...fragments, "mod.ts"].join("/") };
}

export function formatTSPropName(propName: string) {
  if (propName.includes("-")) {
    return `["${propName}"]`;
  }
  return propName;
}

export const formatComment = (s: string) => `/** ${s.replace(/\/*/g, "")} */`;

export function appendToObject<T>(path: string[], value: T, target: any) {
  let finalNode = path.pop()!;
  for (let node of path) {
    target[node] = target[node] || {};
    target = target[node];
  }
  target[finalNode] = value;
}

export function getImports(
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

export function getImportPath(from: string, to: string) {
  if (to.startsWith("https://") || to.startsWith("http://")) {
    return to;
  }
  return relative(from, to);
}
