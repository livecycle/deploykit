/* Generated for api/autoscaling/v1/mod.ts */
import {
  ListMeta,
  ObjectMeta,
  Time,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type CrossVersionObjectReference = {
  /** API version of the referent */
  apiVersion?: string;

  /** Kind of the referent; More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds" */
  kind: string;

  /** Name of the referent; More info: http:kubernetes.iodocsuser-guideidentifiers#names */
  name: string;
};

/** configuration of a horizontal pod autoscaler. */
export type HorizontalPodAutoscaler = {
  apiVersion: "autoscaling/v1";
  kind: "HorizontalPodAutoscaler";

  /** Standard object metadata. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** behaviour of autoscaler. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#spec-and-status. */
  spec?: HorizontalPodAutoscalerSpec;

  /** current information about the autoscaler. */
  status?: HorizontalPodAutoscalerStatus;
};
export function createHorizontalPodAutoscaler<
  T extends Omit<HorizontalPodAutoscaler, "apiVersion" | "kind">,
>(
  data: T,
):
  & HorizontalPodAutoscaler
  & T
  & Pick<HorizontalPodAutoscaler, "apiVersion" | "kind"> {
  return {
    apiVersion: "autoscaling/v1",
    kind: "HorizontalPodAutoscaler",
    ...data,
  };
}

/** list of horizontal pod autoscaler objects. */
export type HorizontalPodAutoscalerList = {
  apiVersion: "autoscaling/v1";

  /** list of horizontal pod autoscaler objects. */
  items: HorizontalPodAutoscaler[];
  kind: "HorizontalPodAutoscalerList";

  /** Standard list metadata. */
  metadata?: ListMeta;
};
export function createHorizontalPodAutoscalerList<
  T extends Omit<HorizontalPodAutoscalerList, "apiVersion" | "kind">,
>(
  data: T,
):
  & HorizontalPodAutoscalerList
  & T
  & Pick<HorizontalPodAutoscalerList, "apiVersion" | "kind"> {
  return {
    apiVersion: "autoscaling/v1",
    kind: "HorizontalPodAutoscalerList",
    ...data,
  };
}

/** specification of a horizontal pod autoscaler. */
export type HorizontalPodAutoscalerSpec = {
  /** upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas. */
  maxReplicas: number;

  /** lower limit for the number of pods that can be set by the autoscaler, default 1. */
  minReplicas?: number;

  /** reference to scaled resource; horizontal pod autoscaler will learn the current resource consumption and will set the desired number of pods by using its Scale subresource. */
  scaleTargetRef: CrossVersionObjectReference;

  /** target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used. */
  targetCPUUtilizationPercentage?: number;
};

/** current status of a horizontal pod autoscaler */
export type HorizontalPodAutoscalerStatus = {
  /** current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU. */
  currentCPUUtilizationPercentage?: number;

  /** current number of replicas of pods managed by this autoscaler. */
  currentReplicas: number;

  /** desired number of replicas of pods managed by this autoscaler. */
  desiredReplicas: number;

  /** last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed. */
  lastScaleTime?: Time;

  /** most recent generation observed by this autoscaler. */
  observedGeneration?: number;
};

/** Scale represents a scaling request for a resource. */
export type Scale = {
  apiVersion: "autoscaling/v1";
  kind: "Scale";

  /** Standard object metadata; More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata. */
  metadata?: ObjectMeta;

  /** defines the behavior of the scale. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#spec-and-status. */
  spec?: ScaleSpec;

  /** current status of the scale. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#spec-and-status. Read-only. */
  status?: ScaleStatus;
};
export function createScale<T extends Omit<Scale, "apiVersion" | "kind">>(
  data: T,
): Scale & T & Pick<Scale, "apiVersion" | "kind"> {
  return { apiVersion: "autoscaling/v1", kind: "Scale", ...data };
}

/** ScaleSpec describes the attributes of a scale subresource. */
export type ScaleSpec = {
  /** desired number of instances for the scaled object. */
  replicas?: number;
};

/** ScaleStatus represents the current status of a scale subresource. */
export type ScaleStatus = {
  /** actual number of observed instances of the scaled object. */
  replicas: number;

  /** label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: http:kubernetes.iodocsuser-guidelabels#label-selectors */
  selector?: string;
};
