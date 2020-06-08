/* Generated for api/rbac/v1alpha1/mod.ts */
import {
  LabelSelector,
  ObjectMeta,
  ListMeta,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";

/** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export type AggregationRule = {
  /** ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added */
  clusterRoleSelectors?: LabelSelector[];
};

/** ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. */
export type ClusterRole = {
  /** AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller. */
  aggregationRule?: AggregationRule;

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
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
    apiVersion: "rbac.authorization.k8s.io/v1alpha1",
    kind: "ClusterRole",
    ...data,
  };
}

/** ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. */
export type ClusterRoleBinding = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
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
    apiVersion: "rbac.authorization.k8s.io/v1alpha1",
    kind: "ClusterRoleBinding",
    ...data,
  };
}

/** ClusterRoleBindingList is a collection of ClusterRoleBindings */
export type ClusterRoleBindingList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of ClusterRoleBindings */
  items: ClusterRoleBinding[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ListMeta;
};
export function createClusterRoleBindingList(
  data: Omit<ClusterRoleBindingList, "apiVersion" | "kind">,
): ClusterRoleBindingList {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1",
    kind: "ClusterRoleBindingList",
    ...data,
  };
}

/** ClusterRoleList is a collection of ClusterRoles */
export type ClusterRoleList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of ClusterRoles */
  items: ClusterRole[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ListMeta;
};
export function createClusterRoleList(
  data: Omit<ClusterRoleList, "apiVersion" | "kind">,
): ClusterRoleList {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1",
    kind: "ClusterRoleList",
    ...data,
  };
}

/** PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to. */
export type PolicyRule = {
  /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. */
  apiGroups?: string[];

  /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path This name is intentionally different than the internal type so that the DefaultConvert works nicely and because the ordering may be different. Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "api"),  but not both. */
  nonResourceURLs?: string[];

  /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed. */
  resourceNames?: string[];

  /** Resources is a list of resources this rule applies to.  ResourceAll represents all resources. */
  resources?: string[];

  /** Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds. */
  verbs: string[];
};

/** Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. */
export type Role = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ObjectMeta;

  /** Rules holds all the PolicyRules for this Role */
  rules?: PolicyRule[];
};
export function createRole(data: Omit<Role, "apiVersion" | "kind">): Role {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1",
    kind: "Role",
    ...data,
  };
}

/** RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. */
export type RoleBinding = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
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
    apiVersion: "rbac.authorization.k8s.io/v1alpha1",
    kind: "RoleBinding",
    ...data,
  };
}

/** RoleBindingList is a collection of RoleBindings */
export type RoleBindingList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of RoleBindings */
  items: RoleBinding[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ListMeta;
};
export function createRoleBindingList(
  data: Omit<RoleBindingList, "apiVersion" | "kind">,
): RoleBindingList {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1",
    kind: "RoleBindingList",
    ...data,
  };
}

/** RoleList is a collection of Roles */
export type RoleList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of Roles */
  items: Role[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata. */
  metadata?: ListMeta;
};
export function createRoleList(
  data: Omit<RoleList, "apiVersion" | "kind">,
): RoleList {
  return {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1",
    kind: "RoleList",
    ...data,
  };
}

/** RoleRef contains information that points to the role being used */
export type RoleRef = {
  /** APIGroup is the group for the resource being referenced */
  apiGroup: string;

  /** Kind is the type of resource being referenced */
  kind: string;

  /** Name is the name of resource being referenced */
  name: string;
};

/** Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names. */
export type Subject = {
  /** APIVersion holds the API group and version of the referenced subject. Defaults to "v1" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.iov1alpha1" for User and Group subjects. */
  apiVersion?: string;

  /** Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error. */
  kind: string;

  /** Name of the object being referenced. */
  name: string;

  /** Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error. */
  namespace?: string;
};