/* Generated for monitoring/coreos/com/v1/mod.ts */
import { ObjectMeta } from "https://deno.land/x/gh:yshayy:deploykit@0.0.1/generated/k8s/native/apimachinery/pkg/apis/meta/v1/mod.ts";
export type Alertmanager = {
  apiVersion?: string;

  kind?: string;

  metadata?: ObjectMeta;

  /** Specification of the desired behavior of the Alertmanager cluster. More info: https:github.comkubernetescommunityblobmastercontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  spec: {
    /** AdditionalPeers allows injecting a set of additional Alertmanagers to peer with to form a highly available cluster. */
    additionalPeers?: string[];

    /** If specified, the pod's scheduling constraints. */
    affinity?: {
      /** Describes node affinity scheduling rules for the pod. */
      nodeAffinity?: {
        /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred. */
        preferredDuringSchedulingIgnoredDuringExecution?: {
          /** A node selector term, associated with the corresponding weight. */
          preference: {
            /** A list of node selector requirements by node's labels. */
            matchExpressions?: {
              /** The label key that the selector applies to. */
              key: string;

              /** Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
              operator: string;

              /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
              values?: string[];
            }[];

            /** A list of node selector requirements by node's fields. */
            matchFields?: {
              /** The label key that the selector applies to. */
              key: string;

              /** Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
              operator: string;

              /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
              values?: string[];
            }[];
          };

          /** Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100. */
          weight: number;
        }[];

        /** If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node. */
        requiredDuringSchedulingIgnoredDuringExecution: {
          /** Required. A list of node selector terms. The terms are ORed. */
          nodeSelectorTerms: {
            /** A list of node selector requirements by node's labels. */
            matchExpressions?: {
              /** The label key that the selector applies to. */
              key: string;

              /** Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
              operator: string;

              /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
              values?: string[];
            }[];

            /** A list of node selector requirements by node's fields. */
            matchFields?: {
              /** The label key that the selector applies to. */
              key: string;

              /** Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
              operator: string;

              /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
              values?: string[];
            }[];
          }[];
        };
      };

      /** Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
      podAffinity?: {
        /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
        preferredDuringSchedulingIgnoredDuringExecution?: {
          /** Required. A pod affinity term, associated with the corresponding weight. */
          podAffinityTerm: {
            /** A label query over a set of resources, in this case pods. */
            labelSelector?: {
              /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
              matchExpressions?: {
                /** key is the label key that the selector applies to. */
                key: string;

                /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
                operator: string;

                /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                values?: string[];
              }[];

              /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
              matchLabels?: {
                [key: string]: string;
              };
            };

            /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace" */
            namespaces?: string[];

            /** This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
            topologyKey: string;
          };

          /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100. */
          weight: number;
        }[];

        /** If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
        requiredDuringSchedulingIgnoredDuringExecution?: {
          /** A label query over a set of resources, in this case pods. */
          labelSelector?: {
            /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
            matchExpressions?: {
              /** key is the label key that the selector applies to. */
              key: string;

              /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
              operator: string;

              /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
              values?: string[];
            }[];

            /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
            matchLabels?: {
              [key: string]: string;
            };
          };

          /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace" */
          namespaces?: string[];

          /** This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
          topologyKey: string;
        }[];
      };

      /** Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
      podAntiAffinity?: {
        /** The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
        preferredDuringSchedulingIgnoredDuringExecution?: {
          /** Required. A pod affinity term, associated with the corresponding weight. */
          podAffinityTerm: {
            /** A label query over a set of resources, in this case pods. */
            labelSelector?: {
              /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
              matchExpressions?: {
                /** key is the label key that the selector applies to. */
                key: string;

                /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
                operator: string;

                /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                values?: string[];
              }[];

              /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
              matchLabels?: {
                [key: string]: string;
              };
            };

            /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace" */
            namespaces?: string[];

            /** This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
            topologyKey: string;
          };

          /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100. */
          weight: number;
        }[];

        /** If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
        requiredDuringSchedulingIgnoredDuringExecution?: {
          /** A label query over a set of resources, in this case pods. */
          labelSelector?: {
            /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
            matchExpressions?: {
              /** key is the label key that the selector applies to. */
              key: string;

              /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
              operator: string;

              /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
              values?: string[];
            }[];

            /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
            matchLabels?: {
              [key: string]: string;
            };
          };

          /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace" */
          namespaces?: string[];

          /** This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
          topologyKey: string;
        }[];
      };
    };

    /** Base image that is used to deploy pods, without tag. */
    baseImage?: string;

    /** ClusterAdvertiseAddress is the explicit address to advertise in cluster. Needs to be provided for non RFC1918 [1] (public) addresses. [1] RFC1918: https:tools.ietf.orghtmlrfc1918 */
    clusterAdvertiseAddress?: string;

    /** ConfigMaps is a list of ConfigMaps in the same namespace as the Alertmanager object, which shall be mounted into the Alertmanager Pods. The ConfigMaps are mounted into etcalertmanagerconfigmaps<configmap-name>. */
    configMaps?: string[];

    /** ConfigSecret is the name of a Kubernetes Secret in the same namespace as the Alertmanager object, which contains configuration for this Alertmanager instance. Defaults to 'alertmanager-<alertmanager-name>' The secret is mounted into etcalertmanagerconfig. */
    configSecret?: string;

    /** Containers allows injecting additional containers. This is meant to allow adding an authentication proxy to an Alertmanager pod. */
    containers?: {
      /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https:kubernetes.iodocstasksinject-data-applicationdefine-command-argument-container#running-a-command-in-a-shell */
      args?: string[];

      /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https:kubernetes.iodocstasksinject-data-applicationdefine-command-argument-container#running-a-command-in-a-shell */
      command?: string[];

      /** List of environment variables to set in the container. Cannot be updated. */
      env?: {
        /** Name of the environment variable. Must be a C_IDENTIFIER. */
        name: string;

        /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
        value?: string;

        /** Source for the environment variable's value. Cannot be used if value is not empty. */
        valueFrom?: {
          /** Selects a key of a ConfigMap. */
          configMapKeyRef: {
            /** The key to select. */
            key: string;

            /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;

            /** Specify whether the ConfigMap or its key must be defined */
            optional?: boolean;
          };

          /** Selects a field of the pod: supports metadata.name, metadata.namespace, metadata.labels, metadata.annotations, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs. */
          fieldRef: {
            /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
            apiVersion?: string;

            /** Path of the field to select in the specified API version. */
            fieldPath: string;
          };

          /** Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
          resourceFieldRef: {
            /** Container name: required for volumes, optional for env vars */
            containerName?: string;

            /** Specifies the output format of the exposed resources, defaults to "1" */
            divisor?: string;

            /** Required: resource to select */
            resource: string;
          };

          /** Selects a key of a secret in the pod's namespace */
          secretKeyRef: {
            /** The key of the secret to select from.  Must be a valid secret key. */
            key: string;

            /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;

            /** Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
      }[];

      /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
      envFrom?: {
        /** The ConfigMap to select from */
        configMapRef?: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;

          /** Specify whether the ConfigMap must be defined */
          optional?: boolean;
        };

        /** An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
        prefix?: string;

        /** The Secret to select from */
        secretRef?: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;

          /** Specify whether the Secret must be defined */
          optional?: boolean;
        };
      }[];

      /** Docker image name. More info: https:kubernetes.iodocsconceptscontainersimages This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
      image?: string;

      /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https:kubernetes.iodocsconceptscontainersimages#updating-images */
      imagePullPolicy?: string;

      /** Actions that the management system should take in response to container lifecycle events. Cannot be updated. */
      lifecycle?: {
        /** PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https:kubernetes.iodocsconceptscontainerscontainer-lifecycle-hooks#container-hooks */
        postStart?: {
          /** One and only one of the following should be specified. Exec specifies the action to take. */
          exec?: {
            /** Command is the command line to execute inside the container, the working directory for the command  is root ('') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as livehealthy and non-zero is unhealthy. */
            command?: string[];
          };

          /** HTTPGet specifies the http request to perform. */
          httpGet: {
            /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
            host?: string;

            /** Custom headers to set in the request. HTTP allows repeated headers. */
            httpHeaders?: {
              /** The header field name */
              name: string;

              /** The header field value */
              value: string;
            }[];

            /** Path to access on the HTTP server. */
            path?: string;

            /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
            port: any;

            /** Scheme to use for connecting to the host. Defaults to HTTP. */
            scheme?: string;
          };

          /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported TODO: implement a realistic TCP lifecycle hook */
          tcpSocket: {
            /** Optional: Host name to connect to, defaults to the pod IP. */
            host?: string;

            /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
            port: any;
          };
        };

        /** PreStop is called immediately before a container is terminated due to an API request or management event such as livenessstartup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The reason for termination is passed to the handler. The Pod's termination grace period countdown begins before the PreStop hooked is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period. Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https:kubernetes.iodocsconceptscontainerscontainer-lifecycle-hooks#container-hooks */
        preStop?: {
          /** One and only one of the following should be specified. Exec specifies the action to take. */
          exec?: {
            /** Command is the command line to execute inside the container, the working directory for the command  is root ('') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as livehealthy and non-zero is unhealthy. */
            command?: string[];
          };

          /** HTTPGet specifies the http request to perform. */
          httpGet: {
            /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
            host?: string;

            /** Custom headers to set in the request. HTTP allows repeated headers. */
            httpHeaders?: {
              /** The header field name */
              name: string;

              /** The header field value */
              value: string;
            }[];

            /** Path to access on the HTTP server. */
            path?: string;

            /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
            port: any;

            /** Scheme to use for connecting to the host. Defaults to HTTP. */
            scheme?: string;
          };

          /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported TODO: implement a realistic TCP lifecycle hook */
          tcpSocket: {
            /** Optional: Host name to connect to, defaults to the pod IP. */
            host?: string;

            /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
            port: any;
          };
        };
      };

      /** Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
      livenessProbe?: {
        /** One and only one of the following should be specified. Exec specifies the action to take. */
        exec?: {
          /** Command is the command line to execute inside the container, the working directory for the command  is root ('') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as livehealthy and non-zero is unhealthy. */
          command?: string[];
        };

        /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
        failureThreshold?: number;

        /** HTTPGet specifies the http request to perform. */
        httpGet: {
          /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
          host?: string;

          /** Custom headers to set in the request. HTTP allows repeated headers. */
          httpHeaders?: {
            /** The header field name */
            name: string;

            /** The header field value */
            value: string;
          }[];

          /** Path to access on the HTTP server. */
          path?: string;

          /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;

          /** Scheme to use for connecting to the host. Defaults to HTTP. */
          scheme?: string;
        };

        /** Number of seconds after the container has started before liveness probes are initiated. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        initialDelaySeconds?: number;

        /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
        periodSeconds?: number;

        /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. */
        successThreshold?: number;

        /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported TODO: implement a realistic TCP lifecycle hook */
        tcpSocket: {
          /** Optional: Host name to connect to, defaults to the pod IP. */
          host?: string;

          /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;
        };

        /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        timeoutSeconds?: number;
      };

      /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
      name: string;

      /** List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated. */
      ports?: {
        /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
        containerPort: number;

        /** What host IP to bind the external port to. */
        hostIP?: string;

        /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
        hostPort?: number;

        /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
        name?: string;

        /** Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP". */
        protocol?: string;
      }[];

      /** Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
      readinessProbe?: {
        /** One and only one of the following should be specified. Exec specifies the action to take. */
        exec?: {
          /** Command is the command line to execute inside the container, the working directory for the command  is root ('') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as livehealthy and non-zero is unhealthy. */
          command?: string[];
        };

        /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
        failureThreshold?: number;

        /** HTTPGet specifies the http request to perform. */
        httpGet: {
          /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
          host?: string;

          /** Custom headers to set in the request. HTTP allows repeated headers. */
          httpHeaders?: {
            /** The header field name */
            name: string;

            /** The header field value */
            value: string;
          }[];

          /** Path to access on the HTTP server. */
          path?: string;

          /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;

          /** Scheme to use for connecting to the host. Defaults to HTTP. */
          scheme?: string;
        };

        /** Number of seconds after the container has started before liveness probes are initiated. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        initialDelaySeconds?: number;

        /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
        periodSeconds?: number;

        /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. */
        successThreshold?: number;

        /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported TODO: implement a realistic TCP lifecycle hook */
        tcpSocket: {
          /** Optional: Host name to connect to, defaults to the pod IP. */
          host?: string;

          /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;
        };

        /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        timeoutSeconds?: number;
      };

      /** Compute Resources required by this container. Cannot be updated. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
      resources?: {
        /** Limits describes the maximum amount of compute resources allowed. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
        limits?: {
          [key: string]: string;
        };

        /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
        requests?: {
          [key: string]: string;
        };
      };

      /** Security options the pod should run with. More info: https:kubernetes.iodocsconceptspolicysecurity-context More info: https:kubernetes.iodocstasksconfigure-pod-containersecurity-context */
      securityContext?: {
        /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
        allowPrivilegeEscalation?: boolean;

        /** The capabilities to adddrop when running containers. Defaults to the default set of capabilities granted by the container runtime. */
        capabilities?: {
          /** Added capabilities */
          add?: string[];

          /** Removed capabilities */
          drop?: string[];
        };

        /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
        privileged?: boolean;

        /** procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. */
        procMount?: string;

        /** Whether this container has a read-only root filesystem. Default is false. */
        readOnlyRootFilesystem?: boolean;

        /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
        runAsGroup?: number;

        /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
        runAsNonRoot?: boolean;

        /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
        runAsUser?: number;

        /** The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
        seLinuxOptions?: {
          /** Level is SELinux level label that applies to the container. */
          level?: string;

          /** Role is a SELinux role label that applies to the container. */
          role?: string;

          /** Type is a SELinux type label that applies to the container. */
          type?: string;

          /** User is a SELinux user label that applies to the container. */
          user?: string;
        };

        /** The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
        windowsOptions?: {
          /** GMSACredentialSpec is where the GMSA admission webhook (https:github.comkubernetes-sigswindows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
          gmsaCredentialSpec?: string;

          /** GMSACredentialSpecName is the name of the GMSA credential spec to use. */
          gmsaCredentialSpecName?: string;

          /** The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
          runAsUserName?: string;
        };
      };

      /** StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. This is a beta feature enabled by the StartupProbe feature flag. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
      startupProbe?: {
        /** One and only one of the following should be specified. Exec specifies the action to take. */
        exec?: {
          /** Command is the command line to execute inside the container, the working directory for the command  is root ('') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as livehealthy and non-zero is unhealthy. */
          command?: string[];
        };

        /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
        failureThreshold?: number;

        /** HTTPGet specifies the http request to perform. */
        httpGet: {
          /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
          host?: string;

          /** Custom headers to set in the request. HTTP allows repeated headers. */
          httpHeaders?: {
            /** The header field name */
            name: string;

            /** The header field value */
            value: string;
          }[];

          /** Path to access on the HTTP server. */
          path?: string;

          /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;

          /** Scheme to use for connecting to the host. Defaults to HTTP. */
          scheme?: string;
        };

        /** Number of seconds after the container has started before liveness probes are initiated. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        initialDelaySeconds?: number;

        /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
        periodSeconds?: number;

        /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. */
        successThreshold?: number;

        /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported TODO: implement a realistic TCP lifecycle hook */
        tcpSocket: {
          /** Optional: Host name to connect to, defaults to the pod IP. */
          host?: string;

          /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;
        };

        /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        timeoutSeconds?: number;
      };

      /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
      stdin?: boolean;

      /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
      stdinOnce?: boolean;

      /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to devtermination-log. Cannot be updated. */
      terminationMessagePath?: string;

      /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
      terminationMessagePolicy?: string;

      /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
      tty?: boolean;

      /** volumeDevices is the list of block devices to be used by the container. */
      volumeDevices?: {
        /** devicePath is the path inside of the container that the device will be mapped to. */
        devicePath: string;

        /** name must match the name of a persistentVolumeClaim in the pod */
        name: string;
      }[];

      /** Pod volumes to mount into the container's filesystem. Cannot be updated. */
      volumeMounts?: {
        /** Path within the container at which the volume should be mounted.  Must not contain ':'. */
        mountPath: string;

        /** mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
        mountPropagation?: string;

        /** This must match the Name of a Volume. */
        name: string;

        /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
        readOnly?: boolean;

        /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
        subPath?: string;

        /** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
        subPathExpr?: string;
      }[];

      /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
      workingDir?: string;
    }[];

    /** The external URL the Alertmanager instances will be available under. This is necessary to generate correct URLs. This is necessary if Alertmanager is not served from root of a DNS name. */
    externalUrl?: string;

    /** Image if specified has precedence over baseImage, tag and sha combinations. Specifying the version is still necessary to ensure the Prometheus Operator knows what version of Alertmanager is being configured. */
    image?: string;

    /** An optional list of references to secrets in the same namespace to use for pulling prometheus and alertmanager images from registries see http:kubernetes.iodocsuser-guideimages#specifying-imagepullsecrets-on-a-pod */
    imagePullSecrets?: {
      /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
      name?: string;
    }[];

    /** InitContainers allows adding initContainers to the pod definition. Those can be used to e.g. fetch secrets for injection into the Alertmanager configuration from external sources. Any errors during the execution of an initContainer will lead to a restart of the Pod. More info: https:kubernetes.iodocsconceptsworkloadspodsinit-containers Using initContainers for any use case other then secret fetching is entirely outside the scope of what the maintainers will support and by doing so, you accept that this behaviour may break at any time without notice. */
    initContainers?: {
      /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https:kubernetes.iodocstasksinject-data-applicationdefine-command-argument-container#running-a-command-in-a-shell */
      args?: string[];

      /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https:kubernetes.iodocstasksinject-data-applicationdefine-command-argument-container#running-a-command-in-a-shell */
      command?: string[];

      /** List of environment variables to set in the container. Cannot be updated. */
      env?: {
        /** Name of the environment variable. Must be a C_IDENTIFIER. */
        name: string;

        /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
        value?: string;

        /** Source for the environment variable's value. Cannot be used if value is not empty. */
        valueFrom?: {
          /** Selects a key of a ConfigMap. */
          configMapKeyRef: {
            /** The key to select. */
            key: string;

            /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;

            /** Specify whether the ConfigMap or its key must be defined */
            optional?: boolean;
          };

          /** Selects a field of the pod: supports metadata.name, metadata.namespace, metadata.labels, metadata.annotations, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs. */
          fieldRef: {
            /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
            apiVersion?: string;

            /** Path of the field to select in the specified API version. */
            fieldPath: string;
          };

          /** Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
          resourceFieldRef: {
            /** Container name: required for volumes, optional for env vars */
            containerName?: string;

            /** Specifies the output format of the exposed resources, defaults to "1" */
            divisor?: string;

            /** Required: resource to select */
            resource: string;
          };

          /** Selects a key of a secret in the pod's namespace */
          secretKeyRef: {
            /** The key of the secret to select from.  Must be a valid secret key. */
            key: string;

            /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;

            /** Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
      }[];

      /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
      envFrom?: {
        /** The ConfigMap to select from */
        configMapRef?: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;

          /** Specify whether the ConfigMap must be defined */
          optional?: boolean;
        };

        /** An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
        prefix?: string;

        /** The Secret to select from */
        secretRef?: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;

          /** Specify whether the Secret must be defined */
          optional?: boolean;
        };
      }[];

      /** Docker image name. More info: https:kubernetes.iodocsconceptscontainersimages This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
      image?: string;

      /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https:kubernetes.iodocsconceptscontainersimages#updating-images */
      imagePullPolicy?: string;

      /** Actions that the management system should take in response to container lifecycle events. Cannot be updated. */
      lifecycle?: {
        /** PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https:kubernetes.iodocsconceptscontainerscontainer-lifecycle-hooks#container-hooks */
        postStart?: {
          /** One and only one of the following should be specified. Exec specifies the action to take. */
          exec?: {
            /** Command is the command line to execute inside the container, the working directory for the command  is root ('') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as livehealthy and non-zero is unhealthy. */
            command?: string[];
          };

          /** HTTPGet specifies the http request to perform. */
          httpGet: {
            /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
            host?: string;

            /** Custom headers to set in the request. HTTP allows repeated headers. */
            httpHeaders?: {
              /** The header field name */
              name: string;

              /** The header field value */
              value: string;
            }[];

            /** Path to access on the HTTP server. */
            path?: string;

            /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
            port: any;

            /** Scheme to use for connecting to the host. Defaults to HTTP. */
            scheme?: string;
          };

          /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported TODO: implement a realistic TCP lifecycle hook */
          tcpSocket: {
            /** Optional: Host name to connect to, defaults to the pod IP. */
            host?: string;

            /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
            port: any;
          };
        };

        /** PreStop is called immediately before a container is terminated due to an API request or management event such as livenessstartup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The reason for termination is passed to the handler. The Pod's termination grace period countdown begins before the PreStop hooked is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period. Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https:kubernetes.iodocsconceptscontainerscontainer-lifecycle-hooks#container-hooks */
        preStop?: {
          /** One and only one of the following should be specified. Exec specifies the action to take. */
          exec?: {
            /** Command is the command line to execute inside the container, the working directory for the command  is root ('') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as livehealthy and non-zero is unhealthy. */
            command?: string[];
          };

          /** HTTPGet specifies the http request to perform. */
          httpGet: {
            /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
            host?: string;

            /** Custom headers to set in the request. HTTP allows repeated headers. */
            httpHeaders?: {
              /** The header field name */
              name: string;

              /** The header field value */
              value: string;
            }[];

            /** Path to access on the HTTP server. */
            path?: string;

            /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
            port: any;

            /** Scheme to use for connecting to the host. Defaults to HTTP. */
            scheme?: string;
          };

          /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported TODO: implement a realistic TCP lifecycle hook */
          tcpSocket: {
            /** Optional: Host name to connect to, defaults to the pod IP. */
            host?: string;

            /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
            port: any;
          };
        };
      };

      /** Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
      livenessProbe?: {
        /** One and only one of the following should be specified. Exec specifies the action to take. */
        exec?: {
          /** Command is the command line to execute inside the container, the working directory for the command  is root ('') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as livehealthy and non-zero is unhealthy. */
          command?: string[];
        };

        /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
        failureThreshold?: number;

        /** HTTPGet specifies the http request to perform. */
        httpGet: {
          /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
          host?: string;

          /** Custom headers to set in the request. HTTP allows repeated headers. */
          httpHeaders?: {
            /** The header field name */
            name: string;

            /** The header field value */
            value: string;
          }[];

          /** Path to access on the HTTP server. */
          path?: string;

          /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;

          /** Scheme to use for connecting to the host. Defaults to HTTP. */
          scheme?: string;
        };

        /** Number of seconds after the container has started before liveness probes are initiated. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        initialDelaySeconds?: number;

        /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
        periodSeconds?: number;

        /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. */
        successThreshold?: number;

        /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported TODO: implement a realistic TCP lifecycle hook */
        tcpSocket: {
          /** Optional: Host name to connect to, defaults to the pod IP. */
          host?: string;

          /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;
        };

        /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        timeoutSeconds?: number;
      };

      /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
      name: string;

      /** List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated. */
      ports?: {
        /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
        containerPort: number;

        /** What host IP to bind the external port to. */
        hostIP?: string;

        /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
        hostPort?: number;

        /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
        name?: string;

        /** Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP". */
        protocol?: string;
      }[];

      /** Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
      readinessProbe?: {
        /** One and only one of the following should be specified. Exec specifies the action to take. */
        exec?: {
          /** Command is the command line to execute inside the container, the working directory for the command  is root ('') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as livehealthy and non-zero is unhealthy. */
          command?: string[];
        };

        /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
        failureThreshold?: number;

        /** HTTPGet specifies the http request to perform. */
        httpGet: {
          /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
          host?: string;

          /** Custom headers to set in the request. HTTP allows repeated headers. */
          httpHeaders?: {
            /** The header field name */
            name: string;

            /** The header field value */
            value: string;
          }[];

          /** Path to access on the HTTP server. */
          path?: string;

          /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;

          /** Scheme to use for connecting to the host. Defaults to HTTP. */
          scheme?: string;
        };

        /** Number of seconds after the container has started before liveness probes are initiated. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        initialDelaySeconds?: number;

        /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
        periodSeconds?: number;

        /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. */
        successThreshold?: number;

        /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported TODO: implement a realistic TCP lifecycle hook */
        tcpSocket: {
          /** Optional: Host name to connect to, defaults to the pod IP. */
          host?: string;

          /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;
        };

        /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        timeoutSeconds?: number;
      };

      /** Compute Resources required by this container. Cannot be updated. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
      resources?: {
        /** Limits describes the maximum amount of compute resources allowed. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
        limits?: {
          [key: string]: string;
        };

        /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
        requests?: {
          [key: string]: string;
        };
      };

      /** Security options the pod should run with. More info: https:kubernetes.iodocsconceptspolicysecurity-context More info: https:kubernetes.iodocstasksconfigure-pod-containersecurity-context */
      securityContext?: {
        /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
        allowPrivilegeEscalation?: boolean;

        /** The capabilities to adddrop when running containers. Defaults to the default set of capabilities granted by the container runtime. */
        capabilities?: {
          /** Added capabilities */
          add?: string[];

          /** Removed capabilities */
          drop?: string[];
        };

        /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
        privileged?: boolean;

        /** procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. */
        procMount?: string;

        /** Whether this container has a read-only root filesystem. Default is false. */
        readOnlyRootFilesystem?: boolean;

        /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
        runAsGroup?: number;

        /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
        runAsNonRoot?: boolean;

        /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
        runAsUser?: number;

        /** The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
        seLinuxOptions?: {
          /** Level is SELinux level label that applies to the container. */
          level?: string;

          /** Role is a SELinux role label that applies to the container. */
          role?: string;

          /** Type is a SELinux type label that applies to the container. */
          type?: string;

          /** User is a SELinux user label that applies to the container. */
          user?: string;
        };

        /** The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
        windowsOptions?: {
          /** GMSACredentialSpec is where the GMSA admission webhook (https:github.comkubernetes-sigswindows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
          gmsaCredentialSpec?: string;

          /** GMSACredentialSpecName is the name of the GMSA credential spec to use. */
          gmsaCredentialSpecName?: string;

          /** The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
          runAsUserName?: string;
        };
      };

      /** StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. This is a beta feature enabled by the StartupProbe feature flag. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
      startupProbe?: {
        /** One and only one of the following should be specified. Exec specifies the action to take. */
        exec?: {
          /** Command is the command line to execute inside the container, the working directory for the command  is root ('') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as livehealthy and non-zero is unhealthy. */
          command?: string[];
        };

        /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
        failureThreshold?: number;

        /** HTTPGet specifies the http request to perform. */
        httpGet: {
          /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
          host?: string;

          /** Custom headers to set in the request. HTTP allows repeated headers. */
          httpHeaders?: {
            /** The header field name */
            name: string;

            /** The header field value */
            value: string;
          }[];

          /** Path to access on the HTTP server. */
          path?: string;

          /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;

          /** Scheme to use for connecting to the host. Defaults to HTTP. */
          scheme?: string;
        };

        /** Number of seconds after the container has started before liveness probes are initiated. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        initialDelaySeconds?: number;

        /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
        periodSeconds?: number;

        /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. */
        successThreshold?: number;

        /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported TODO: implement a realistic TCP lifecycle hook */
        tcpSocket: {
          /** Optional: Host name to connect to, defaults to the pod IP. */
          host?: string;

          /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
          port: any;
        };

        /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https:kubernetes.iodocsconceptsworkloadspodspod-lifecycle#container-probes */
        timeoutSeconds?: number;
      };

      /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
      stdin?: boolean;

      /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
      stdinOnce?: boolean;

      /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to devtermination-log. Cannot be updated. */
      terminationMessagePath?: string;

      /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
      terminationMessagePolicy?: string;

      /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
      tty?: boolean;

      /** volumeDevices is the list of block devices to be used by the container. */
      volumeDevices?: {
        /** devicePath is the path inside of the container that the device will be mapped to. */
        devicePath: string;

        /** name must match the name of a persistentVolumeClaim in the pod */
        name: string;
      }[];

      /** Pod volumes to mount into the container's filesystem. Cannot be updated. */
      volumeMounts?: {
        /** Path within the container at which the volume should be mounted.  Must not contain ':'. */
        mountPath: string;

        /** mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
        mountPropagation?: string;

        /** This must match the Name of a Volume. */
        name: string;

        /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
        readOnly?: boolean;

        /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
        subPath?: string;

        /** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
        subPathExpr?: string;
      }[];

      /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
      workingDir?: string;
    }[];

    /** ListenLocal makes the Alertmanager server listen on loopback, so that it does not bind against the Pod IP. Note this is only for the Alertmanager UI, not the gossip communication. */
    listenLocal?: boolean;

    /** Log format for Alertmanager to be configured with. */
    logFormat?: string;

    /** Log level for Alertmanager to be configured with. */
    logLevel?: string;

    /** Define which Nodes the Pods are scheduled on. */
    nodeSelector?: {
      [key: string]: string;
    };

    /** If set to true all actions on the underlaying managed objects are not goint to be performed, except for delete actions. */
    paused?: boolean;

    /** PodMetadata configures Labels and Annotations which are propagated to the alertmanager pods. */
    podMetadata?: {
      /** Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http:kubernetes.iodocsuser-guideannotations */
      annotations?: {
        [key: string]: string;
      };

      /** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http:kubernetes.iodocsuser-guidelabels */
      labels?: {
        [key: string]: string;
      };

      /** Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http:kubernetes.iodocsuser-guideidentifiers#names */
      name?: string;
    };

    /** Port name used for the pods and governing service. This defaults to web */
    portName?: string;

    /** Priority class assigned to the Pods */
    priorityClassName?: string;

    /** Size is the expected size of the alertmanager cluster. The controller will eventually make the size of the running cluster equal to the expected size. */
    replicas?: number;

    /** Define resources requests and limits for single Pods. */
    resources?: {
      /** Limits describes the maximum amount of compute resources allowed. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
      limits?: {
        [key: string]: string;
      };

      /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
      requests?: {
        [key: string]: string;
      };
    };

    /** Time duration Alertmanager shall retain data for. Default is '120h', and must match the regular expression `[0-9]+(ms|s|m|h)` (milliseconds seconds minutes hours). */
    retention?: string;

    /** The route prefix Alertmanager registers HTTP handlers for. This is useful, if using ExternalURL and a proxy is rewriting HTTP routes of a request, and the actual ExternalURL is still true, but the server serves requests under a different route prefix. For example for use with `kubectl proxy`. */
    routePrefix?: string;

    /** Secrets is a list of Secrets in the same namespace as the Alertmanager object, which shall be mounted into the Alertmanager Pods. The Secrets are mounted into etcalertmanagersecrets<secret-name>. */
    secrets?: string[];

    /** SecurityContext holds pod-level security attributes and common container settings. This defaults to the default PodSecurityContext. */
    securityContext?: {
      /** A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 
 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- 
 If unset, the Kubelet will not modify the ownership and permissions of any volume. */
      fsGroup?: number;

      /** fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified defaults to "Always". */
      fsGroupChangePolicy?: string;

      /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
      runAsGroup?: number;

      /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
      runAsNonRoot?: boolean;

      /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
      runAsUser?: number;

      /** The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
      seLinuxOptions?: {
        /** Level is SELinux level label that applies to the container. */
        level?: string;

        /** Role is a SELinux role label that applies to the container. */
        role?: string;

        /** Type is a SELinux type label that applies to the container. */
        type?: string;

        /** User is a SELinux user label that applies to the container. */
        user?: string;
      };

      /** A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container. */
      supplementalGroups?: number[];

      /** Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. */
      sysctls?: {
        /** Name of a property to set */
        name: string;

        /** Value of a property to set */
        value: string;
      }[];

      /** The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
      windowsOptions?: {
        /** GMSACredentialSpec is where the GMSA admission webhook (https:github.comkubernetes-sigswindows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
        gmsaCredentialSpec?: string;

        /** GMSACredentialSpecName is the name of the GMSA credential spec to use. */
        gmsaCredentialSpecName?: string;

        /** The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
        runAsUserName?: string;
      };
    };

    /** ServiceAccountName is the name of the ServiceAccount to use to run the Prometheus Pods. */
    serviceAccountName?: string;

    /** SHA of Alertmanager container image to be deployed. Defaults to the value of `version`. Similar to a tag, but the SHA explicitly deploys an immutable container image. Version and Tag are ignored if SHA is set. */
    sha?: string;

    /** Storage is the definition of how storage will be used by the Alertmanager instances. */
    storage?: {
      /** Deprecated: subPath usage will be disabled by default in a future release, this option will become unnecessary. DisableMountSubPath allows to remove any subPath usage in volume mounts. */
      disableMountSubPath?: boolean;

      /** EmptyDirVolumeSource to be used by the Prometheus StatefulSets. If specified, used in place of any volumeClaimTemplate. More info: https:kubernetes.iodocsconceptsstoragevolumes#emptydir */
      emptyDir?: {
        /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https:kubernetes.iodocsconceptsstoragevolumes#emptydir */
        medium?: string;

        /** Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http:kubernetes.iodocsuser-guidevolumes#emptydir */
        sizeLimit?: string;
      };

      /** A PVC spec to be used by the Prometheus StatefulSets. */
      volumeClaimTemplate?: {
        /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
        apiVersion?: string;

        /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
        kind?: string;

        /** EmbeddedMetadata contains metadata relevant to an EmbeddedResource. */
        metadata?: {
          /** Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http:kubernetes.iodocsuser-guideannotations */
          annotations?: {
            [key: string]: string;
          };

          /** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http:kubernetes.iodocsuser-guidelabels */
          labels?: {
            [key: string]: string;
          };

          /** Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http:kubernetes.iodocsuser-guideidentifiers#names */
          name?: string;
        };

        /** Spec defines the desired characteristics of a volume requested by a pod author. More info: https:kubernetes.iodocsconceptsstoragepersistent-volumes#persistentvolumeclaims */
        spec?: {
          /** AccessModes contains the desired access modes the volume should have. More info: https:kubernetes.iodocsconceptsstoragepersistent-volumes#access-modes-1 */
          accessModes?: string[];

          /** This field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.ioVolumeSnapshot - Beta) * An existing PVC (PersistentVolumeClaim) * An existing custom resourceobject that implements data population (Alpha) In order to use VolumeSnapshot object types, the appropriate feature gate must be enabled (VolumeSnapshotDataSource or AnyVolumeDataSource) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the specified data source is not supported, the volume will not be created and the failure will be reported as an event. In the future, we plan to support more data source types and the behavior of the provisioner may change. */
          dataSource: {
            /** APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
            apiGroup?: string;

            /** Kind is the type of resource being referenced */
            kind: string;

            /** Name is the name of resource being referenced */
            name: string;
          };

          /** Resources represents the minimum resources the volume should have. More info: https:kubernetes.iodocsconceptsstoragepersistent-volumes#resources */
          resources?: {
            /** Limits describes the maximum amount of compute resources allowed. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
            limits?: {
              [key: string]: string;
            };

            /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
            requests?: {
              [key: string]: string;
            };
          };

          /** A label query over volumes to consider for binding. */
          selector?: {
            /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
            matchExpressions?: {
              /** key is the label key that the selector applies to. */
              key: string;

              /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
              operator: string;

              /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
              values?: string[];
            }[];

            /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
            matchLabels?: {
              [key: string]: string;
            };
          };

          /** Name of the StorageClass required by the claim. More info: https:kubernetes.iodocsconceptsstoragepersistent-volumes#class-1 */
          storageClassName?: string;

          /** volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. */
          volumeMode?: string;

          /** VolumeName is the binding reference to the PersistentVolume backing this claim. */
          volumeName?: string;
        };

        /** Status represents the current informationstatus of a persistent volume claim. Read-only. More info: https:kubernetes.iodocsconceptsstoragepersistent-volumes#persistentvolumeclaims */
        status?: {
          /** AccessModes contains the actual access modes the volume backing the PVC has. More info: https:kubernetes.iodocsconceptsstoragepersistent-volumes#access-modes-1 */
          accessModes?: string[];

          /** Represents the actual resources of the underlying volume. */
          capacity?: {
            [key: string]: string;
          };

          /** Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'. */
          conditions?: {
            /** Last time we probed the condition. */
            lastProbeTime?: string;

            /** Last time the condition transitioned from one status to another. */
            lastTransitionTime?: string;

            /** Human-readable message indicating details about last transition. */
            message?: string;

            /** Unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized. */
            reason?: string;

            status: string;

            /** PersistentVolumeClaimConditionType is a valid value of PersistentVolumeClaimCondition.Type */
            type: string;
          }[];

          /** Phase represents the current phase of PersistentVolumeClaim. */
          phase?: string;
        };
      };
    };

    /** Tag of Alertmanager container image to be deployed. Defaults to the value of `version`. Version is ignored if Tag is set. */
    tag?: string;

    /** If specified, the pod's tolerations. */
    tolerations?: {
      /** Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
      effect?: string;

      /** Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
      key?: string;

      /** Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
      operator?: string;

      /** TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. */
      tolerationSeconds?: number;

      /** Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
      value?: string;
    }[];

    /** Version the cluster should be on. */
    version?: string;

    /** VolumeMounts allows configuration of additional VolumeMounts on the output StatefulSet definition. VolumeMounts specified will be appended to other VolumeMounts in the alertmanager container, that are generated as a result of StorageSpec objects. */
    volumeMounts?: {
      /** Path within the container at which the volume should be mounted.  Must not contain ':'. */
      mountPath: string;

      /** mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
      mountPropagation?: string;

      /** This must match the Name of a Volume. */
      name: string;

      /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
      readOnly?: boolean;

      /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
      subPath?: string;

      /** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
      subPathExpr?: string;
    }[];

    /** Volumes allows configuration of additional volumes on the output StatefulSet definition. Volumes specified will be appended to other volumes that are generated as a result of StorageSpec objects. */
    volumes?: {
      /** AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https:kubernetes.iodocsconceptsstoragevolumes#awselasticblockstore */
      awsElasticBlockStore: {
        /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https:kubernetes.iodocsconceptsstoragevolumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine */
        fsType?: string;

        /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume devsda1, you specify the partition as "1". Similarly, the volume partition for devsda is "0" (or you can leave the property empty). */
        partition?: number;

        /** Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https:kubernetes.iodocsconceptsstoragevolumes#awselasticblockstore */
        readOnly?: boolean;

        /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https:kubernetes.iodocsconceptsstoragevolumes#awselasticblockstore */
        volumeID: string;
      };

      /** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
      azureDisk: {
        /** Host Caching mode: None, Read Only, Read Write. */
        cachingMode?: string;

        /** The Name of the data disk in the blob storage */
        diskName: string;

        /** The URI the data disk in the blob storage */
        diskURI: string;

        /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
        fsType?: string;

        /** Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared */
        kind?: string;

        /** Defaults to false (readwrite). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
        readOnly?: boolean;
      };

      /** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
      azureFile: {
        /** Defaults to false (readwrite). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
        readOnly?: boolean;

        /** the name of secret that contains Azure Storage Account Name and Key */
        secretName: string;

        /** Share Name */
        shareName: string;
      };

      /** CephFS represents a Ceph FS mount on the host that shares a pod's lifetime */
      cephfs: {
        /** Required: Monitors is a collection of Ceph monitors More info: https:examples.k8s.iovolumescephfsREADME.md#how-to-use-it */
        monitors: string[];

        /** Optional: Used as the mounted root, rather than the full Ceph tree, default is  */
        path?: string;

        /** Optional: Defaults to false (readwrite). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https:examples.k8s.iovolumescephfsREADME.md#how-to-use-it */
        readOnly?: boolean;

        /** Optional: SecretFile is the path to key ring for User, default is etccephuser.secret More info: https:examples.k8s.iovolumescephfsREADME.md#how-to-use-it */
        secretFile?: string;

        /** Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https:examples.k8s.iovolumescephfsREADME.md#how-to-use-it */
        secretRef?: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;
        };

        /** Optional: User is the rados user name, default is admin More info: https:examples.k8s.iovolumescephfsREADME.md#how-to-use-it */
        user?: string;
      };

      /** Cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https:examples.k8s.iomysql-cinder-pdREADME.md */
      cinder: {
        /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https:examples.k8s.iomysql-cinder-pdREADME.md */
        fsType?: string;

        /** Optional: Defaults to false (readwrite). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https:examples.k8s.iomysql-cinder-pdREADME.md */
        readOnly?: boolean;

        /** Optional: points to a secret object containing parameters used to connect to OpenStack. */
        secretRef?: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;
        };

        /** volume id used to identify the volume in cinder. More info: https:examples.k8s.iomysql-cinder-pdREADME.md */
        volumeID: string;
      };

      /** ConfigMap represents a configMap that should populate this volume */
      configMap?: {
        /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
        defaultMode?: number;

        /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
        items?: {
          /** The key to project. */
          key: string;

          /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
          mode?: number;

          /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
          path: string;
        }[];

        /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
        name?: string;

        /** Specify whether the ConfigMap or its keys must be defined */
        optional?: boolean;
      };

      /** CSI (Container Storage Interface) represents storage that is handled by an external CSI driver (Alpha feature). */
      csi: {
        /** Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster. */
        driver: string;

        /** Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply. */
        fsType?: string;

        /** NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed. */
        nodePublishSecretRef?: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;
        };

        /** Specifies a read-only configuration for the volume. Defaults to false (readwrite). */
        readOnly?: boolean;

        /** VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values. */
        volumeAttributes?: {
          [key: string]: string;
        };
      };

      /** DownwardAPI represents downward API about the pod that should populate this volume */
      downwardAPI?: {
        /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
        defaultMode?: number;

        /** Items is a list of downward API volume file */
        items?: {
          /** Required: Selects a field of the pod: only annotations, labels, name and namespace are supported. */
          fieldRef: {
            /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
            apiVersion?: string;

            /** Path of the field to select in the specified API version. */
            fieldPath: string;
          };

          /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
          mode?: number;

          /** Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
          path: string;

          /** Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported. */
          resourceFieldRef: {
            /** Container name: required for volumes, optional for env vars */
            containerName?: string;

            /** Specifies the output format of the exposed resources, defaults to "1" */
            divisor?: string;

            /** Required: resource to select */
            resource: string;
          };
        }[];
      };

      /** EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https:kubernetes.iodocsconceptsstoragevolumes#emptydir */
      emptyDir?: {
        /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https:kubernetes.iodocsconceptsstoragevolumes#emptydir */
        medium?: string;

        /** Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http:kubernetes.iodocsuser-guidevolumes#emptydir */
        sizeLimit?: string;
      };

      /** FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod. */
      fc?: {
        /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine */
        fsType?: string;

        /** Optional: FC target lun number */
        lun?: number;

        /** Optional: Defaults to false (readwrite). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
        readOnly?: boolean;

        /** Optional: FC target worldwide names (WWNs) */
        targetWWNs?: string[];

        /** Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. */
        wwids?: string[];
      };

      /** FlexVolume represents a generic volume resource that is provisionedattached using an exec based plugin. */
      flexVolume: {
        /** Driver is the name of the driver to use for this volume. */
        driver: string;

        /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
        fsType?: string;

        /** Optional: Extra command options if any. */
        options?: {
          [key: string]: string;
        };

        /** Optional: Defaults to false (readwrite). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
        readOnly?: boolean;

        /** Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts. */
        secretRef?: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;
        };
      };

      /** Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running */
      flocker?: {
        /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
        datasetName?: string;

        /** UUID of the dataset. This is unique identifier of a Flocker dataset */
        datasetUUID?: string;
      };

      /** GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https:kubernetes.iodocsconceptsstoragevolumes#gcepersistentdisk */
      gcePersistentDisk: {
        /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https:kubernetes.iodocsconceptsstoragevolumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine */
        fsType?: string;

        /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume devsda1, you specify the partition as "1". Similarly, the volume partition for devsda is "0" (or you can leave the property empty). More info: https:kubernetes.iodocsconceptsstoragevolumes#gcepersistentdisk */
        partition?: number;

        /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https:kubernetes.iodocsconceptsstoragevolumes#gcepersistentdisk */
        pdName: string;

        /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https:kubernetes.iodocsconceptsstoragevolumes#gcepersistentdisk */
        readOnly?: boolean;
      };

      /** GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container. */
      gitRepo: {
        /** Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
        directory?: string;

        /** Repository URL */
        repository: string;

        /** Commit hash for the specified revision. */
        revision?: string;
      };

      /** Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https:examples.k8s.iovolumesglusterfsREADME.md */
      glusterfs: {
        /** EndpointsName is the endpoint name that details Glusterfs topology. More info: https:examples.k8s.iovolumesglusterfsREADME.md#create-a-pod */
        endpoints: string;

        /** Path is the Glusterfs volume path. More info: https:examples.k8s.iovolumesglusterfsREADME.md#create-a-pod */
        path: string;

        /** ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https:examples.k8s.iovolumesglusterfsREADME.md#create-a-pod */
        readOnly?: boolean;
      };

      /** HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https:kubernetes.iodocsconceptsstoragevolumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who cancan not mount host directories as readwrite. */
      hostPath: {
        /** Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https:kubernetes.iodocsconceptsstoragevolumes#hostpath */
        path: string;

        /** Type for HostPath Volume Defaults to "" More info: https:kubernetes.iodocsconceptsstoragevolumes#hostpath */
        type?: string;
      };

      /** ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https:examples.k8s.iovolumesiscsiREADME.md */
      iscsi: {
        /** whether support iSCSI Discovery CHAP authentication */
        chapAuthDiscovery?: boolean;

        /** whether support iSCSI Session CHAP authentication */
        chapAuthSession?: boolean;

        /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https:kubernetes.iodocsconceptsstoragevolumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine */
        fsType?: string;

        /** Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. */
        initiatorName?: string;

        /** Target iSCSI Qualified Name. */
        iqn: string;

        /** iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp). */
        iscsiInterface?: string;

        /** iSCSI Target Lun number. */
        lun: number;

        /** iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
        portals?: string[];

        /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. */
        readOnly?: boolean;

        /** CHAP Secret for iSCSI target and initiator authentication */
        secretRef?: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;
        };

        /** iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
        targetPortal: string;
      };

      /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names */
      name: string;

      /** NFS represents an NFS mount on the host that shares a pod's lifetime More info: https:kubernetes.iodocsconceptsstoragevolumes#nfs */
      nfs: {
        /** Path that is exported by the NFS server. More info: https:kubernetes.iodocsconceptsstoragevolumes#nfs */
        path: string;

        /** ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https:kubernetes.iodocsconceptsstoragevolumes#nfs */
        readOnly?: boolean;

        /** Server is the hostname or IP address of the NFS server. More info: https:kubernetes.iodocsconceptsstoragevolumes#nfs */
        server: string;
      };

      /** PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https:kubernetes.iodocsconceptsstoragepersistent-volumes#persistentvolumeclaims */
      persistentVolumeClaim: {
        /** ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https:kubernetes.iodocsconceptsstoragepersistent-volumes#persistentvolumeclaims */
        claimName: string;

        /** Will force the ReadOnly setting in VolumeMounts. Default false. */
        readOnly?: boolean;
      };

      /** PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine */
      photonPersistentDisk: {
        /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
        fsType?: string;

        /** ID that identifies Photon Controller persistent disk */
        pdID: string;
      };

      /** PortworxVolume represents a portworx volume attached and mounted on kubelets host machine */
      portworxVolume: {
        /** FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified. */
        fsType?: string;

        /** Defaults to false (readwrite). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
        readOnly?: boolean;

        /** VolumeID uniquely identifies a Portworx volume */
        volumeID: string;
      };

      /** Items for all in one resources secrets, configmaps, and downward API */
      projected: {
        /** Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
        defaultMode?: number;

        /** list of volume projections */
        sources: {
          /** information about the configMap data to project */
          configMap?: {
            /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
            items?: {
              /** The key to project. */
              key: string;

              /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
              mode?: number;

              /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
              path: string;
            }[];

            /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;

            /** Specify whether the ConfigMap or its keys must be defined */
            optional?: boolean;
          };

          /** information about the downwardAPI data to project */
          downwardAPI?: {
            /** Items is a list of DownwardAPIVolume file */
            items?: {
              /** Required: Selects a field of the pod: only annotations, labels, name and namespace are supported. */
              fieldRef: {
                /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                apiVersion?: string;

                /** Path of the field to select in the specified API version. */
                fieldPath: string;
              };

              /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
              mode?: number;

              /** Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
              path: string;

              /** Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported. */
              resourceFieldRef: {
                /** Container name: required for volumes, optional for env vars */
                containerName?: string;

                /** Specifies the output format of the exposed resources, defaults to "1" */
                divisor?: string;

                /** Required: resource to select */
                resource: string;
              };
            }[];
          };

          /** information about the secret data to project */
          secret?: {
            /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
            items?: {
              /** The key to project. */
              key: string;

              /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
              mode?: number;

              /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
              path: string;
            }[];

            /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;

            /** Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };

          /** information about the serviceAccountToken data to project */
          serviceAccountToken: {
            /** Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver. */
            audience?: string;

            /** ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes. */
            expirationSeconds?: number;

            /** Path is the path relative to the mount point of the file to project the token into. */
            path: string;
          };
        }[];
      };

      /** Quobyte represents a Quobyte mount on the host that shares a pod's lifetime */
      quobyte: {
        /** Group to map volume access to Default is no group */
        group?: string;

        /** ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
        readOnly?: boolean;

        /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
        registry: string;

        /** Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin */
        tenant?: string;

        /** User to map volume access to Defaults to serivceaccount user */
        user?: string;

        /** Volume is a string that references an already created Quobyte volume by name. */
        volume: string;
      };

      /** RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https:examples.k8s.iovolumesrbdREADME.md */
      rbd: {
        /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https:kubernetes.iodocsconceptsstoragevolumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine */
        fsType?: string;

        /** The rados image name. More info: https:examples.k8s.iovolumesrbdREADME.md#how-to-use-it */
        image: string;

        /** Keyring is the path to key ring for RBDUser. Default is etccephkeyring. More info: https:examples.k8s.iovolumesrbdREADME.md#how-to-use-it */
        keyring?: string;

        /** A collection of Ceph monitors. More info: https:examples.k8s.iovolumesrbdREADME.md#how-to-use-it */
        monitors: string[];

        /** The rados pool name. Default is rbd. More info: https:examples.k8s.iovolumesrbdREADME.md#how-to-use-it */
        pool?: string;

        /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https:examples.k8s.iovolumesrbdREADME.md#how-to-use-it */
        readOnly?: boolean;

        /** SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https:examples.k8s.iovolumesrbdREADME.md#how-to-use-it */
        secretRef?: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;
        };

        /** The rados user name. Default is admin. More info: https:examples.k8s.iovolumesrbdREADME.md#how-to-use-it */
        user?: string;
      };

      /** ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. */
      scaleIO: {
        /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs". */
        fsType?: string;

        /** The host address of the ScaleIO API Gateway. */
        gateway: string;

        /** The name of the ScaleIO Protection Domain for the configured storage. */
        protectionDomain?: string;

        /** Defaults to false (readwrite). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
        readOnly?: boolean;

        /** SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail. */
        secretRef: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;
        };

        /** Flag to enabledisable SSL communication with Gateway, default false */
        sslEnabled?: boolean;

        /** Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. */
        storageMode?: string;

        /** The ScaleIO Storage Pool associated with the protection domain. */
        storagePool?: string;

        /** The name of the storage system as configured in ScaleIO. */
        system: string;

        /** The name of a volume already created in the ScaleIO system that is associated with this volume source. */
        volumeName?: string;
      };

      /** Secret represents a secret that should populate this volume. More info: https:kubernetes.iodocsconceptsstoragevolumes#secret */
      secret?: {
        /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
        defaultMode?: number;

        /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
        items?: {
          /** The key to project. */
          key: string;

          /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
          mode?: number;

          /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
          path: string;
        }[];

        /** Specify whether the Secret or its keys must be defined */
        optional?: boolean;

        /** Name of the secret in the pod's namespace to use. More info: https:kubernetes.iodocsconceptsstoragevolumes#secret */
        secretName?: string;
      };

      /** StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes. */
      storageos?: {
        /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
        fsType?: string;

        /** Defaults to false (readwrite). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
        readOnly?: boolean;

        /** SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted. */
        secretRef?: {
          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;
        };

        /** VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace. */
        volumeName?: string;

        /** VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. */
        volumeNamespace?: string;
      };

      /** VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine */
      vsphereVolume: {
        /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
        fsType?: string;

        /** Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. */
        storagePolicyID?: string;

        /** Storage Policy Based Management (SPBM) profile name. */
        storagePolicyName?: string;

        /** Path that identifies vSphere volume vmdk */
        volumePath: string;
      };
    }[];
  };

  /** Most recent observed status of the Alertmanager cluster. Read-only. Not included when requesting from the apiserver, only from the Prometheus Operator API itself. More info: https:github.comkubernetescommunityblobmastercontributorsdevelsig-architectureapi-conventions.md#spec-and-status */
  status: {
    /** Total number of available pods (ready for at least minReadySeconds) targeted by this Alertmanager cluster. */
    availableReplicas: number;

    /** Represents whether any actions on the underlaying managed objects are being performed. Only delete actions will be performed. */
    paused: boolean;

    /** Total number of non-terminated pods targeted by this Alertmanager cluster (their labels match the selector). */
    replicas: number;

    /** Total number of unavailable pods targeted by this Alertmanager cluster. */
    unavailableReplicas: number;

    /** Total number of non-terminated pods targeted by this Alertmanager cluster that have the desired version spec. */
    updatedReplicas: number;
  };
};
export function createAlertmanager(
  data: Omit<Alertmanager, "apiVersion" | "kind">,
): Alertmanager {
  return {
    apiVersion: "monitoring.coreos.com/v1",
    kind: "Alertmanager",
    ...data,
  };
}

export type ServiceMonitor = {
  apiVersion?: string;

  kind?: string;

  metadata?: ObjectMeta;

  /** Specification of desired Service selection for target discovery by Prometheus. */
  spec: {
    /** A list of endpoints allowed as part of this ServiceMonitor. */
    endpoints: {
      /** BasicAuth allow an endpoint to authenticate over basic authentication More info: https:prometheus.iodocsoperatingconfiguration#endpoints */
      basicAuth?: {
        /** The secret in the service monitor namespace that contains the password for authentication. */
        password: {
          /** The key of the secret to select from.  Must be a valid secret key. */
          key: string;

          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;

          /** Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };

        /** The secret in the service monitor namespace that contains the username for authentication. */
        username: {
          /** The key of the secret to select from.  Must be a valid secret key. */
          key: string;

          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;

          /** Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
      };

      /** File to read bearer token for scraping targets. */
      bearerTokenFile?: string;

      /** Secret to mount to read bearer token for scraping targets. The secret needs to be in the same namespace as the service monitor and accessible by the Prometheus Operator. */
      bearerTokenSecret: {
        /** The key of the secret to select from.  Must be a valid secret key. */
        key: string;

        /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
        name?: string;

        /** Specify whether the Secret or its key must be defined */
        optional?: boolean;
      };

      /** HonorLabels chooses the metric's labels on collisions with target labels. */
      honorLabels?: boolean;

      /** HonorTimestamps controls whether Prometheus respects the timestamps present in scraped data. */
      honorTimestamps?: boolean;

      /** Interval at which metrics should be scraped */
      interval?: string;

      /** MetricRelabelConfigs to apply to samples before ingestion. */
      metricRelabelings?: {
        /** Action to perform based on regex matching. Default is 'replace' */
        action?: string;

        /** Modulus to take of the hash of the source label values. */
        modulus?: number;

        /** Regular expression against which the extracted value is matched. Default is '(.*)' */
        regex?: string;

        /** Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1' */
        replacement?: string;

        /** Separator placed between concatenated source label values. default is ';'. */
        separator?: string;

        /** The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions. */
        sourceLabels?: string[];

        /** Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available. */
        targetLabel?: string;
      }[];

      /** Optional HTTP URL parameters */
      params?: {
        [key: string]: string[];
      };

      /** HTTP path to scrape for metrics. */
      path?: string;

      /** Name of the service port this endpoint refers to. Mutually exclusive with targetPort. */
      port?: string;

      /** ProxyURL eg http:proxyserver:2195 Directs scrapes to proxy through this endpoint. */
      proxyUrl?: string;

      /** RelabelConfigs to apply to samples before scraping. More info: https:prometheus.iodocsprometheuslatestconfigurationconfiguration#relabel_config */
      relabelings?: {
        /** Action to perform based on regex matching. Default is 'replace' */
        action?: string;

        /** Modulus to take of the hash of the source label values. */
        modulus?: number;

        /** Regular expression against which the extracted value is matched. Default is '(.*)' */
        regex?: string;

        /** Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1' */
        replacement?: string;

        /** Separator placed between concatenated source label values. default is ';'. */
        separator?: string;

        /** The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions. */
        sourceLabels?: string[];

        /** Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available. */
        targetLabel?: string;
      }[];

      /** HTTP scheme to use for scraping. */
      scheme?: string;

      /** Timeout after which the scrape is ended */
      scrapeTimeout?: string;

      /** Name or number of the pod port this endpoint refers to. Mutually exclusive with port. */
      targetPort?: any;

      /** TLS configuration to use when scraping the endpoint */
      tlsConfig?: {
        /** Stuct containing the CA cert to use for the targets. */
        ca?: {
          /** ConfigMap containing data to use for the targets. */
          configMap: {
            /** The key to select. */
            key: string;

            /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;

            /** Specify whether the ConfigMap or its key must be defined */
            optional?: boolean;
          };

          /** Secret containing data to use for the targets. */
          secret: {
            /** The key of the secret to select from.  Must be a valid secret key. */
            key: string;

            /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;

            /** Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };

        /** Path to the CA cert in the Prometheus container to use for the targets. */
        caFile?: string;

        /** Struct containing the client cert file for the targets. */
        cert?: {
          /** ConfigMap containing data to use for the targets. */
          configMap: {
            /** The key to select. */
            key: string;

            /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;

            /** Specify whether the ConfigMap or its key must be defined */
            optional?: boolean;
          };

          /** Secret containing data to use for the targets. */
          secret: {
            /** The key of the secret to select from.  Must be a valid secret key. */
            key: string;

            /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;

            /** Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };

        /** Path to the client cert file in the Prometheus container for the targets. */
        certFile?: string;

        /** Disable target certificate validation. */
        insecureSkipVerify?: boolean;

        /** Path to the client key file in the Prometheus container for the targets. */
        keyFile?: string;

        /** Secret containing the client key file for the targets. */
        keySecret: {
          /** The key of the secret to select from.  Must be a valid secret key. */
          key: string;

          /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;

          /** Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };

        /** Used to verify the hostname for the targets. */
        serverName?: string;
      };
    }[];

    /** The label to use to retrieve the job name from. */
    jobLabel?: string;

    /** Selector to select which namespaces the Endpoints objects are discovered from. */
    namespaceSelector?: {
      /** Boolean describing whether all namespaces are selected in contrast to a list restricting them. */
      any?: boolean;

      /** List of namespace names. */
      matchNames?: string[];
    };

    /** PodTargetLabels transfers labels on the Kubernetes Pod onto the target. */
    podTargetLabels?: string[];

    /** SampleLimit defines per-scrape limit on number of scraped samples that will be accepted. */
    sampleLimit?: number;

    /** Selector to select Endpoints objects. */
    selector: {
      /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
      matchExpressions?: {
        /** key is the label key that the selector applies to. */
        key: string;

        /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
        operator: string;

        /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
        values?: string[];
      }[];

      /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
      matchLabels?: {
        [key: string]: string;
      };
    };

    /** TargetLabels transfers labels on the Kubernetes Service onto the target. */
    targetLabels?: string[];
  };
};
export function createServiceMonitor(
  data: Omit<ServiceMonitor, "apiVersion" | "kind">,
): ServiceMonitor {
  return {
    apiVersion: "monitoring.coreos.com/v1",
    kind: "ServiceMonitor",
    ...data,
  };
}

export type PodMonitor = {
  apiVersion?: string;

  kind?: string;

  metadata?: ObjectMeta;

  /** Specification of desired Pod selection for target discovery by Prometheus. */
  spec: {
    /** The label to use to retrieve the job name from. */
    jobLabel?: string;

    /** Selector to select which namespaces the Endpoints objects are discovered from. */
    namespaceSelector?: {
      /** Boolean describing whether all namespaces are selected in contrast to a list restricting them. */
      any?: boolean;

      /** List of namespace names. */
      matchNames?: string[];
    };

    /** A list of endpoints allowed as part of this PodMonitor. */
    podMetricsEndpoints: {
      /** HonorLabels chooses the metric's labels on collisions with target labels. */
      honorLabels?: boolean;

      /** HonorTimestamps controls whether Prometheus respects the timestamps present in scraped data. */
      honorTimestamps?: boolean;

      /** Interval at which metrics should be scraped */
      interval?: string;

      /** MetricRelabelConfigs to apply to samples before ingestion. */
      metricRelabelings?: {
        /** Action to perform based on regex matching. Default is 'replace' */
        action?: string;

        /** Modulus to take of the hash of the source label values. */
        modulus?: number;

        /** Regular expression against which the extracted value is matched. Default is '(.*)' */
        regex?: string;

        /** Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1' */
        replacement?: string;

        /** Separator placed between concatenated source label values. default is ';'. */
        separator?: string;

        /** The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions. */
        sourceLabels?: string[];

        /** Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available. */
        targetLabel?: string;
      }[];

      /** Optional HTTP URL parameters */
      params?: {
        [key: string]: string[];
      };

      /** HTTP path to scrape for metrics. */
      path?: string;

      /** Name of the pod port this endpoint refers to. Mutually exclusive with targetPort. */
      port?: string;

      /** ProxyURL eg http:proxyserver:2195 Directs scrapes to proxy through this endpoint. */
      proxyUrl?: string;

      /** RelabelConfigs to apply to samples before ingestion. More info: https:prometheus.iodocsprometheuslatestconfigurationconfiguration#relabel_config */
      relabelings?: {
        /** Action to perform based on regex matching. Default is 'replace' */
        action?: string;

        /** Modulus to take of the hash of the source label values. */
        modulus?: number;

        /** Regular expression against which the extracted value is matched. Default is '(.*)' */
        regex?: string;

        /** Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1' */
        replacement?: string;

        /** Separator placed between concatenated source label values. default is ';'. */
        separator?: string;

        /** The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions. */
        sourceLabels?: string[];

        /** Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available. */
        targetLabel?: string;
      }[];

      /** HTTP scheme to use for scraping. */
      scheme?: string;

      /** Timeout after which the scrape is ended */
      scrapeTimeout?: string;

      /** Deprecated: Use 'port' instead. */
      targetPort?: any;
    }[];

    /** PodTargetLabels transfers labels on the Kubernetes Pod onto the target. */
    podTargetLabels?: string[];

    /** SampleLimit defines per-scrape limit on number of scraped samples that will be accepted. */
    sampleLimit?: number;

    /** Selector to select Pod objects. */
    selector: {
      /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
      matchExpressions?: {
        /** key is the label key that the selector applies to. */
        key: string;

        /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
        operator: string;

        /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
        values?: string[];
      }[];

      /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
      matchLabels?: {
        [key: string]: string;
      };
    };
  };
};
export function createPodMonitor(
  data: Omit<PodMonitor, "apiVersion" | "kind">,
): PodMonitor {
  return {
    apiVersion: "monitoring.coreos.com/v1",
    kind: "PodMonitor",
    ...data,
  };
}
