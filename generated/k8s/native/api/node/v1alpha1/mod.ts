/* Generated for api/node/v1alpha1/mod.ts */
import { Quantity } from "../../../apimachinery/pkg/api/resource/mod.ts";
import {
  ObjectMeta,
  ListMeta,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";
import { Toleration } from "../../core/v1/mod.ts";
export type Overhead = {
  /** PodFixed represents the fixed resource overhead associated with running a pod. */
  podFixed?: {
    [key: string]: Quantity;
  };
};
export type RuntimeClass = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** Specification of the RuntimeClass More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  spec: RuntimeClassSpec;
};
export function createRuntimeClass(
  data: Omit<RuntimeClass, "apiVersion" | "kind">,
): RuntimeClass {
  return { apiVersion: "node.k8s.io/v1alpha1", kind: "RuntimeClass", ...data };
}

export type RuntimeClassList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of schema objects. */
  items: RuntimeClass[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createRuntimeClassList(
  data: Omit<RuntimeClassList, "apiVersion" | "kind">,
): RuntimeClassList {
  return {
    apiVersion: "node.k8s.io/v1alpha1",
    kind: "RuntimeClassList",
    ...data,
  };
}

export type RuntimeClassSpec = {
  /** Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. For more details, see https:git.k8s.ioenhancementskepssig-node20190226-pod-overhead.md This field is alpha-level as of Kubernetes v1.15, and is only honored by servers that enable the PodOverhead feature. */
  overhead?: Overhead;

  /** RuntimeHandler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The RuntimeHandler must conform to the DNS Label (RFC 1123) requirements and is immutable. */
  runtimeHandler: string;

  /** Scheduling holds the scheduling constraints to ensure that pods running with this RuntimeClass are scheduled to nodes that support it. If scheduling is nil, this RuntimeClass is assumed to be supported by all nodes. */
  scheduling?: Scheduling;
};
export type Scheduling = {
  /** nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod's existing nodeSelector. Any conflicts will cause the pod to be rejected in admission. */
  nodeSelector?: {
    [key: string]: string;
  };

  /** tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass. */
  tolerations?: Toleration[];
};
