import { stringify } from "https://deno.land/std@0.103.0/encoding/yaml.ts";
import { cleanObject } from "./object.ts";

export function formatYaml(o: any) {
  return Object.values(o as { [key: string]: any }).map((x) => {
    cleanObject(x);
    return stringify(x, { noRefs: true });
  })
    .join("---\n");
}
