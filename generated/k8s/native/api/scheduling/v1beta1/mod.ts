/* Generated for api/scheduling/v1beta1/mod.ts */
import { ObjectMeta,ListMeta} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts"
export type PriorityClass = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** description is an arbitrary string that usually provides guidelines on when this priority class should be used. */
  description?:string;
  
  /** globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority. */
  globalDefault?:boolean;
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?:ObjectMeta;
  
  /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature. */
  preemptionPolicy?:string;
  
  /** The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec. */
  value:number;
  

}
export function createPriorityClass(data:Omit<PriorityClass, "apiVersion" | "kind">):PriorityClass{
  return {apiVersion: "scheduling.k8s.io/v1beta1", kind: "PriorityClass", ...data}
}

export type PriorityClassList = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** items is the list of PriorityClasses */
  items:PriorityClass[];
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** Standard list metadata More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?:ListMeta;
  

}
export function createPriorityClassList(data:Omit<PriorityClassList, "apiVersion" | "kind">):PriorityClassList{
  return {apiVersion: "scheduling.k8s.io/v1beta1", kind: "PriorityClassList", ...data}
}
