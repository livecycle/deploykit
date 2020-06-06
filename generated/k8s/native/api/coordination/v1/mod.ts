/* Generated for api/coordination/v1/mod.ts */
import {
  ObjectMeta,
  ListMeta,
  MicroTime,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";
export type Lease = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** Specification of the Lease. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  spec?: LeaseSpec;
};
export function createLease(data: Omit<Lease, "apiVersion" | "kind">): Lease {
  return { apiVersion: "coordination.k8s.io/v1", kind: "Lease", ...data };
}

export type LeaseList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of schema objects. */
  items: Lease[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createLeaseList(
  data: Omit<LeaseList, "apiVersion" | "kind">,
): LeaseList {
  return { apiVersion: "coordination.k8s.io/v1", kind: "LeaseList", ...data };
}

export type LeaseSpec = {
  /** acquireTime is a time when the current lease was acquired. */
  acquireTime?: MicroTime;

  /** holderIdentity contains the identity of the holder of a current lease. */
  holderIdentity?: string;

  /** leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime. */
  leaseDurationSeconds?: number;

  /** leaseTransitions is the number of transitions of a lease between holders. */
  leaseTransitions?: number;

  /** renewTime is a time when the current holder of a lease has last updated the lease. */
  renewTime?: MicroTime;
};
