import * as k8s from "../../../generated/k8s/v1.18.3/api/mod.ts";
import { KubeMetaContext } from "../types.ts";
import { modify, compose, IBluePrint } from "../../blueprint.ts";
import { addResource } from "./base.ts";
import { DeploymentStrategy } from "../../../generated/k8s/v1.18.3/api/apps/v1/mod.ts";
import { Container } from "../../../generated/k8s/v1.18.3/api/core/v1/mod.ts";

export const addSideCar = <
  T extends Record<TDeploymentKey, k8s.apps.v1.Deployment>,
  TContext extends KubeMetaContext,
  TDeploymentKey extends string = "deployment",
>(
  {
    name,
    image,
    resources = {},
    containerProps = {},
    delpoymentResourceKey = "deployment" as TDeploymentKey,
  }: {
    name: string;
    image: string;
    resources?: k8s.core.v1.ResourceRequirements;
    containerProps?: Partial<Omit<Container, "image" | "resources">>;
    delpoymentResourceKey?: TDeploymentKey;
  },
) => {
  return modify<TContext, T>((x) => {
    x[delpoymentResourceKey].spec!.template.spec?.containers.push({
      name,
      image,
      resources,
      ...containerProps,
    });
  });
};

export const addInitContainer = <
  T extends Record<TDeploymentKey, k8s.apps.v1.Deployment>,
  TContext extends KubeMetaContext,
  TDeploymentKey extends string = "deployment",
>(
  {
    name,
    image,
    resources = {},
    containerProps = {},
    delpoymentResourceKey = "deployment" as TDeploymentKey,
  }: {
    name: string;
    image: string;
    resources: k8s.core.v1.ResourceRequirements;
    containerProps?: Partial<Omit<Container, "image" | "resources">>;
    delpoymentResourceKey?: TDeploymentKey;
  },
) => {
  return modify<TContext, T>((x) => {
    x[delpoymentResourceKey].spec!.template.spec!.initContainers =
      x[delpoymentResourceKey].spec!.template.spec?.initContainers || [];
    x[delpoymentResourceKey].spec!.template.spec!.initContainers!.push({
      name,
      image,
      resources,
      ...containerProps,
    });
  });
};

export const addConfigMap = <TResourceKey extends string = "config">(
  { data, resourceKey = "config" as TResourceKey }: {
    data: { [key: string]: string };
    resourceKey?: TResourceKey;
  },
) =>
  addResource(
    resourceKey,
    k8s.core.v1.createConfigMap({
      data,
    }),
  );

export const addSecret = <TResourceKey extends string = "secret">(
  { data, resourceKey = "secret" as TResourceKey, isBase64 = false }: {
    data: { [key: string]: string };
    isBase64?: boolean;
    resourceKey?: TResourceKey;
  },
) =>
  addResource(
    resourceKey,
    k8s.core.v1.createSecret({
      [isBase64 ? "data" : "stringData"]: data,
    }),
  );

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
export const expose = <
  T extends Record<TServiceKey, k8s.core.v1.Service>,
  TContext extends KubeMetaContext,
  TServiceKey extends string = "service",
  TIngressKey extends string = "ingress",
>(
  {
    domain,
    serviceResourceKey = "service" as TServiceKey,
    ingressResourceKey = "ingress" as TIngressKey,
  }: {
    domain: string;
    serviceResourceKey?: TServiceKey;
    ingressResourceKey?: TIngressKey;
  },
) =>
  compose((blueprint: IBluePrint<TContext, T>) =>
    blueprint.with(
      addResource(
        ingressResourceKey,
        k8s.extensions.v1beta1.createIngress(
          {
            spec: {
              rules: [],
            },
          },
        ),
      ),
      modify((x) => {
        x[ingressResourceKey].spec!.rules!.push(
          {
            host: domain,
            http: {
              paths: [
                {
                  backend: {
                    serviceName: x[serviceResourceKey].metadata!.name,
                    servicePort: x[serviceResourceKey].spec!.ports![0].port,
                  },
                },
              ],
            },
          },
        );
      }),
    )
  );
