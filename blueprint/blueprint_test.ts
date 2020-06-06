import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { createBluePrint, merge } from "./blueprint.ts";

Deno.test("merge test - override", () => {
  let s = createBluePrint().with(
    merge({
      service: {
        name: "abc",
      },
    }),
  );

  assertEquals(
    s.build(undefined).service.name,
    "abc",
  );

  assertEquals(
    s.with(
      merge({
        service: {
          name: "override",
        },
      }),
    ).build(undefined).service.name,
    "override",
  );

  assertEquals(
    s.build(undefined).service.name,
    "abc",
  );
});

Deno.test("merge test - concat arrays", () => {
  let s = createBluePrint().with(
    merge({
      service: {
        a: 5,
        roles: ["user"],
      },
    }),
    merge({
      service: {
        b: 10,
        roles: ["admin"],
      },
    }),
  );

  assertEquals(
    s.build(undefined).service.roles,
    ["user", "admin"],
  );
});
