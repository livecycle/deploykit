/* Generated for api/discovery/v1beta1/mod.ts */
import { ObjectReference } from "../../core/v1/mod.ts";
import {
  ListMeta,
  ObjectMeta,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";

/** Endpoint represents a single logical "backend" implementing a service. */
export type Endpoint = {
  /** addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. */
  addresses: string[];

  /** conditions contains information about the current status of the endpoint. */
  conditions?: EndpointConditions;

  /** hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must pass DNS Label (RFC 1123) validation. */
  hostname?: string;

  /** targetRef is a reference to a Kubernetes object that represents this endpoint. */
  targetRef?: ObjectReference;

  /** topology contains arbitrary topology information associated with the endpoint. These keyvalue pairs must conform with the label format. https:kubernetes.iodocsconceptsoverviewworking-with-objectslabels Topology may include a maximum of 16 keyvalue pairs. This includes, but is not limited to the following well known keys: * kubernetes.iohostname: the value indicates the hostname of the node
  where the endpoint is located. This should match the corresponding
  node label.
* topology.kubernetes.iozone: the value indicates the zone where the
  endpoint is located. This should match the corresponding node label.
* topology.kubernetes.ioregion: the value indicates the region where the
  endpoint is located. This should match the corresponding node label. */
  topology?: {
    [key: string]: string;
  };
};

/** EndpointConditions represents the current condition of an endpoint. */
export type EndpointConditions = {
  /** ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. */
  ready?: boolean;
};

/** EndpointPort represents a Port used by an EndpointSlice */
export type EndpointPort = {
  /** The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http:www.iana.orgassignmentsservice-names). Non-standard protocols should use prefixed names such as mycompany.commy-custom-protocol. */
  appProtocol?: string;

  /** The name of this port. All ports in an EndpointSlice must have a unique name. If the EndpointSlice is dervied from a Kubernetes service, this corresponds to the Service.ports[].name. Name must either be an empty string or pass DNS_LABEL validation: * must be no more than 63 characters long. * must consist of lower case alphanumeric characters or '-'. * must start and end with an alphanumeric character. Default is empty string. */
  name?: string;

  /** The port number of the endpoint. If this is not specified, ports are not restricted and must be interpreted in the context of the specific consumer. */
  port?: number;

  /** The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP. */
  protocol?: string;
};

/** EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints. */
export type EndpointSlice = {
  /** addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name. */
  addressType: string;
  apiVersion: "discovery.k8s.io/v1beta1";

  /** endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints. */
  endpoints: Endpoint[];
  kind: "EndpointSlice";

  /** Standard object's metadata. */
  metadata?: ObjectMeta;

  /** ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates "all ports". Each slice may include a maximum of 100 ports. */
  ports?: EndpointPort[];
};
export function createEndpointSlice<
  T extends Omit<EndpointSlice, "apiVersion" | "kind">,
>(data: T): EndpointSlice & T & Pick<EndpointSlice, "apiVersion" | "kind"> {
  return {
    apiVersion: "discovery.k8s.io/v1beta1",
    kind: "EndpointSlice",
    ...data,
  };
}

/** EndpointSliceList represents a list of endpoint slices */
export type EndpointSliceList = {
  apiVersion: "discovery.k8s.io/v1beta1";

  /** List of endpoint slices */
  items: EndpointSlice[];
  kind: "EndpointSliceList";

  /** Standard list metadata. */
  metadata?: ListMeta;
};
export function createEndpointSliceList<
  T extends Omit<EndpointSliceList, "apiVersion" | "kind">,
>(
  data: T,
): EndpointSliceList & T & Pick<EndpointSliceList, "apiVersion" | "kind"> {
  return {
    apiVersion: "discovery.k8s.io/v1beta1",
    kind: "EndpointSliceList",
    ...data,
  };
}
