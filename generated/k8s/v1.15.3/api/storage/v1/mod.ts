/* Generated for api/storage/v1/mod.ts */
import {
  PersistentVolumeSpec,
  TopologySelectorTerm,
} from "../../core/v1/mod.ts";
import {
  ListMeta,
  ObjectMeta,
  Time,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";

/** StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name. */
export type StorageClass = {
  /** AllowVolumeExpansion shows whether the storage class allow volume expand */
  allowVolumeExpansion?: boolean;

  /** Restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature. */
  allowedTopologies?: TopologySelectorTerm[];
  apiVersion: "storage.k8s.io/v1";
  kind: "StorageClass";

  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid. */
  mountOptions?: string[];

  /** Parameters holds the parameters for the provisioner that should create volumes of this storage class. */
  parameters?: {
    [key: string]: string;
  };

  /** Provisioner indicates the type of the provisioner. */
  provisioner: string;

  /** Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete. */
  reclaimPolicy?: string;

  /** VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature. */
  volumeBindingMode?: string;
};
export function createStorageClass<
  T extends Omit<StorageClass, "apiVersion" | "kind">,
>(data: T): StorageClass & T & Pick<StorageClass, "apiVersion" | "kind"> {
  return { apiVersion: "storage.k8s.io/v1", kind: "StorageClass", ...data };
}

/** StorageClassList is a collection of storage classes. */
export type StorageClassList = {
  apiVersion: "storage.k8s.io/v1";

  /** Items is the list of StorageClasses */
  items: StorageClass[];
  kind: "StorageClassList";

  /** Standard list metadata More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createStorageClassList<
  T extends Omit<StorageClassList, "apiVersion" | "kind">,
>(
  data: T,
): StorageClassList & T & Pick<StorageClassList, "apiVersion" | "kind"> {
  return { apiVersion: "storage.k8s.io/v1", kind: "StorageClassList", ...data };
}

/** VolumeAttachment captures the intent to attach or detach the specified volume tofrom the specified node.

VolumeAttachment objects are non-namespaced. */
export type VolumeAttachment = {
  apiVersion: "storage.k8s.io/v1";
  kind: "VolumeAttachment";

  /** Standard object metadata. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** Specification of the desired attachdetach volume behavior. Populated by the Kubernetes system. */
  spec: VolumeAttachmentSpec;

  /** Status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher. */
  status?: VolumeAttachmentStatus;
};
export function createVolumeAttachment<
  T extends Omit<VolumeAttachment, "apiVersion" | "kind">,
>(
  data: T,
): VolumeAttachment & T & Pick<VolumeAttachment, "apiVersion" | "kind"> {
  return { apiVersion: "storage.k8s.io/v1", kind: "VolumeAttachment", ...data };
}

/** VolumeAttachmentList is a collection of VolumeAttachment objects. */
export type VolumeAttachmentList = {
  apiVersion: "storage.k8s.io/v1";

  /** Items is the list of VolumeAttachments */
  items: VolumeAttachment[];
  kind: "VolumeAttachmentList";

  /** Standard list metadata More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createVolumeAttachmentList<
  T extends Omit<VolumeAttachmentList, "apiVersion" | "kind">,
>(
  data: T,
):
  & VolumeAttachmentList
  & T
  & Pick<VolumeAttachmentList, "apiVersion" | "kind"> {
  return {
    apiVersion: "storage.k8s.io/v1",
    kind: "VolumeAttachmentList",
    ...data,
  };
}

/** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export type VolumeAttachmentSource = {
  /** inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is alpha-level and is only honored by servers that enabled the CSIMigration feature. */
  inlineVolumeSpec?: PersistentVolumeSpec;

  /** Name of the persistent volume to attach. */
  persistentVolumeName?: string;
};

/** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export type VolumeAttachmentSpec = {
  /** Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName(). */
  attacher: string;

  /** The node that the volume should be attached to. */
  nodeName: string;

  /** Source represents the volume that should be attached. */
  source: VolumeAttachmentSource;
};

/** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export type VolumeAttachmentStatus = {
  /** The last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  attachError?: VolumeError;

  /** Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  attached: boolean;

  /** Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  attachmentMetadata?: {
    [key: string]: string;
  };

  /** The last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher. */
  detachError?: VolumeError;
};

/** VolumeError captures an error encountered during a volume operation. */
export type VolumeError = {
  /** String detailing the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information. */
  message?: string;

  /** Time the error was encountered. */
  time?: Time;
};
