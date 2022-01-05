import { Definition } from "./types.ts";
import { formatComment, formatTSPropName, getType } from "./utils.ts";

export function compileType(
  def: Definition,
  apiVersion?: string,
  kind?: string,
): string {
  if (typeof def.$ref === "string") {
    return getType(def.$ref.substring("#/definitions/".length)).name;
  }
  if (def.oneOf || def.anyOf) {
    return (def.oneOf || def.anyOf!).map((x) => compileType(x)).join("|");
  }

  if (def.type === "object") {
    const { required = [], properties = {}, additionalProperties } = def;
    return (
      `{
  ${
        Object.entries(properties).map(([key, prop]) => {
          if (key === "apiVersion" && apiVersion) {
            return `${formatTSPropName(key)}:'${apiVersion}';
            `;
          }
          if (key === "kind" && kind) {
            return `${formatTSPropName(key)}:'${kind}';
            `;
          }
          return `
    ${prop.description ? formatComment(prop.description) : ""}
    ${formatTSPropName(key)}${required.includes(key) ? "" : "?"}:${
            compileType(prop)
          };
    `;
        }).join("")
      }
  ${
        additionalProperties &&
          `[key:string]: ${compileType(additionalProperties)}` || ""
      }
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
