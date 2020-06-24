type Head<T extends any[]> = T extends [any, ...any[]] ? T[0]
  : never;

type Tail<T extends any[]> = ((...t: T) => any) extends
  ((_: any, ...tail: infer TT) => any) ? TT
  : [];

type RequiredKeys<T, Key extends keyof T> =
  & T
  & Required<Pick<T, Key>>;

export type RequiredKeysInPath<
  T,
  Path extends string[],
  Key extends keyof T | any,
> = Path extends [] ? RequiredKeys<T, Extract<Key, keyof T>>
  : Head<Path> extends ("*" | keyof T) ? (
    & T
    & {
      [TT in (Head<Path> extends "*" ? keyof T : Head<Path>)]-?: TT extends
        keyof T ? RequiredKeysInPath<Exclude<T[TT], undefined>, Tail<Path>, Key>
        : never;
    }
  )
  : never;
