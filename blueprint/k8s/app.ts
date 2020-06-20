import { createBluePrint, IBluePrint } from "../blueprint.ts";
import { KubeMetaContext } from "./types.ts";

export function createMicroservice<
  T extends KubeMetaContext = KubeMetaContext,
>(): IBluePrint<T, {}> {
  return createBluePrint<T>();
}
