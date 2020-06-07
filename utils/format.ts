import { stringify } from "https://deno.land/std/encoding/yaml.ts";

function cleanObject(x: any) {
  if (typeof (x) === "object") {
    if (Array.isArray(x)) {
      x.forEach(cleanObject);
    } else {
      Object.keys(x).forEach((key) => {
        if (x[key] === undefined) {
          delete x[key];
        } else {
          cleanObject(x[key]);
        }
      });
      x;
    }
  }
}

export function formatYaml(o: any) {
  console.log(o);
  return Object.values(o as { [key: string]: any }).map((x) => {
    cleanObject(x);
    return stringify(x);
  })
    .join("---\n");
}
