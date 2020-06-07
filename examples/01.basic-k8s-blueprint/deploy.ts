import { createMicroservice } from "https://deno.land/x/gh:yshayy:deploykit@0.0.10/blueprint/k8s/app.ts";
import {
  addDeployment,
  addService,
  expose,
} from "https://deno.land/x/gh:yshayy:deploykit@0.0.10/blueprint/k8s/operators/all.ts";

let app = createMicroservice().with(
  addDeployment({ image: "my-image" }),
  addService({ port: 80 }),
  expose({ domain: "my-app.com" }),
).build({ "name": "app", "namespace": "sss", labels: {} });
