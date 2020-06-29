import { createBluePrint, InitCompose, IBluePrint } from "../blueprint.ts";
import { KubeMetaContext } from "./types.ts";

export function createKubeBlueprint<
  TContext extends KubeMetaContext = KubeMetaContext,
  U = {},
>(
  c?: InitCompose<TContext, U>,
) {
  return createBluePrint<TContext>(c) as IBluePrint<TContext, U>;
}

export const createMicroservice = createKubeBlueprint;
