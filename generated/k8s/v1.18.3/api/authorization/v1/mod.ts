/* Generated for api/authorization/v1/mod.ts */
import { ObjectMeta } from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";
export type LocalSubjectAccessReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  metadata?: ObjectMeta;

  /** Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted. */
  spec: SubjectAccessReviewSpec;

  /** Status is filled in by the server and indicates whether the request is allowed or not */
  status?: SubjectAccessReviewStatus;
};
export function createLocalSubjectAccessReview(
  data: Omit<LocalSubjectAccessReview, "apiVersion" | "kind">,
): LocalSubjectAccessReview {
  return {
    apiVersion: "authorization.k8s.io/v1",
    kind: "LocalSubjectAccessReview",
    ...data,
  };
}

export type NonResourceAttributes = {
  /** Path is the URL path of the request */
  path?: string;

  /** Verb is the standard HTTP verb */
  verb?: string;
};
export type NonResourceRule = {
  /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all. */
  nonResourceURLs?: string[];

  /** Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all. */
  verbs: string[];
};
export type ResourceAttributes = {
  /** Group is the API Group of the Resource.  "*" means all. */
  group?: string;

  /** Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all. */
  name?: string;

  /** Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview */
  namespace?: string;

  /** Resource is one of the existing resource types.  "*" means all. */
  resource?: string;

  /** Subresource is one of the existing resource types.  "" means none. */
  subresource?: string;

  /** Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all. */
  verb?: string;

  /** Version is the API Version of the Resource.  "*" means all. */
  version?: string;
};
export type ResourceRule = {
  /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all. */
  apiGroups?: string[];

  /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all. */
  resourceNames?: string[];

  /** Resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.
 "*foo" represents the subresource 'foo' for all resources in the specified apiGroups. */
  resources?: string[];

  /** Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all. */
  verbs: string[];
};
export type SelfSubjectAccessReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  metadata?: ObjectMeta;

  /** Spec holds information about the request being evaluated.  user and groups must be empty */
  spec: SelfSubjectAccessReviewSpec;

  /** Status is filled in by the server and indicates whether the request is allowed or not */
  status?: SubjectAccessReviewStatus;
};
export function createSelfSubjectAccessReview(
  data: Omit<SelfSubjectAccessReview, "apiVersion" | "kind">,
): SelfSubjectAccessReview {
  return {
    apiVersion: "authorization.k8s.io/v1",
    kind: "SelfSubjectAccessReview",
    ...data,
  };
}

export type SelfSubjectAccessReviewSpec = {
  /** NonResourceAttributes describes information for a non-resource access request */
  nonResourceAttributes?: NonResourceAttributes;

  /** ResourceAuthorizationAttributes describes information for a resource access request */
  resourceAttributes?: ResourceAttributes;
};
export type SelfSubjectRulesReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  metadata?: ObjectMeta;

  /** Spec holds information about the request being evaluated. */
  spec: SelfSubjectRulesReviewSpec;

  /** Status is filled in by the server and indicates the set of actions a user can perform. */
  status?: SubjectRulesReviewStatus;
};
export function createSelfSubjectRulesReview(
  data: Omit<SelfSubjectRulesReview, "apiVersion" | "kind">,
): SelfSubjectRulesReview {
  return {
    apiVersion: "authorization.k8s.io/v1",
    kind: "SelfSubjectRulesReview",
    ...data,
  };
}

export type SelfSubjectRulesReviewSpec = {
  /** Namespace to evaluate rules for. Required. */
  namespace?: string;
};
export type SubjectAccessReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  metadata?: ObjectMeta;

  /** Spec holds information about the request being evaluated */
  spec: SubjectAccessReviewSpec;

  /** Status is filled in by the server and indicates whether the request is allowed or not */
  status?: SubjectAccessReviewStatus;
};
export function createSubjectAccessReview(
  data: Omit<SubjectAccessReview, "apiVersion" | "kind">,
): SubjectAccessReview {
  return {
    apiVersion: "authorization.k8s.io/v1",
    kind: "SubjectAccessReview",
    ...data,
  };
}

export type SubjectAccessReviewSpec = {
  /** Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here. */
  extra?: {
    [key: string]: string[];
  };

  /** Groups is the groups you're testing for. */
  groups?: string[];

  /** NonResourceAttributes describes information for a non-resource access request */
  nonResourceAttributes?: NonResourceAttributes;

  /** ResourceAuthorizationAttributes describes information for a resource access request */
  resourceAttributes?: ResourceAttributes;

  /** UID information about the requesting user. */
  uid?: string;

  /** User is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups */
  user?: string;
};
export type SubjectAccessReviewStatus = {
  /** Allowed is required. True if the action would be allowed, false otherwise. */
  allowed: boolean;

  /** Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true. */
  denied?: boolean;

  /** EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request. */
  evaluationError?: string;

  /** Reason is optional.  It indicates why a request was allowed or denied. */
  reason?: string;
};
export type SubjectRulesReviewStatus = {
  /** EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules andor NonResourceRules may be incomplete. */
  evaluationError?: string;

  /** Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation. */
  incomplete: boolean;

  /** NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
  nonResourceRules: NonResourceRule[];

  /** ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
  resourceRules: ResourceRule[];
};
