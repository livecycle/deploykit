/* Generated for api/autoscaling/v2beta1/mod.ts */
import {
  LabelSelector,
  ObjectMeta,
  Time,
  ListMeta,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";
import { Quantity } from "../../../apimachinery/pkg/api/resource/mod.ts";
export type CrossVersionObjectReference = {
  /** API version of the referent */
  apiVersion?: string;

  /** Kind of the referent; More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds" */
  kind: string;

  /** Name of the referent; More info: http:kubernetes.iodocsuser-guideidentifiers#names */
  name: string;
};
export type ExternalMetricSource = {
  /** metricName is the name of the metric in question. */
  metricName: string;

  /** metricSelector is used to identify a specific time series within a given metric. */
  metricSelector?: LabelSelector;

  /** targetAverageValue is the target per-pod value of global metric (as a quantity). Mutually exclusive with TargetValue. */
  targetAverageValue?: Quantity;

  /** targetValue is the target value of the metric (as a quantity). Mutually exclusive with TargetAverageValue. */
  targetValue?: Quantity;
};
export type ExternalMetricStatus = {
  /** currentAverageValue is the current value of metric averaged over autoscaled pods. */
  currentAverageValue?: Quantity;

  /** currentValue is the current value of the metric (as a quantity) */
  currentValue: Quantity;

  /** metricName is the name of a metric used for autoscaling in metric system. */
  metricName: string;

  /** metricSelector is used to identify a specific time series within a given metric. */
  metricSelector?: LabelSelector;
};
export type HorizontalPodAutoscaler = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** metadata is the standard object metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** spec is the specification for the behaviour of the autoscaler. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status. */
  spec?: HorizontalPodAutoscalerSpec;

  /** status is the current information about the autoscaler. */
  status?: HorizontalPodAutoscalerStatus;
};
export function createHorizontalPodAutoscaler(
  data: Omit<HorizontalPodAutoscaler, "apiVersion" | "kind">,
): HorizontalPodAutoscaler {
  return {
    apiVersion: "autoscaling/v2beta1",
    kind: "HorizontalPodAutoscaler",
    ...data,
  };
}

export type HorizontalPodAutoscalerCondition = {
  /** lastTransitionTime is the last time the condition transitioned from one status to another */
  lastTransitionTime?: Time;

  /** message is a human-readable explanation containing details about the transition */
  message?: string;

  /** reason is the reason for the condition's last transition. */
  reason?: string;

  /** status is the status of the condition (True, False, Unknown) */
  status: string;

  /** type describes the current condition */
  type: string;
};
export type HorizontalPodAutoscalerList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** items is the list of horizontal pod autoscaler objects. */
  items: HorizontalPodAutoscaler[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** metadata is the standard list metadata. */
  metadata?: ListMeta;
};
export function createHorizontalPodAutoscalerList(
  data: Omit<HorizontalPodAutoscalerList, "apiVersion" | "kind">,
): HorizontalPodAutoscalerList {
  return {
    apiVersion: "autoscaling/v2beta1",
    kind: "HorizontalPodAutoscalerList",
    ...data,
  };
}

export type HorizontalPodAutoscalerSpec = {
  /** maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas. */
  maxReplicas: number;

  /** metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. */
  metrics?: MetricSpec[];

  /** minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available. */
  minReplicas?: number;

  /** scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count. */
  scaleTargetRef: CrossVersionObjectReference;
};
export type HorizontalPodAutoscalerStatus = {
  /** conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met. */
  conditions: HorizontalPodAutoscalerCondition[];

  /** currentMetrics is the last read state of the metrics used by this autoscaler. */
  currentMetrics?: MetricStatus[];

  /** currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler. */
  currentReplicas: number;

  /** desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler. */
  desiredReplicas: number;

  /** lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed. */
  lastScaleTime?: Time;

  /** observedGeneration is the most recent generation observed by this autoscaler. */
  observedGeneration?: number;
};
export type MetricSpec = {
  /** external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
  external?: ExternalMetricSource;

  /** object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object). */
  object?: ObjectMetricSource;

  /** pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value. */
  pods?: PodsMetricSource;

  /** resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
  resource?: ResourceMetricSource;

  /** type is the type of metric source.  It should be one of "Object", "Pods" or "Resource", each mapping to a matching field in the object. */
  type: string;
};
export type MetricStatus = {
  /** external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
  external?: ExternalMetricStatus;

  /** object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object). */
  object?: ObjectMetricStatus;

  /** pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value. */
  pods?: PodsMetricStatus;

  /** resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
  resource?: ResourceMetricStatus;

  /** type is the type of metric source.  It will be one of "Object", "Pods" or "Resource", each corresponds to a matching field in the object. */
  type: string;
};
export type ObjectMetricSource = {
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  averageValue?: Quantity;

  /** metricName is the name of the metric in question. */
  metricName: string;

  /** selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping When unset, just the metricName will be used to gather metrics. */
  selector?: LabelSelector;

  /** target is the described Kubernetes object. */
  target: CrossVersionObjectReference;

  /** targetValue is the target value of the metric (as a quantity). */
  targetValue: Quantity;
};
export type ObjectMetricStatus = {
  /** averageValue is the current value of the average of the metric across all relevant pods (as a quantity) */
  averageValue?: Quantity;

  /** currentValue is the current value of the metric (as a quantity). */
  currentValue: Quantity;

  /** metricName is the name of the metric in question. */
  metricName: string;

  /** selector is the string-encoded form of a standard kubernetes label selector for the given metric When set in the ObjectMetricSource, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics. */
  selector?: LabelSelector;

  /** target is the described Kubernetes object. */
  target: CrossVersionObjectReference;
};
export type PodsMetricSource = {
  /** metricName is the name of the metric in question */
  metricName: string;

  /** selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping When unset, just the metricName will be used to gather metrics. */
  selector?: LabelSelector;

  /** targetAverageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  targetAverageValue: Quantity;
};
export type PodsMetricStatus = {
  /** currentAverageValue is the current value of the average of the metric across all relevant pods (as a quantity) */
  currentAverageValue: Quantity;

  /** metricName is the name of the metric in question */
  metricName: string;

  /** selector is the string-encoded form of a standard kubernetes label selector for the given metric When set in the PodsMetricSource, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics. */
  selector?: LabelSelector;
};
export type ResourceMetricSource = {
  /** name is the name of the resource in question. */
  name: string;

  /** targetAverageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. */
  targetAverageUtilization?: number;

  /** targetAverageValue is the target value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type. */
  targetAverageValue?: Quantity;
};
export type ResourceMetricStatus = {
  /** currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.  It will only be present if `targetAverageValue` was set in the corresponding metric specification. */
  currentAverageUtilization?: number;

  /** currentAverageValue is the current value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type. It will always be set, regardless of the corresponding metric specification. */
  currentAverageValue: Quantity;

  /** name is the name of the resource in question. */
  name: string;
};
