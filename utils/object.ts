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
