import { expandGlobSync } from "https://deno.land/std@0.103.0/fs/mod.ts";
let target = "0.0.24";

let replaced = `https://deno.land/x/deploykit@${target}`;
let regex = /https:\/\/deno\.land\/x\/deploykit@[0-9.]+/g;

for await (
  const fileInfo of [
    ...expandGlobSync("./README.md"),
    ...expandGlobSync("./docs/**/*"),
    ...expandGlobSync("./examples/**/*"),
  ]
) {
  if (fileInfo.isFile) {
    let data = Deno.readTextFileSync(fileInfo.path);
    Deno.writeTextFileSync(fileInfo.path, data.replace(regex, replaced));
  }
}
