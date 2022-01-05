/* Generated for api/scheduling/v1beta1/mod.ts */
import {
  ListMeta,
  ObjectMeta,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";

/** DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.iov1PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export type PriorityClass = {
  apiVersion: "scheduling.k8s.io/v1beta1";

  /** description is an arbitrary string that usually provides guidelines on when this priority class should be used. */
  description?: string;

  /** globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority. */
  globalDefault?: boolean;
  kind: "PriorityClass";

  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature. */
  preemptionPolicy?: string;

  /** The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec. */
  value: number;
};
export function createPriorityClass<
  T extends Omit<PriorityClass, "apiVersion" | "kind">,
>(data: T): PriorityClass & T & Pick<PriorityClass, "apiVersion" | "kind"> {
  return {
    apiVersion: "scheduling.k8s.io/v1beta1",
    kind: "PriorityClass",
    ...data,
  };
}

/** PriorityClassList is a collection of priority classes. */
export type PriorityClassList = {
  apiVersion: "scheduling.k8s.io/v1beta1";

  /** items is the list of PriorityClasses */
  items: PriorityClass[];
  kind: "PriorityClassList";

  /** Standard list metadata More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createPriorityClassList<
  T extends Omit<PriorityClassList, "apiVersion" | "kind">,
>(
  data: T,
): PriorityClassList & T & Pick<PriorityClassList, "apiVersion" | "kind"> {
  return {
    apiVersion: "scheduling.k8s.io/v1beta1",
    kind: "PriorityClassList",
    ...data,
  };
}
