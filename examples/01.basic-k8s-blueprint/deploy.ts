import { createKubeBlueprint } from "https://raw.githubusercontent.com/yshayy/deploykit/0.0.17/blueprint/k8s/mod.ts";
import {
  addDeployment,
  addService,
  expose,
  addResource,
} from "../../blueprint/k8s/operators/all.ts";
import * as crds from "https://raw.githubusercontent.com/yshayy/deploykit/0.0.17/generated/k8s/crds/mod.ts";
import { KubeMetaContext } from "https://raw.githubusercontent.com/yshayy/deploykit/0.0.17/blueprint/k8s/types.ts";

interface MyServiceParams extends KubeMetaContext {
  image: {
    registry: string;
    name: string;
    version: string;
  };
  domain: string;
}

let blueprint = createKubeBlueprint((b, { image, domain }: MyServiceParams) =>
  b.with(
    addDeployment({
      image: `${image.registry}/${image.name}:${image.version}`,
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
    expose({ domain }),
  )
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
