/* Generated for api/autoscaling/v2beta2/mod.ts */
import {
  LabelSelector,
  ListMeta,
  ObjectMeta,
  Time,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";
import { Quantity } from "../../../apimachinery/pkg/api/resource/mod.ts";

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type CrossVersionObjectReference = {
  /** API version of the referent */
  apiVersion?: string;

  /** Kind of the referent; More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds" */
  kind: string;

  /** Name of the referent; More info: http:kubernetes.iodocsuser-guideidentifiers#names */
  name: string;
};

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
export type ExternalMetricSource = {
  /** metric identifies the target metric by name and selector */
  metric: MetricIdentifier;

  /** target specifies the target value for the given metric */
  target: MetricTarget;
};

/** ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export type ExternalMetricStatus = {
  /** current contains the current value for the given metric */
  current: MetricValueStatus;

  /** metric identifies the target metric by name and selector */
  metric: MetricIdentifier;
};

/** HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export type HorizontalPodAutoscaler = {
  apiVersion: "autoscaling/v2beta2";
  kind: "HorizontalPodAutoscaler";

  /** metadata is the standard object metadata. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** spec is the specification for the behaviour of the autoscaler. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#spec-and-status. */
  spec?: HorizontalPodAutoscalerSpec;

  /** status is the current information about the autoscaler. */
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
    apiVersion: "autoscaling/v2beta2",
    kind: "HorizontalPodAutoscaler",
    ...data,
  };
}

/** HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
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

/** HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects. */
export type HorizontalPodAutoscalerList = {
  apiVersion: "autoscaling/v2beta2";

  /** items is the list of horizontal pod autoscaler objects. */
  items: HorizontalPodAutoscaler[];
  kind: "HorizontalPodAutoscalerList";

  /** metadata is the standard list metadata. */
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
    apiVersion: "autoscaling/v2beta2",
    kind: "HorizontalPodAutoscalerList",
    ...data,
  };
}

/** HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
export type HorizontalPodAutoscalerSpec = {
  /** maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas. */
  maxReplicas: number;

  /** metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization. */
  metrics?: MetricSpec[];

  /** minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod. */
  minReplicas?: number;

  /** scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count. */
  scaleTargetRef: CrossVersionObjectReference;
};

/** HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
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

/** MetricIdentifier defines the name and optionally selector for a metric */
export type MetricIdentifier = {
  /** name is the name of the given metric */
  name: string;

  /** selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics. */
  selector?: LabelSelector;
};

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
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

/** MetricStatus describes the last-read state of a single metric. */
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

/** MetricTarget defines the target value, average value, or average utilization of a specific metric */
export type MetricTarget = {
  /** averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type */
  averageUtilization?: number;

  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  averageValue?: Quantity;

  /** type represents whether the metric type is Utilization, Value, or AverageValue */
  type: string;

  /** value is the target value of the metric (as a quantity). */
  value?: Quantity;
};

/** MetricValueStatus holds the current value for a metric */
export type MetricValueStatus = {
  /** currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. */
  averageUtilization?: number;

  /** averageValue is the current value of the average of the metric across all relevant pods (as a quantity) */
  averageValue?: Quantity;

  /** value is the current value of the metric (as a quantity). */
  value?: Quantity;
};

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type ObjectMetricSource = {
  describedObject: CrossVersionObjectReference;

  /** metric identifies the target metric by name and selector */
  metric: MetricIdentifier;

  /** target specifies the target value for the given metric */
  target: MetricTarget;
};

/** ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type ObjectMetricStatus = {
  /** current contains the current value for the given metric */
  current: MetricValueStatus;

  describedObject: CrossVersionObjectReference;

  /** metric identifies the target metric by name and selector */
  metric: MetricIdentifier;
};

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export type PodsMetricSource = {
  /** metric identifies the target metric by name and selector */
  metric: MetricIdentifier;

  /** target specifies the target value for the given metric */
  target: MetricTarget;
};

/** PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
export type PodsMetricStatus = {
  /** current contains the current value for the given metric */
  current: MetricValueStatus;

  /** metric identifies the target metric by name and selector */
  metric: MetricIdentifier;
};

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type ResourceMetricSource = {
  /** name is the name of the resource in question. */
  name: string;

  /** target specifies the target value for the given metric */
  target: MetricTarget;
};

/** ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export type ResourceMetricStatus = {
  /** current contains the current value for the given metric */
  current: MetricValueStatus;

  /** Name is the name of the resource in question. */
  name: string;
};
