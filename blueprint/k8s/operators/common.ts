import * as k8s from "../../../generated/k8s/v1.18.3/api/mod.ts";
import { KubeMetaContext } from "../types.ts";
import { modify } from "../../blueprint.ts";
import { addResources, addResource } from "./base.ts";
import { DeploymentStrategy } from "../../../generated/k8s/v1.18.3/api/apps/v1/mod.ts";
import { Container } from "../../../generated/k8s/v1.18.3/api/core/v1/mod.ts";

export const addSideCar = <
  T extends { deployment: k8s.apps.v1.Deployment },
  TContext extends KubeMetaContext,
>({ name, image, resources = {}, containerProps = {} }: {
  name: string;
  image: string;
  resources?: k8s.core.v1.ResourceRequirements;
  containerProps?: Partial<Omit<Container, "image" | "resources">>;
}) => {
  return modify<TContext, T>((x) => {
    x.deployment.spec!.template.spec?.containers.push({
      name,
      image,
      resources,
      ...containerProps,
    });
  });
};

export const addInitContainer = <
  T extends { deployment: k8s.apps.v1.Deployment },
  TContext extends KubeMetaContext,
>({ name, image, resources = {}, containerProps = {} }: {
  name: string;
  image: string;
  resources: k8s.core.v1.ResourceRequirements;
  containerProps?: Partial<Omit<Container, "image" | "resources">>;
}) => {
  return modify<TContext, T>((x) => {
    x.deployment.spec!.template.spec!.initContainers =
      x.deployment.spec!.template.spec?.initContainers || [];
    x.deployment.spec!.template.spec!.initContainers.push({
      name,
      image,
      resources,
      ...containerProps,
    });
  });
};

export const addConfigMap = ({ data }: { data: { [key: string]: string } }) =>
  addResources({
    config: k8s.core.v1.createConfigMap({
      data,
    }),
  });

export const addSecret = (
  { data, isBase64 = false }: {
    data: { [key: string]: string };
    isBase64: boolean;
  },
) =>
  addResources({
    secret: k8s.core.v1.createSecret({
      [isBase64 ? "data" : "stringData"]: data,
    }),
  });

export const addDeployment = <TKey extends string = "deployment">(
  {
    image,
    deploymentStrategy,
    resources = {},
    containerProps = {},
    resourceKey = "deployment" as TKey,
  }: {
    image: string;
    resourceKey?: TKey;
    deploymentStrategy?: DeploymentStrategy;
    resources?: k8s.core.v1.ResourceRequirements;
    containerProps?: Partial<Omit<Container, "image" | "resources">>;
  },
) =>
  addResource(resourceKey, (ctx) =>
    k8s.apps.v1.createDeployment({
      spec: {
        selector: {
          matchLabels: ctx.labels,
        },
        strategy: deploymentStrategy,
        template: {
          metadata: {
            labels: ctx.labels,
          },
          spec: {
            containers: [
              {
                name: "app",
                image,
                resources,
                ...containerProps,
              },
            ],
          },
        },
      },
    }));

export const addService = <TKey extends string = "service">(
  { resourceKey = "service" as TKey, port }: {
    resourceKey?: TKey;
    port: number;
  },
) =>
  addResource(
    resourceKey,
    k8s.core.v1.createService({
      spec: {
        ports: [
          {
            port,
            targetPort: port,
          },
        ],
      },
    }),
  );

export const addTls = <
  T extends { ingress: k8s.extensions.v1beta1.Ingress },
  TContext extends KubeMetaContext,
>(
  { secretName, hostsFilter = () => true }: {
    secretName: string;
    hostsFilter?: (domain: string) => boolean;
  },
) => {
  return modify<TContext, T>((resources: T) => {
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
export const expose = (
  { domain }: {
    domain: string;
  },
) => {
  return function <
    T extends { "service": k8s.core.v1.Service },
    TContext extends KubeMetaContext
  >(resources: T, ctx: TContext) {
    let r = addResources({
      ingress: k8s.extensions.v1beta1.createIngress({
        spec: {
          rules: [],
        },
      }),
    })(resources, ctx);

    return modify<TContext, typeof r>((x) =>
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
