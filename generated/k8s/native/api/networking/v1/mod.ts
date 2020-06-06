/* Generated for api/networking/v1/mod.ts */
import { IntOrString} from "../../../apimachinery/pkg/util/intstr/mod.ts"
import { ObjectMeta,ListMeta,LabelSelector} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts"
export type IPBlock = {

  /** CIDR is a string representing the IP Block Valid examples are "192.168.1.124" or "2001:db9::64" */
  cidr:string;
  
  /** Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.124" or "2001:db9::64" Except values will be rejected if they are outside the CIDR range */
  except?:string[];
  

}
export type NetworkPolicy = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?:ObjectMeta;
  
  /** Specification of the desired behavior for this NetworkPolicy. */
  spec?:NetworkPolicySpec;
  

}
export function createNetworkPolicy(data:Omit<NetworkPolicy, "apiVersion" | "kind">):NetworkPolicy{
  return {apiVersion: "networking.k8s.io/v1", kind: "NetworkPolicy", ...data}
}

export type NetworkPolicyEgressRule = {

  /** List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list. */
  ports?:NetworkPolicyPort[];
  
  /** List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list. */
  to?:NetworkPolicyPeer[];
  

}
export type NetworkPolicyIngressRule = {

  /** List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the from list. */
  from?:NetworkPolicyPeer[];
  
  /** List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list. */
  ports?:NetworkPolicyPort[];
  

}
export type NetworkPolicyList = {

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?:string;
  
  /** Items is a list of schema objects. */
  items:NetworkPolicy[];
  
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?:string;
  
  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?:ListMeta;
  

}
export function createNetworkPolicyList(data:Omit<NetworkPolicyList, "apiVersion" | "kind">):NetworkPolicyList{
  return {apiVersion: "networking.k8s.io/v1", kind: "NetworkPolicyList", ...data}
}

export type NetworkPolicyPeer = {

  /** IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be. */
  ipBlock?:IPBlock;
  
  /** Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.

If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector. */
  namespaceSelector?:LabelSelector;
  
  /** This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.

If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace. */
  podSelector?:LabelSelector;
  

}
export type NetworkPolicyPort = {

  /** The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. */
  port?:IntOrString;
  
  /** The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. */
  protocol?:string;
  

}
export type NetworkPolicySpec = {

  /** List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8 */
  egress?:NetworkPolicyEgressRule[];
  
  /** List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default) */
  ingress?:NetworkPolicyIngressRule[];
  
  /** Selects the pods to which this NetworkPolicy object applies. The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace. */
  podSelector:LabelSelector;
  
  /** List of rule types that the NetworkPolicy relates to. Valid options are "Ingress", "Egress", or "Ingress,Egress". If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8 */
  policyTypes?:string[];
  

}