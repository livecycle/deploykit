import { createDeployment } from "https://deno.land/x/gh:yshayy:deploykit@0.0.7/generated/k8s/native/api/apps/v1/mod.ts";
import * as v1 from "https://deno.land/x/gh:yshayy:deploykit@0.0.7/generated/k8s/native/api/core/v1/mod.ts";
import { formatYaml } from "https://deno.land/x/gh:yshayy:deploykit@0.0.7/utils/format.ts";
import { createKamusSecret } from "https://deno.land/x/gh:yshayy:deploykit@0.0.7/generated/k8s/crds/soluto/com/v1alpha2/mod.ts";
let secret = createKamusSecret({
  metadata: {
    name: "my-app",
  },
  stringData: {
    "secrets.json": JSON.stringify({ some: "secret" }),
  },
});

let deployment = createDeployment({
  metadata: {
    name: "my-app",
  },
  spec: {
    selector: {
      matchLabels: {
        "app": "my-app",
      },
    },
    template: {
      spec: {
        volumes: [
          {
            name: "secrets",
            secret: {
              secretName: "my-app",
            },
          },
        ],
        containers: [
          {
            name: "app",
            image: "some-image",
            volumeMounts: [
              {
                name: "secrets",
                mountPath: "/run/secrets",
              },
            ],
          },
        ],
      },
    },
  },
});

let service = v1.createService({
  metadata: {
    name: "my-app",
  },
  spec: {
    selector: {
      "app": "my-app",
    },
    ports: [
      {
        port: 80,
      },
    ],
  },
});

console.log(formatYaml({ service, deployment, secret }));
