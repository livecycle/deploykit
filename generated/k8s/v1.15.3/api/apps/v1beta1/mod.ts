/* Generated for api/apps/v1beta1/mod.ts */
import { RawExtension } from "../../../apimachinery/pkg/runtime/mod.ts";
import { IntOrString } from "../../../apimachinery/pkg/util/intstr/mod.ts";
import {
  ObjectMeta,
  ListMeta,
  Time,
  LabelSelector,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";
import { PodTemplateSpec, PersistentVolumeClaim } from "../../core/v1/mod.ts";

/** DEPRECATED - This group version of ControllerRevision is deprecated by appsv1beta2ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers. */
export type ControllerRevision = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Data is the serialized representation of the state. */
  data?: RawExtension;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** Revision indicates the revision of the state represented by Data. */
  revision: number;
};
export function createControllerRevision<
  T extends Omit<ControllerRevision, "apiVersion" | "kind">,
>(
  data: T,
): ControllerRevision & T & Pick<ControllerRevision, "apiVersion" | "kind"> {
  return { apiVersion: "apps/v1beta1", kind: "ControllerRevision", ...data };
}

/** ControllerRevisionList is a resource containing a list of ControllerRevision objects. */
export type ControllerRevisionList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is the list of ControllerRevisions */
  items: ControllerRevision[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createControllerRevisionList<
  T extends Omit<ControllerRevisionList, "apiVersion" | "kind">,
>(
  data: T,
):
  & ControllerRevisionList
  & T
  & Pick<ControllerRevisionList, "apiVersion" | "kind"> {
  return {
    apiVersion: "apps/v1beta1",
    kind: "ControllerRevisionList",
    ...data,
  };
}

/** DEPRECATED - This group version of Deployment is deprecated by appsv1beta2Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets. */
export type Deployment = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object metadata. */
  metadata?: ObjectMeta;

  /** Specification of the desired behavior of the Deployment. */
  spec?: DeploymentSpec;

  /** Most recently observed status of the Deployment. */
  status?: DeploymentStatus;
};
export function createDeployment<
  T extends Omit<Deployment, "apiVersion" | "kind">,
>(data: T): Deployment & T & Pick<Deployment, "apiVersion" | "kind"> {
  return { apiVersion: "apps/v1beta1", kind: "Deployment", ...data };
}

/** DeploymentCondition describes the state of a deployment at a certain point. */
export type DeploymentCondition = {
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: Time;

  /** The last time this condition was updated. */
  lastUpdateTime?: Time;

  /** A human readable message indicating details about the transition. */
  message?: string;

  /** The reason for the condition's last transition. */
  reason?: string;

  /** Status of the condition, one of True, False, Unknown. */
  status: string;

  /** Type of deployment condition. */
  type: string;
};

/** DeploymentList is a list of Deployments. */
export type DeploymentList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is the list of Deployments. */
  items: Deployment[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard list metadata. */
  metadata?: ListMeta;
};
export function createDeploymentList<
  T extends Omit<DeploymentList, "apiVersion" | "kind">,
>(data: T): DeploymentList & T & Pick<DeploymentList, "apiVersion" | "kind"> {
  return { apiVersion: "apps/v1beta1", kind: "DeploymentList", ...data };
}

/** DEPRECATED. DeploymentRollback stores the information required to rollback a deployment. */
export type DeploymentRollback = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Required: This must match the Name of a deployment. */
  name: string;

  /** The config of this deployment rollback. */
  rollbackTo: RollbackConfig;

  /** The annotations to be updated to a deployment */
  updatedAnnotations?: {
    [key: string]: string;
  };
};
export function createDeploymentRollback<
  T extends Omit<DeploymentRollback, "apiVersion" | "kind">,
>(
  data: T,
): DeploymentRollback & T & Pick<DeploymentRollback, "apiVersion" | "kind"> {
  return { apiVersion: "apps/v1beta1", kind: "DeploymentRollback", ...data };
}

/** DeploymentSpec is the specification of the desired behavior of the Deployment. */
export type DeploymentSpec = {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  minReadySeconds?: number;

  /** Indicates that the deployment is paused. */
  paused?: boolean;

  /** The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s. */
  progressDeadlineSeconds?: number;

  /** Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. */
  replicas?: number;

  /** The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 2. */
  revisionHistoryLimit?: number;

  /** DEPRECATED. The config this deployment is rolling back to. Will be cleared after rollback is done. */
  rollbackTo?: RollbackConfig;

  /** Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. */
  selector?: LabelSelector;

  /** The deployment strategy to use to replace existing pods with new ones. */
  strategy?: DeploymentStrategy;

  /** Template describes the pods that will be created. */
  template: PodTemplateSpec;
};

/** DeploymentStatus is the most recently observed status of the Deployment. */
export type DeploymentStatus = {
  /** Total number of available pods (ready for at least minReadySeconds) targeted by this deployment. */
  availableReplicas?: number;

  /** Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet. */
  collisionCount?: number;

  /** Represents the latest available observations of a deployment's current state. */
  conditions?: DeploymentCondition[];

  /** The generation observed by the deployment controller. */
  observedGeneration?: number;

  /** Total number of ready pods targeted by this deployment. */
  readyReplicas?: number;

  /** Total number of non-terminated pods targeted by this deployment (their labels match the selector). */
  replicas?: number;

  /** Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created. */
  unavailableReplicas?: number;

  /** Total number of non-terminated pods targeted by this deployment that have the desired template spec. */
  updatedReplicas?: number;
};

/** DeploymentStrategy describes how to replace existing pods with new ones. */
export type DeploymentStrategy = {
  /** Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. */
  rollingUpdate?: RollingUpdateDeployment;

  /** Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate. */
  type?: string;
};

/** DEPRECATED. */
export type RollbackConfig = {
  /** The revision to rollback to. If set to 0, rollback to the last revision. */
  revision?: number;
};

/** Spec to control the desired behavior of rolling update. */
export type RollingUpdateDeployment = {
  /** The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods. */
  maxSurge?: IntOrString;

  /** The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods. */
  maxUnavailable?: IntOrString;
};

/** RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
export type RollingUpdateStatefulSetStrategy = {
  /** Partition indicates the ordinal at which the StatefulSet should be partitioned. */
  partition?: number;
};

/** Scale represents a scaling request for a resource. */
export type Scale = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

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
  return { apiVersion: "apps/v1beta1", kind: "Scale", ...data };
}

/** ScaleSpec describes the attributes of a scale subresource */
export type ScaleSpec = {
  /** desired number of instances for the scaled object. */
  replicas?: number;
};

/** ScaleStatus represents the current status of a scale subresource. */
export type ScaleStatus = {
  /** actual number of observed instances of the scaled object. */
  replicas: number;

  /** label query over pods that should match the replicas count. More info: http:kubernetes.iodocsuser-guidelabels#label-selectors */
  selector?: {
    [key: string]: string;
  };

  /** label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectslabels#label-selectors */
  targetSelector?: string;
};

/** DEPRECATED - This group version of StatefulSet is deprecated by appsv1beta2StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity. */
export type StatefulSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  metadata?: ObjectMeta;

  /** Spec defines the desired identities of pods in this set. */
  spec?: StatefulSetSpec;

  /** Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time. */
  status?: StatefulSetStatus;
};
export function createStatefulSet<
  T extends Omit<StatefulSet, "apiVersion" | "kind">,
>(data: T): StatefulSet & T & Pick<StatefulSet, "apiVersion" | "kind"> {
  return { apiVersion: "apps/v1beta1", kind: "StatefulSet", ...data };
}

/** StatefulSetCondition describes the state of a statefulset at a certain point. */
export type StatefulSetCondition = {
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: Time;

  /** A human readable message indicating details about the transition. */
  message?: string;

  /** The reason for the condition's last transition. */
  reason?: string;

  /** Status of the condition, one of True, False, Unknown. */
  status: string;

  /** Type of statefulset condition. */
  type: string;
};

/** StatefulSetList is a collection of StatefulSets. */
export type StatefulSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  items: StatefulSet[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  metadata?: ListMeta;
};
export function createStatefulSetList<
  T extends Omit<StatefulSetList, "apiVersion" | "kind">,
>(data: T): StatefulSetList & T & Pick<StatefulSetList, "apiVersion" | "kind"> {
  return { apiVersion: "apps/v1beta1", kind: "StatefulSetList", ...data };
}

/** A StatefulSetSpec is the specification of a StatefulSet. */
export type StatefulSetSpec = {
  /** podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once. */
  podManagementPolicy?: string;

  /** replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1. */
  replicas?: number;

  /** revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10. */
  revisionHistoryLimit?: number;

  /** selector is a label query over pods that should match the replica count. If empty, defaulted to labels on the pod template. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectslabels#label-selectors */
  selector?: LabelSelector;

  /** serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNShostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller. */
  serviceName: string;

  /** template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet. */
  template: PodTemplateSpec;

  /** updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template. */
  updateStrategy?: StatefulSetUpdateStrategy;

  /** volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name. */
  volumeClaimTemplates?: PersistentVolumeClaim[];
};

/** StatefulSetStatus represents the current state of a StatefulSet. */
export type StatefulSetStatus = {
  /** collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
  collisionCount?: number;

  /** Represents the latest available observations of a statefulset's current state. */
  conditions?: StatefulSetCondition[];

  /** currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision. */
  currentReplicas?: number;

  /** currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas). */
  currentRevision?: string;

  /** observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server. */
  observedGeneration?: number;

  /** readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition. */
  readyReplicas?: number;

  /** replicas is the number of Pods created by the StatefulSet controller. */
  replicas: number;

  /** updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas) */
  updateRevision?: string;

  /** updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision. */
  updatedReplicas?: number;
};

/** StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
export type StatefulSetUpdateStrategy = {
  /** RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType. */
  rollingUpdate?: RollingUpdateStatefulSetStrategy;

  /** Type indicates the type of the StatefulSetUpdateStrategy. */
  type?: string;
};
