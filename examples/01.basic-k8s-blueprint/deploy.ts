import { createMicroservice } from "https://deno.land/x/gh:yshayy:deploykit@0.0.15/blueprint/k8s/app.ts";
import {
  addDeployment,
  addService,
  expose,
  addResource,
} from "https://deno.land/x/gh:yshayy:deploykit@0.0.15/blueprint/k8s/operators/all.ts";
import * as crds from "https://deno.land/x/gh:yshayy:deploykit@0.0.15/generated/k8s/crds/mod.ts";
import { KubeMetaContext } from "https://deno.land/x/gh:yshayy:deploykit@0.0.15/blueprint/k8s/types.ts";
import { defer } from "https://deno.land/x/gh:yshayy:deploykit@0.0.15/blueprint/mod.ts";

interface MyServiceParams extends KubeMetaContext {
  image: {
    registry: string;
    name: string;
    version: string;
  };
  domain: string;
}

let blueprint = createMicroservice<MyServiceParams>().with(
  defer(({ image }) => {
    return addDeployment(
      { image: `${image.registry}/${image.name}:${image.version}` },
    );
  }),
  addService({ port: 80 }),
  addResource(
    "monitor",
    ({ labels }) =>
      crds.monitoring.coreos.com.v1.createServiceMonitor({
        spec: {
          endpoints: [
            {
              path: "/metrics",
            },
          ],
          selector: {
            matchLabels: labels,
          },
        },
      }),
  ),
  defer(({ domain }) => expose({ domain })),
);

blueprint.dump(
  {
    name: "my-app",
    namespace: "my-namespace",
    labels: { app: "my-app" },
    image: { name: "abc", registry: "docker.io", version: "latest" },
    domain: "my-app.com",
  },
);
