/* Generated for api/coordination/v1/mod.ts */
import {
  ListMeta,
  MicroTime,
  ObjectMeta,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";

/** Lease defines a lease concept. */
export type Lease = {
  apiVersion: "coordination.k8s.io/v1";
  kind: "Lease";

  /** More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** Specification of the Lease. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  spec?: LeaseSpec;
};
export function createLease<T extends Omit<Lease, "apiVersion" | "kind">>(
  data: T,
): Lease & T & Pick<Lease, "apiVersion" | "kind"> {
  return { apiVersion: "coordination.k8s.io/v1", kind: "Lease", ...data };
}

/** LeaseList is a list of Lease objects. */
export type LeaseList = {
  apiVersion: "coordination.k8s.io/v1";

  /** Items is a list of schema objects. */
  items: Lease[];
  kind: "LeaseList";

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createLeaseList<
  T extends Omit<LeaseList, "apiVersion" | "kind">,
>(data: T): LeaseList & T & Pick<LeaseList, "apiVersion" | "kind"> {
  return { apiVersion: "coordination.k8s.io/v1", kind: "LeaseList", ...data };
}

/** LeaseSpec is a specification of a Lease. */
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
