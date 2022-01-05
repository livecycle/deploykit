import copy from "https://cdn.pika.dev/copy-anything@^1.5.4";
import { formatYaml } from "../utils/format.ts";
import { cleanObject, mergeWithArrayConcat } from "../utils/object.ts";

export interface BluePrintTransform<TContext, T, U> {
  (this: IBluePrint<TContext, T>, resources: T, ctx: TContext): U;
}

export type InitCompose<TContext, U = {}> = (
  org: IBluePrint<TContext, {}>,
  ctx: TContext,
) => IBluePrint<TContext, U>;

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
  build(t: TContext): T;
  format(t: T): string;
  dump(ctx: TContext): void;
}

class BluePrint<TContext, TResources>
  implements IBluePrint<TContext, TResources> {
  constructor(
    public build: (ctx: TContext) => TResources,
    public format = formatYaml,
  ) {
  }

  with(
    ...transforms: BluePrintTransform<TContext, any, any>[]
  ): IBluePrint<TContext, any> {
    return transforms.reduce(
      (acc, next) =>
        new BluePrint<TContext, any>(
          (ctx) =>
            next.call(acc, cleanObject(copy(acc.build(ctx), undefined)), ctx),
          this.format,
        ),
      this as IBluePrint<TContext, any>,
    );
  }

  dump(ctx: TContext) {
    console.log(this.format(this.build(ctx)));
  }
}

export function createBluePrint<TContext = undefined, U = {}>(
  composition: InitCompose<TContext, U> = (x) =>
    (x as any) as IBluePrint<TContext, U>,
): IBluePrint<TContext, U> {
  return new BluePrint<TContext, {}>(() => {
    return {};
  }).with(compose(composition));
}

export const modify = <TContext, T>(fn: (t: T, ctx: TContext) => void) => {
  return function (resources: T, ctx: TContext) {
    fn(resources, ctx);
    return resources;
  };
};

export function merge<TContext, U>(
  factoryOrInstance: ((ctx: TContext) => U) | U,
) {
  return function <T>(resources: T, ctx: TContext) {
    let newResources: U = typeof (factoryOrInstance) === "function"
      ? (factoryOrInstance as (ctx: TContext) => U)(ctx)
      : (copy(factoryOrInstance, undefined) as U);
    let result = mergeWithArrayConcat(
      resources,
      newResources,
    );
    return result;
  };
}

export function mergeSelect<TContext, T, K extends keyof T>(
  factoryOrInstance: ((ctx: TContext) => T[K]) | T[K],
  selector: K,
) {
  return function (resources: T, ctx: TContext) {
    let newResources = typeof (factoryOrInstance) === "function"
      ? (factoryOrInstance as (ctx: TContext) => T[K])(ctx)
      : (copy(factoryOrInstance, undefined) as T[K]);

    resources[selector] = mergeWithArrayConcat(
      resources[selector],
      newResources,
    ) as T[K];
    return resources;
  };
}

export function defer<TContext, T, U>(
  fn: (resources: T, ctx: TContext) => BluePrintTransform<TContext, T, U>,
): BluePrintTransform<TContext, T, U> {
  return function (r, ctx) {
    return this.with(fn(r, ctx)).build(ctx);
  };
}

export function compose<TContext, T, U>(
  fn: (org: IBluePrint<TContext, T>, ctx: TContext) => IBluePrint<TContext, U>,
): BluePrintTransform<TContext, T, U> {
  return function (_, ctx) {
    return fn(this, ctx).build(ctx);
  };
}

export function applyIf<TContext, T, U, TCondition extends boolean = false>(
  value: TCondition,
  transform: BluePrintTransform<TContext, T, U>,
): TCondition extends true ? BluePrintTransform<TContext, T, U>
  : BluePrintTransform<TContext, T, T> {
  let op = (value) ? transform : ((x: T) => x);
  return op as any;
}
