/* Generated for apimachinery/pkg/apis/meta/v1/mod.ts */
import { RawExtension } from "../../../runtime/mod.ts";
export type APIGroup = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** name is the name of the group. */
  name: string;

  /** preferredVersion is the version preferred by the API server, which probably is the storage version. */
  preferredVersion?: GroupVersionForDiscovery;

  /** a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP. */
  serverAddressByClientCIDRs?: ServerAddressByClientCIDR[];

  /** versions are the versions supported in this group. */
  versions: GroupVersionForDiscovery[];
};
export function createAPIGroup(
  data: Omit<APIGroup, "apiVersion" | "kind">,
): APIGroup {
  return { apiVersion: "v1", kind: "APIGroup", ...data };
}

export type APIGroupList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** groups is a list of APIGroup. */
  groups: APIGroup[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;
};
export function createAPIGroupList(
  data: Omit<APIGroupList, "apiVersion" | "kind">,
): APIGroupList {
  return { apiVersion: "v1", kind: "APIGroupList", ...data };
}

export type APIResource = {
  /** categories is a list of the grouped resources this resource belongs to (e.g. 'all') */
  categories?: string[];

  /** group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale". */
  group?: string;

  /** kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo') */
  kind: string;

  /** name is the plural name of the resource. */
  name: string;

  /** namespaced indicates if a resource is namespaced or not. */
  namespaced: boolean;

  /** shortNames is a list of suggested short names of the resource. */
  shortNames?: string[];

  /** singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface. */
  singularName: string;

  /** The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates. */
  storageVersionHash?: string;

  /** verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy) */
  verbs: string[];

  /** version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)". */
  version?: string;
};
export type APIResourceList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** groupVersion is the group and version this APIResourceList is for. */
  groupVersion: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** resources contains the name of the resources and if they are namespaced. */
  resources: APIResource[];
};
export function createAPIResourceList(
  data: Omit<APIResourceList, "apiVersion" | "kind">,
): APIResourceList {
  return { apiVersion: "v1", kind: "APIResourceList", ...data };
}

export type APIVersions = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP. */
  serverAddressByClientCIDRs: ServerAddressByClientCIDR[];

  /** versions are the api versions that are available. */
  versions: string[];
};
export function createAPIVersions(
  data: Omit<APIVersions, "apiVersion" | "kind">,
): APIVersions {
  return { apiVersion: "v1", kind: "APIVersions", ...data };
}

export type DeleteOptions = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string[];

  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If truefalse, the "orphan" finalizer will be added toremoved from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean;

  /** Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned. */
  preconditions?: Preconditions;

  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string;
};
export function createDeleteOptions(
  data: Omit<DeleteOptions, "apiVersion" | "kind">,
): DeleteOptions {
  return { apiVersion: "v1", kind: "DeleteOptions", ...data };
}

export type FieldsV1 = {};
export type GroupVersionForDiscovery = {
  /** groupVersion specifies the API group and version in the form "groupversion" */
  groupVersion: string;

  /** version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion. */
  version: string;
};
export type LabelSelector = {
  /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
  matchExpressions?: LabelSelectorRequirement[];

  /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  matchLabels?: {
    [key: string]: string;
  };
};
export type LabelSelectorRequirement = {
  /** key is the label key that the selector applies to. */
  key: string;

  /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
  operator: string;

  /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
  values?: string[];
};
export type ListMeta = {
  /** continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message. */
  continue?: string;

  /** remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact. */
  remainingItemCount?: number;

  /** String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#concurrency-control-and-consistency */
  resourceVersion?: string;

  /** selfLink is a URL representing this object. Populated by the system. Read-only.

DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release. */
  selfLink?: string;
};
export type ManagedFieldsEntry = {
  /** APIVersion defines the version of this resource that this field set applies to. The format is "groupversion" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted. */
  apiVersion?: string;

  /** FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1" */
  fieldsType?: string;

  /** FieldsV1 holds the first JSON version format as described in the "FieldsV1" type. */
  fieldsV1?: FieldsV1;

  /** Manager is an identifier of the workflow managing these fields. */
  manager?: string;

  /** Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'. */
  operation?: string;

  /** Time is timestamp of when these fields were set. It should always be empty if Operation is 'Apply' */
  time?: Time;
};
export type MicroTime = string;
export type ObjectMeta = {
  /** Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http:kubernetes.iodocsuser-guideannotations */
  annotations?: {
    [key: string]: string;
  };

  /** The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. */
  clusterName?: string;

  /** CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.

Populated by the system. Read-only. Null for lists. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  creationTimestamp?: Time;

  /** Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. */
  deletionGracePeriodSeconds?: number;

  /** DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.

Populated by the system when a graceful deletion is requested. Read-only. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  deletionTimestamp?: Time;

  /** Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list. */
  finalizers?: string[];

  /** GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.

If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).

Applied only if Name is not specified. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#idempotency */
  generateName?: string;

  /** A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. */
  generation?: number;

  /** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http:kubernetes.iodocsuser-guidelabels */
  labels?: {
    [key: string]: string;
  };

  /** ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object. */
  managedFields?: ManagedFieldsEntry[];

  /** Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http:kubernetes.iodocsuser-guideidentifiers#names */
  name?: string;

  /** Namespace defines the space within each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: http:kubernetes.iodocsuser-guidenamespaces */
  namespace?: string;

  /** List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. */
  ownerReferences?: OwnerReference[];

  /** An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.

Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#concurrency-control-and-consistency */
  resourceVersion?: string;

  /** SelfLink is a URL representing this object. Populated by the system. Read-only.

DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release. */
  selfLink?: string;

  /** UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.

Populated by the system. Read-only. More info: http:kubernetes.iodocsuser-guideidentifiers#uids */
  uid?: string;
};
export type OwnerReference = {
  /** API version of the referent. */
  apiVersion: string;

  /** If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. */
  blockOwnerDeletion?: boolean;

  /** If true, this reference points to the managing controller. */
  controller?: boolean;

  /** Kind of the referent. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind: string;

  /** Name of the referent. More info: http:kubernetes.iodocsuser-guideidentifiers#names */
  name: string;

  /** UID of the referent. More info: http:kubernetes.iodocsuser-guideidentifiers#uids */
  uid: string;
};
export type Patch = {};
export type Preconditions = {
  /** Specifies the target ResourceVersion */
  resourceVersion?: string;

  /** Specifies the target UID. */
  uid?: string;
};
export type ServerAddressByClientCIDR = {
  /** The CIDR with which clients can match their IP to figure out the server address that they should use. */
  clientCIDR: string;

  /** Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port. */
  serverAddress: string;
};
export type Status = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Suggested HTTP return code for this status, 0 if not set. */
  code?: number;

  /** Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type. */
  details?: StatusDetails;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** A human-readable description of the status of this operation. */
  message?: string;

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  metadata?: ListMeta;

  /** A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it. */
  reason?: string;

  /** Status of the operation. One of: "Success" or "Failure". More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  status?: string;
};
export function createStatus(
  data: Omit<Status, "apiVersion" | "kind">,
): Status {
  return { apiVersion: "v1", kind: "Status", ...data };
}

export type StatusCause = {
  /** The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.

Examples:
  "name" - the field "name" on the current resource
  "items[0].name" - the field "name" on the first array entry in "items" */
  field?: string;

  /** A human-readable description of the cause of the error.  This field may be presented as-is to a reader. */
  message?: string;

  /** A machine-readable description of the cause of the error. If this value is empty there is no information available. */
  reason?: string;
};
export type StatusDetails = {
  /** The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. */
  causes?: StatusCause[];

  /** The group attribute of the resource associated with the status StatusReason. */
  group?: string;

  /** The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). */
  name?: string;

  /** If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action. */
  retryAfterSeconds?: number;

  /** UID of the resource. (when there is a single resource which can be described). More info: http:kubernetes.iodocsuser-guideidentifiers#uids */
  uid?: string;
};
export type Time = string;
export type WatchEvent = {
  /** Object is:
 * If Type is Added or Modified: the new state of the object.
 * If Type is Deleted: the state of the object immediately before deletion.
 * If Type is Error: *Status is recommended; other types may make sense
   depending on context. */
  object: RawExtension;

  type: string;
};
