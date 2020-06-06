import * as k8s from "../../../generated/k8s/native/api/mod.ts";
import { KubeMetaContext } from "../types.ts";
import { modify } from "../../blueprint.ts";
import { addResources } from "./base.ts";

export const addDeployment = ({ image }: { image: string }) =>
  addResources((ctx) => ({
    deployment: k8s.apps.v1.createDeployment({
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
    service: k8s.core.v1.createService({
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
    T extends { service: k8s.core.v1.Service },
    TContext extends KubeMetaContext
  >(resources: T, ctx: TContext) {
    let r = addResources({
      ingress: k8s.extensions.v1beta1.createIngress({
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
