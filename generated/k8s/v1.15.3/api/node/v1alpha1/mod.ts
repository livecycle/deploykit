/* Generated for api/node/v1alpha1/mod.ts */
import {
  ListMeta,
  ObjectMeta,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";

/** RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https:git.k8s.ioenhancementskepssig-noderuntime-class.md */
export type RuntimeClass = {
  apiVersion: "node.k8s.io/v1alpha1";
  kind: "RuntimeClass";

  /** More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** Specification of the RuntimeClass More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#spec-and-status */
  spec: RuntimeClassSpec;
};
export function createRuntimeClass<
  T extends Omit<RuntimeClass, "apiVersion" | "kind">,
>(data: T): RuntimeClass & T & Pick<RuntimeClass, "apiVersion" | "kind"> {
  return { apiVersion: "node.k8s.io/v1alpha1", kind: "RuntimeClass", ...data };
}

/** RuntimeClassList is a list of RuntimeClass objects. */
export type RuntimeClassList = {
  apiVersion: "node.k8s.io/v1alpha1";

  /** Items is a list of schema objects. */
  items: RuntimeClass[];
  kind: "RuntimeClassList";

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createRuntimeClassList<
  T extends Omit<RuntimeClassList, "apiVersion" | "kind">,
>(
  data: T,
): RuntimeClassList & T & Pick<RuntimeClassList, "apiVersion" | "kind"> {
  return {
    apiVersion: "node.k8s.io/v1alpha1",
    kind: "RuntimeClassList",
    ...data,
  };
}

/** RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable. */
export type RuntimeClassSpec = {
  /** RuntimeHandler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The RuntimeHandler must conform to the DNS Label (RFC 1123) requirements and is immutable. */
  runtimeHandler: string;
};
