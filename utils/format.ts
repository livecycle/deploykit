
import { stringify } from "https://deno.land/std/encoding/yaml.ts";

export function formatYaml(o: any){
    return Object.values(o as {[key:string]: any }).map((x) => stringify(x)).join("---\n")
}
