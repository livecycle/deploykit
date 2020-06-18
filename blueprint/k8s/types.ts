import * as k8s from "../../generated/k8s/v1.18.3/api/mod.ts";
export type KubeMetaContext = {
  name: string;
  namespace?: string;
  labels: {
    [key: string]: string;
  };
};

export type Workload =
  | k8s.apps.v1.Deployment
  | k8s.apps.v1.StatefulSet
  | k8s.apps.v1.DaemonSet
  | k8s.batch.v1.Job;
