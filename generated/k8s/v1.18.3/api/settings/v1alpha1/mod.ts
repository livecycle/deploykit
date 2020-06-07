/* Generated for api/settings/v1alpha1/mod.ts */
import {
  ObjectMeta,
  ListMeta,
  LabelSelector,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";
import {
  EnvVar,
  EnvFromSource,
  VolumeMount,
  Volume,
} from "../../core/v1/mod.ts";
export type PodPreset = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  metadata?: ObjectMeta;

  spec?: PodPresetSpec;
};
export function createPodPreset(
  data: Omit<PodPreset, "apiVersion" | "kind">,
): PodPreset {
  return { apiVersion: "settings.k8s.io/v1alpha1", kind: "PodPreset", ...data };
}

export type PodPresetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of schema objects. */
  items: PodPreset[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createPodPresetList(
  data: Omit<PodPresetList, "apiVersion" | "kind">,
): PodPresetList {
  return {
    apiVersion: "settings.k8s.io/v1alpha1",
    kind: "PodPresetList",
    ...data,
  };
}

export type PodPresetSpec = {
  /** Env defines the collection of EnvVar to inject into containers. */
  env?: EnvVar[];

  /** EnvFrom defines the collection of EnvFromSource to inject into containers. */
  envFrom?: EnvFromSource[];

  /** Selector is a label query over a set of resources, in this case pods. Required. */
  selector?: LabelSelector;

  /** VolumeMounts defines the collection of VolumeMount to inject into containers. */
  volumeMounts?: VolumeMount[];

  /** Volumes defines the collection of Volume to inject into the pod. */
  volumes?: Volume[];
};
