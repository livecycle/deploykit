import { stringify } from "https://deno.land/std/encoding/yaml.ts";
import { cleanObject } from "./object.ts";

export function formatYaml(o: any) {
  console.log(o);
  return Object.values(o as { [key: string]: any }).map((x) => {
    cleanObject(x);
    return stringify(x);
  })
    .join("---\n");
}
