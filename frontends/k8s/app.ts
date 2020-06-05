import { createBluePrint, IBluePrint } from "../../utils/blueprint.ts";
import { KubeMetaContext } from "./types.ts";

export function createMicroservice<
  T extends KubeMetaContext = KubeMetaContext,
>(): IBluePrint<KubeMetaContext, {}> {
  return createBluePrint<T>();
}
