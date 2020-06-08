import * as k8s from "../../../generated/k8s/v1.18.3/mod.ts";
import copy from "https://cdn.pika.dev/fast-copy@^2.0.4";
import { KubeMetaContext } from "../types.ts";

export function addResources<
  TContext extends KubeMetaContext,
  U extends {
    [k: string]: {
      ["metadata"]?:
        | k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
        | undefined;
    };
  },
>(
  factoryOrInstance:
    | U
    | (<TResources>(ctx: TContext, resources: TResources) => U),
) {
  return function <T>(resources: T, ctx: TContext) {
    let newResources = typeof (factoryOrInstance) === "function"
      ? factoryOrInstance(ctx, resources)
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

export function addResource<
  TKey extends string,
  TContext extends KubeMetaContext,
  U extends {
    ["metadata"]?:
      | k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
      | undefined;
  },
>(
  name: TKey,
  factoryOrInstance:
    | U
    | (<TResources>(ctx: TContext, resources: TResources) => U),
) {
  return function <T>(resources: T, ctx: TContext) {
    let newResource = typeof (factoryOrInstance) === "function"
      ? factoryOrInstance(ctx, resources)
      : (copy(factoryOrInstance, undefined) as U);

    if (!newResource.metadata) {
      newResource.metadata = {
        name: ctx.name,
        namespace: ctx.namespace,
        labels: ctx.labels,
      };
    }

    return {
      [name]: newResource,
      ...resources,
    } as T & Record<TKey, U>;
  };
}
