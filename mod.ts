export { createBluePrint } from "./blueprint/blueprint.ts";
import * as k8s from "./generated/k8s/v1.18.3/api/mod.ts";
import * as bluePrintk8s from "./blueprint/k8s/mod.ts";

export const generated = {
  k8s,
};

export const blueprint = {
  bluePrintk8s,
};
