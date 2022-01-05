import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { createKubeBlueprint } from "./app.ts";
import { addDeployment, addService, expose } from "./operators/all.ts";

Deno.test("basic k8s service test", () => {
  let s = createKubeBlueprint().with(
    addDeployment({ resourceKey: "dep", image: "my-image" }),
    addService({ port: 80 }),
    expose({ domain: "my-app.com" }),
  ).build(
    { name: "my-app", namespace: "my-namespace", labels: { app: "my-app" } },
  );
  [
    s.dep.metadata.name,
    s.service.metadata.name,
    s.ingress.metadata.name,
  ].every((x) => assertEquals(x, "my-app"));

  [
    s.dep.metadata.namespace,
    s.service.metadata.namespace,
    s.ingress.metadata.namespace,
  ].every((x) => assertEquals(x, "my-namespace"));

  [
    s.dep.metadata.labels,
    s.service.metadata.labels,
    s.ingress.metadata.labels,
  ].every((x) => assertEquals(x, { app: "my-app" }));

  assertEquals(
    s.dep.spec?.template.spec?.containers[0].image,
    "my-image",
  );

  assertEquals(s.service.spec.ports[0].port, 80);
  assertEquals(s.ingress.spec.rules[0].host, "my-app.com");
});
