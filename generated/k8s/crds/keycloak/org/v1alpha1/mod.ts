/* Generated for keycloak/org/v1alpha1/mod.ts */
import { ObjectMeta } from "https://deno.land/x/deploykit@0.0.19/generated/k8s/v1.18.3/apimachinery/pkg/apis/meta/v1/mod.ts";

/** KeycloakRealm is the Schema for the keycloakrealms API */
export type KeycloakRealm = {
  apiVersion?: string;

  kind?: string;

  metadata?: ObjectMeta;

  /** KeycloakRealmSpec defines the desired state of KeycloakRealm. */
  spec?: {
    /** Selector for looking up Keycloak Custom Resources. */
    instanceSelector?: {
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

    /** Keycloak Realm REST object. */
    realm: {
      /** Enable admin events details TODO: change to values and use kubebuilder default annotation once supported */
      adminEventsDetailsEnabled?: boolean;

      /** Enable events recording TODO: change to values and use kubebuilder default annotation once supported */
      adminEventsEnabled?: boolean;

      /** Authentication flows */
      authenticationFlows?: {
        /** Alias */
        alias: string;

        /** Authentication executions */
        authenticationExecutions: {
          /** Authenticator */
          authenticator?: string;

          /** Authenticator Config */
          authenticatorConfig?: string;

          /** Authenticator flow */
          authenticatorFlow?: boolean;

          /** Flow Alias */
          flowAlias?: string;

          /** Priority */
          priority?: number;

          /** Requirement [REQUIRED, OPTIONAL, ALTERNATIVE, DISABLED] */
          requirement?: string;

          /** User setup allowed */
          userSetupAllowed?: boolean;
        }[];

        /** Built in */
        builtIn?: boolean;

        /** Description */
        description?: string;

        /** ID */
        id?: string;

        /** Provider ID */
        providerId?: string;

        /** Top level */
        topLevel?: boolean;
      }[];

      /** Authenticator config */
      authenticatorConfig?: {
        /** Alias */
        alias: string;

        /** Config */
        config?: {
          [key: string]: string;
        };

        /** ID */
        id?: string;
      }[];

      /** Client scopes */
      clientScopes?: {
        attributes?: {
          [key: string]: string;
        };

        description?: string;

        id?: string;

        name?: string;

        protocol?: string;

        /** Protocol Mappers. */
        protocolMappers?: {
          /** Config options. */
          config?: {
            [key: string]: string;
          };

          /** True if Consent Screen is required. */
          consentRequired?: boolean;

          /** Text to use for displaying Consent Screen. */
          consentText?: string;

          /** Protocol Mapper ID. */
          id?: string;

          /** Protocol Mapper Name. */
          name?: string;

          /** Protocol to use. */
          protocol?: string;

          /** Protocol Mapper to use */
          protocolMapper?: string;
        }[];
      }[];

      /** A set of Keycloak Clients. */
      clients?: {
        /** Access options. */
        access?: {
          [key: string]: boolean;
        };

        /** Application Admin URL. */
        adminUrl?: string;

        /** Client Attributes. */
        attributes?: {
          [key: string]: string;
        };

        /** Application base URL. */
        baseUrl?: string;

        /** True if a client supports only Bearer Tokens. */
        bearerOnly?: boolean;

        /** What Client authentication type to use. */
        clientAuthenticatorType?: string;

        /** Client ID. */
        clientId: string;

        /** True if Consent Screen is required. */
        consentRequired?: boolean;

        /** A list of default client scopes. Default client scopes are always applied when issuing OpenID Connect tokens or SAML assertions for this client. */
        defaultClientScopes?: string[];

        /** Default Client roles. */
        defaultRoles?: string[];

        /** Client description. */
        description?: string;

        /** True if Direct Grant is enabled. */
        directAccessGrantsEnabled?: boolean;

        /** Client enabled flag. */
        enabled?: boolean;

        /** True if this client supports Front Channel logout. */
        frontchannelLogout?: boolean;

        /** True if Full Scope is allowed. */
        fullScopeAllowed?: boolean;

        /** Client ID. If not specified, automatically generated. */
        id?: string;

        /** True if Implicit flow is enabled. */
        implicitFlowEnabled?: boolean;

        /** Client name. */
        name?: string;

        /** Node registration timeout. */
        nodeReRegistrationTimeout?: number;

        /** Not Before setting. */
        notBefore?: number;

        /** A list of optional client scopes. Optional client scopes are applied when issuing tokens for this client, but only when they are requested by the scope parameter in the OpenID Connect authorization request. */
        optionalClientScopes?: string[];

        /** Protocol used for this Client. */
        protocol?: string;

        /** Protocol Mappers. */
        protocolMappers?: {
          /** Config options. */
          config?: {
            [key: string]: string;
          };

          /** True if Consent Screen is required. */
          consentRequired?: boolean;

          /** Text to use for displaying Consent Screen. */
          consentText?: string;

          /** Protocol Mapper ID. */
          id?: string;

          /** Protocol Mapper Name. */
          name?: string;

          /** Protocol to use. */
          protocol?: string;

          /** Protocol Mapper to use */
          protocolMapper?: string;
        }[];

        /** True if this is a public Client. */
        publicClient?: boolean;

        /** A list of valid Redirection URLs. */
        redirectUris?: string[];

        /** Application root URL. */
        rootUrl?: string;

        /** Client Secret. The Operator will automatically create a Secret based on this value. */
        secret?: string;

        /** True if Service Accounts are enabled. */
        serviceAccountsEnabled?: boolean;

        /** True if Standard flow is enabled. */
        standardFlowEnabled?: boolean;

        /** Surrogate Authentication Required option. */
        surrogateAuthRequired?: boolean;

        /** True to use a Template Config. */
        useTemplateConfig?: boolean;

        /** True to use Template Mappers. */
        useTemplateMappers?: boolean;

        /** True to use Template Scope. */
        useTemplateScope?: boolean;

        /** A list of valid Web Origins. */
        webOrigins?: string[];
      }[];

      /** Realm display name. */
      displayName?: string;

      /** Realm enabled flag. */
      enabled?: boolean;

      /** Enable events recording TODO: change to values and use kubebuilder default annotation once supported */
      eventsEnabled?: boolean;

      /** A set of Event Listeners. */
      eventsListeners?: string[];

      id?: string;

      /** A set of Identity Providers. */
      identityProviders?: {
        /** Adds Read Token role when creating this Identity Provider. */
        addReadTokenRoleOnCreate?: boolean;

        /** Identity Provider Alias. */
        alias?: string;

        /** Identity Provider config. */
        config?: {
          [key: string]: string;
        };

        /** Identity Provider Display Name. */
        displayName?: string;

        /** Identity Provider enabled flag. */
        enabled?: boolean;

        /** Identity Provider First Broker Login Flow Alias. */
        firstBrokerLoginFlowAlias?: string;

        /** Identity Provider Internal ID. */
        internalId?: string;

        /** Identity Provider Link Only setting. */
        linkOnly?: boolean;

        /** Identity Provider Post Broker Login Flow Alias. */
        postBrokerLoginFlowAlias?: string;

        /** Identity Provider ID. */
        providerId?: string;

        /** Identity Provider Store to Token. */
        storeToken?: boolean;

        /** Identity Provider Trust Email. */
        trustEmail?: boolean;
      }[];

      /** Realm name. */
      realm: string;

      /** User federation mappers are extension points triggered by the user federation at various points. */
      userFederationMappers?: {
        /** User federation mapper config. */
        config?: {
          [key: string]: string;
        };

        federationMapperType?: string;

        /** The displayName for the user federation provider this mapper applies to. */
        federationProviderDisplayName?: string;

        id?: string;

        name?: string;
      }[];

      /** Point keycloak to an external user provider to validate credentials or pull in identity information. */
      userFederationProviders?: {
        /** User federation provider config. */
        config?: {
          [key: string]: string;
        };

        /** The display name of this provider instance. */
        displayName?: string;

        fullSyncPeriod?: number;

        /** The ID of this provider */
        id?: string;

        /** The priority of this provider when looking up users or adding a user. */
        priority?: number;

        /** The name of the user provider, such as "ldap", "kerberos" or a custom SPI. */
        providerName?: string;
      }[];

      /** A set of Keycloak Users. */
      users?: {
        /** A set of Attributes. */
        attributes?: {
          [key: string]: string[];
        };

        /** A set of Client Roles. */
        clientRoles?: {
          [key: string]: string[];
        };

        /** A set of Credentials. */
        credentials?: {
          /** True if this credential object is temporary. */
          temporary?: boolean;

          /** Credential Type. */
          type?: string;

          /** Credential Value. */
          value?: string;
        }[];

        /** Email. */
        email?: string;

        /** True if email has already been verified. */
        emailVerified?: boolean;

        /** User enabled flag. */
        enabled?: boolean;

        /** A set of Federated Identities. */
        federatedIdentities?: {
          /** Federated Identity Provider. */
          identityProvider?: string;

          /** Federated Identity User ID. */
          userId?: string;

          /** Federated Identity User Name. */
          userName?: string;
        }[];

        /** First Name. */
        firstName?: string;

        /** A set of Groups. */
        groups?: string[];

        /** User ID. */
        id?: string;

        /** Last Name. */
        lastName?: string;

        /** A set of Realm Roles. */
        realmRoles?: string[];

        /** A set of Required Actions. */
        requiredActions?: string[];

        /** User Name. */
        username?: string;
      }[];
    };

    /** A list of overrides to the default Realm behavior. */
    realmOverrides?: {
      /** Flow to be overridden. */
      forFlow?: string;

      /** Identity Provider to be overridden. */
      identityProvider?: string;
    }[];

    /** When set to true, this KeycloakRealm will be marked as unmanaged and not be managed by this operator. It can then be used for targeting purposes. */
    unmanaged?: boolean;
  };

  /** KeycloakRealmStatus defines the observed state of KeycloakRealm */
  status?: {
    /** TODO */
    loginURL: string;

    /** Human-readable message indicating details about current operator phase or error. */
    message: string;

    /** Current phase of the operator. */
    phase: string;

    /** True if all resources are in a ready state and all work is done. */
    ready: boolean;

    /** A map of all the secondary resources types and names created for this CR. e.g "Deployment": [ "DeploymentName1", "DeploymentName2" ] */
    secondaryResources?: {
      [key: string]: string[];
    };
  };
};
export function createKeycloakRealm<
  T extends Omit<KeycloakRealm, "apiVersion" | "kind">,
>(data: T): KeycloakRealm & T & Pick<KeycloakRealm, "apiVersion" | "kind"> {
  return {
    apiVersion: "keycloak.org/v1alpha1",
    kind: "KeycloakRealm",
    ...data,
  };
}

/** KeycloakClient is the Schema for the keycloakclients API. */
export type KeycloakClient = {
  apiVersion?: string;

  kind?: string;

  metadata?: ObjectMeta;

  /** KeycloakClientSpec defines the desired state of KeycloakClient. */
  spec?: {
    /** Keycloak Client REST object. */
    client: {
      /** Access options. */
      access?: {
        [key: string]: boolean;
      };

      /** Application Admin URL. */
      adminUrl?: string;

      /** Client Attributes. */
      attributes?: {
        [key: string]: string;
      };

      /** Application base URL. */
      baseUrl?: string;

      /** True if a client supports only Bearer Tokens. */
      bearerOnly?: boolean;

      /** What Client authentication type to use. */
      clientAuthenticatorType?: string;

      /** Client ID. */
      clientId: string;

      /** True if Consent Screen is required. */
      consentRequired?: boolean;

      /** A list of default client scopes. Default client scopes are always applied when issuing OpenID Connect tokens or SAML assertions for this client. */
      defaultClientScopes?: string[];

      /** Default Client roles. */
      defaultRoles?: string[];

      /** Client description. */
      description?: string;

      /** True if Direct Grant is enabled. */
      directAccessGrantsEnabled?: boolean;

      /** Client enabled flag. */
      enabled?: boolean;

      /** True if this client supports Front Channel logout. */
      frontchannelLogout?: boolean;

      /** True if Full Scope is allowed. */
      fullScopeAllowed?: boolean;

      /** Client ID. If not specified, automatically generated. */
      id?: string;

      /** True if Implicit flow is enabled. */
      implicitFlowEnabled?: boolean;

      /** Client name. */
      name?: string;

      /** Node registration timeout. */
      nodeReRegistrationTimeout?: number;

      /** Not Before setting. */
      notBefore?: number;

      /** A list of optional client scopes. Optional client scopes are applied when issuing tokens for this client, but only when they are requested by the scope parameter in the OpenID Connect authorization request. */
      optionalClientScopes?: string[];

      /** Protocol used for this Client. */
      protocol?: string;

      /** Protocol Mappers. */
      protocolMappers?: {
        /** Config options. */
        config?: {
          [key: string]: string;
        };

        /** True if Consent Screen is required. */
        consentRequired?: boolean;

        /** Text to use for displaying Consent Screen. */
        consentText?: string;

        /** Protocol Mapper ID. */
        id?: string;

        /** Protocol Mapper Name. */
        name?: string;

        /** Protocol to use. */
        protocol?: string;

        /** Protocol Mapper to use */
        protocolMapper?: string;
      }[];

      /** True if this is a public Client. */
      publicClient?: boolean;

      /** A list of valid Redirection URLs. */
      redirectUris?: string[];

      /** Application root URL. */
      rootUrl?: string;

      /** Client Secret. The Operator will automatically create a Secret based on this value. */
      secret?: string;

      /** True if Service Accounts are enabled. */
      serviceAccountsEnabled?: boolean;

      /** True if Standard flow is enabled. */
      standardFlowEnabled?: boolean;

      /** Surrogate Authentication Required option. */
      surrogateAuthRequired?: boolean;

      /** True to use a Template Config. */
      useTemplateConfig?: boolean;

      /** True to use Template Mappers. */
      useTemplateMappers?: boolean;

      /** True to use Template Scope. */
      useTemplateScope?: boolean;

      /** A list of valid Web Origins. */
      webOrigins?: string[];
    };

    /** Selector for looking up KeycloakRealm Custom Resources. */
    realmSelector: {
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

  /** KeycloakClientStatus defines the observed state of KeycloakClient */
  status?: {
    /** Human-readable message indicating details about current operator phase or error. */
    message: string;

    /** Current phase of the operator. */
    phase: string;

    /** True if all resources are in a ready state and all work is done. */
    ready: boolean;

    /** A map of all the secondary resources types and names created for this CR. e.g "Deployment": [ "DeploymentName1", "DeploymentName2" ] */
    secondaryResources?: {
      [key: string]: string[];
    };
  };
};
export function createKeycloakClient<
  T extends Omit<KeycloakClient, "apiVersion" | "kind">,
>(data: T): KeycloakClient & T & Pick<KeycloakClient, "apiVersion" | "kind"> {
  return {
    apiVersion: "keycloak.org/v1alpha1",
    kind: "KeycloakClient",
    ...data,
  };
}

/** KeycloakUser is the Schema for the keycloakusers API. */
export type KeycloakUser = {
  apiVersion?: string;

  kind?: string;

  metadata?: ObjectMeta;

  /** KeycloakUserSpec defines the desired state of KeycloakUser. */
  spec?: {
    /** Selector for looking up KeycloakRealm Custom Resources. */
    realmSelector?: {
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

    /** Keycloak User REST object. */
    user: {
      /** A set of Attributes. */
      attributes?: {
        [key: string]: string[];
      };

      /** A set of Client Roles. */
      clientRoles?: {
        [key: string]: string[];
      };

      /** A set of Credentials. */
      credentials?: {
        /** True if this credential object is temporary. */
        temporary?: boolean;

        /** Credential Type. */
        type?: string;

        /** Credential Value. */
        value?: string;
      }[];

      /** Email. */
      email?: string;

      /** True if email has already been verified. */
      emailVerified?: boolean;

      /** User enabled flag. */
      enabled?: boolean;

      /** A set of Federated Identities. */
      federatedIdentities?: {
        /** Federated Identity Provider. */
        identityProvider?: string;

        /** Federated Identity User ID. */
        userId?: string;

        /** Federated Identity User Name. */
        userName?: string;
      }[];

      /** First Name. */
      firstName?: string;

      /** A set of Groups. */
      groups?: string[];

      /** User ID. */
      id?: string;

      /** Last Name. */
      lastName?: string;

      /** A set of Realm Roles. */
      realmRoles?: string[];

      /** A set of Required Actions. */
      requiredActions?: string[];

      /** User Name. */
      username?: string;
    };
  };

  /** KeycloakUserStatus defines the observed state of KeycloakUser. */
  status?: {
    /** Human-readable message indicating details about current operator phase or error. */
    message: string;

    /** Current phase of the operator. */
    phase: string;
  };
};
export function createKeycloakUser<
  T extends Omit<KeycloakUser, "apiVersion" | "kind">,
>(data: T): KeycloakUser & T & Pick<KeycloakUser, "apiVersion" | "kind"> {
  return { apiVersion: "keycloak.org/v1alpha1", kind: "KeycloakUser", ...data };
}

/** Keycloak is the Schema for the keycloaks API. */
export type Keycloak = {
  apiVersion?: string;

  kind?: string;

  metadata?: ObjectMeta;

  /** KeycloakSpec defines the desired state of Keycloak. */
  spec?: {
    /** A list of extensions, where each one is a URL to a JAR files that will be deployed in Keycloak. */
    extensions?: string[];

    /** Contains configuration for external Keycloak instances. Unmanaged needs to be set to true to use this. */
    external?: {
      /** If set to true, this Keycloak will be treated as an external instance. The unmanaged field also needs to be set to true if this field is true. */
      enabled?: boolean;

      /** The URL to use for the keycloak admin API. Needs to be set if external is true. */
      url?: string;
    };

    /** Controls external IngressRoute settings. */
    externalAccess?: {
      /** If set to true, the Operator will create an Ingress or a Route pointing to Keycloak. */
      enabled?: boolean;

      /** If set, the Operator will use value of host for IngressRoute host instead of default value keycloak.local for ingress and automatically chosen name for Route */
      host?: string;

      /** TLS Termination type for the external access. Setting this field to "reencrypt" will terminate TLS on the IngressRoute level. Setting this field to "passthrough" will send encrypted traffic to the Pod. If unspecified, defaults to "reencrypt". Note, that this setting has no effect on Ingress as Ingress TLS settings are not reconciled by this operator. In other words, Ingress TLS configuration is the same in both cases and it is up to the user to configure TLS section of the Ingress. */
      tlsTermination?: string;
    };

    /** Controls external database settings. Using an external database requires providing a secret containing credentials as well as connection details. Here's an example of such secret: 
     apiVersion: v1     kind: Secret     metadata:         name: keycloak-db-secret         namespace: keycloak     stringData:         POSTGRES_DATABASE: <Database Name>         POSTGRES_EXTERNAL_ADDRESS: <External Database IP or URL (resolvable by K8s)>         POSTGRES_EXTERNAL_PORT: <External Database Port>         # Strongly recommended to use <'Keycloak CR Name'-postgresql>         POSTGRES_HOST: <Database Service Name>         POSTGRES_PASSWORD: <Database Password>         # Required for AWS Backup functionality         POSTGRES_SUPERUSER: true         POSTGRES_USERNAME: <Database Username>      type: Opaque 
 Both POSTGRES_EXTERNAL_ADDRESS and POSTGRES_EXTERNAL_PORT are specifically required for creating connection to the external database. The secret name is created using the following convention:       <Custom Resource Name>-db-secret 
 For more information, please refer to the Operator documentation. */
    externalDatabase?: {
      /** If set to true, the Operator will use an external database. pointing to Keycloak. */
      enabled?: boolean;
    };

    /** Number of Keycloak instances in HA mode. Default is 1. */
    instances?: number;

    /** Resources (Requests and Limits) for KeycloakDeployment. */
    keycloakDeploymentSpec?: {
      /** Experimental section NOTE: This section might change or get removed without any notice. It may also cause the deployment to behave in an unpredictable fashion. Please use with care. */
      experimental?: {
        /** Arguments to the entrypoint. Translates into Container CMD. */
        args?: string[];

        /** Container command. Translates into Container ENTRYPOINT. */
        command?: string[];

        /** List of environment variables to set in the container. */
        env?: {
          /** Name of the environment variable. Must be a C_IDENTIFIER. */
          name: string;

          /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
          value?: string;

          /** Source for the environment variable's value. Cannot be used if value is not empty. */
          valueFrom?: {
            /** Selects a key of a ConfigMap. */
            configMapKeyRef?: {
              /** The key to select. */
              key: string;

              /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;

              /** Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };

            /** Selects a field of the pod: supports metadata.name, metadata.namespace, metadata.labels, metadata.annotations, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs. */
            fieldRef?: {
              /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
              apiVersion?: string;

              /** Path of the field to select in the specified API version. */
              fieldPath: string;
            };

            /** Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
            resourceFieldRef?: {
              /** Container name: required for volumes, optional for env vars */
              containerName?: string;

              /** Specifies the output format of the exposed resources, defaults to "1" */
              divisor?: number | string;

              /** Required: resource to select */
              resource: string;
            };

            /** Selects a key of a secret in the pod's namespace */
            secretKeyRef?: {
              /** The key of the secret to select from.  Must be a valid secret key. */
              key: string;

              /** Name of the referent. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectsnames#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;

              /** Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
        }[];

        /** Additional volume mounts */
        volumes?: {
          /** Permissions mode. */
          defaultMode?: number;

          items?: {
            /** ConfigMap mount */
            configMap?: {
              /** ConfigMap mount details */
              items?: {
                /** The key to project. */
                key: string;

                /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
                mode?: number;

                /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
                path: string;
              }[];

              /** An absolute path where to mount it */
              mountPath: string;

              /** ConfigMap name */
              name?: string;
            };
          }[];
        };
      };

      /** Resources (Requests and Limits) for the Pods. */
      resources?: {
        /** Limits describes the maximum amount of compute resources allowed. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
        limits?: {
          [key: string]: number | string;
        };

        /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
        requests?: {
          [key: string]: number | string;
        };
      };
    };

    /** Specify Migration configuration */
    migration?: {
      /** Set it to config backup policy for migration */
      backups?: {
        /** If set to true, the operator will do database backup before doing migration */
        enabled?: boolean;
      };
    };

    /** Specify PodDisruptionBudget configuration. */
    podDisruptionBudget?: {
      /** If set to true, the operator will create a PodDistruptionBudget for the Keycloak deployment and set its `maxUnavailable` value to 1. */
      enabled?: boolean;
    };

    /** Resources (Requests and Limits) for PostgresDeployment. */
    postgresDeploymentSpec?: {
      /** Resources (Requests and Limits) for the Pods. */
      resources?: {
        /** Limits describes the maximum amount of compute resources allowed. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
        limits?: {
          [key: string]: number | string;
        };

        /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https:kubernetes.iodocsconceptsconfigurationmanage-compute-resources-container */
        requests?: {
          [key: string]: number | string;
        };
      };
    };

    /** Profile used for controlling Operator behavior. Default is empty. */
    profile?: string;

    /** Name of the StorageClass for Postgresql Persistent Volume Claim */
    storageClassName?: string;

    /** When set to true, this Keycloak will be marked as unmanaged and will not be managed by this operator. It can then be used for targeting purposes. */
    unmanaged?: boolean;
  };

  /** KeycloakStatus defines the observed state of Keycloak. */
  status?: {
    /** The secret where the admin credentials are to be found. */
    credentialSecret: string;

    /** Service IP and Port for in-cluster access to the keycloak instance. */
    internalURL: string;

    /** Human-readable message indicating details about current operator phase or error. */
    message: string;

    /** Current phase of the operator. */
    phase: string;

    /** True if all resources are in a ready state and all work is done. */
    ready: boolean;

    /** A map of all the secondary resources types and names created for this CR. e.g "Deployment": [ "DeploymentName1", "DeploymentName2" ]. */
    secondaryResources?: {
      [key: string]: string[];
    };

    /** Version of Keycloak or RHSSO running on the cluster. */
    version: string;
  };
};
export function createKeycloak<T extends Omit<Keycloak, "apiVersion" | "kind">>(
  data: T,
): Keycloak & T & Pick<Keycloak, "apiVersion" | "kind"> {
  return { apiVersion: "keycloak.org/v1alpha1", kind: "Keycloak", ...data };
}
