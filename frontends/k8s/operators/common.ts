import * as k8s from "https://raw.githubusercontent.com/Yshayy/kubernetes-models-deno-generated/master/index.ts";
import { KubeMetaContext } from "../types.ts";
import { modify } from "../../../utils/blueprint.ts";
import { addResources } from "./base.ts";

export const addDeployment = ({ image }: { image: string }) =>
  addResources((ctx) => ({
    deployment: new k8s.apps.v1.Deployment({
      spec: {
        selector: {
          matchLabels: ctx.labels,
        },
        template: {
          metadata: {
            labels: ctx.labels,
          },
          spec: {
            containers: [
              {
                name: "app",
                image,
              },
            ],
          },
        },
      },
    }),
  }));

export const addService = ({ port }: { port: number }) =>
  addResources({
    service: new k8s.v1.Service({
      spec: {
        ports: [
          {
            port,
            targetPort: port,
          },
        ],
      },
    }),
  });

export const addTls = <
  T extends { ingress: k8s.extensions.v1beta1.Ingress },
  TContext extends KubeMetaContext,
>(
  { secretName, hostsFilter = () => true }: {
    secretName: string;
    hostsFilter?: (domain: string) => boolean;
  },
) => {
  return modify<T, TContext>((resources: T) => {
    let hosts = resources.ingress.spec!.rules!.map((x) => x.host!).filter((x) =>
      x
    );
    resources.ingress.spec!.tls = resources.ingress.spec!.tls || [];
    resources.ingress.spec!.tls!.push(
      {
        secretName,
        hosts: hosts.filter(hostsFilter),
      },
    );
  });
};

/** Adds an Ingress resource for routing external traffic to the service.
*/
export const expose = ({ domain }: { domain: string }) => {
  return function <
    T extends { service: k8s.v1.Service },
    TContext extends KubeMetaContext
  >(resources: T, ctx: TContext) {
    let r = addResources({
      ingress: new k8s.extensions.v1beta1.Ingress({
        spec: {
          rules: [],
        },
      }),
    })(resources, ctx);

    return modify<typeof r, TContext>((x) =>
      x.ingress.spec!.rules!.push(
        {
          host: domain,
          http: {
            paths: [
              {
                backend: {
                  serviceName: resources.service.metadata!.name,
                  servicePort: resources.service.spec!.ports![0].port,
                },
              },
            ],
          },
        },
      )
    )(r, ctx);
  };
};
