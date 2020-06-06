import {
  merge as deepMerge,
  concatArrays,
} from "https://cdn.pika.dev/merge-anything@^2.4.4";
import copy from "https://cdn.pika.dev/copy-anything@^1.5.4";
import { formatYaml } from "../utils/format.ts";
import { mergeWithArrayConcat } from "../utils/object.ts";

export type BluePrintTransform<TContext, T, U> = (r: T, ctx: TContext) => U;

export interface IBluePrint<TContext, T> {
  with(): IBluePrint<TContext, T>;

  with<A>(op1: BluePrintTransform<TContext, T, A>): IBluePrint<TContext, A>;
  with<A, B>(
    op1: BluePrintTransform<TContext, T, A>,
    op2: BluePrintTransform<TContext, A, B>,
  ): IBluePrint<TContext, B>;
  with<A, B, C>(
    op1: BluePrintTransform<TContext, T, A>,
    op2: BluePrintTransform<TContext, A, B>,
    op3: BluePrintTransform<TContext, B, C>,
  ): IBluePrint<TContext, C>;
  with<A, B, C, D>(
    op1: BluePrintTransform<TContext, T, A>,
    op2: BluePrintTransform<TContext, A, B>,
    op3: BluePrintTransform<TContext, B, C>,
    op4: BluePrintTransform<TContext, C, D>,
  ): IBluePrint<TContext, D>;
  with<A, B, C, D, E>(
    op1: BluePrintTransform<TContext, T, A>,
    op2: BluePrintTransform<TContext, A, B>,
    op3: BluePrintTransform<TContext, B, C>,
    op4: BluePrintTransform<TContext, C, D>,
    op5: BluePrintTransform<TContext, D, E>,
  ): IBluePrint<TContext, E>;
  with<A, B, C, D, E, F>(
    op1: BluePrintTransform<TContext, T, A>,
    op2: BluePrintTransform<TContext, A, B>,
    op3: BluePrintTransform<TContext, B, C>,
    op4: BluePrintTransform<TContext, C, D>,
    op5: BluePrintTransform<TContext, D, E>,
    op6: BluePrintTransform<TContext, E, F>,
  ): IBluePrint<TContext, F>;
  with<A, B, C, D, E, F, G>(
    op1: BluePrintTransform<TContext, T, A>,
    op2: BluePrintTransform<TContext, A, B>,
    op3: BluePrintTransform<TContext, B, C>,
    op4: BluePrintTransform<TContext, C, D>,
    op5: BluePrintTransform<TContext, D, E>,
    op6: BluePrintTransform<TContext, E, F>,
    op7: BluePrintTransform<TContext, F, G>,
  ): IBluePrint<TContext, G>;
  //with(...transforms: BluePrintTransform<TContext,any, any>[]):IBluePrint<TContext,any>
  build(t: TContext): T;
  format(t: T): string;
  dump(ctx: TContext): void;
}


class BluePrint<TContext, TResources> implements IBluePrint<TContext, TResources> {
  constructor(public build: (ctx: TContext) => TResources, 
  public format = formatYaml) {
  }

  with(
    ...transforms: BluePrintTransform<TContext, any, any>[]
  ): IBluePrint<TContext, any> {
    return transforms.reduce(
      (acc, next) =>
        new BluePrint<TContext, any>((ctx) =>
          next(copy(acc.build(ctx), undefined), ctx)
        , this.format),
      this as IBluePrint<TContext, any>,
    );
  }

  dump(ctx: TContext) {
    console.log( this.format(this.build(ctx)));
  }
}

export function createBluePrint<TContext = undefined>(): IBluePrint<
  TContext,
  {}
> {
  return new BluePrint<TContext, {}>(() => {
    return {};
  });
}

export const modify = <T, TContext>(fn: (t: T, ctx: TContext) => void) => {
  return function (resources: T, ctx: TContext) {
    fn(resources, ctx);
    return resources;
  };
};

export function merge<U, TContext>(
  factoryOrInstance: ((ctx: TContext) => U) | U,
) {
  return function <T>(resources: T, ctx: TContext) {
    let newResources: U = typeof (factoryOrInstance) === "function"
      ? (factoryOrInstance as (ctx: TContext) => U)(ctx)
      : (copy(factoryOrInstance, undefined) as U);
    let result = mergeWithArrayConcat(
      resources,
      newResources,
    )
    return result;
  };
}

export function mergeSelect<T, K extends keyof T, TContext>(
  factoryOrInstance: ((ctx: TContext) => T[K]) | T[K],
  selector: K,
) {
  return function (resources: T, ctx: TContext) {
    let newResources = typeof (factoryOrInstance) === "function"
      ? (factoryOrInstance as (ctx: TContext) => T[K])(ctx)
      : (copy(factoryOrInstance, undefined) as T[K]);
    resources[selector] =mergeWithArrayConcat(
      resources[selector],
      newResources,
    ) as T[K];
    return resources;
  };
}
