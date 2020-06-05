import * as k8s from "https://raw.githubusercontent.com/Yshayy/kubernetes-models-deno-generated/master/index.ts";
import { KubeMetaContext } from "../types.ts";
import copy from "https://cdn.pika.dev/fast-copy@^2.0.4";

export function addResources<
  TContext extends KubeMetaContext,
  U extends {
    [k: string]: {
      ["metadata"]?:
        | k8s.apimachinery.pkg.apis.meta.v1.IIoK8sApimachineryPkgApisMetaV1ObjectMeta
        | undefined;
    };
  },
>(factoryOrInstance: U | ((ctx: TContext) => U)) {
  return function <T>(resources: T, ctx: TContext) {
    let newResources = typeof (factoryOrInstance) === "function"
      ? factoryOrInstance(ctx)
      : (copy(factoryOrInstance, undefined) as U);
    for (let r of Object.values(newResources)) {
      if (!r.metadata) {
        r.metadata = {
          name: ctx.name,
          namespace: ctx.namespace,
          labels: ctx.labels,
        };
      }
    }

    return {
      ...newResources,
      ...resources,
    };
  };
}
