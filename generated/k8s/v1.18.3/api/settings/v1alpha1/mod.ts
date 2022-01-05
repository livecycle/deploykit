/* Generated for api/settings/v1alpha1/mod.ts */
import {
  LabelSelector,
  ListMeta,
  ObjectMeta,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";
import {
  EnvFromSource,
  EnvVar,
  Volume,
  VolumeMount,
} from "../../core/v1/mod.ts";

/** PodPreset is a policy resource that defines additional runtime requirements for a Pod. */
export type PodPreset = {
  apiVersion: "settings.k8s.io/v1alpha1";
  kind: "PodPreset";

  metadata?: ObjectMeta;

  spec?: PodPresetSpec;
};
export function createPodPreset<
  T extends Omit<PodPreset, "apiVersion" | "kind">,
>(data: T): PodPreset & T & Pick<PodPreset, "apiVersion" | "kind"> {
  return { apiVersion: "settings.k8s.io/v1alpha1", kind: "PodPreset", ...data };
}

/** PodPresetList is a list of PodPreset objects. */
export type PodPresetList = {
  apiVersion: "settings.k8s.io/v1alpha1";

  /** Items is a list of schema objects. */
  items: PodPreset[];
  kind: "PodPresetList";

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createPodPresetList<
  T extends Omit<PodPresetList, "apiVersion" | "kind">,
>(data: T): PodPresetList & T & Pick<PodPresetList, "apiVersion" | "kind"> {
  return {
    apiVersion: "settings.k8s.io/v1alpha1",
    kind: "PodPresetList",
    ...data,
  };
}

/** PodPresetSpec is a description of a pod preset. */
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
