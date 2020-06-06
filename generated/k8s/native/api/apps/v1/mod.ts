/* Generated for api/apps/v1/mod.ts */
import { RawExtension} from "../../../apimachinery/pkg/runtime/mod.ts"
import { IntOrString} from "../../../apimachinery/pkg/util/intstr/mod.ts"
import { ObjectMeta,ListMeta,Time,LabelSelector} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts"
import { PodTemplateSpec,PersistentVolumeClaim} from "../../core/v1/mod.ts"
export type ControllerRevision = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** Data is the serialized representation of the state. */
  data?:RawExtension;
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?:ObjectMeta;
  
  /** Revision indicates the revision of the state represented by Data. */
  revision:number;
  

}
export function createControllerRevision(data:Omit<ControllerRevision, "apiVersion" | "kind">):ControllerRevision{
  return {apiVersion: "apps/v1", kind: "ControllerRevision", ...data}
}

export type ControllerRevisionList = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** Items is the list of ControllerRevisions */
  items:ControllerRevision[];
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?:ListMeta;
  

}
export function createControllerRevisionList(data:Omit<ControllerRevisionList, "apiVersion" | "kind">):ControllerRevisionList{
  return {apiVersion: "apps/v1", kind: "ControllerRevisionList", ...data}
}

export type DaemonSet = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?:ObjectMeta;
  
  /** The desired behavior of this daemon set. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  spec?:DaemonSetSpec;
  
  /** The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  status?:DaemonSetStatus;
  

}
export function createDaemonSet(data:Omit<DaemonSet, "apiVersion" | "kind">):DaemonSet{
  return {apiVersion: "apps/v1", kind: "DaemonSet", ...data}
}

export type DaemonSetCondition = {

  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?:Time;
  
  /** A human readable message indicating details about the transition. */
  message?:string;
  
  /** The reason for the condition's last transition. */
  reason?:string;
  
  /** Status of the condition, one of True, False, Unknown. */
  status:string;
  
  /** Type of DaemonSet condition. */
  type:string;
  

}
export type DaemonSetList = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** A list of daemon sets. */
  items:DaemonSet[];
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?:ListMeta;
  

}
export function createDaemonSetList(data:Omit<DaemonSetList, "apiVersion" | "kind">):DaemonSetList{
  return {apiVersion: "apps/v1", kind: "DaemonSetList", ...data}
}

export type DaemonSetSpec = {

  /** The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready). */
  minReadySeconds?:number;
  
  /** The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. */
  revisionHistoryLimit?:number;
  
  /** A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template's labels. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectslabels#label-selectors */
  selector:LabelSelector;
  
  /** An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https:kubernetes.iodocsconceptsworkloadscontrollersreplicationcontroller#pod-template */
  template:PodTemplateSpec;
  
  /** An update strategy to replace existing DaemonSet pods with new pods. */
  updateStrategy?:DaemonSetUpdateStrategy;
  

}
export type DaemonSetStatus = {

  /** Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
  collisionCount?:number;
  
  /** Represents the latest available observations of a DaemonSet's current state. */
  conditions?:DaemonSetCondition[];
  
  /** The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https:kubernetes.iodocsconceptsworkloadscontrollersdaemonset */
  currentNumberScheduled:number;
  
  /** The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https:kubernetes.iodocsconceptsworkloadscontrollersdaemonset */
  desiredNumberScheduled:number;
  
  /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds) */
  numberAvailable?:number;
  
  /** The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https:kubernetes.iodocsconceptsworkloadscontrollersdaemonset */
  numberMisscheduled:number;
  
  /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready. */
  numberReady:number;
  
  /** The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds) */
  numberUnavailable?:number;
  
  /** The most recent generation observed by the daemon set controller. */
  observedGeneration?:number;
  
  /** The total number of nodes that are running updated daemon pod */
  updatedNumberScheduled?:number;
  

}
export type DaemonSetUpdateStrategy = {

  /** Rolling update config params. Present only if type = "RollingUpdate". */
  rollingUpdate?:RollingUpdateDaemonSet;
  
  /** Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate. */
  type?:string;
  

}
export type Deployment = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** Standard object metadata. */
  metadata?:ObjectMeta;
  
  /** Specification of the desired behavior of the Deployment. */
  spec?:DeploymentSpec;
  
  /** Most recently observed status of the Deployment. */
  status?:DeploymentStatus;
  

}
export function createDeployment(data:Omit<Deployment, "apiVersion" | "kind">):Deployment{
  return {apiVersion: "apps/v1", kind: "Deployment", ...data}
}

export type DeploymentCondition = {

  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?:Time;
  
  /** The last time this condition was updated. */
  lastUpdateTime?:Time;
  
  /** A human readable message indicating details about the transition. */
  message?:string;
  
  /** The reason for the condition's last transition. */
  reason?:string;
  
  /** Status of the condition, one of True, False, Unknown. */
  status:string;
  
  /** Type of deployment condition. */
  type:string;
  

}
export type DeploymentList = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** Items is the list of Deployments. */
  items:Deployment[];
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** Standard list metadata. */
  metadata?:ListMeta;
  

}
export function createDeploymentList(data:Omit<DeploymentList, "apiVersion" | "kind">):DeploymentList{
  return {apiVersion: "apps/v1", kind: "DeploymentList", ...data}
}

export type DeploymentSpec = {

  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  minReadySeconds?:number;
  
  /** Indicates that the deployment is paused. */
  paused?:boolean;
  
  /** The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s. */
  progressDeadlineSeconds?:number;
  
  /** Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. */
  replicas?:number;
  
  /** The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. */
  revisionHistoryLimit?:number;
  
  /** Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels. */
  selector:LabelSelector;
  
  /** The deployment strategy to use to replace existing pods with new ones. */
  strategy?:DeploymentStrategy;
  
  /** Template describes the pods that will be created. */
  template:PodTemplateSpec;
  

}
export type DeploymentStatus = {

  /** Total number of available pods (ready for at least minReadySeconds) targeted by this deployment. */
  availableReplicas?:number;
  
  /** Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet. */
  collisionCount?:number;
  
  /** Represents the latest available observations of a deployment's current state. */
  conditions?:DeploymentCondition[];
  
  /** The generation observed by the deployment controller. */
  observedGeneration?:number;
  
  /** Total number of ready pods targeted by this deployment. */
  readyReplicas?:number;
  
  /** Total number of non-terminated pods targeted by this deployment (their labels match the selector). */
  replicas?:number;
  
  /** Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created. */
  unavailableReplicas?:number;
  
  /** Total number of non-terminated pods targeted by this deployment that have the desired template spec. */
  updatedReplicas?:number;
  

}
export type DeploymentStrategy = {

  /** Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. */
  rollingUpdate?:RollingUpdateDeployment;
  
  /** Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate. */
  type?:string;
  

}
export type ReplicaSet = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?:ObjectMeta;
  
  /** Spec defines the specification of the desired behavior of the ReplicaSet. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  spec?:ReplicaSetSpec;
  
  /** Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  status?:ReplicaSetStatus;
  

}
export function createReplicaSet(data:Omit<ReplicaSet, "apiVersion" | "kind">):ReplicaSet{
  return {apiVersion: "apps/v1", kind: "ReplicaSet", ...data}
}

export type ReplicaSetCondition = {

  /** The last time the condition transitioned from one status to another. */
  lastTransitionTime?:Time;
  
  /** A human readable message indicating details about the transition. */
  message?:string;
  
  /** The reason for the condition's last transition. */
  reason?:string;
  
  /** Status of the condition, one of True, False, Unknown. */
  status:string;
  
  /** Type of replica set condition. */
  type:string;
  

}
export type ReplicaSetList = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** List of ReplicaSets. More info: https:kubernetes.iodocsconceptsworkloadscontrollersreplicationcontroller */
  items:ReplicaSet[];
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  metadata?:ListMeta;
  

}
export function createReplicaSetList(data:Omit<ReplicaSetList, "apiVersion" | "kind">):ReplicaSetList{
  return {apiVersion: "apps/v1", kind: "ReplicaSetList", ...data}
}

export type ReplicaSetSpec = {

  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  minReadySeconds?:number;
  
  /** Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https:kubernetes.iodocsconceptsworkloadscontrollersreplicationcontroller#what-is-a-replicationcontroller */
  replicas?:number;
  
  /** Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectslabels#label-selectors */
  selector:LabelSelector;
  
  /** Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https:kubernetes.iodocsconceptsworkloadscontrollersreplicationcontroller#pod-template */
  template?:PodTemplateSpec;
  

}
export type ReplicaSetStatus = {

  /** The number of available replicas (ready for at least minReadySeconds) for this replica set. */
  availableReplicas?:number;
  
  /** Represents the latest available observations of a replica set's current state. */
  conditions?:ReplicaSetCondition[];
  
  /** The number of pods that have labels matching the labels of the pod template of the replicaset. */
  fullyLabeledReplicas?:number;
  
  /** ObservedGeneration reflects the generation of the most recently observed ReplicaSet. */
  observedGeneration?:number;
  
  /** The number of ready replicas for this replica set. */
  readyReplicas?:number;
  
  /** Replicas is the most recently oberved number of replicas. More info: https:kubernetes.iodocsconceptsworkloadscontrollersreplicationcontroller#what-is-a-replicationcontroller */
  replicas:number;
  

}
export type RollingUpdateDaemonSet = {

  /** The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update. */
  maxUnavailable?:IntOrString;
  

}
export type RollingUpdateDeployment = {

  /** The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods. */
  maxSurge?:IntOrString;
  
  /** The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods. */
  maxUnavailable?:IntOrString;
  

}
export type RollingUpdateStatefulSetStrategy = {

  /** Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0. */
  partition?:number;
  

}
export type StatefulSet = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  
  metadata?:ObjectMeta;
  
  /** Spec defines the desired identities of pods in this set. */
  spec?:StatefulSetSpec;
  
  /** Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time. */
  status?:StatefulSetStatus;
  

}
export function createStatefulSet(data:Omit<StatefulSet, "apiVersion" | "kind">):StatefulSet{
  return {apiVersion: "apps/v1", kind: "StatefulSet", ...data}
}

export type StatefulSetCondition = {

  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?:Time;
  
  /** A human readable message indicating details about the transition. */
  message?:string;
  
  /** The reason for the condition's last transition. */
  reason?:string;
  
  /** Status of the condition, one of True, False, Unknown. */
  status:string;
  
  /** Type of statefulset condition. */
  type:string;
  

}
export type StatefulSetList = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  
  items:StatefulSet[];
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  
  metadata?:ListMeta;
  

}
export function createStatefulSetList(data:Omit<StatefulSetList, "apiVersion" | "kind">):StatefulSetList{
  return {apiVersion: "apps/v1", kind: "StatefulSetList", ...data}
}

export type StatefulSetSpec = {

  /** podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once. */
  podManagementPolicy?:string;
  
  /** replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1. */
  replicas?:number;
  
  /** revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10. */
  revisionHistoryLimit?:number;
  
  /** selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectslabels#label-selectors */
  selector:LabelSelector;
  
  /** serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNShostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller. */
  serviceName:string;
  
  /** template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet. */
  template:PodTemplateSpec;
  
  /** updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template. */
  updateStrategy?:StatefulSetUpdateStrategy;
  
  /** volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name. */
  volumeClaimTemplates?:PersistentVolumeClaim[];
  

}
export type StatefulSetStatus = {

  /** collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
  collisionCount?:number;
  
  /** Represents the latest available observations of a statefulset's current state. */
  conditions?:StatefulSetCondition[];
  
  /** currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision. */
  currentReplicas?:number;
  
  /** currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas). */
  currentRevision?:string;
  
  /** observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server. */
  observedGeneration?:number;
  
  /** readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition. */
  readyReplicas?:number;
  
  /** replicas is the number of Pods created by the StatefulSet controller. */
  replicas:number;
  
  /** updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas) */
  updateRevision?:string;
  
  /** updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision. */
  updatedReplicas?:number;
  

}
export type StatefulSetUpdateStrategy = {

  /** RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType. */
  rollingUpdate?:RollingUpdateStatefulSetStrategy;
  
  /** Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate. */
  type?:string;
  

}