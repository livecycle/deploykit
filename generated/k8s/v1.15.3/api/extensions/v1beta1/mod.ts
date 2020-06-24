/* Generated for api/extensions/v1beta1/mod.ts */
import { IntOrString } from "../../../apimachinery/pkg/util/intstr/mod.ts";
import {
  PodTemplateSpec,
  LoadBalancerStatus,
  SELinuxOptions,
} from "../../core/v1/mod.ts";
import {
  ObjectMeta,
  Time,
  ListMeta,
  LabelSelector,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";

/** AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used. */
export type AllowedCSIDriver = {
  /** Name is the registered name of the CSI driver */
  name: string;
};

/** AllowedFlexVolume represents a single Flexvolume that is allowed to be used. Deprecated: use AllowedFlexVolume from policy API Group instead. */
export type AllowedFlexVolume = {
  /** driver is the name of the Flexvolume driver. */
  driver: string;
};

/** AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. Deprecated: use AllowedHostPath from policy API Group instead. */
export type AllowedHostPath = {
  /** pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `foo` would allow `foo`, `foo` and `foobar` `foo` would not allow `food` or `etcfoo` */
  pathPrefix?: string;

  /** when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly. */
  readOnly?: boolean;
};

/** DEPRECATED - This group version of DaemonSet is deprecated by appsv1beta2DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set. */
export type DaemonSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** The desired behavior of this daemon set. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  spec?: DaemonSetSpec;

  /** The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  status?: DaemonSetStatus;
};
export function createDaemonSet<
  T extends Omit<DaemonSet, "apiVersion" | "kind">,
>(data: T): DaemonSet & T & Pick<DaemonSet, "apiVersion" | "kind"> {
  return { apiVersion: "extensions/v1beta1", kind: "DaemonSet", ...data };
}

/** DaemonSetCondition describes the state of a DaemonSet at a certain point. */
export type DaemonSetCondition = {
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: Time;

  /** A human readable message indicating details about the transition. */
  message?: string;

  /** The reason for the condition's last transition. */
  reason?: string;

  /** Status of the condition, one of True, False, Unknown. */
  status: string;

  /** Type of DaemonSet condition. */
  type: string;
};

/** DaemonSetList is a collection of daemon sets. */
export type DaemonSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** A list of daemon sets. */
  items: DaemonSet[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createDaemonSetList<
  T extends Omit<DaemonSetList, "apiVersion" | "kind">,
>(data: T): DaemonSetList & T & Pick<DaemonSetList, "apiVersion" | "kind"> {
  return { apiVersion: "extensions/v1beta1", kind: "DaemonSetList", ...data };
}

/** DaemonSetSpec is the specification of a daemon set. */
export type DaemonSetSpec = {
  /** The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready). */
  minReadySeconds?: number;

  /** The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. */
  revisionHistoryLimit?: number;

  /** A label query over pods that are managed by the daemon set. Must match in order to be controlled. If empty, defaulted to labels on Pod template. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectslabels#label-selectors */
  selector?: LabelSelector;

  /** An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https:kubernetes.iodocsconceptsworkloadscontrollersreplicationcontroller#pod-template */
  template: PodTemplateSpec;

  /** DEPRECATED. A sequence number representing a specific generation of the template. Populated by the system. It can be set only during the creation. */
  templateGeneration?: number;

  /** An update strategy to replace existing DaemonSet pods with new pods. */
  updateStrategy?: DaemonSetUpdateStrategy;
};

/** DaemonSetStatus represents the current status of a daemon set. */
export type DaemonSetStatus = {
  /** Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
  collisionCount?: number;

  /** Represents the latest available observations of a DaemonSet's current state. */
  conditions?: DaemonSetCondition[];

  /** The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https:kubernetes.iodocsconceptsworkloadscontrollersdaemonset */
  currentNumberScheduled: number;

  /** The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https:kubernetes.iodocsconceptsworkloadscontrollersdaemonset */
  desiredNumberScheduled: number;

  /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds) */
  numberAvailable?: number;

  /** The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https:kubernetes.iodocsconceptsworkloadscontrollersdaemonset */
  numberMisscheduled: number;

  /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready. */
  numberReady: number;

  /** The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds) */
  numberUnavailable?: number;

  /** The most recent generation observed by the daemon set controller. */
  observedGeneration?: number;

  /** The total number of nodes that are running updated daemon pod */
  updatedNumberScheduled?: number;
};

undefined;
export type DaemonSetUpdateStrategy = {
  /** Rolling update config params. Present only if type = "RollingUpdate". */
  rollingUpdate?: RollingUpdateDaemonSet;

  /** Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is OnDelete. */
  type?: string;
};

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
  return { apiVersion: "extensions/v1beta1", kind: "Deployment", ...data };
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
  return { apiVersion: "extensions/v1beta1", kind: "DeploymentList", ...data };
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
  return {
    apiVersion: "extensions/v1beta1",
    kind: "DeploymentRollback",
    ...data,
  };
}

/** DeploymentSpec is the specification of the desired behavior of the Deployment. */
export type DeploymentSpec = {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  minReadySeconds?: number;

  /** Indicates that the deployment is paused and will not be processed by the deployment controller. */
  paused?: boolean;

  /** The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. This is set to the max value of int32 (i.e. 2147483647) by default, which means "no deadline". */
  progressDeadlineSeconds?: number;

  /** Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. */
  replicas?: number;

  /** The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. This is set to the max value of int32 (i.e. 2147483647) by default, which means "retaining all old RelicaSets". */
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

/** FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead. */
export type FSGroupStrategyOptions = {
  /** ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs. */
  ranges?: IDRange[];

  /** rule is the strategy that will dictate what FSGroup is used in the SecurityContext. */
  rule?: string;
};

/** HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend. */
export type HTTPIngressPath = {
  /** Backend defines the referenced service endpoint to which the traffic will be forwarded to. */
  backend: IngressBackend;

  /** Path is an extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrepunix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a ''. If unspecified, the path defaults to a catch all sending traffic to the backend. */
  path?: string;
};

/** HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http:<host><path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '' and before the first '?' or '#'. */
export type HTTPIngressRuleValue = {
  /** A collection of paths that map requests to backends. */
  paths: HTTPIngressPath[];
};

/** HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead. */
export type HostPortRange = {
  /** max is the end of the range, inclusive. */
  max: number;

  /** min is the start of the range, inclusive. */
  min: number;
};

/** IDRange provides a minmax of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead. */
export type IDRange = {
  /** max is the end of the range, inclusive. */
  max: number;

  /** min is the start of the range, inclusive. */
  min: number;
};

/** DEPRECATED 1.9 - This group version of IPBlock is deprecated by networkingv1IPBlock. IPBlock describes a particular CIDR (Ex. "192.168.1.124") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule. */
export type IPBlock = {
  /** CIDR is a string representing the IP Block Valid examples are "192.168.1.124" */
  cidr: string;

  /** Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.124" Except values will be rejected if they are outside the CIDR range */
  except?: string[];
};

/** Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. DEPRECATED - This group version of Ingress is deprecated by networking.k8s.iov1beta1 Ingress. See the release notes for more information. */
export type Ingress = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** Spec is the desired state of the Ingress. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  spec?: IngressSpec;

  /** Status is the current state of the Ingress. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  status?: IngressStatus;
};
export function createIngress<T extends Omit<Ingress, "apiVersion" | "kind">>(
  data: T,
): Ingress & T & Pick<Ingress, "apiVersion" | "kind"> {
  return { apiVersion: "extensions/v1beta1", kind: "Ingress", ...data };
}

/** IngressBackend describes all endpoints for a given service and port. */
export type IngressBackend = {
  /** Specifies the name of the referenced service. */
  serviceName: string;

  /** Specifies the port of the referenced service. */
  servicePort: IntOrString;
};

/** IngressList is a collection of Ingress. */
export type IngressList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is the list of Ingress. */
  items: Ingress[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createIngressList<
  T extends Omit<IngressList, "apiVersion" | "kind">,
>(data: T): IngressList & T & Pick<IngressList, "apiVersion" | "kind"> {
  return { apiVersion: "extensions/v1beta1", kind: "IngressList", ...data };
}

/** IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue. */
export type IngressRule = {
  /** Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in the RFC: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the
	  IP in the Spec of the parent Ingress.
2. The `:` delimiter is not respected because ports are not allowed.
	  Currently the port of an Ingress is implicitly :80 for http and
	  :443 for https.
Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue. */
  host?: string;

  http?: HTTPIngressRuleValue;
};

/** IngressSpec describes the Ingress the user wishes to exist. */
export type IngressSpec = {
  /** A default backend capable of servicing requests that don't match any rule. At least one of 'backend' or 'rules' must be specified. This field is optional to allow the loadbalancer controller or defaulting logic to specify a global default. */
  backend?: IngressBackend;

  /** A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend. */
  rules?: IngressRule[];

  /** TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI. */
  tls?: IngressTLS[];
};

/** IngressStatus describe the current state of the Ingress. */
export type IngressStatus = {
  /** LoadBalancer contains the current status of the load-balancer. */
  loadBalancer?: LoadBalancerStatus;
};

/** IngressTLS describes the transport layer security associated with an Ingress. */
export type IngressTLS = {
  /** Hosts are a list of hosts included in the TLS certificate. The values in this list must match the names used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified. */
  hosts?: string[];

  /** SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing. */
  secretName?: string;
};

/** DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networkingv1NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods */
export type NetworkPolicy = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** Specification of the desired behavior for this NetworkPolicy. */
  spec?: NetworkPolicySpec;
};
export function createNetworkPolicy<
  T extends Omit<NetworkPolicy, "apiVersion" | "kind">,
>(data: T): NetworkPolicy & T & Pick<NetworkPolicy, "apiVersion" | "kind"> {
  return { apiVersion: "extensions/v1beta1", kind: "NetworkPolicy", ...data };
}

/** DEPRECATED 1.9 - This group version of NetworkPolicyEgressRule is deprecated by networkingv1NetworkPolicyEgressRule. NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8 */
export type NetworkPolicyEgressRule = {
  /** List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list. */
  ports?: NetworkPolicyPort[];

  /** List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list. */
  to?: NetworkPolicyPeer[];
};

/** DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networkingv1NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from. */
export type NetworkPolicyIngressRule = {
  /** List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list. */
  from?: NetworkPolicyPeer[];

  /** List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list. */
  ports?: NetworkPolicyPort[];
};

/** DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networkingv1NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects. */
export type NetworkPolicyList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of schema objects. */
  items: NetworkPolicy[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createNetworkPolicyList<
  T extends Omit<NetworkPolicyList, "apiVersion" | "kind">,
>(
  data: T,
): NetworkPolicyList & T & Pick<NetworkPolicyList, "apiVersion" | "kind"> {
  return {
    apiVersion: "extensions/v1beta1",
    kind: "NetworkPolicyList",
    ...data,
  };
}

/** DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networkingv1NetworkPolicyPeer. */
export type NetworkPolicyPeer = {
  /** IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be. */
  ipBlock?: IPBlock;

  /** Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.

If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector. */
  namespaceSelector?: LabelSelector;

  /** This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.

If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace. */
  podSelector?: LabelSelector;
};

/** DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networkingv1NetworkPolicyPort. */
export type NetworkPolicyPort = {
  /** If specified, the port on the given protocol.  This can either be a numerical or named port on a pod.  If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched. */
  port?: IntOrString;

  /** Optional.  The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. */
  protocol?: string;
};

/** DEPRECATED 1.9 - This group version of NetworkPolicySpec is deprecated by networkingv1NetworkPolicySpec. */
export type NetworkPolicySpec = {
  /** List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8 */
  egress?: NetworkPolicyEgressRule[];

  /** List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default). */
  ingress?: NetworkPolicyIngressRule[];

  /** Selects the pods to which this NetworkPolicy object applies.  The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods.  In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace. */
  podSelector: LabelSelector;

  /** List of rule types that the NetworkPolicy relates to. Valid options are "Ingress", "Egress", or "Ingress,Egress". If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8 */
  policyTypes?: string[];
};

/** PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead. */
export type PodSecurityPolicy = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** spec defines the policy enforced. */
  spec?: PodSecurityPolicySpec;
};
export function createPodSecurityPolicy<
  T extends Omit<PodSecurityPolicy, "apiVersion" | "kind">,
>(
  data: T,
): PodSecurityPolicy & T & Pick<PodSecurityPolicy, "apiVersion" | "kind"> {
  return {
    apiVersion: "extensions/v1beta1",
    kind: "PodSecurityPolicy",
    ...data,
  };
}

/** PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead. */
export type PodSecurityPolicyList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** items is a list of schema objects. */
  items: PodSecurityPolicy[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createPodSecurityPolicyList<
  T extends Omit<PodSecurityPolicyList, "apiVersion" | "kind">,
>(
  data: T,
):
  & PodSecurityPolicyList
  & T
  & Pick<PodSecurityPolicyList, "apiVersion" | "kind"> {
  return {
    apiVersion: "extensions/v1beta1",
    kind: "PodSecurityPolicyList",
    ...data,
  };
}

/** PodSecurityPolicySpec defines the policy enforced. Deprecated: use PodSecurityPolicySpec from policy API Group instead. */
export type PodSecurityPolicySpec = {
  /** allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true. */
  allowPrivilegeEscalation?: boolean;

  /** AllowedCSIDrivers is a whitelist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is an alpha field, and is only honored if the API server enables the CSIInlineVolume feature gate. */
  allowedCSIDrivers?: AllowedCSIDriver[];

  /** allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities. */
  allowedCapabilities?: string[];

  /** allowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "volumes" field. */
  allowedFlexVolumes?: AllowedFlexVolume[];

  /** allowedHostPaths is a white list of allowed host paths. Empty indicates that all host paths may be used. */
  allowedHostPaths?: AllowedHostPath[];

  /** AllowedProcMountTypes is a whitelist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled. */
  allowedProcMountTypes?: string[];

  /** allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to whitelist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo*" allows "foobar", "foobaz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc. */
  allowedUnsafeSysctls?: string[];

  /** defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list. */
  defaultAddCapabilities?: string[];

  /** defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process. */
  defaultAllowPrivilegeEscalation?: boolean;

  /** forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo*" forbids "foobar", "foobaz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc. */
  forbiddenSysctls?: string[];

  /** fsGroup is the strategy that will dictate what fs group is used by the SecurityContext. */
  fsGroup: FSGroupStrategyOptions;

  /** hostIPC determines if the policy allows the use of HostIPC in the pod spec. */
  hostIPC?: boolean;

  /** hostNetwork determines if the policy allows the use of HostNetwork in the pod spec. */
  hostNetwork?: boolean;

  /** hostPID determines if the policy allows the use of HostPID in the pod spec. */
  hostPID?: boolean;

  /** hostPorts determines which host port ranges are allowed to be exposed. */
  hostPorts?: HostPortRange[];

  /** privileged determines if a pod can request to be run as privileged. */
  privileged?: boolean;

  /** readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to. */
  readOnlyRootFilesystem?: boolean;

  /** requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added. */
  requiredDropCapabilities?: string[];

  /** RunAsGroup is the strategy that will dictate the allowable RunAsGroup values that may be set. If this field is omitted, the pod's RunAsGroup can take any value. This field requires the RunAsGroup feature gate to be enabled. */
  runAsGroup?: RunAsGroupStrategyOptions;

  /** runAsUser is the strategy that will dictate the allowable RunAsUser values that may be set. */
  runAsUser: RunAsUserStrategyOptions;

  /** runtimeClass is the strategy that will dictate the allowable RuntimeClasses for a pod. If this field is omitted, the pod's runtimeClassName field is unrestricted. Enforcement of this field depends on the RuntimeClass feature gate being enabled. */
  runtimeClass?: RuntimeClassStrategyOptions;

  /** seLinux is the strategy that will dictate the allowable labels that may be set. */
  seLinux: SELinuxStrategyOptions;

  /** supplementalGroups is the strategy that will dictate what supplemental groups are used by the SecurityContext. */
  supplementalGroups: SupplementalGroupsStrategyOptions;

  /** volumes is a white list of allowed volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'. */
  volumes?: string[];
};

/** DEPRECATED - This group version of ReplicaSet is deprecated by appsv1beta2ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time. */
export type ReplicaSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** Spec defines the specification of the desired behavior of the ReplicaSet. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  spec?: ReplicaSetSpec;

  /** Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  status?: ReplicaSetStatus;
};
export function createReplicaSet<
  T extends Omit<ReplicaSet, "apiVersion" | "kind">,
>(data: T): ReplicaSet & T & Pick<ReplicaSet, "apiVersion" | "kind"> {
  return { apiVersion: "extensions/v1beta1", kind: "ReplicaSet", ...data };
}

/** ReplicaSetCondition describes the state of a replica set at a certain point. */
export type ReplicaSetCondition = {
  /** The last time the condition transitioned from one status to another. */
  lastTransitionTime?: Time;

  /** A human readable message indicating details about the transition. */
  message?: string;

  /** The reason for the condition's last transition. */
  reason?: string;

  /** Status of the condition, one of True, False, Unknown. */
  status: string;

  /** Type of replica set condition. */
  type: string;
};

/** ReplicaSetList is a collection of ReplicaSets. */
export type ReplicaSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** List of ReplicaSets. More info: https:kubernetes.iodocsconceptsworkloadscontrollersreplicationcontroller */
  items: ReplicaSet[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  metadata?: ListMeta;
};
export function createReplicaSetList<
  T extends Omit<ReplicaSetList, "apiVersion" | "kind">,
>(data: T): ReplicaSetList & T & Pick<ReplicaSetList, "apiVersion" | "kind"> {
  return { apiVersion: "extensions/v1beta1", kind: "ReplicaSetList", ...data };
}

/** ReplicaSetSpec is the specification of a ReplicaSet. */
export type ReplicaSetSpec = {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  minReadySeconds?: number;

  /** Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https:kubernetes.iodocsconceptsworkloadscontrollersreplicationcontroller#what-is-a-replicationcontroller */
  replicas?: number;

  /** Selector is a label query over pods that should match the replica count. If the selector is empty, it is defaulted to the labels present on the pod template. Label keys and values that must match in order to be controlled by this replica set. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectslabels#label-selectors */
  selector?: LabelSelector;

  /** Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https:kubernetes.iodocsconceptsworkloadscontrollersreplicationcontroller#pod-template */
  template?: PodTemplateSpec;
};

/** ReplicaSetStatus represents the current status of a ReplicaSet. */
export type ReplicaSetStatus = {
  /** The number of available replicas (ready for at least minReadySeconds) for this replica set. */
  availableReplicas?: number;

  /** Represents the latest available observations of a replica set's current state. */
  conditions?: ReplicaSetCondition[];

  /** The number of pods that have labels matching the labels of the pod template of the replicaset. */
  fullyLabeledReplicas?: number;

  /** ObservedGeneration reflects the generation of the most recently observed ReplicaSet. */
  observedGeneration?: number;

  /** The number of ready replicas for this replica set. */
  readyReplicas?: number;

  /** Replicas is the most recently oberved number of replicas. More info: https:kubernetes.iodocsconceptsworkloadscontrollersreplicationcontroller#what-is-a-replicationcontroller */
  replicas: number;
};

/** DEPRECATED. */
export type RollbackConfig = {
  /** The revision to rollback to. If set to 0, rollback to the last revision. */
  revision?: number;
};

/** Spec to control the desired behavior of daemon set rolling update. */
export type RollingUpdateDaemonSet = {
  /** The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update. */
  maxUnavailable?: IntOrString;
};

/** Spec to control the desired behavior of rolling update. */
export type RollingUpdateDeployment = {
  /** The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. By default, a value of 1 is used. Example: when this is set to 30%, the new RC can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new RC can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods. */
  maxSurge?: IntOrString;

  /** The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. By default, a fixed value of 1 is used. Example: when this is set to 30%, the old RC can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old RC can be scaled down further, followed by scaling up the new RC, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods. */
  maxUnavailable?: IntOrString;
};

/** RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsGroupStrategyOptions from policy API Group instead. */
export type RunAsGroupStrategyOptions = {
  /** ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs. */
  ranges?: IDRange[];

  /** rule is the strategy that will dictate the allowable RunAsGroup values that may be set. */
  rule: string;
};

/** RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead. */
export type RunAsUserStrategyOptions = {
  /** ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs. */
  ranges?: IDRange[];

  /** rule is the strategy that will dictate the allowable RunAsUser values that may be set. */
  rule: string;
};

/** RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod. */
export type RuntimeClassStrategyOptions = {
  /** allowedRuntimeClassNames is a whitelist of RuntimeClass names that may be specified on a pod. A value of "*" means that any RuntimeClass name is allowed, and must be the only item in the list. An empty list requires the RuntimeClassName field to be unset. */
  allowedRuntimeClassNames: string[];

  /** defaultRuntimeClassName is the default RuntimeClassName to set on the pod. The default MUST be allowed by the allowedRuntimeClassNames list. A value of nil does not mutate the Pod. */
  defaultRuntimeClassName?: string;
};

/** SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead. */
export type SELinuxStrategyOptions = {
  /** rule is the strategy that will dictate the allowable labels that may be set. */
  rule: string;

  /** seLinuxOptions required to run as; required for MustRunAs More info: https:kubernetes.iodocstasksconfigure-pod-containersecurity-context */
  seLinuxOptions?: SELinuxOptions;
};

/** represents a scaling request for a resource. */
export type Scale = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object metadata; More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata. */
  metadata?: ObjectMeta;

  /** defines the behavior of the scale. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status. */
  spec?: ScaleSpec;

  /** current status of the scale. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status. Read-only. */
  status?: ScaleStatus;
};
export function createScale<T extends Omit<Scale, "apiVersion" | "kind">>(
  data: T,
): Scale & T & Pick<Scale, "apiVersion" | "kind"> {
  return { apiVersion: "extensions/v1beta1", kind: "Scale", ...data };
}

/** describes the attributes of a scale subresource */
export type ScaleSpec = {
  /** desired number of instances for the scaled object. */
  replicas?: number;
};

/** represents the current status of a scale subresource. */
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

/** SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead. */
export type SupplementalGroupsStrategyOptions = {
  /** ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs. */
  ranges?: IDRange[];

  /** rule is the strategy that will dictate what supplemental groups is used in the SecurityContext. */
  rule?: string;
};
