import * as k8s from "../../../generated/k8s/v1.18.3/mod.ts";
import copy from "https://cdn.pika.dev/fast-copy@^2.0.4";
import { KubeMetaContext } from "../types.ts";
import { RequiredKeysInPath } from "../../ts-helpers.ts";

export function createAddResourceOp<
  TParams,
  TContext extends KubeMetaContext,
  TResources,
  TNewResource,
  TKey extends string,
>(
  defaultResourceKey: TKey,
  fn: (
    p: TParams,
  ) => ((ctx: TContext, r: TResources) => TNewResource) | TNewResource,
) {
  return <
    TResources2 extends TResources,
    TContext2 extends TContext,
    TKey2 extends string = TKey,
  >(
    opts:
      | (TParams & { resourceKey?: TKey2 })
      | ((
        ctx: TContext2,
        resources: TResources2,
      ) => TParams & { resourceKey?: TKey2 }),
  ) =>
    (r: TResources2, ctx: TContext2) => {
      let results = typeof (opts) === "function"
        ? (opts as ((
          ctx: TContext2,
          resources: TResources2,
        ) => TParams & { resourceKey?: TKey2 }))(
          ctx,
          r,
        )
        : opts;
      let builderOrInstance = fn(results);
      let ff = typeof builderOrInstance === "function"
        ? (builderOrInstance as (
          ctx: TContext2,
          r: TResources,
        ) => TNewResource)(ctx, r)
        : builderOrInstance;

      return addResource<
        TKey2,
        TContext2,
        TResources2,
        typeof ff
      >(
        results["resourceKey"] || defaultResourceKey as any,
        ff,
      )(r, ctx);
    };
}

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
  TResources,
  U extends {
    ["metadata"]?:
      | k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
      | undefined;
  },
>(
  name: TKey,
  factoryOrInstance:
    | U
    | ((ctx: TContext, resources: TResources) => U),
) {
  return function (
    resources: TResources,
    ctx: TContext,
  ) {
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

    let n = {
      [name]: newResource,
    } as Record<
      TKey,
      RequiredKeysInPath<U, ["metadata"], "name" | "namespace" | "labels">
    >;

    return {
      ...n,
      ...resources,
    };
  };
}
