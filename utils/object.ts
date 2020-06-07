import {
  merge as deepMerge,
  concatArrays,
} from "https://cdn.pika.dev/merge-anything@^2.4.4";

export function mergeWithArrayConcat<T, U>(o1: T, o2: U) {
  return (deepMerge as any)(
    { extensions: [concatArrays] },
    o1,
    o2,
  ) as T & U;
}

export function cleanObject(x: any) {
  if (typeof (x) === "object") {
    if (Array.isArray(x)) {
      x.forEach(cleanObject);
    } else {
      Object.keys(x).forEach((key) => {
        if (x[key] === undefined) {
          delete x[key];
        } else {
          cleanObject(x[key]);
        }
      });
      x;
    }
  }
  return x;
}
