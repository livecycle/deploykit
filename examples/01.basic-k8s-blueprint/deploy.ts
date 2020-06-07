import { createMicroservice } from "https://deno.land/x/gh:yshayy:deploykit@0.0.6/blueprint/k8s/app.ts";
import {
  addDeployment,
  addService,
  expose,
} from "https://deno.land/x/gh:yshayy:deploykit@0.0.6/blueprint/k8s/operators/all.ts";

createMicroservice().with(
  addDeployment({ image: "my-image" }),
  addService({ port: 80 }),
  expose({ domain: "my-app.com" }),
).dump(
  { name: "my-app", namespace: "my-namespace", labels: { app: "my-app" } },
);
