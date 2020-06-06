/* Generated for api/rbac/v1/mod.ts */
import {
  LabelSelector,
  ObjectMeta,
  ListMeta,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";
export type AggregationRule = {
  /** ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added */
  clusterRoleSelectors?: LabelSelector[];
};
export type ClusterRole = {
  /** AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller. */
  aggregationRule?: AggregationRule;

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ObjectMeta;

  /** Rules holds all the PolicyRules for this ClusterRole */
  rules?: PolicyRule[];
};
export function createClusterRole(
  data: Omit<ClusterRole, "apiVersion" | "kind">,
): ClusterRole {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "ClusterRole",
    ...data,
  };
}

export type ClusterRoleBinding = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ObjectMeta;

  /** RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. */
  roleRef: RoleRef;

  /** Subjects holds references to the objects the role applies to. */
  subjects?: Subject[];
};
export function createClusterRoleBinding(
  data: Omit<ClusterRoleBinding, "apiVersion" | "kind">,
): ClusterRoleBinding {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "ClusterRoleBinding",
    ...data,
  };
}

export type ClusterRoleBindingList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of ClusterRoleBindings */
  items: ClusterRoleBinding[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ListMeta;
};
export function createClusterRoleBindingList(
  data: Omit<ClusterRoleBindingList, "apiVersion" | "kind">,
): ClusterRoleBindingList {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "ClusterRoleBindingList",
    ...data,
  };
}

export type ClusterRoleList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of ClusterRoles */
  items: ClusterRole[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ListMeta;
};
export function createClusterRoleList(
  data: Omit<ClusterRoleList, "apiVersion" | "kind">,
): ClusterRoleList {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "ClusterRoleList",
    ...data,
  };
}

export type PolicyRule = {
  /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. */
  apiGroups?: string[];

  /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "api"),  but not both. */
  nonResourceURLs?: string[];

  /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed. */
  resourceNames?: string[];

  /** Resources is a list of resources this rule applies to.  ResourceAll represents all resources. */
  resources?: string[];

  /** Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds. */
  verbs: string[];
};
export type Role = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ObjectMeta;

  /** Rules holds all the PolicyRules for this Role */
  rules?: PolicyRule[];
};
export function createRole(data: Omit<Role, "apiVersion" | "kind">): Role {
  return { apiVersion: "rbac.authorization.k8s.io/v1", kind: "Role", ...data };
}

export type RoleBinding = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ObjectMeta;

  /** RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. */
  roleRef: RoleRef;

  /** Subjects holds references to the objects the role applies to. */
  subjects?: Subject[];
};
export function createRoleBinding(
  data: Omit<RoleBinding, "apiVersion" | "kind">,
): RoleBinding {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "RoleBinding",
    ...data,
  };
}

export type RoleBindingList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of RoleBindings */
  items: RoleBinding[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ListMeta;
};
export function createRoleBindingList(
  data: Omit<RoleBindingList, "apiVersion" | "kind">,
): RoleBindingList {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "RoleBindingList",
    ...data,
  };
}

export type RoleList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of Roles */
  items: Role[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ListMeta;
};
export function createRoleList(
  data: Omit<RoleList, "apiVersion" | "kind">,
): RoleList {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "RoleList",
    ...data,
  };
}

export type RoleRef = {
  /** APIGroup is the group for the resource being referenced */
  apiGroup: string;

  /** Kind is the type of resource being referenced */
  kind: string;

  /** Name is the name of resource being referenced */
  name: string;
};
export type Subject = {
  /** APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects. */
  apiGroup?: string;

  /** Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error. */
  kind: string;

  /** Name of the object being referenced. */
  name: string;

  /** Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error. */
  namespace?: string;
};
