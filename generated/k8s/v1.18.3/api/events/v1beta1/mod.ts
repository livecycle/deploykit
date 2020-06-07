/* Generated for api/events/v1beta1/mod.ts */
import { EventSource, ObjectReference } from "../../core/v1/mod.ts";
import {
  Time,
  MicroTime,
  ObjectMeta,
  ListMeta,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";
export type Event = {
  /** What action was takenfailed regarding to the regarding object. */
  action?: string;

  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Deprecated field assuring backward compatibility with core.v1 Event type */
  deprecatedCount?: number;

  /** Deprecated field assuring backward compatibility with core.v1 Event type */
  deprecatedFirstTimestamp?: Time;

  /** Deprecated field assuring backward compatibility with core.v1 Event type */
  deprecatedLastTimestamp?: Time;

  /** Deprecated field assuring backward compatibility with core.v1 Event type */
  deprecatedSource?: EventSource;

  /** Required. Time when this Event was first observed. */
  eventTime: MicroTime;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  metadata?: ObjectMeta;

  /** Optional. A human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB. */
  note?: string;

  /** Why the action was taken. */
  reason?: string;

  /** The object this Event is about. In most cases it's an Object reporting controller implements. E.g. ReplicaSetController implements ReplicaSets and this event is emitted because it acts on some changes in a ReplicaSet object. */
  regarding?: ObjectReference;

  /** Optional secondary object for more complex actions. E.g. when regarding object triggers a creation or deletion of related object. */
  related?: ObjectReference;

  /** Name of the controller that emitted this Event, e.g. `kubernetes.iokubelet`. */
  reportingController?: string;

  /** ID of the controller instance, e.g. `kubelet-xyzf`. */
  reportingInstance?: string;

  /** Data about the Event series this event represents or nil if it's a singleton Event. */
  series?: EventSeries;

  /** Type of this event (Normal, Warning), new types could be added in the future. */
  type?: string;
};
export function createEvent(data: Omit<Event, "apiVersion" | "kind">): Event {
  return { apiVersion: "events.k8s.io/v1beta1", kind: "Event", ...data };
}

export type EventList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Items is a list of schema objects. */
  items: Event[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createEventList(
  data: Omit<EventList, "apiVersion" | "kind">,
): EventList {
  return { apiVersion: "events.k8s.io/v1beta1", kind: "EventList", ...data };
}

export type EventSeries = {
  /** Number of occurrences in this series up to the last heartbeat time */
  count: number;

  /** Time when last Event from the series was seen before last heartbeat. */
  lastObservedTime: MicroTime;

  /** Information whether this series is ongoing or finished. Deprecated. Planned removal for 1.18 */
  state: string;
};
