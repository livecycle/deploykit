/* Generated for apiextensions-apiserver/pkg/apis/apiextensions/v1beta1/mod.ts */
import {
  ListMeta,
  ObjectMeta,
  Time,
} from "../../../../../apimachinery/pkg/apis/meta/v1/mod.ts";

/** CustomResourceColumnDefinition specifies a column for server side printing. */
export type CustomResourceColumnDefinition = {
  /** JSONPath is a simple JSON path, i.e. with array notation. */
  JSONPath: string;

  /** description is a human readable description of this column. */
  description?: string;

  /** format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https:github.comOAIOpenAPI-Specificationblobmasterversions2.0.md#data-types for more. */
  format?: string;

  /** name is a human readable name for the column. */
  name: string;

  /** priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a higher priority. */
  priority?: number;

  /** type is an OpenAPI type definition for this column. See https:github.comOAIOpenAPI-Specificationblobmasterversions2.0.md#data-types for more. */
  type: string;
};

/** CustomResourceConversion describes how to convert different versions of a CR. */
export type CustomResourceConversion = {
  /** ConversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, conversion will fail for this object. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. Default to `['v1beta1']`. */
  conversionReviewVersions?: string[];

  /** `strategy` specifies the conversion strategy. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the CR. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information
  is needed for this option. This requires spec.preserveUnknownFields to be false. */
  strategy: string;

  /** `webhookClientConfig` is the instructions for how to call the webhook if strategy is `Webhook`. This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. */
  webhookClientConfig?: WebhookClientConfig;
};

/** CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. */
export type CustomResourceDefinition = {
  apiVersion: "apiextensions.k8s.io/v1beta1";
  kind: "CustomResourceDefinition";

  metadata?: ObjectMeta;

  /** Spec describes how the user wants the resources to appear */
  spec: CustomResourceDefinitionSpec;

  /** Status indicates the actual state of the CustomResourceDefinition */
  status?: CustomResourceDefinitionStatus;
};
export function createCustomResourceDefinition<
  T extends Omit<CustomResourceDefinition, "apiVersion" | "kind">,
>(
  data: T,
):
  & CustomResourceDefinition
  & T
  & Pick<CustomResourceDefinition, "apiVersion" | "kind"> {
  return {
    apiVersion: "apiextensions.k8s.io/v1beta1",
    kind: "CustomResourceDefinition",
    ...data,
  };
}

/** CustomResourceDefinitionCondition contains details for the current condition of this pod. */
export type CustomResourceDefinitionCondition = {
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: Time;

  /** Human-readable message indicating details about last transition. */
  message?: string;

  /** Unique, one-word, CamelCase reason for the condition's last transition. */
  reason?: string;

  /** Status is the status of the condition. Can be True, False, Unknown. */
  status: string;

  /** Type is the type of the condition. Types include Established, NamesAccepted and Terminating. */
  type: string;
};

/** CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export type CustomResourceDefinitionList = {
  apiVersion: "apiextensions.k8s.io/v1beta1";

  /** Items individual CustomResourceDefinitions */
  items: CustomResourceDefinition[];
  kind: "CustomResourceDefinitionList";

  metadata?: ListMeta;
};
export function createCustomResourceDefinitionList<
  T extends Omit<CustomResourceDefinitionList, "apiVersion" | "kind">,
>(
  data: T,
):
  & CustomResourceDefinitionList
  & T
  & Pick<CustomResourceDefinitionList, "apiVersion" | "kind"> {
  return {
    apiVersion: "apiextensions.k8s.io/v1beta1",
    kind: "CustomResourceDefinitionList",
    ...data,
  };
}

/** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
export type CustomResourceDefinitionNames = {
  /** Categories is a list of grouped resources custom resources belong to (e.g. 'all') */
  categories?: string[];

  /** Kind is the serialized kind of the resource.  It is normally CamelCase and singular. */
  kind: string;

  /** ListKind is the serialized kind of the list for this resource.  Defaults to <kind>List. */
  listKind?: string;

  /** Plural is the plural name of the resource to serve.  It must match the name of the CustomResourceDefinition-registration too: plural.group and it must be all lowercase. */
  plural: string;

  /** ShortNames are short names for the resource.  It must be all lowercase. */
  shortNames?: string[];

  /** Singular is the singular name of the resource.  It must be all lowercase  Defaults to lowercased <kind> */
  singular?: string;
};

/** CustomResourceDefinitionSpec describes how a user wants their resource to appear */
export type CustomResourceDefinitionSpec = {
  /** AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Optional, the global columns for all versions. Top-level and per-version columns are mutually exclusive. */
  additionalPrinterColumns?: CustomResourceColumnDefinition[];

  /** `conversion` defines conversion settings for the CRD. */
  conversion?: CustomResourceConversion;

  /** Group is the group this resource belongs in */
  group: string;

  /** Names are the names used to describe this custom resource */
  names: CustomResourceDefinitionNames;

  /** preserveUnknownFields disables pruning of object fields which are not specified in the OpenAPI schema. apiVersion, kind, metadata and known fields inside metadata are always preserved. Defaults to true in v1beta and will default to false in v1. */
  preserveUnknownFields?: boolean;

  /** Scope indicates whether this resource is cluster or namespace scoped.  Default is namespaced */
  scope: string;

  /** Subresources describes the subresources for CustomResource Optional, the global subresources for all versions. Top-level and per-version subresources are mutually exclusive. */
  subresources?: CustomResourceSubresources;

  /** Validation describes the validation methods for CustomResources Optional, the global validation schema for all versions. Top-level and per-version schemas are mutually exclusive. */
  validation?: CustomResourceValidation;

  /** Version is the version this resource belongs in Should be always first item in Versions field if provided. Optional, but at least one of Version or Versions must be set. Deprecated: Please use `Versions`. */
  version?: string;

  /** Versions is the list of all supported versions for this resource. If Version field is provided, this field is optional. Validation: All versions must use the same validation schema for now. i.e., top level Validation field is applied to all of these versions. Order: The version name will be used to compute the order. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10. */
  versions?: CustomResourceDefinitionVersion[];
};

/** CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
export type CustomResourceDefinitionStatus = {
  /** AcceptedNames are the names that are actually being used to serve discovery They may be different than the names in spec. */
  acceptedNames: CustomResourceDefinitionNames;

  /** Conditions indicate state for particular aspects of a CustomResourceDefinition */
  conditions: CustomResourceDefinitionCondition[];

  /** StoredVersions are all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so the migration controller can first finish a migration to another version (i.e. that no old objects are left in the storage), and then remove the rest of the versions from this list. None of the versions in this list can be removed from the spec.Versions field. */
  storedVersions: string[];
};

/** CustomResourceDefinitionVersion describes a version for CRD. */
export type CustomResourceDefinitionVersion = {
  /** AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Top-level and per-version columns are mutually exclusive. Per-version columns must not all be set to identical values (top-level columns should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. NOTE: CRDs created prior to 1.13 populated the top-level additionalPrinterColumns field by default. To apply an update that changes to per-version additionalPrinterColumns, the top-level additionalPrinterColumns field must be explicitly set to null */
  additionalPrinterColumns?: CustomResourceColumnDefinition[];

  /** Name is the version name, e.g. “v1”, “v2beta1”, etc. */
  name: string;

  /** Schema describes the schema for CustomResource used in validation, pruning, and defaulting. Top-level and per-version schemas are mutually exclusive. Per-version schemas must not all be set to identical values (top-level validation schema should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. */
  schema?: CustomResourceValidation;

  /** Served is a flag enablingdisabling this version from being served via REST APIs */
  served: boolean;

  /** Storage flags the version as storage version. There must be exactly one flagged as storage version. */
  storage: boolean;

  /** Subresources describes the subresources for CustomResource Top-level and per-version subresources are mutually exclusive. Per-version subresources must not all be set to identical values (top-level subresources should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. */
  subresources?: CustomResourceSubresources;
};

/** CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
export type CustomResourceSubresourceScale = {
  /** LabelSelectorPath defines the JSON path inside of a CustomResource that corresponds to Scale.Status.Selector. Only JSON paths without the array notation are allowed. Must be a JSON Path under .status or .spec. Must be set to work with HPA. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https:kubernetes.iodocstasksaccess-kubernetes-apicustom-resourcescustom-resource-definitions#scale-subresource If there is no value under the given path in the CustomResource, the status label selector value in the scale subresource will default to the empty string. */
  labelSelectorPath?: string;

  /** SpecReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Spec.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .spec. If there is no value under the given path in the CustomResource, the scale subresource will return an error on GET. */
  specReplicasPath: string;

  /** StatusReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Status.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .status. If there is no value under the given path in the CustomResource, the status replica value in the scale subresource will default to 0. */
  statusReplicasPath: string;
};

/** CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a status subresource for the custom resource * PUT requests to the status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUTPOSTPATCH requests to the custom resource ignore changes to the status stanza */
export type CustomResourceSubresourceStatus = {};

/** CustomResourceSubresources defines the status and scale subresources for CustomResources. */
export type CustomResourceSubresources = {
  /** Scale denotes the scale subresource for CustomResources */
  scale?: CustomResourceSubresourceScale;

  /** Status denotes the status subresource for CustomResources */
  status?: CustomResourceSubresourceStatus;
};

/** CustomResourceValidation is a list of validation methods for CustomResources. */
export type CustomResourceValidation = {
  /** OpenAPIV3Schema is the OpenAPI v3 schema to be validated against. */
  openAPIV3Schema?: JSONSchemaProps;
};

/** ExternalDocumentation allows referencing an external resource for extended documentation. */
export type ExternalDocumentation = {
  description?: string;

  url?: string;
};

/** JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil. */
export type JSON = any;

/** JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http:json-schema.org). */
export type JSONSchemaProps = {
  $ref?: string;

  $schema?: string;

  additionalItems?: JSONSchemaPropsOrBool;

  additionalProperties?: JSONSchemaPropsOrBool;

  allOf?: JSONSchemaProps[];

  anyOf?: JSONSchemaProps[];

  /** default is a default value for undefined object fields. Defaulting is an alpha feature under the CustomResourceDefaulting feature gate. Defaulting requires spec.preserveUnknownFields to be false. */
  default?: JSON;

  definitions?: {
    [key: string]: JSONSchemaProps;
  };

  dependencies?: {
    [key: string]: JSONSchemaPropsOrStringArray;
  };

  description?: string;

  enum?: JSON[];

  example?: JSON;

  exclusiveMaximum?: boolean;

  exclusiveMinimum?: boolean;

  externalDocs?: ExternalDocumentation;

  format?: string;

  id?: string;

  items?: JSONSchemaPropsOrArray;

  maxItems?: number;

  maxLength?: number;

  maxProperties?: number;

  maximum?: number;

  minItems?: number;

  minLength?: number;

  minProperties?: number;

  minimum?: number;

  multipleOf?: number;

  not?: JSONSchemaProps;

  nullable?: boolean;

  oneOf?: JSONSchemaProps[];

  pattern?: string;

  patternProperties?: {
    [key: string]: JSONSchemaProps;
  };

  properties?: {
    [key: string]: JSONSchemaProps;
  };

  required?: string[];

  title?: string;

  type?: string;

  uniqueItems?: boolean;

  /** x-kubernetes-embedded-resource defines that the value is an embedded Kubernetes runtime.Object, with TypeMeta and ObjectMeta. The type must be object. It is allowed to further restrict the embedded object. kind, apiVersion and metadata are validated automatically. x-kubernetes-preserve-unknown-fields is allowed to be true, but does not have to be if the object is fully specified (up to kind, apiVersion, metadata). */
  ["x-kubernetes-embedded-resource"]?: boolean;

  /** x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns:

1) anyOf:
   - type: integer
   - type: string
2) allOf:
   - anyOf:
     - type: integer
     - type: string
   - ... zero or more */
  ["x-kubernetes-int-or-string"]?: boolean;

  /** x-kubernetes-preserve-unknown-fields stops the API server decoding step from pruning fields which are not specified in the validation schema. This affects fields recursively, but switches back to normal pruning behaviour if nested properties or additionalProperties are specified in the schema. This can either be true or undefined. False is forbidden. */
  ["x-kubernetes-preserve-unknown-fields"]?: boolean;
};

/** JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes. */
export type JSONSchemaPropsOrArray = any;

/** JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property. */
export type JSONSchemaPropsOrBool = any;

/** JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array. */
export type JSONSchemaPropsOrStringArray = any;

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export type ServiceReference = {
  /** `name` is the name of the service. Required */
  name: string;

  /** `namespace` is the namespace of the service. Required */
  namespace: string;

  /** `path` is an optional URL path which will be sent in any request to this service. */
  path?: string;

  /** If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive). */
  port?: number;
};

/** WebhookClientConfig contains the information to make a TLS connection with the webhook. It has the same field as admissionregistration.v1beta1.WebhookClientConfig. */
export type WebhookClientConfig = {
  /** `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used. */
  caBundle?: string;

  /** `service` is a reference to the service for this webhook. Either `service` or `url` must be specified.

If the webhook is running within the cluster, then you should use `service`. */
  service?: ServiceReference;

  /** `url` gives the location of the webhook, in standard URL form (`scheme:host:portpath`). Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https:".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either. */
  url?: string;
};
