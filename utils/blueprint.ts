import { stringify } from "https://deno.land/std/encoding/yaml.ts";


export type BluePrintTransform<TContext,T, U> = (r:T, ctx:TContext)=>U

export interface IBluePrint<TContext, T>{
    with(): IBluePrint<TContext,T >;
    
    with<A>(op1: BluePrintTransform<TContext, T, A>): IBluePrint<TContext, A>;
    with<A,B>(op1: BluePrintTransform<TContext, T, A>, op2: BluePrintTransform<TContext, A, B>): IBluePrint<TContext, B>;
    with<A,B,C>(op1: BluePrintTransform<TContext, T, A>, op2: BluePrintTransform<TContext, A, B>, op3: BluePrintTransform<TContext, B, C> ): IBluePrint<TContext, C>;
    with<A,B,C,D>(op1: BluePrintTransform<TContext, T, A>, op2: BluePrintTransform<TContext, A, B>, op3: BluePrintTransform<TContext, B, C>, op4: BluePrintTransform<TContext, C, D>): IBluePrint<TContext, D>;
    with<A,B,C,D,E>(op1: BluePrintTransform<TContext, T, A>, op2: BluePrintTransform<TContext, A, B>, op3: BluePrintTransform<TContext, B, C>, op4: BluePrintTransform<TContext, C, D>, op5: BluePrintTransform<TContext, D, E>): IBluePrint<TContext, E>;
    with<A,B,C,D,E, F>(op1: BluePrintTransform<TContext, T, A>, op2: BluePrintTransform<TContext, A, B>, op3: BluePrintTransform<TContext, B, C>, op4: BluePrintTransform<TContext, C, D>, op5: BluePrintTransform<TContext, D, E>, op6: BluePrintTransform<TContext, E, F>): IBluePrint<TContext, F>;
    with<A,B,C,D,E, F, G>(op1: BluePrintTransform<TContext, T, A>, op2: BluePrintTransform<TContext, A, B>, op3: BluePrintTransform<TContext, B, C>, op4: BluePrintTransform<TContext, C, D>, op5: BluePrintTransform<TContext, D, E>, op6: BluePrintTransform<TContext, E, F>, op7: BluePrintTransform<TContext, F, G>): IBluePrint<TContext, G>;
    //with(...transforms: BluePrintTransform<TContext,any, any>[]):IBluePrint<TContext,any>
    build(t: TContext): T,
    dump(ctx: TContext): void
}


class BluePrint<TContext,T> implements IBluePrint<TContext,T>{

    constructor(public build: (ctx:TContext)=>T){
    }

    with(...transforms: BluePrintTransform<TContext,any, any>[]):IBluePrint<TContext,any>{
        return transforms.reduce((acc,next)=> new BluePrint<TContext, any>((ctx)=> next(acc.build(ctx), ctx)) , this as IBluePrint<TContext, any>)
    }

    dump(ctx:TContext ){
        console.log(Object.values(this.build(ctx)).map((x) => stringify(x)).join("-----\n"))
    }
}

export function createBluePrint<T>() : IBluePrint<T, {}>{
    return new BluePrint<T, {}>(()=>{ return {} }); 
}

export const modify = <T,TContext>(fn : (t:T, ctx: TContext)=> void) =>{
    return function(resources:T, ctx: TContext){
        fn(resources, ctx);
        return resources;
    }
}


