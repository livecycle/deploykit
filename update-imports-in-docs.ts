import { expandGlobSync } from "https://deno.land/std/fs/mod.ts";
let target = "0.0.17";

let replaced = `https://raw.githubusercontent.com/yshayy/deploykit/${target}`;
let regex =
  /https:\/\/raw\.githubusercontent\.com\/yshayy\/deploykit\/[0-9.]+/g;

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
