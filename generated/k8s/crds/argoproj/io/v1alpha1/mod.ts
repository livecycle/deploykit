/* Generated for argoproj/io/v1alpha1/mod.ts */
import { ObjectMeta } from "https://deno.land/x/gh:yshayy:deploykit@0.0.10/generated/k8s/v1.18.3/apimachinery/pkg/apis/meta/v1/mod.ts";

undefined;
export type AnalysisRun = {
  apiVersion?: string;

  kind?: string;

  metadata?: ObjectMeta;

  spec: {
    args?: {
      name: string;

      value?: string;

      valueFrom?: {
        secretKeyRef: {
          key: string;

          name: string;
        };
      };
    }[];

    metrics: {
      consecutiveErrorLimit?: number;

      count?: number;

      failureCondition?: string;

      failureLimit?: number;

      inconclusiveLimit?: number;

      initialDelay?: string;

      interval?: string;

      name: string;

      provider: {
        job: {
          metadata?: {};

          spec: {
            activeDeadlineSeconds?: number;

            backoffLimit?: number;

            completions?: number;

            manualSelector?: boolean;

            parallelism?: number;

            selector?: {
              matchExpressions?: {
                key: string;

                operator: string;

                values?: string[];
              }[];

              matchLabels?: {
                [key: string]: string;
              };
            };

            template: {
              metadata?: {};

              spec: {
                activeDeadlineSeconds?: number;

                affinity?: {
                  nodeAffinity?: {
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      preference: {
                        matchExpressions?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];

                        matchFields?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];
                      };

                      weight: number;
                    }[];

                    requiredDuringSchedulingIgnoredDuringExecution: {
                      nodeSelectorTerms: {
                        matchExpressions?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];

                        matchFields?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];
                      }[];
                    };
                  };

                  podAffinity?: {
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      podAffinityTerm: {
                        labelSelector?: {
                          matchExpressions?: {
                            key: string;

                            operator: string;

                            values?: string[];
                          }[];

                          matchLabels?: {
                            [key: string]: string;
                          };
                        };

                        namespaces?: string[];

                        topologyKey: string;
                      };

                      weight: number;
                    }[];

                    requiredDuringSchedulingIgnoredDuringExecution?: {
                      labelSelector?: {
                        matchExpressions?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];

                        matchLabels?: {
                          [key: string]: string;
                        };
                      };

                      namespaces?: string[];

                      topologyKey: string;
                    }[];
                  };

                  podAntiAffinity?: {
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      podAffinityTerm: {
                        labelSelector?: {
                          matchExpressions?: {
                            key: string;

                            operator: string;

                            values?: string[];
                          }[];

                          matchLabels?: {
                            [key: string]: string;
                          };
                        };

                        namespaces?: string[];

                        topologyKey: string;
                      };

                      weight: number;
                    }[];

                    requiredDuringSchedulingIgnoredDuringExecution?: {
                      labelSelector?: {
                        matchExpressions?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];

                        matchLabels?: {
                          [key: string]: string;
                        };
                      };

                      namespaces?: string[];

                      topologyKey: string;
                    }[];
                  };
                };

                automountServiceAccountToken?: boolean;

                containers: {
                  args?: string[];

                  command?: string[];

                  env?: {
                    name: string;

                    value?: string;

                    valueFrom?: {
                      configMapKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };
                    };
                  }[];

                  envFrom?: {
                    configMapRef?: {
                      name?: string;

                      optional?: boolean;
                    };

                    prefix?: string;

                    secretRef?: {
                      name?: string;

                      optional?: boolean;
                    };
                  }[];

                  image?: string;

                  imagePullPolicy?: string;

                  lifecycle?: {
                    postStart?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };
                  };

                  livenessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  name: string;

                  ports?: {
                    containerPort: number;

                    hostIP?: string;

                    hostPort?: number;

                    name?: string;

                    protocol?: string;
                  }[];

                  readinessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  resources?: {};

                  securityContext?: {
                    allowPrivilegeEscalation?: boolean;

                    capabilities?: {
                      add?: string[];

                      drop?: string[];
                    };

                    privileged?: boolean;

                    procMount?: string;

                    readOnlyRootFilesystem?: boolean;

                    runAsGroup?: number;

                    runAsNonRoot?: boolean;

                    runAsUser?: number;

                    seLinuxOptions?: {
                      level?: string;

                      role?: string;

                      type?: string;

                      user?: string;
                    };

                    windowsOptions?: {
                      gmsaCredentialSpec?: string;

                      gmsaCredentialSpecName?: string;

                      runAsUserName?: string;
                    };
                  };

                  startupProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  stdin?: boolean;

                  stdinOnce?: boolean;

                  terminationMessagePath?: string;

                  terminationMessagePolicy?: string;

                  tty?: boolean;

                  volumeDevices?: {
                    devicePath: string;

                    name: string;
                  }[];

                  volumeMounts?: {
                    mountPath: string;

                    mountPropagation?: string;

                    name: string;

                    readOnly?: boolean;

                    subPath?: string;

                    subPathExpr?: string;
                  }[];

                  workingDir?: string;
                }[];

                dnsConfig?: {
                  nameservers?: string[];

                  options?: {
                    name?: string;

                    value?: string;
                  }[];

                  searches?: string[];
                };

                dnsPolicy?: string;

                enableServiceLinks?: boolean;

                ephemeralContainers?: {
                  args?: string[];

                  command?: string[];

                  env?: {
                    name: string;

                    value?: string;

                    valueFrom?: {
                      configMapKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };
                    };
                  }[];

                  envFrom?: {
                    configMapRef?: {
                      name?: string;

                      optional?: boolean;
                    };

                    prefix?: string;

                    secretRef?: {
                      name?: string;

                      optional?: boolean;
                    };
                  }[];

                  image?: string;

                  imagePullPolicy?: string;

                  lifecycle?: {
                    postStart?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };
                  };

                  livenessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  name: string;

                  ports?: {
                    containerPort: number;

                    hostIP?: string;

                    hostPort?: number;

                    name?: string;

                    protocol?: string;
                  }[];

                  readinessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  resources?: {};

                  securityContext?: {
                    allowPrivilegeEscalation?: boolean;

                    capabilities?: {
                      add?: string[];

                      drop?: string[];
                    };

                    privileged?: boolean;

                    procMount?: string;

                    readOnlyRootFilesystem?: boolean;

                    runAsGroup?: number;

                    runAsNonRoot?: boolean;

                    runAsUser?: number;

                    seLinuxOptions?: {
                      level?: string;

                      role?: string;

                      type?: string;

                      user?: string;
                    };

                    windowsOptions?: {
                      gmsaCredentialSpec?: string;

                      gmsaCredentialSpecName?: string;

                      runAsUserName?: string;
                    };
                  };

                  startupProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  stdin?: boolean;

                  stdinOnce?: boolean;

                  targetContainerName?: string;

                  terminationMessagePath?: string;

                  terminationMessagePolicy?: string;

                  tty?: boolean;

                  volumeDevices?: {
                    devicePath: string;

                    name: string;
                  }[];

                  volumeMounts?: {
                    mountPath: string;

                    mountPropagation?: string;

                    name: string;

                    readOnly?: boolean;

                    subPath?: string;

                    subPathExpr?: string;
                  }[];

                  workingDir?: string;
                }[];

                hostAliases?: {
                  hostnames?: string[];

                  ip?: string;
                }[];

                hostIPC?: boolean;

                hostNetwork?: boolean;

                hostPID?: boolean;

                hostname?: string;

                imagePullSecrets?: {
                  name?: string;
                }[];

                initContainers?: {
                  args?: string[];

                  command?: string[];

                  env?: {
                    name: string;

                    value?: string;

                    valueFrom?: {
                      configMapKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };
                    };
                  }[];

                  envFrom?: {
                    configMapRef?: {
                      name?: string;

                      optional?: boolean;
                    };

                    prefix?: string;

                    secretRef?: {
                      name?: string;

                      optional?: boolean;
                    };
                  }[];

                  image?: string;

                  imagePullPolicy?: string;

                  lifecycle?: {
                    postStart?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };
                  };

                  livenessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  name: string;

                  ports?: {
                    containerPort: number;

                    hostIP?: string;

                    hostPort?: number;

                    name?: string;

                    protocol?: string;
                  }[];

                  readinessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  resources?: {};

                  securityContext?: {
                    allowPrivilegeEscalation?: boolean;

                    capabilities?: {
                      add?: string[];

                      drop?: string[];
                    };

                    privileged?: boolean;

                    procMount?: string;

                    readOnlyRootFilesystem?: boolean;

                    runAsGroup?: number;

                    runAsNonRoot?: boolean;

                    runAsUser?: number;

                    seLinuxOptions?: {
                      level?: string;

                      role?: string;

                      type?: string;

                      user?: string;
                    };

                    windowsOptions?: {
                      gmsaCredentialSpec?: string;

                      gmsaCredentialSpecName?: string;

                      runAsUserName?: string;
                    };
                  };

                  startupProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  stdin?: boolean;

                  stdinOnce?: boolean;

                  terminationMessagePath?: string;

                  terminationMessagePolicy?: string;

                  tty?: boolean;

                  volumeDevices?: {
                    devicePath: string;

                    name: string;
                  }[];

                  volumeMounts?: {
                    mountPath: string;

                    mountPropagation?: string;

                    name: string;

                    readOnly?: boolean;

                    subPath?: string;

                    subPathExpr?: string;
                  }[];

                  workingDir?: string;
                }[];

                nodeName?: string;

                nodeSelector?: {
                  [key: string]: string;
                };

                overhead?: {
                  [key: string]: number | string;
                };

                preemptionPolicy?: string;

                priority?: number;

                priorityClassName?: string;

                readinessGates?: {
                  conditionType: string;
                }[];

                restartPolicy?: string;

                runtimeClassName?: string;

                schedulerName?: string;

                securityContext?: {
                  fsGroup?: number;

                  runAsGroup?: number;

                  runAsNonRoot?: boolean;

                  runAsUser?: number;

                  seLinuxOptions?: {
                    level?: string;

                    role?: string;

                    type?: string;

                    user?: string;
                  };

                  supplementalGroups?: number[];

                  sysctls?: {
                    name: string;

                    value: string;
                  }[];

                  windowsOptions?: {
                    gmsaCredentialSpec?: string;

                    gmsaCredentialSpecName?: string;

                    runAsUserName?: string;
                  };
                };

                serviceAccount?: string;

                serviceAccountName?: string;

                shareProcessNamespace?: boolean;

                subdomain?: string;

                terminationGracePeriodSeconds?: number;

                tolerations?: {
                  effect?: string;

                  key?: string;

                  operator?: string;

                  tolerationSeconds?: number;

                  value?: string;
                }[];

                topologySpreadConstraints?: {
                  labelSelector?: {
                    matchExpressions?: {
                      key: string;

                      operator: string;

                      values?: string[];
                    }[];

                    matchLabels?: {
                      [key: string]: string;
                    };
                  };

                  maxSkew: number;

                  topologyKey: string;

                  whenUnsatisfiable: string;
                }[];

                volumes?: {
                  awsElasticBlockStore: {
                    fsType?: string;

                    partition?: number;

                    readOnly?: boolean;

                    volumeID: string;
                  };

                  azureDisk: {
                    cachingMode?: string;

                    diskName: string;

                    diskURI: string;

                    fsType?: string;

                    kind?: string;

                    readOnly?: boolean;
                  };

                  azureFile: {
                    readOnly?: boolean;

                    secretName: string;

                    shareName: string;
                  };

                  cephfs: {
                    monitors: string[];

                    path?: string;

                    readOnly?: boolean;

                    secretFile?: string;

                    secretRef?: {
                      name?: string;
                    };

                    user?: string;
                  };

                  cinder: {
                    fsType?: string;

                    readOnly?: boolean;

                    secretRef?: {
                      name?: string;
                    };

                    volumeID: string;
                  };

                  csi: {
                    driver: string;

                    fsType?: string;

                    nodePublishSecretRef?: {
                      name?: string;
                    };

                    readOnly?: boolean;

                    volumeAttributes?: {
                      [key: string]: string;
                    };
                  };

                  emptyDir?: {
                    medium?: string;

                    sizeLimit?: number | string;
                  };

                  fc?: {
                    fsType?: string;

                    lun?: number;

                    readOnly?: boolean;

                    targetWWNs?: string[];

                    wwids?: string[];
                  };

                  flexVolume: {
                    driver: string;

                    fsType?: string;

                    options?: {
                      [key: string]: string;
                    };

                    readOnly?: boolean;

                    secretRef?: {
                      name?: string;
                    };
                  };

                  flocker?: {
                    datasetName?: string;

                    datasetUUID?: string;
                  };

                  gcePersistentDisk: {
                    fsType?: string;

                    partition?: number;

                    pdName: string;

                    readOnly?: boolean;
                  };

                  gitRepo: {
                    directory?: string;

                    repository: string;

                    revision?: string;
                  };

                  glusterfs: {
                    endpoints: string;

                    path: string;

                    readOnly?: boolean;
                  };

                  hostPath: {
                    path: string;

                    type?: string;
                  };

                  iscsi: {
                    chapAuthDiscovery?: boolean;

                    chapAuthSession?: boolean;

                    fsType?: string;

                    initiatorName?: string;

                    iqn: string;

                    iscsiInterface?: string;

                    lun: number;

                    portals?: string[];

                    readOnly?: boolean;

                    secretRef?: {
                      name?: string;
                    };

                    targetPortal: string;
                  };

                  name: string;

                  nfs: {
                    path: string;

                    readOnly?: boolean;

                    server: string;
                  };

                  persistentVolumeClaim: {
                    claimName: string;

                    readOnly?: boolean;
                  };

                  photonPersistentDisk: {
                    fsType?: string;

                    pdID: string;
                  };

                  portworxVolume: {
                    fsType?: string;

                    readOnly?: boolean;

                    volumeID: string;
                  };

                  projected: {
                    defaultMode?: number;

                    sources: {
                      serviceAccountToken: {
                        audience?: string;

                        expirationSeconds?: number;

                        path: string;
                      };
                    }[];
                  };

                  quobyte: {
                    group?: string;

                    readOnly?: boolean;

                    registry: string;

                    tenant?: string;

                    user?: string;

                    volume: string;
                  };

                  rbd: {
                    fsType?: string;

                    image: string;

                    keyring?: string;

                    monitors: string[];

                    pool?: string;

                    readOnly?: boolean;

                    secretRef?: {
                      name?: string;
                    };

                    user?: string;
                  };

                  scaleIO: {
                    fsType?: string;

                    gateway: string;

                    protectionDomain?: string;

                    readOnly?: boolean;

                    secretRef: {
                      name?: string;
                    };

                    sslEnabled?: boolean;

                    storageMode?: string;

                    storagePool?: string;

                    system: string;

                    volumeName?: string;
                  };

                  storageos?: {
                    fsType?: string;

                    readOnly?: boolean;

                    secretRef?: {
                      name?: string;
                    };

                    volumeName?: string;

                    volumeNamespace?: string;
                  };

                  vsphereVolume: {
                    fsType?: string;

                    storagePolicyID?: string;

                    storagePolicyName?: string;

                    volumePath: string;
                  };
                }[];
              };
            };

            ttlSecondsAfterFinished?: number;
          };
        };

        kayenta: {
          address: string;

          application: string;

          canaryConfigName: string;

          configurationAccountName: string;

          metricsAccountName: string;

          scopes: {
            controlScope: {
              end: string;

              region: string;

              scope: string;

              start: string;

              step: number;
            };

            experimentScope: {
              end: string;

              region: string;

              scope: string;

              start: string;

              step: number;
            };

            name: string;
          }[];

          storageAccountName: string;

          threshold: {
            marginal: number;

            pass: number;
          };
        };

        prometheus?: {
          address?: string;

          query?: string;
        };

        wavefront?: {
          address?: string;

          query?: string;
        };

        web: {
          headers?: {
            key: string;

            value: string;
          }[];

          jsonPath: string;

          timeoutSeconds?: number;

          url: string;
        };
      };

      successCondition?: string;
    }[];

    terminate?: boolean;
  };

  status: {
    message?: string;

    metricResults?: {
      consecutiveError?: number;

      count?: number;

      error?: number;

      failed?: number;

      inconclusive?: number;

      measurements?: {
        finishedAt?: string;

        message?: string;

        metadata?: {
          [key: string]: string;
        };

        phase: string;

        resumeAt?: string;

        startedAt?: string;

        value?: string;
      }[];

      message?: string;

      name: string;

      phase: string;

      successful?: number;
    }[];

    phase: string;

    startedAt?: string;
  };
};
export function createAnalysisRun(
  data: Omit<AnalysisRun, "apiVersion" | "kind">,
): AnalysisRun {
  return { apiVersion: "argoproj.io/v1alpha1", kind: "AnalysisRun", ...data };
}

undefined;
export type Rollout = {
  apiVersion?: string;

  kind?: string;

  metadata?: ObjectMeta;

  spec: {
    minReadySeconds?: number;

    paused?: boolean;

    progressDeadlineSeconds?: number;

    replicas?: number;

    restartAt?: string;

    revisionHistoryLimit?: number;

    selector: {
      matchExpressions?: {
        key: string;

        operator: string;

        values?: string[];
      }[];

      matchLabels?: {
        [key: string]: string;
      };
    };

    strategy?: {
      blueGreen: {
        activeService: string;

        antiAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution: {
            weight: number;
          };

          requiredDuringSchedulingIgnoredDuringExecution?: {};
        };

        autoPromotionEnabled?: boolean;

        autoPromotionSeconds?: number;

        postPromotionAnalysis?: {
          args?: {
            name: string;

            value?: string;

            valueFrom?: {
              podTemplateHashValue?: string;
            };
          }[];

          templateName?: string;

          templates?: {
            templateName: string;
          }[];
        };

        prePromotionAnalysis?: {
          args?: {
            name: string;

            value?: string;

            valueFrom?: {
              podTemplateHashValue?: string;
            };
          }[];

          templateName?: string;

          templates?: {
            templateName: string;
          }[];
        };

        previewReplicaCount?: number;

        previewService?: string;

        scaleDownDelayRevisionLimit?: number;

        scaleDownDelaySeconds?: number;
      };

      canary?: {
        analysis?: {
          args?: {
            name: string;

            value?: string;

            valueFrom?: {
              podTemplateHashValue?: string;
            };
          }[];

          startingStep?: number;

          templateName?: string;

          templates?: {
            templateName: string;
          }[];
        };

        antiAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution: {
            weight: number;
          };

          requiredDuringSchedulingIgnoredDuringExecution?: {};
        };

        canaryService?: string;

        maxSurge?: number | string;

        maxUnavailable?: number | string;

        stableService?: string;

        steps?: {
          analysis?: {
            args?: {
              name: string;

              value?: string;

              valueFrom?: {
                podTemplateHashValue?: string;
              };
            }[];

            templateName?: string;

            templates?: {
              templateName: string;
            }[];
          };

          experiment: {
            analyses?: {
              args?: {
                name: string;

                value?: string;

                valueFrom?: {
                  podTemplateHashValue?: string;
                };
              }[];

              name: string;

              templateName: string;
            }[];

            duration?: string;

            templates: {
              metadata?: {
                annotations?: {
                  [key: string]: string;
                };

                labels?: {
                  [key: string]: string;
                };
              };

              name: string;

              replicas?: number;

              selector?: {
                matchExpressions?: {
                  key: string;

                  operator: string;

                  values?: string[];
                }[];

                matchLabels?: {
                  [key: string]: string;
                };
              };

              specRef: string;
            }[];
          };

          pause?: {
            duration?: number | string;
          };

          setWeight?: number;
        }[];

        trafficRouting?: {
          alb: {
            annotationPrefix?: string;

            ingress: string;

            servicePort: number;
          };

          istio: {
            virtualService: {
              name: string;

              routes: string[];
            };
          };

          nginx: {
            additionalIngressAnnotations?: {
              [key: string]: string;
            };

            annotationPrefix?: string;

            stableIngress: string;
          };
        };
      };
    };

    template: {
      metadata?: {};

      spec: {
        activeDeadlineSeconds?: number;

        affinity?: {
          nodeAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              preference: {
                matchExpressions?: {
                  key: string;

                  operator: string;

                  values?: string[];
                }[];

                matchFields?: {
                  key: string;

                  operator: string;

                  values?: string[];
                }[];
              };

              weight: number;
            }[];

            requiredDuringSchedulingIgnoredDuringExecution: {
              nodeSelectorTerms: {
                matchExpressions?: {
                  key: string;

                  operator: string;

                  values?: string[];
                }[];

                matchFields?: {
                  key: string;

                  operator: string;

                  values?: string[];
                }[];
              }[];
            };
          };

          podAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              podAffinityTerm: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;

                    operator: string;

                    values?: string[];
                  }[];

                  matchLabels?: {
                    [key: string]: string;
                  };
                };

                namespaces?: string[];

                topologyKey: string;
              };

              weight: number;
            }[];

            requiredDuringSchedulingIgnoredDuringExecution?: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;

                  operator: string;

                  values?: string[];
                }[];

                matchLabels?: {
                  [key: string]: string;
                };
              };

              namespaces?: string[];

              topologyKey: string;
            }[];
          };

          podAntiAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              podAffinityTerm: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;

                    operator: string;

                    values?: string[];
                  }[];

                  matchLabels?: {
                    [key: string]: string;
                  };
                };

                namespaces?: string[];

                topologyKey: string;
              };

              weight: number;
            }[];

            requiredDuringSchedulingIgnoredDuringExecution?: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;

                  operator: string;

                  values?: string[];
                }[];

                matchLabels?: {
                  [key: string]: string;
                };
              };

              namespaces?: string[];

              topologyKey: string;
            }[];
          };
        };

        automountServiceAccountToken?: boolean;

        containers: {
          args?: string[];

          command?: string[];

          env?: {
            name: string;

            value?: string;

            valueFrom?: {
              configMapKeyRef: {
                key: string;

                name?: string;

                optional?: boolean;
              };

              fieldRef: {
                apiVersion?: string;

                fieldPath: string;
              };

              resourceFieldRef: {
                containerName?: string;

                divisor?: number | string;

                resource: string;
              };

              secretKeyRef: {
                key: string;

                name?: string;

                optional?: boolean;
              };
            };
          }[];

          envFrom?: {
            configMapRef?: {
              name?: string;

              optional?: boolean;
            };

            prefix?: string;

            secretRef?: {
              name?: string;

              optional?: boolean;
            };
          }[];

          image?: string;

          imagePullPolicy?: string;

          lifecycle?: {
            postStart?: {
              exec?: {
                command?: string[];
              };

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket: {
                host?: string;

                port: number | string;
              };
            };

            preStop?: {
              exec?: {
                command?: string[];
              };

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket: {
                host?: string;

                port: number | string;
              };
            };
          };

          livenessProbe?: {
            exec?: {
              command?: string[];
            };

            failureThreshold?: number;

            httpGet: {
              host?: string;

              httpHeaders?: {
                name: string;

                value: string;
              }[];

              path?: string;

              port: number | string;

              scheme?: string;
            };

            initialDelaySeconds?: number;

            periodSeconds?: number;

            successThreshold?: number;

            tcpSocket: {
              host?: string;

              port: number | string;
            };

            timeoutSeconds?: number;
          };

          name: string;

          ports?: {
            containerPort: number;

            hostIP?: string;

            hostPort?: number;

            name?: string;

            protocol?: string;
          }[];

          readinessProbe?: {
            exec?: {
              command?: string[];
            };

            failureThreshold?: number;

            httpGet: {
              host?: string;

              httpHeaders?: {
                name: string;

                value: string;
              }[];

              path?: string;

              port: number | string;

              scheme?: string;
            };

            initialDelaySeconds?: number;

            periodSeconds?: number;

            successThreshold?: number;

            tcpSocket: {
              host?: string;

              port: number | string;
            };

            timeoutSeconds?: number;
          };

          resources?: {};

          securityContext?: {
            allowPrivilegeEscalation?: boolean;

            capabilities?: {
              add?: string[];

              drop?: string[];
            };

            privileged?: boolean;

            procMount?: string;

            readOnlyRootFilesystem?: boolean;

            runAsGroup?: number;

            runAsNonRoot?: boolean;

            runAsUser?: number;

            seLinuxOptions?: {
              level?: string;

              role?: string;

              type?: string;

              user?: string;
            };

            windowsOptions?: {
              gmsaCredentialSpec?: string;

              gmsaCredentialSpecName?: string;

              runAsUserName?: string;
            };
          };

          startupProbe?: {
            exec?: {
              command?: string[];
            };

            failureThreshold?: number;

            httpGet: {
              host?: string;

              httpHeaders?: {
                name: string;

                value: string;
              }[];

              path?: string;

              port: number | string;

              scheme?: string;
            };

            initialDelaySeconds?: number;

            periodSeconds?: number;

            successThreshold?: number;

            tcpSocket: {
              host?: string;

              port: number | string;
            };

            timeoutSeconds?: number;
          };

          stdin?: boolean;

          stdinOnce?: boolean;

          terminationMessagePath?: string;

          terminationMessagePolicy?: string;

          tty?: boolean;

          volumeDevices?: {
            devicePath: string;

            name: string;
          }[];

          volumeMounts?: {
            mountPath: string;

            mountPropagation?: string;

            name: string;

            readOnly?: boolean;

            subPath?: string;

            subPathExpr?: string;
          }[];

          workingDir?: string;
        }[];

        dnsConfig?: {
          nameservers?: string[];

          options?: {
            name?: string;

            value?: string;
          }[];

          searches?: string[];
        };

        dnsPolicy?: string;

        enableServiceLinks?: boolean;

        ephemeralContainers?: {
          args?: string[];

          command?: string[];

          env?: {
            name: string;

            value?: string;

            valueFrom?: {
              configMapKeyRef: {
                key: string;

                name?: string;

                optional?: boolean;
              };

              fieldRef: {
                apiVersion?: string;

                fieldPath: string;
              };

              resourceFieldRef: {
                containerName?: string;

                divisor?: number | string;

                resource: string;
              };

              secretKeyRef: {
                key: string;

                name?: string;

                optional?: boolean;
              };
            };
          }[];

          envFrom?: {
            configMapRef?: {
              name?: string;

              optional?: boolean;
            };

            prefix?: string;

            secretRef?: {
              name?: string;

              optional?: boolean;
            };
          }[];

          image?: string;

          imagePullPolicy?: string;

          lifecycle?: {
            postStart?: {
              exec?: {
                command?: string[];
              };

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket: {
                host?: string;

                port: number | string;
              };
            };

            preStop?: {
              exec?: {
                command?: string[];
              };

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket: {
                host?: string;

                port: number | string;
              };
            };
          };

          livenessProbe?: {
            exec?: {
              command?: string[];
            };

            failureThreshold?: number;

            httpGet: {
              host?: string;

              httpHeaders?: {
                name: string;

                value: string;
              }[];

              path?: string;

              port: number | string;

              scheme?: string;
            };

            initialDelaySeconds?: number;

            periodSeconds?: number;

            successThreshold?: number;

            tcpSocket: {
              host?: string;

              port: number | string;
            };

            timeoutSeconds?: number;
          };

          name: string;

          ports?: {
            containerPort: number;

            hostIP?: string;

            hostPort?: number;

            name?: string;

            protocol?: string;
          }[];

          readinessProbe?: {
            exec?: {
              command?: string[];
            };

            failureThreshold?: number;

            httpGet: {
              host?: string;

              httpHeaders?: {
                name: string;

                value: string;
              }[];

              path?: string;

              port: number | string;

              scheme?: string;
            };

            initialDelaySeconds?: number;

            periodSeconds?: number;

            successThreshold?: number;

            tcpSocket: {
              host?: string;

              port: number | string;
            };

            timeoutSeconds?: number;
          };

          resources?: {};

          securityContext?: {
            allowPrivilegeEscalation?: boolean;

            capabilities?: {
              add?: string[];

              drop?: string[];
            };

            privileged?: boolean;

            procMount?: string;

            readOnlyRootFilesystem?: boolean;

            runAsGroup?: number;

            runAsNonRoot?: boolean;

            runAsUser?: number;

            seLinuxOptions?: {
              level?: string;

              role?: string;

              type?: string;

              user?: string;
            };

            windowsOptions?: {
              gmsaCredentialSpec?: string;

              gmsaCredentialSpecName?: string;

              runAsUserName?: string;
            };
          };

          startupProbe?: {
            exec?: {
              command?: string[];
            };

            failureThreshold?: number;

            httpGet: {
              host?: string;

              httpHeaders?: {
                name: string;

                value: string;
              }[];

              path?: string;

              port: number | string;

              scheme?: string;
            };

            initialDelaySeconds?: number;

            periodSeconds?: number;

            successThreshold?: number;

            tcpSocket: {
              host?: string;

              port: number | string;
            };

            timeoutSeconds?: number;
          };

          stdin?: boolean;

          stdinOnce?: boolean;

          targetContainerName?: string;

          terminationMessagePath?: string;

          terminationMessagePolicy?: string;

          tty?: boolean;

          volumeDevices?: {
            devicePath: string;

            name: string;
          }[];

          volumeMounts?: {
            mountPath: string;

            mountPropagation?: string;

            name: string;

            readOnly?: boolean;

            subPath?: string;

            subPathExpr?: string;
          }[];

          workingDir?: string;
        }[];

        hostAliases?: {
          hostnames?: string[];

          ip?: string;
        }[];

        hostIPC?: boolean;

        hostNetwork?: boolean;

        hostPID?: boolean;

        hostname?: string;

        imagePullSecrets?: {
          name?: string;
        }[];

        initContainers?: {
          args?: string[];

          command?: string[];

          env?: {
            name: string;

            value?: string;

            valueFrom?: {
              configMapKeyRef: {
                key: string;

                name?: string;

                optional?: boolean;
              };

              fieldRef: {
                apiVersion?: string;

                fieldPath: string;
              };

              resourceFieldRef: {
                containerName?: string;

                divisor?: number | string;

                resource: string;
              };

              secretKeyRef: {
                key: string;

                name?: string;

                optional?: boolean;
              };
            };
          }[];

          envFrom?: {
            configMapRef?: {
              name?: string;

              optional?: boolean;
            };

            prefix?: string;

            secretRef?: {
              name?: string;

              optional?: boolean;
            };
          }[];

          image?: string;

          imagePullPolicy?: string;

          lifecycle?: {
            postStart?: {
              exec?: {
                command?: string[];
              };

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket: {
                host?: string;

                port: number | string;
              };
            };

            preStop?: {
              exec?: {
                command?: string[];
              };

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket: {
                host?: string;

                port: number | string;
              };
            };
          };

          livenessProbe?: {
            exec?: {
              command?: string[];
            };

            failureThreshold?: number;

            httpGet: {
              host?: string;

              httpHeaders?: {
                name: string;

                value: string;
              }[];

              path?: string;

              port: number | string;

              scheme?: string;
            };

            initialDelaySeconds?: number;

            periodSeconds?: number;

            successThreshold?: number;

            tcpSocket: {
              host?: string;

              port: number | string;
            };

            timeoutSeconds?: number;
          };

          name: string;

          ports?: {
            containerPort: number;

            hostIP?: string;

            hostPort?: number;

            name?: string;

            protocol?: string;
          }[];

          readinessProbe?: {
            exec?: {
              command?: string[];
            };

            failureThreshold?: number;

            httpGet: {
              host?: string;

              httpHeaders?: {
                name: string;

                value: string;
              }[];

              path?: string;

              port: number | string;

              scheme?: string;
            };

            initialDelaySeconds?: number;

            periodSeconds?: number;

            successThreshold?: number;

            tcpSocket: {
              host?: string;

              port: number | string;
            };

            timeoutSeconds?: number;
          };

          resources?: {};

          securityContext?: {
            allowPrivilegeEscalation?: boolean;

            capabilities?: {
              add?: string[];

              drop?: string[];
            };

            privileged?: boolean;

            procMount?: string;

            readOnlyRootFilesystem?: boolean;

            runAsGroup?: number;

            runAsNonRoot?: boolean;

            runAsUser?: number;

            seLinuxOptions?: {
              level?: string;

              role?: string;

              type?: string;

              user?: string;
            };

            windowsOptions?: {
              gmsaCredentialSpec?: string;

              gmsaCredentialSpecName?: string;

              runAsUserName?: string;
            };
          };

          startupProbe?: {
            exec?: {
              command?: string[];
            };

            failureThreshold?: number;

            httpGet: {
              host?: string;

              httpHeaders?: {
                name: string;

                value: string;
              }[];

              path?: string;

              port: number | string;

              scheme?: string;
            };

            initialDelaySeconds?: number;

            periodSeconds?: number;

            successThreshold?: number;

            tcpSocket: {
              host?: string;

              port: number | string;
            };

            timeoutSeconds?: number;
          };

          stdin?: boolean;

          stdinOnce?: boolean;

          terminationMessagePath?: string;

          terminationMessagePolicy?: string;

          tty?: boolean;

          volumeDevices?: {
            devicePath: string;

            name: string;
          }[];

          volumeMounts?: {
            mountPath: string;

            mountPropagation?: string;

            name: string;

            readOnly?: boolean;

            subPath?: string;

            subPathExpr?: string;
          }[];

          workingDir?: string;
        }[];

        nodeName?: string;

        nodeSelector?: {
          [key: string]: string;
        };

        overhead?: {
          [key: string]: number | string;
        };

        preemptionPolicy?: string;

        priority?: number;

        priorityClassName?: string;

        readinessGates?: {
          conditionType: string;
        }[];

        restartPolicy?: string;

        runtimeClassName?: string;

        schedulerName?: string;

        securityContext?: {
          fsGroup?: number;

          runAsGroup?: number;

          runAsNonRoot?: boolean;

          runAsUser?: number;

          seLinuxOptions?: {
            level?: string;

            role?: string;

            type?: string;

            user?: string;
          };

          supplementalGroups?: number[];

          sysctls?: {
            name: string;

            value: string;
          }[];

          windowsOptions?: {
            gmsaCredentialSpec?: string;

            gmsaCredentialSpecName?: string;

            runAsUserName?: string;
          };
        };

        serviceAccount?: string;

        serviceAccountName?: string;

        shareProcessNamespace?: boolean;

        subdomain?: string;

        terminationGracePeriodSeconds?: number;

        tolerations?: {
          effect?: string;

          key?: string;

          operator?: string;

          tolerationSeconds?: number;

          value?: string;
        }[];

        topologySpreadConstraints?: {
          labelSelector?: {
            matchExpressions?: {
              key: string;

              operator: string;

              values?: string[];
            }[];

            matchLabels?: {
              [key: string]: string;
            };
          };

          maxSkew: number;

          topologyKey: string;

          whenUnsatisfiable: string;
        }[];

        volumes?: {
          awsElasticBlockStore: {
            fsType?: string;

            partition?: number;

            readOnly?: boolean;

            volumeID: string;
          };

          azureDisk: {
            cachingMode?: string;

            diskName: string;

            diskURI: string;

            fsType?: string;

            kind?: string;

            readOnly?: boolean;
          };

          azureFile: {
            readOnly?: boolean;

            secretName: string;

            shareName: string;
          };

          cephfs: {
            monitors: string[];

            path?: string;

            readOnly?: boolean;

            secretFile?: string;

            secretRef?: {
              name?: string;
            };

            user?: string;
          };

          cinder: {
            fsType?: string;

            readOnly?: boolean;

            secretRef?: {
              name?: string;
            };

            volumeID: string;
          };

          csi: {
            driver: string;

            fsType?: string;

            nodePublishSecretRef?: {
              name?: string;
            };

            readOnly?: boolean;

            volumeAttributes?: {
              [key: string]: string;
            };
          };

          emptyDir?: {
            medium?: string;

            sizeLimit?: number | string;
          };

          fc?: {
            fsType?: string;

            lun?: number;

            readOnly?: boolean;

            targetWWNs?: string[];

            wwids?: string[];
          };

          flexVolume: {
            driver: string;

            fsType?: string;

            options?: {
              [key: string]: string;
            };

            readOnly?: boolean;

            secretRef?: {
              name?: string;
            };
          };

          flocker?: {
            datasetName?: string;

            datasetUUID?: string;
          };

          gcePersistentDisk: {
            fsType?: string;

            partition?: number;

            pdName: string;

            readOnly?: boolean;
          };

          gitRepo: {
            directory?: string;

            repository: string;

            revision?: string;
          };

          glusterfs: {
            endpoints: string;

            path: string;

            readOnly?: boolean;
          };

          hostPath: {
            path: string;

            type?: string;
          };

          iscsi: {
            chapAuthDiscovery?: boolean;

            chapAuthSession?: boolean;

            fsType?: string;

            initiatorName?: string;

            iqn: string;

            iscsiInterface?: string;

            lun: number;

            portals?: string[];

            readOnly?: boolean;

            secretRef?: {
              name?: string;
            };

            targetPortal: string;
          };

          name: string;

          nfs: {
            path: string;

            readOnly?: boolean;

            server: string;
          };

          persistentVolumeClaim: {
            claimName: string;

            readOnly?: boolean;
          };

          photonPersistentDisk: {
            fsType?: string;

            pdID: string;
          };

          portworxVolume: {
            fsType?: string;

            readOnly?: boolean;

            volumeID: string;
          };

          projected: {
            defaultMode?: number;

            sources: {
              serviceAccountToken: {
                audience?: string;

                expirationSeconds?: number;

                path: string;
              };
            }[];
          };

          quobyte: {
            group?: string;

            readOnly?: boolean;

            registry: string;

            tenant?: string;

            user?: string;

            volume: string;
          };

          rbd: {
            fsType?: string;

            image: string;

            keyring?: string;

            monitors: string[];

            pool?: string;

            readOnly?: boolean;

            secretRef?: {
              name?: string;
            };

            user?: string;
          };

          scaleIO: {
            fsType?: string;

            gateway: string;

            protectionDomain?: string;

            readOnly?: boolean;

            secretRef: {
              name?: string;
            };

            sslEnabled?: boolean;

            storageMode?: string;

            storagePool?: string;

            system: string;

            volumeName?: string;
          };

          storageos?: {
            fsType?: string;

            readOnly?: boolean;

            secretRef?: {
              name?: string;
            };

            volumeName?: string;

            volumeNamespace?: string;
          };

          vsphereVolume: {
            fsType?: string;

            storagePolicyID?: string;

            storagePolicyName?: string;

            volumePath: string;
          };
        }[];
      };
    };
  };

  status?: {
    HPAReplicas?: number;

    abort?: boolean;

    availableReplicas?: number;

    blueGreen?: {
      activeSelector?: string;

      postPromotionAnalysisRun?: string;

      prePromotionAnalysisRun?: string;

      previewSelector?: string;

      previousActiveSelector?: string;

      scaleDownDelayStartTime?: string;

      scaleUpPreviewCheckPoint?: boolean;
    };

    canary?: {
      currentBackgroundAnalysisRun?: string;

      currentExperiment?: string;

      currentStepAnalysisRun?: string;

      stableRS?: string;
    };

    collisionCount?: number;

    conditions?: {
      lastTransitionTime: string;

      lastUpdateTime: string;

      message: string;

      reason: string;

      status: string;

      type: string;
    }[];

    controllerPause?: boolean;

    currentPodHash?: string;

    currentStepHash?: string;

    currentStepIndex?: number;

    observedGeneration?: string;

    pauseConditions?: {
      reason: string;

      startTime: string;
    }[];

    readyReplicas?: number;

    replicas?: number;

    restartedAt?: string;

    selector?: string;

    stableRS?: string;

    updatedReplicas?: number;
  };
};
export function createRollout(
  data: Omit<Rollout, "apiVersion" | "kind">,
): Rollout {
  return { apiVersion: "argoproj.io/v1alpha1", kind: "Rollout", ...data };
}

undefined;
export type Experiment = {
  apiVersion?: string;

  kind?: string;

  metadata?: ObjectMeta;

  spec: {
    analyses?: {
      args?: {
        name: string;

        value?: string;

        valueFrom?: {
          secretKeyRef: {
            key: string;

            name: string;
          };
        };
      }[];

      name: string;

      requiredForCompletion?: boolean;

      templateName: string;
    }[];

    duration?: string;

    progressDeadlineSeconds?: number;

    templates: {
      minReadySeconds?: number;

      name: string;

      replicas?: number;

      selector: {
        matchExpressions?: {
          key: string;

          operator: string;

          values?: string[];
        }[];

        matchLabels?: {
          [key: string]: string;
        };
      };

      template: {
        metadata?: {};

        spec: {
          activeDeadlineSeconds?: number;

          affinity?: {
            nodeAffinity?: {
              preferredDuringSchedulingIgnoredDuringExecution?: {
                preference: {
                  matchExpressions?: {
                    key: string;

                    operator: string;

                    values?: string[];
                  }[];

                  matchFields?: {
                    key: string;

                    operator: string;

                    values?: string[];
                  }[];
                };

                weight: number;
              }[];

              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: {
                  matchExpressions?: {
                    key: string;

                    operator: string;

                    values?: string[];
                  }[];

                  matchFields?: {
                    key: string;

                    operator: string;

                    values?: string[];
                  }[];
                }[];
              };
            };

            podAffinity?: {
              preferredDuringSchedulingIgnoredDuringExecution?: {
                podAffinityTerm: {
                  labelSelector?: {
                    matchExpressions?: {
                      key: string;

                      operator: string;

                      values?: string[];
                    }[];

                    matchLabels?: {
                      [key: string]: string;
                    };
                  };

                  namespaces?: string[];

                  topologyKey: string;
                };

                weight: number;
              }[];

              requiredDuringSchedulingIgnoredDuringExecution?: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;

                    operator: string;

                    values?: string[];
                  }[];

                  matchLabels?: {
                    [key: string]: string;
                  };
                };

                namespaces?: string[];

                topologyKey: string;
              }[];
            };

            podAntiAffinity?: {
              preferredDuringSchedulingIgnoredDuringExecution?: {
                podAffinityTerm: {
                  labelSelector?: {
                    matchExpressions?: {
                      key: string;

                      operator: string;

                      values?: string[];
                    }[];

                    matchLabels?: {
                      [key: string]: string;
                    };
                  };

                  namespaces?: string[];

                  topologyKey: string;
                };

                weight: number;
              }[];

              requiredDuringSchedulingIgnoredDuringExecution?: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;

                    operator: string;

                    values?: string[];
                  }[];

                  matchLabels?: {
                    [key: string]: string;
                  };
                };

                namespaces?: string[];

                topologyKey: string;
              }[];
            };
          };

          automountServiceAccountToken?: boolean;

          containers: {
            args?: string[];

            command?: string[];

            env?: {
              name: string;

              value?: string;

              valueFrom?: {
                configMapKeyRef: {
                  key: string;

                  name?: string;

                  optional?: boolean;
                };

                fieldRef: {
                  apiVersion?: string;

                  fieldPath: string;
                };

                resourceFieldRef: {
                  containerName?: string;

                  divisor?: number | string;

                  resource: string;
                };

                secretKeyRef: {
                  key: string;

                  name?: string;

                  optional?: boolean;
                };
              };
            }[];

            envFrom?: {
              configMapRef?: {
                name?: string;

                optional?: boolean;
              };

              prefix?: string;

              secretRef?: {
                name?: string;

                optional?: boolean;
              };
            }[];

            image?: string;

            imagePullPolicy?: string;

            lifecycle?: {
              postStart?: {
                exec?: {
                  command?: string[];
                };

                httpGet: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket: {
                  host?: string;

                  port: number | string;
                };
              };

              preStop?: {
                exec?: {
                  command?: string[];
                };

                httpGet: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket: {
                  host?: string;

                  port: number | string;
                };
              };
            };

            livenessProbe?: {
              exec?: {
                command?: string[];
              };

              failureThreshold?: number;

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              initialDelaySeconds?: number;

              periodSeconds?: number;

              successThreshold?: number;

              tcpSocket: {
                host?: string;

                port: number | string;
              };

              timeoutSeconds?: number;
            };

            name: string;

            ports?: {
              containerPort: number;

              hostIP?: string;

              hostPort?: number;

              name?: string;

              protocol?: string;
            }[];

            readinessProbe?: {
              exec?: {
                command?: string[];
              };

              failureThreshold?: number;

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              initialDelaySeconds?: number;

              periodSeconds?: number;

              successThreshold?: number;

              tcpSocket: {
                host?: string;

                port: number | string;
              };

              timeoutSeconds?: number;
            };

            resources?: {};

            securityContext?: {
              allowPrivilegeEscalation?: boolean;

              capabilities?: {
                add?: string[];

                drop?: string[];
              };

              privileged?: boolean;

              procMount?: string;

              readOnlyRootFilesystem?: boolean;

              runAsGroup?: number;

              runAsNonRoot?: boolean;

              runAsUser?: number;

              seLinuxOptions?: {
                level?: string;

                role?: string;

                type?: string;

                user?: string;
              };

              windowsOptions?: {
                gmsaCredentialSpec?: string;

                gmsaCredentialSpecName?: string;

                runAsUserName?: string;
              };
            };

            startupProbe?: {
              exec?: {
                command?: string[];
              };

              failureThreshold?: number;

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              initialDelaySeconds?: number;

              periodSeconds?: number;

              successThreshold?: number;

              tcpSocket: {
                host?: string;

                port: number | string;
              };

              timeoutSeconds?: number;
            };

            stdin?: boolean;

            stdinOnce?: boolean;

            terminationMessagePath?: string;

            terminationMessagePolicy?: string;

            tty?: boolean;

            volumeDevices?: {
              devicePath: string;

              name: string;
            }[];

            volumeMounts?: {
              mountPath: string;

              mountPropagation?: string;

              name: string;

              readOnly?: boolean;

              subPath?: string;

              subPathExpr?: string;
            }[];

            workingDir?: string;
          }[];

          dnsConfig?: {
            nameservers?: string[];

            options?: {
              name?: string;

              value?: string;
            }[];

            searches?: string[];
          };

          dnsPolicy?: string;

          enableServiceLinks?: boolean;

          ephemeralContainers?: {
            args?: string[];

            command?: string[];

            env?: {
              name: string;

              value?: string;

              valueFrom?: {
                configMapKeyRef: {
                  key: string;

                  name?: string;

                  optional?: boolean;
                };

                fieldRef: {
                  apiVersion?: string;

                  fieldPath: string;
                };

                resourceFieldRef: {
                  containerName?: string;

                  divisor?: number | string;

                  resource: string;
                };

                secretKeyRef: {
                  key: string;

                  name?: string;

                  optional?: boolean;
                };
              };
            }[];

            envFrom?: {
              configMapRef?: {
                name?: string;

                optional?: boolean;
              };

              prefix?: string;

              secretRef?: {
                name?: string;

                optional?: boolean;
              };
            }[];

            image?: string;

            imagePullPolicy?: string;

            lifecycle?: {
              postStart?: {
                exec?: {
                  command?: string[];
                };

                httpGet: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket: {
                  host?: string;

                  port: number | string;
                };
              };

              preStop?: {
                exec?: {
                  command?: string[];
                };

                httpGet: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket: {
                  host?: string;

                  port: number | string;
                };
              };
            };

            livenessProbe?: {
              exec?: {
                command?: string[];
              };

              failureThreshold?: number;

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              initialDelaySeconds?: number;

              periodSeconds?: number;

              successThreshold?: number;

              tcpSocket: {
                host?: string;

                port: number | string;
              };

              timeoutSeconds?: number;
            };

            name: string;

            ports?: {
              containerPort: number;

              hostIP?: string;

              hostPort?: number;

              name?: string;

              protocol?: string;
            }[];

            readinessProbe?: {
              exec?: {
                command?: string[];
              };

              failureThreshold?: number;

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              initialDelaySeconds?: number;

              periodSeconds?: number;

              successThreshold?: number;

              tcpSocket: {
                host?: string;

                port: number | string;
              };

              timeoutSeconds?: number;
            };

            resources?: {};

            securityContext?: {
              allowPrivilegeEscalation?: boolean;

              capabilities?: {
                add?: string[];

                drop?: string[];
              };

              privileged?: boolean;

              procMount?: string;

              readOnlyRootFilesystem?: boolean;

              runAsGroup?: number;

              runAsNonRoot?: boolean;

              runAsUser?: number;

              seLinuxOptions?: {
                level?: string;

                role?: string;

                type?: string;

                user?: string;
              };

              windowsOptions?: {
                gmsaCredentialSpec?: string;

                gmsaCredentialSpecName?: string;

                runAsUserName?: string;
              };
            };

            startupProbe?: {
              exec?: {
                command?: string[];
              };

              failureThreshold?: number;

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              initialDelaySeconds?: number;

              periodSeconds?: number;

              successThreshold?: number;

              tcpSocket: {
                host?: string;

                port: number | string;
              };

              timeoutSeconds?: number;
            };

            stdin?: boolean;

            stdinOnce?: boolean;

            targetContainerName?: string;

            terminationMessagePath?: string;

            terminationMessagePolicy?: string;

            tty?: boolean;

            volumeDevices?: {
              devicePath: string;

              name: string;
            }[];

            volumeMounts?: {
              mountPath: string;

              mountPropagation?: string;

              name: string;

              readOnly?: boolean;

              subPath?: string;

              subPathExpr?: string;
            }[];

            workingDir?: string;
          }[];

          hostAliases?: {
            hostnames?: string[];

            ip?: string;
          }[];

          hostIPC?: boolean;

          hostNetwork?: boolean;

          hostPID?: boolean;

          hostname?: string;

          imagePullSecrets?: {
            name?: string;
          }[];

          initContainers?: {
            args?: string[];

            command?: string[];

            env?: {
              name: string;

              value?: string;

              valueFrom?: {
                configMapKeyRef: {
                  key: string;

                  name?: string;

                  optional?: boolean;
                };

                fieldRef: {
                  apiVersion?: string;

                  fieldPath: string;
                };

                resourceFieldRef: {
                  containerName?: string;

                  divisor?: number | string;

                  resource: string;
                };

                secretKeyRef: {
                  key: string;

                  name?: string;

                  optional?: boolean;
                };
              };
            }[];

            envFrom?: {
              configMapRef?: {
                name?: string;

                optional?: boolean;
              };

              prefix?: string;

              secretRef?: {
                name?: string;

                optional?: boolean;
              };
            }[];

            image?: string;

            imagePullPolicy?: string;

            lifecycle?: {
              postStart?: {
                exec?: {
                  command?: string[];
                };

                httpGet: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket: {
                  host?: string;

                  port: number | string;
                };
              };

              preStop?: {
                exec?: {
                  command?: string[];
                };

                httpGet: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket: {
                  host?: string;

                  port: number | string;
                };
              };
            };

            livenessProbe?: {
              exec?: {
                command?: string[];
              };

              failureThreshold?: number;

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              initialDelaySeconds?: number;

              periodSeconds?: number;

              successThreshold?: number;

              tcpSocket: {
                host?: string;

                port: number | string;
              };

              timeoutSeconds?: number;
            };

            name: string;

            ports?: {
              containerPort: number;

              hostIP?: string;

              hostPort?: number;

              name?: string;

              protocol?: string;
            }[];

            readinessProbe?: {
              exec?: {
                command?: string[];
              };

              failureThreshold?: number;

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              initialDelaySeconds?: number;

              periodSeconds?: number;

              successThreshold?: number;

              tcpSocket: {
                host?: string;

                port: number | string;
              };

              timeoutSeconds?: number;
            };

            resources?: {};

            securityContext?: {
              allowPrivilegeEscalation?: boolean;

              capabilities?: {
                add?: string[];

                drop?: string[];
              };

              privileged?: boolean;

              procMount?: string;

              readOnlyRootFilesystem?: boolean;

              runAsGroup?: number;

              runAsNonRoot?: boolean;

              runAsUser?: number;

              seLinuxOptions?: {
                level?: string;

                role?: string;

                type?: string;

                user?: string;
              };

              windowsOptions?: {
                gmsaCredentialSpec?: string;

                gmsaCredentialSpecName?: string;

                runAsUserName?: string;
              };
            };

            startupProbe?: {
              exec?: {
                command?: string[];
              };

              failureThreshold?: number;

              httpGet: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              initialDelaySeconds?: number;

              periodSeconds?: number;

              successThreshold?: number;

              tcpSocket: {
                host?: string;

                port: number | string;
              };

              timeoutSeconds?: number;
            };

            stdin?: boolean;

            stdinOnce?: boolean;

            terminationMessagePath?: string;

            terminationMessagePolicy?: string;

            tty?: boolean;

            volumeDevices?: {
              devicePath: string;

              name: string;
            }[];

            volumeMounts?: {
              mountPath: string;

              mountPropagation?: string;

              name: string;

              readOnly?: boolean;

              subPath?: string;

              subPathExpr?: string;
            }[];

            workingDir?: string;
          }[];

          nodeName?: string;

          nodeSelector?: {
            [key: string]: string;
          };

          overhead?: {
            [key: string]: number | string;
          };

          preemptionPolicy?: string;

          priority?: number;

          priorityClassName?: string;

          readinessGates?: {
            conditionType: string;
          }[];

          restartPolicy?: string;

          runtimeClassName?: string;

          schedulerName?: string;

          securityContext?: {
            fsGroup?: number;

            runAsGroup?: number;

            runAsNonRoot?: boolean;

            runAsUser?: number;

            seLinuxOptions?: {
              level?: string;

              role?: string;

              type?: string;

              user?: string;
            };

            supplementalGroups?: number[];

            sysctls?: {
              name: string;

              value: string;
            }[];

            windowsOptions?: {
              gmsaCredentialSpec?: string;

              gmsaCredentialSpecName?: string;

              runAsUserName?: string;
            };
          };

          serviceAccount?: string;

          serviceAccountName?: string;

          shareProcessNamespace?: boolean;

          subdomain?: string;

          terminationGracePeriodSeconds?: number;

          tolerations?: {
            effect?: string;

            key?: string;

            operator?: string;

            tolerationSeconds?: number;

            value?: string;
          }[];

          topologySpreadConstraints?: {
            labelSelector?: {
              matchExpressions?: {
                key: string;

                operator: string;

                values?: string[];
              }[];

              matchLabels?: {
                [key: string]: string;
              };
            };

            maxSkew: number;

            topologyKey: string;

            whenUnsatisfiable: string;
          }[];

          volumes?: {
            awsElasticBlockStore: {
              fsType?: string;

              partition?: number;

              readOnly?: boolean;

              volumeID: string;
            };

            azureDisk: {
              cachingMode?: string;

              diskName: string;

              diskURI: string;

              fsType?: string;

              kind?: string;

              readOnly?: boolean;
            };

            azureFile: {
              readOnly?: boolean;

              secretName: string;

              shareName: string;
            };

            cephfs: {
              monitors: string[];

              path?: string;

              readOnly?: boolean;

              secretFile?: string;

              secretRef?: {
                name?: string;
              };

              user?: string;
            };

            cinder: {
              fsType?: string;

              readOnly?: boolean;

              secretRef?: {
                name?: string;
              };

              volumeID: string;
            };

            csi: {
              driver: string;

              fsType?: string;

              nodePublishSecretRef?: {
                name?: string;
              };

              readOnly?: boolean;

              volumeAttributes?: {
                [key: string]: string;
              };
            };

            emptyDir?: {
              medium?: string;

              sizeLimit?: number | string;
            };

            fc?: {
              fsType?: string;

              lun?: number;

              readOnly?: boolean;

              targetWWNs?: string[];

              wwids?: string[];
            };

            flexVolume: {
              driver: string;

              fsType?: string;

              options?: {
                [key: string]: string;
              };

              readOnly?: boolean;

              secretRef?: {
                name?: string;
              };
            };

            flocker?: {
              datasetName?: string;

              datasetUUID?: string;
            };

            gcePersistentDisk: {
              fsType?: string;

              partition?: number;

              pdName: string;

              readOnly?: boolean;
            };

            gitRepo: {
              directory?: string;

              repository: string;

              revision?: string;
            };

            glusterfs: {
              endpoints: string;

              path: string;

              readOnly?: boolean;
            };

            hostPath: {
              path: string;

              type?: string;
            };

            iscsi: {
              chapAuthDiscovery?: boolean;

              chapAuthSession?: boolean;

              fsType?: string;

              initiatorName?: string;

              iqn: string;

              iscsiInterface?: string;

              lun: number;

              portals?: string[];

              readOnly?: boolean;

              secretRef?: {
                name?: string;
              };

              targetPortal: string;
            };

            name: string;

            nfs: {
              path: string;

              readOnly?: boolean;

              server: string;
            };

            persistentVolumeClaim: {
              claimName: string;

              readOnly?: boolean;
            };

            photonPersistentDisk: {
              fsType?: string;

              pdID: string;
            };

            portworxVolume: {
              fsType?: string;

              readOnly?: boolean;

              volumeID: string;
            };

            projected: {
              defaultMode?: number;

              sources: {
                serviceAccountToken: {
                  audience?: string;

                  expirationSeconds?: number;

                  path: string;
                };
              }[];
            };

            quobyte: {
              group?: string;

              readOnly?: boolean;

              registry: string;

              tenant?: string;

              user?: string;

              volume: string;
            };

            rbd: {
              fsType?: string;

              image: string;

              keyring?: string;

              monitors: string[];

              pool?: string;

              readOnly?: boolean;

              secretRef?: {
                name?: string;
              };

              user?: string;
            };

            scaleIO: {
              fsType?: string;

              gateway: string;

              protectionDomain?: string;

              readOnly?: boolean;

              secretRef: {
                name?: string;
              };

              sslEnabled?: boolean;

              storageMode?: string;

              storagePool?: string;

              system: string;

              volumeName?: string;
            };

            storageos?: {
              fsType?: string;

              readOnly?: boolean;

              secretRef?: {
                name?: string;
              };

              volumeName?: string;

              volumeNamespace?: string;
            };

            vsphereVolume: {
              fsType?: string;

              storagePolicyID?: string;

              storagePolicyName?: string;

              volumePath: string;
            };
          }[];
        };
      };
    }[];

    terminate?: boolean;
  };

  status?: {
    analysisRuns?: {
      analysisRun: string;

      message?: string;

      name: string;

      phase: string;
    }[];

    availableAt?: string;

    conditions?: {
      lastTransitionTime: string;

      lastUpdateTime: string;

      message: string;

      reason: string;

      status: string;

      type: string;
    }[];

    message?: string;

    phase?: string;

    templateStatuses?: {
      availableReplicas: number;

      collisionCount?: number;

      lastTransitionTime?: string;

      message?: string;

      name: string;

      readyReplicas: number;

      replicas: number;

      status?: string;

      updatedReplicas: number;
    }[];
  };
};
export function createExperiment(
  data: Omit<Experiment, "apiVersion" | "kind">,
): Experiment {
  return { apiVersion: "argoproj.io/v1alpha1", kind: "Experiment", ...data };
}

undefined;
export type AnalysisTemplate = {
  apiVersion?: string;

  kind?: string;

  metadata?: ObjectMeta;

  spec: {
    args?: {
      name: string;

      value?: string;

      valueFrom?: {
        secretKeyRef: {
          key: string;

          name: string;
        };
      };
    }[];

    metrics: {
      consecutiveErrorLimit?: number;

      count?: number;

      failureCondition?: string;

      failureLimit?: number;

      inconclusiveLimit?: number;

      initialDelay?: string;

      interval?: string;

      name: string;

      provider: {
        job: {
          metadata?: {};

          spec: {
            activeDeadlineSeconds?: number;

            backoffLimit?: number;

            completions?: number;

            manualSelector?: boolean;

            parallelism?: number;

            selector?: {
              matchExpressions?: {
                key: string;

                operator: string;

                values?: string[];
              }[];

              matchLabels?: {
                [key: string]: string;
              };
            };

            template: {
              metadata?: {};

              spec: {
                activeDeadlineSeconds?: number;

                affinity?: {
                  nodeAffinity?: {
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      preference: {
                        matchExpressions?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];

                        matchFields?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];
                      };

                      weight: number;
                    }[];

                    requiredDuringSchedulingIgnoredDuringExecution: {
                      nodeSelectorTerms: {
                        matchExpressions?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];

                        matchFields?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];
                      }[];
                    };
                  };

                  podAffinity?: {
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      podAffinityTerm: {
                        labelSelector?: {
                          matchExpressions?: {
                            key: string;

                            operator: string;

                            values?: string[];
                          }[];

                          matchLabels?: {
                            [key: string]: string;
                          };
                        };

                        namespaces?: string[];

                        topologyKey: string;
                      };

                      weight: number;
                    }[];

                    requiredDuringSchedulingIgnoredDuringExecution?: {
                      labelSelector?: {
                        matchExpressions?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];

                        matchLabels?: {
                          [key: string]: string;
                        };
                      };

                      namespaces?: string[];

                      topologyKey: string;
                    }[];
                  };

                  podAntiAffinity?: {
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      podAffinityTerm: {
                        labelSelector?: {
                          matchExpressions?: {
                            key: string;

                            operator: string;

                            values?: string[];
                          }[];

                          matchLabels?: {
                            [key: string]: string;
                          };
                        };

                        namespaces?: string[];

                        topologyKey: string;
                      };

                      weight: number;
                    }[];

                    requiredDuringSchedulingIgnoredDuringExecution?: {
                      labelSelector?: {
                        matchExpressions?: {
                          key: string;

                          operator: string;

                          values?: string[];
                        }[];

                        matchLabels?: {
                          [key: string]: string;
                        };
                      };

                      namespaces?: string[];

                      topologyKey: string;
                    }[];
                  };
                };

                automountServiceAccountToken?: boolean;

                containers: {
                  args?: string[];

                  command?: string[];

                  env?: {
                    name: string;

                    value?: string;

                    valueFrom?: {
                      configMapKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };
                    };
                  }[];

                  envFrom?: {
                    configMapRef?: {
                      name?: string;

                      optional?: boolean;
                    };

                    prefix?: string;

                    secretRef?: {
                      name?: string;

                      optional?: boolean;
                    };
                  }[];

                  image?: string;

                  imagePullPolicy?: string;

                  lifecycle?: {
                    postStart?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };
                  };

                  livenessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  name: string;

                  ports?: {
                    containerPort: number;

                    hostIP?: string;

                    hostPort?: number;

                    name?: string;

                    protocol?: string;
                  }[];

                  readinessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  resources?: {};

                  securityContext?: {
                    allowPrivilegeEscalation?: boolean;

                    capabilities?: {
                      add?: string[];

                      drop?: string[];
                    };

                    privileged?: boolean;

                    procMount?: string;

                    readOnlyRootFilesystem?: boolean;

                    runAsGroup?: number;

                    runAsNonRoot?: boolean;

                    runAsUser?: number;

                    seLinuxOptions?: {
                      level?: string;

                      role?: string;

                      type?: string;

                      user?: string;
                    };

                    windowsOptions?: {
                      gmsaCredentialSpec?: string;

                      gmsaCredentialSpecName?: string;

                      runAsUserName?: string;
                    };
                  };

                  startupProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  stdin?: boolean;

                  stdinOnce?: boolean;

                  terminationMessagePath?: string;

                  terminationMessagePolicy?: string;

                  tty?: boolean;

                  volumeDevices?: {
                    devicePath: string;

                    name: string;
                  }[];

                  volumeMounts?: {
                    mountPath: string;

                    mountPropagation?: string;

                    name: string;

                    readOnly?: boolean;

                    subPath?: string;

                    subPathExpr?: string;
                  }[];

                  workingDir?: string;
                }[];

                dnsConfig?: {
                  nameservers?: string[];

                  options?: {
                    name?: string;

                    value?: string;
                  }[];

                  searches?: string[];
                };

                dnsPolicy?: string;

                enableServiceLinks?: boolean;

                ephemeralContainers?: {
                  args?: string[];

                  command?: string[];

                  env?: {
                    name: string;

                    value?: string;

                    valueFrom?: {
                      configMapKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };
                    };
                  }[];

                  envFrom?: {
                    configMapRef?: {
                      name?: string;

                      optional?: boolean;
                    };

                    prefix?: string;

                    secretRef?: {
                      name?: string;

                      optional?: boolean;
                    };
                  }[];

                  image?: string;

                  imagePullPolicy?: string;

                  lifecycle?: {
                    postStart?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };
                  };

                  livenessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  name: string;

                  ports?: {
                    containerPort: number;

                    hostIP?: string;

                    hostPort?: number;

                    name?: string;

                    protocol?: string;
                  }[];

                  readinessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  resources?: {};

                  securityContext?: {
                    allowPrivilegeEscalation?: boolean;

                    capabilities?: {
                      add?: string[];

                      drop?: string[];
                    };

                    privileged?: boolean;

                    procMount?: string;

                    readOnlyRootFilesystem?: boolean;

                    runAsGroup?: number;

                    runAsNonRoot?: boolean;

                    runAsUser?: number;

                    seLinuxOptions?: {
                      level?: string;

                      role?: string;

                      type?: string;

                      user?: string;
                    };

                    windowsOptions?: {
                      gmsaCredentialSpec?: string;

                      gmsaCredentialSpecName?: string;

                      runAsUserName?: string;
                    };
                  };

                  startupProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  stdin?: boolean;

                  stdinOnce?: boolean;

                  targetContainerName?: string;

                  terminationMessagePath?: string;

                  terminationMessagePolicy?: string;

                  tty?: boolean;

                  volumeDevices?: {
                    devicePath: string;

                    name: string;
                  }[];

                  volumeMounts?: {
                    mountPath: string;

                    mountPropagation?: string;

                    name: string;

                    readOnly?: boolean;

                    subPath?: string;

                    subPathExpr?: string;
                  }[];

                  workingDir?: string;
                }[];

                hostAliases?: {
                  hostnames?: string[];

                  ip?: string;
                }[];

                hostIPC?: boolean;

                hostNetwork?: boolean;

                hostPID?: boolean;

                hostname?: string;

                imagePullSecrets?: {
                  name?: string;
                }[];

                initContainers?: {
                  args?: string[];

                  command?: string[];

                  env?: {
                    name: string;

                    value?: string;

                    valueFrom?: {
                      configMapKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };
                    };
                  }[];

                  envFrom?: {
                    configMapRef?: {
                      name?: string;

                      optional?: boolean;
                    };

                    prefix?: string;

                    secretRef?: {
                      name?: string;

                      optional?: boolean;
                    };
                  }[];

                  image?: string;

                  imagePullPolicy?: string;

                  lifecycle?: {
                    postStart?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket: {
                        host?: string;

                        port: number | string;
                      };
                    };
                  };

                  livenessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  name: string;

                  ports?: {
                    containerPort: number;

                    hostIP?: string;

                    hostPort?: number;

                    name?: string;

                    protocol?: string;
                  }[];

                  readinessProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  resources?: {};

                  securityContext?: {
                    allowPrivilegeEscalation?: boolean;

                    capabilities?: {
                      add?: string[];

                      drop?: string[];
                    };

                    privileged?: boolean;

                    procMount?: string;

                    readOnlyRootFilesystem?: boolean;

                    runAsGroup?: number;

                    runAsNonRoot?: boolean;

                    runAsUser?: number;

                    seLinuxOptions?: {
                      level?: string;

                      role?: string;

                      type?: string;

                      user?: string;
                    };

                    windowsOptions?: {
                      gmsaCredentialSpec?: string;

                      gmsaCredentialSpecName?: string;

                      runAsUserName?: string;
                    };
                  };

                  startupProbe?: {
                    exec?: {
                      command?: string[];
                    };

                    failureThreshold?: number;

                    httpGet: {
                      host?: string;

                      httpHeaders?: {
                        name: string;

                        value: string;
                      }[];

                      path?: string;

                      port: number | string;

                      scheme?: string;
                    };

                    initialDelaySeconds?: number;

                    periodSeconds?: number;

                    successThreshold?: number;

                    tcpSocket: {
                      host?: string;

                      port: number | string;
                    };

                    timeoutSeconds?: number;
                  };

                  stdin?: boolean;

                  stdinOnce?: boolean;

                  terminationMessagePath?: string;

                  terminationMessagePolicy?: string;

                  tty?: boolean;

                  volumeDevices?: {
                    devicePath: string;

                    name: string;
                  }[];

                  volumeMounts?: {
                    mountPath: string;

                    mountPropagation?: string;

                    name: string;

                    readOnly?: boolean;

                    subPath?: string;

                    subPathExpr?: string;
                  }[];

                  workingDir?: string;
                }[];

                nodeName?: string;

                nodeSelector?: {
                  [key: string]: string;
                };

                overhead?: {
                  [key: string]: number | string;
                };

                preemptionPolicy?: string;

                priority?: number;

                priorityClassName?: string;

                readinessGates?: {
                  conditionType: string;
                }[];

                restartPolicy?: string;

                runtimeClassName?: string;

                schedulerName?: string;

                securityContext?: {
                  fsGroup?: number;

                  runAsGroup?: number;

                  runAsNonRoot?: boolean;

                  runAsUser?: number;

                  seLinuxOptions?: {
                    level?: string;

                    role?: string;

                    type?: string;

                    user?: string;
                  };

                  supplementalGroups?: number[];

                  sysctls?: {
                    name: string;

                    value: string;
                  }[];

                  windowsOptions?: {
                    gmsaCredentialSpec?: string;

                    gmsaCredentialSpecName?: string;

                    runAsUserName?: string;
                  };
                };

                serviceAccount?: string;

                serviceAccountName?: string;

                shareProcessNamespace?: boolean;

                subdomain?: string;

                terminationGracePeriodSeconds?: number;

                tolerations?: {
                  effect?: string;

                  key?: string;

                  operator?: string;

                  tolerationSeconds?: number;

                  value?: string;
                }[];

                topologySpreadConstraints?: {
                  labelSelector?: {
                    matchExpressions?: {
                      key: string;

                      operator: string;

                      values?: string[];
                    }[];

                    matchLabels?: {
                      [key: string]: string;
                    };
                  };

                  maxSkew: number;

                  topologyKey: string;

                  whenUnsatisfiable: string;
                }[];

                volumes?: {
                  awsElasticBlockStore: {
                    fsType?: string;

                    partition?: number;

                    readOnly?: boolean;

                    volumeID: string;
                  };

                  azureDisk: {
                    cachingMode?: string;

                    diskName: string;

                    diskURI: string;

                    fsType?: string;

                    kind?: string;

                    readOnly?: boolean;
                  };

                  azureFile: {
                    readOnly?: boolean;

                    secretName: string;

                    shareName: string;
                  };

                  cephfs: {
                    monitors: string[];

                    path?: string;

                    readOnly?: boolean;

                    secretFile?: string;

                    secretRef?: {
                      name?: string;
                    };

                    user?: string;
                  };

                  cinder: {
                    fsType?: string;

                    readOnly?: boolean;

                    secretRef?: {
                      name?: string;
                    };

                    volumeID: string;
                  };

                  csi: {
                    driver: string;

                    fsType?: string;

                    nodePublishSecretRef?: {
                      name?: string;
                    };

                    readOnly?: boolean;

                    volumeAttributes?: {
                      [key: string]: string;
                    };
                  };

                  emptyDir?: {
                    medium?: string;

                    sizeLimit?: number | string;
                  };

                  fc?: {
                    fsType?: string;

                    lun?: number;

                    readOnly?: boolean;

                    targetWWNs?: string[];

                    wwids?: string[];
                  };

                  flexVolume: {
                    driver: string;

                    fsType?: string;

                    options?: {
                      [key: string]: string;
                    };

                    readOnly?: boolean;

                    secretRef?: {
                      name?: string;
                    };
                  };

                  flocker?: {
                    datasetName?: string;

                    datasetUUID?: string;
                  };

                  gcePersistentDisk: {
                    fsType?: string;

                    partition?: number;

                    pdName: string;

                    readOnly?: boolean;
                  };

                  gitRepo: {
                    directory?: string;

                    repository: string;

                    revision?: string;
                  };

                  glusterfs: {
                    endpoints: string;

                    path: string;

                    readOnly?: boolean;
                  };

                  hostPath: {
                    path: string;

                    type?: string;
                  };

                  iscsi: {
                    chapAuthDiscovery?: boolean;

                    chapAuthSession?: boolean;

                    fsType?: string;

                    initiatorName?: string;

                    iqn: string;

                    iscsiInterface?: string;

                    lun: number;

                    portals?: string[];

                    readOnly?: boolean;

                    secretRef?: {
                      name?: string;
                    };

                    targetPortal: string;
                  };

                  name: string;

                  nfs: {
                    path: string;

                    readOnly?: boolean;

                    server: string;
                  };

                  persistentVolumeClaim: {
                    claimName: string;

                    readOnly?: boolean;
                  };

                  photonPersistentDisk: {
                    fsType?: string;

                    pdID: string;
                  };

                  portworxVolume: {
                    fsType?: string;

                    readOnly?: boolean;

                    volumeID: string;
                  };

                  projected: {
                    defaultMode?: number;

                    sources: {
                      serviceAccountToken: {
                        audience?: string;

                        expirationSeconds?: number;

                        path: string;
                      };
                    }[];
                  };

                  quobyte: {
                    group?: string;

                    readOnly?: boolean;

                    registry: string;

                    tenant?: string;

                    user?: string;

                    volume: string;
                  };

                  rbd: {
                    fsType?: string;

                    image: string;

                    keyring?: string;

                    monitors: string[];

                    pool?: string;

                    readOnly?: boolean;

                    secretRef?: {
                      name?: string;
                    };

                    user?: string;
                  };

                  scaleIO: {
                    fsType?: string;

                    gateway: string;

                    protectionDomain?: string;

                    readOnly?: boolean;

                    secretRef: {
                      name?: string;
                    };

                    sslEnabled?: boolean;

                    storageMode?: string;

                    storagePool?: string;

                    system: string;

                    volumeName?: string;
                  };

                  storageos?: {
                    fsType?: string;

                    readOnly?: boolean;

                    secretRef?: {
                      name?: string;
                    };

                    volumeName?: string;

                    volumeNamespace?: string;
                  };

                  vsphereVolume: {
                    fsType?: string;

                    storagePolicyID?: string;

                    storagePolicyName?: string;

                    volumePath: string;
                  };
                }[];
              };
            };

            ttlSecondsAfterFinished?: number;
          };
        };

        kayenta: {
          address: string;

          application: string;

          canaryConfigName: string;

          configurationAccountName: string;

          metricsAccountName: string;

          scopes: {
            controlScope: {
              end: string;

              region: string;

              scope: string;

              start: string;

              step: number;
            };

            experimentScope: {
              end: string;

              region: string;

              scope: string;

              start: string;

              step: number;
            };

            name: string;
          }[];

          storageAccountName: string;

          threshold: {
            marginal: number;

            pass: number;
          };
        };

        prometheus?: {
          address?: string;

          query?: string;
        };

        wavefront?: {
          address?: string;

          query?: string;
        };

        web: {
          headers?: {
            key: string;

            value: string;
          }[];

          jsonPath: string;

          timeoutSeconds?: number;

          url: string;
        };
      };

      successCondition?: string;
    }[];
  };
};
export function createAnalysisTemplate(
  data: Omit<AnalysisTemplate, "apiVersion" | "kind">,
): AnalysisTemplate {
  return {
    apiVersion: "argoproj.io/v1alpha1",
    kind: "AnalysisTemplate",
    ...data,
  };
}

/** Application is a definition of Application resource. */
export type Application = {
  apiVersion?: string;

  kind?: string;

  metadata: ObjectMeta;

  /** Operation contains requested operation parameters. */
  operation?: {
    /** OperationInitiator holds information about the operation initiator */
    initiatedBy?: {
      /** Automated is set to true if operation was initiated automatically by the application controller. */
      automated?: boolean;

      /** Name of a user who started operation. */
      username?: string;
    };

    /** SyncOperation contains sync operation details. */
    sync?: {
      /** DryRun will perform a `kubectl apply --dry-run` without actually performing the sync */
      dryRun?: boolean;

      /** Manifests is an optional field that overrides sync source with a local directory for development */
      manifests?: string[];

      /** Prune deletes resources that are no longer tracked in git */
      prune?: boolean;

      /** Resources describes which resources to sync */
      resources?: {
        group?: string;

        kind: string;

        name: string;
      }[];

      /** Revision is the revision in which to sync the application to. If omitted, will use the revision specified in app spec. */
      revision?: string;

      /** Source overrides the source definition set in the application. This is typically set in a Rollback operation and nil during a Sync operation */
      source: {
        /** Chart is a Helm chart name */
        chart?: string;

        /** Directory holds pathdirectory specific options */
        directory?: {
          /** ApplicationSourceJsonnet holds jsonnet specific options */
          jsonnet?: {
            /** ExtVars is a list of Jsonnet External Variables */
            extVars?: {
              code?: boolean;

              name: string;

              value: string;
            }[];

            /** TLAS is a list of Jsonnet Top-level Arguments */
            tlas?: {
              code?: boolean;

              name: string;

              value: string;
            }[];
          };

          recurse?: boolean;
        };

        /** Helm holds helm specific options */
        helm?: {
          /** FileParameters are file parameters to the helm template */
          fileParameters?: {
            /** Name is the name of the helm parameter */
            name?: string;

            /** Path is the path value for the helm parameter */
            path?: string;
          }[];

          /** Parameters are parameters to the helm template */
          parameters?: {
            /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
            forceString?: boolean;

            /** Name is the name of the helm parameter */
            name?: string;

            /** Value is the value for the helm parameter */
            value?: string;
          }[];

          /** The Helm release name. If omitted it will use the application name */
          releaseName?: string;

          /** ValuesFiles is a list of Helm value files to use when generating a template */
          valueFiles?: string[];

          /** Values is Helm values, typically defined as a block */
          values?: string;
        };

        /** Ksonnet holds ksonnet specific options */
        ksonnet?: {
          /** Environment is a ksonnet application environment name */
          environment?: string;

          /** Parameters are a list of ksonnet component parameter override values */
          parameters?: {
            component?: string;

            name: string;

            value: string;
          }[];
        };

        /** Kustomize holds kustomize specific options */
        kustomize?: {
          /** CommonLabels adds additional kustomize commonLabels */
          commonLabels?: {
            [key: string]: string;
          };

          /** Images are kustomize image overrides */
          images?: string[];

          /** NamePrefix is a prefix appended to resources for kustomize apps */
          namePrefix?: string;

          /** NameSuffix is a suffix appended to resources for kustomize apps */
          nameSuffix?: string;

          /** Version contains optional Kustomize version */
          version?: string;
        };

        /** Path is a directory path within the Git repository */
        path?: string;

        /** ConfigManagementPlugin holds config management plugin specific options */
        plugin?: {
          env?: {
            /** the name, usually uppercase */
            name: string;

            /** the value */
            value: string;
          }[];

          name?: string;
        };

        /** RepoURL is the repository URL of the application manifests */
        repoURL: string;

        /** TargetRevision defines the commit, tag, or branch in which to sync the application to. If omitted, will sync to HEAD */
        targetRevision?: string;
      };

      /** SyncOptions provide per-sync sync-options, e.g. Validate=false */
      syncOptions?: string[];

      /** SyncStrategy describes how to perform the sync */
      syncStrategy?: {
        /** Apply wil perform a `kubectl apply` to perform the sync. */
        apply?: {
          /** Force indicates whether or not to supply the --force flag to `kubectl apply`. The --force flag deletes and re-create the resource, when PATCH encounters conflict and has retried for 5 times. */
          force?: boolean;
        };

        /** Hook will submit any referenced resources to perform the sync. This is the default strategy */
        hook?: {
          /** Force indicates whether or not to supply the --force flag to `kubectl apply`. The --force flag deletes and re-create the resource, when PATCH encounters conflict and has retried for 5 times. */
          force?: boolean;
        };
      };
    };
  };

  /** ApplicationSpec represents desired application state. Contains link to repository with application definition and additional parameters link definition revision. */
  spec: {
    /** Destination overrides the kubernetes server and namespace defined in the environment ksonnet app.yaml */
    destination: {
      /** Namespace overrides the environment namespace value in the ksonnet app.yaml */
      namespace?: string;

      /** Server overrides the environment server value in the ksonnet app.yaml */
      server?: string;
    };

    /** IgnoreDifferences controls resources fields which should be ignored during comparison */
    ignoreDifferences?: {
      group?: string;

      jsonPointers: string[];

      kind: string;

      name?: string;

      namespace?: string;
    }[];

    /** Infos contains a list of useful information (URLs, email addresses, and plain text) that relates to the application */
    info?: {
      name: string;

      value: string;
    }[];

    /** Project is a application project name. Empty name means that application belongs to 'default' project. */
    project: string;

    /** This limits this number of items kept in the apps revision history. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10. */
    revisionHistoryLimit?: number;

    /** Source is a reference to the location ksonnet application definition */
    source: {
      /** Chart is a Helm chart name */
      chart?: string;

      /** Directory holds pathdirectory specific options */
      directory?: {
        /** ApplicationSourceJsonnet holds jsonnet specific options */
        jsonnet?: {
          /** ExtVars is a list of Jsonnet External Variables */
          extVars?: {
            code?: boolean;

            name: string;

            value: string;
          }[];

          /** TLAS is a list of Jsonnet Top-level Arguments */
          tlas?: {
            code?: boolean;

            name: string;

            value: string;
          }[];
        };

        recurse?: boolean;
      };

      /** Helm holds helm specific options */
      helm?: {
        /** FileParameters are file parameters to the helm template */
        fileParameters?: {
          /** Name is the name of the helm parameter */
          name?: string;

          /** Path is the path value for the helm parameter */
          path?: string;
        }[];

        /** Parameters are parameters to the helm template */
        parameters?: {
          /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
          forceString?: boolean;

          /** Name is the name of the helm parameter */
          name?: string;

          /** Value is the value for the helm parameter */
          value?: string;
        }[];

        /** The Helm release name. If omitted it will use the application name */
        releaseName?: string;

        /** ValuesFiles is a list of Helm value files to use when generating a template */
        valueFiles?: string[];

        /** Values is Helm values, typically defined as a block */
        values?: string;
      };

      /** Ksonnet holds ksonnet specific options */
      ksonnet?: {
        /** Environment is a ksonnet application environment name */
        environment?: string;

        /** Parameters are a list of ksonnet component parameter override values */
        parameters?: {
          component?: string;

          name: string;

          value: string;
        }[];
      };

      /** Kustomize holds kustomize specific options */
      kustomize?: {
        /** CommonLabels adds additional kustomize commonLabels */
        commonLabels?: {
          [key: string]: string;
        };

        /** Images are kustomize image overrides */
        images?: string[];

        /** NamePrefix is a prefix appended to resources for kustomize apps */
        namePrefix?: string;

        /** NameSuffix is a suffix appended to resources for kustomize apps */
        nameSuffix?: string;

        /** Version contains optional Kustomize version */
        version?: string;
      };

      /** Path is a directory path within the Git repository */
      path?: string;

      /** ConfigManagementPlugin holds config management plugin specific options */
      plugin?: {
        env?: {
          /** the name, usually uppercase */
          name: string;

          /** the value */
          value: string;
        }[];

        name?: string;
      };

      /** RepoURL is the repository URL of the application manifests */
      repoURL: string;

      /** TargetRevision defines the commit, tag, or branch in which to sync the application to. If omitted, will sync to HEAD */
      targetRevision?: string;
    };

    /** SyncPolicy controls when a sync will be performed */
    syncPolicy?: {
      /** Automated will keep an application synced to the target revision */
      automated?: {
        /** Prune will prune resources automatically as part of automated sync (default: false) */
        prune?: boolean;

        /** SelfHeal enables auto-syncing if  (default: false) */
        selfHeal?: boolean;
      };

      /** Options allow you to specify whole app sync-options */
      syncOptions?: string[];
    };
  };

  /** ApplicationStatus contains information about application sync, health status */
  status?: {
    conditions?: {
      /** LastTransitionTime is the time the condition was first observed. */
      lastTransitionTime?: string;

      /** Message contains human-readable message indicating details about condition */
      message: string;

      /** Type is an application condition type */
      type: string;
    }[];

    health?: {
      message?: string;

      /** Represents resource health status */
      status?: string;
    };

    /** RevisionHistories is a array of history, oldest first and newest last */
    history?: {
      deployedAt: string;

      id: number;

      revision: string;

      /** ApplicationSource contains information about github repository, path within repository and target application environment. */
      source: {
        /** Chart is a Helm chart name */
        chart?: string;

        /** Directory holds pathdirectory specific options */
        directory?: {
          /** ApplicationSourceJsonnet holds jsonnet specific options */
          jsonnet?: {
            /** ExtVars is a list of Jsonnet External Variables */
            extVars?: {
              code?: boolean;

              name: string;

              value: string;
            }[];

            /** TLAS is a list of Jsonnet Top-level Arguments */
            tlas?: {
              code?: boolean;

              name: string;

              value: string;
            }[];
          };

          recurse?: boolean;
        };

        /** Helm holds helm specific options */
        helm?: {
          /** FileParameters are file parameters to the helm template */
          fileParameters?: {
            /** Name is the name of the helm parameter */
            name?: string;

            /** Path is the path value for the helm parameter */
            path?: string;
          }[];

          /** Parameters are parameters to the helm template */
          parameters?: {
            /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
            forceString?: boolean;

            /** Name is the name of the helm parameter */
            name?: string;

            /** Value is the value for the helm parameter */
            value?: string;
          }[];

          /** The Helm release name. If omitted it will use the application name */
          releaseName?: string;

          /** ValuesFiles is a list of Helm value files to use when generating a template */
          valueFiles?: string[];

          /** Values is Helm values, typically defined as a block */
          values?: string;
        };

        /** Ksonnet holds ksonnet specific options */
        ksonnet?: {
          /** Environment is a ksonnet application environment name */
          environment?: string;

          /** Parameters are a list of ksonnet component parameter override values */
          parameters?: {
            component?: string;

            name: string;

            value: string;
          }[];
        };

        /** Kustomize holds kustomize specific options */
        kustomize?: {
          /** CommonLabels adds additional kustomize commonLabels */
          commonLabels?: {
            [key: string]: string;
          };

          /** Images are kustomize image overrides */
          images?: string[];

          /** NamePrefix is a prefix appended to resources for kustomize apps */
          namePrefix?: string;

          /** NameSuffix is a suffix appended to resources for kustomize apps */
          nameSuffix?: string;

          /** Version contains optional Kustomize version */
          version?: string;
        };

        /** Path is a directory path within the Git repository */
        path?: string;

        /** ConfigManagementPlugin holds config management plugin specific options */
        plugin?: {
          env?: {
            /** the name, usually uppercase */
            name: string;

            /** the value */
            value: string;
          }[];

          name?: string;
        };

        /** RepoURL is the repository URL of the application manifests */
        repoURL: string;

        /** TargetRevision defines the commit, tag, or branch in which to sync the application to. If omitted, will sync to HEAD */
        targetRevision?: string;
      };
    }[];

    /** ObservedAt indicates when the application state was updated without querying latest git state */
    observedAt?: string;

    /** OperationState contains information about state of currently performing operation on application. */
    operationState: {
      /** FinishedAt contains time of operation completion */
      finishedAt?: string;

      /** Message hold any pertinent messages when attempting to perform operation (typically errors). */
      message?: string;

      /** Operation is the original requested operation */
      operation: {
        /** OperationInitiator holds information about the operation initiator */
        initiatedBy?: {
          /** Automated is set to true if operation was initiated automatically by the application controller. */
          automated?: boolean;

          /** Name of a user who started operation. */
          username?: string;
        };

        /** SyncOperation contains sync operation details. */
        sync?: {
          /** DryRun will perform a `kubectl apply --dry-run` without actually performing the sync */
          dryRun?: boolean;

          /** Manifests is an optional field that overrides sync source with a local directory for development */
          manifests?: string[];

          /** Prune deletes resources that are no longer tracked in git */
          prune?: boolean;

          /** Resources describes which resources to sync */
          resources?: {
            group?: string;

            kind: string;

            name: string;
          }[];

          /** Revision is the revision in which to sync the application to. If omitted, will use the revision specified in app spec. */
          revision?: string;

          /** Source overrides the source definition set in the application. This is typically set in a Rollback operation and nil during a Sync operation */
          source: {
            /** Chart is a Helm chart name */
            chart?: string;

            /** Directory holds pathdirectory specific options */
            directory?: {
              /** ApplicationSourceJsonnet holds jsonnet specific options */
              jsonnet?: {
                /** ExtVars is a list of Jsonnet External Variables */
                extVars?: {
                  code?: boolean;

                  name: string;

                  value: string;
                }[];

                /** TLAS is a list of Jsonnet Top-level Arguments */
                tlas?: {
                  code?: boolean;

                  name: string;

                  value: string;
                }[];
              };

              recurse?: boolean;
            };

            /** Helm holds helm specific options */
            helm?: {
              /** FileParameters are file parameters to the helm template */
              fileParameters?: {
                /** Name is the name of the helm parameter */
                name?: string;

                /** Path is the path value for the helm parameter */
                path?: string;
              }[];

              /** Parameters are parameters to the helm template */
              parameters?: {
                /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
                forceString?: boolean;

                /** Name is the name of the helm parameter */
                name?: string;

                /** Value is the value for the helm parameter */
                value?: string;
              }[];

              /** The Helm release name. If omitted it will use the application name */
              releaseName?: string;

              /** ValuesFiles is a list of Helm value files to use when generating a template */
              valueFiles?: string[];

              /** Values is Helm values, typically defined as a block */
              values?: string;
            };

            /** Ksonnet holds ksonnet specific options */
            ksonnet?: {
              /** Environment is a ksonnet application environment name */
              environment?: string;

              /** Parameters are a list of ksonnet component parameter override values */
              parameters?: {
                component?: string;

                name: string;

                value: string;
              }[];
            };

            /** Kustomize holds kustomize specific options */
            kustomize?: {
              /** CommonLabels adds additional kustomize commonLabels */
              commonLabels?: {
                [key: string]: string;
              };

              /** Images are kustomize image overrides */
              images?: string[];

              /** NamePrefix is a prefix appended to resources for kustomize apps */
              namePrefix?: string;

              /** NameSuffix is a suffix appended to resources for kustomize apps */
              nameSuffix?: string;

              /** Version contains optional Kustomize version */
              version?: string;
            };

            /** Path is a directory path within the Git repository */
            path?: string;

            /** ConfigManagementPlugin holds config management plugin specific options */
            plugin?: {
              env?: {
                /** the name, usually uppercase */
                name: string;

                /** the value */
                value: string;
              }[];

              name?: string;
            };

            /** RepoURL is the repository URL of the application manifests */
            repoURL: string;

            /** TargetRevision defines the commit, tag, or branch in which to sync the application to. If omitted, will sync to HEAD */
            targetRevision?: string;
          };

          /** SyncOptions provide per-sync sync-options, e.g. Validate=false */
          syncOptions?: string[];

          /** SyncStrategy describes how to perform the sync */
          syncStrategy?: {
            /** Apply wil perform a `kubectl apply` to perform the sync. */
            apply?: {
              /** Force indicates whether or not to supply the --force flag to `kubectl apply`. The --force flag deletes and re-create the resource, when PATCH encounters conflict and has retried for 5 times. */
              force?: boolean;
            };

            /** Hook will submit any referenced resources to perform the sync. This is the default strategy */
            hook?: {
              /** Force indicates whether or not to supply the --force flag to `kubectl apply`. The --force flag deletes and re-create the resource, when PATCH encounters conflict and has retried for 5 times. */
              force?: boolean;
            };
          };
        };
      };

      /** Phase is the current phase of the operation */
      phase: string;

      /** StartedAt contains time of operation start */
      startedAt: string;

      /** SyncResult is the result of a Sync operation */
      syncResult: {
        /** Resources holds the sync result of each individual resource */
        resources?: {
          group: string;

          /** the state of any operation associated with this resource OR hook note: can contain values for non-hook resources */
          hookPhase?: string;

          /** the type of the hook, empty for non-hook resources */
          hookType?: string;

          kind: string;

          /** message for the last sync OR operation */
          message?: string;

          name: string;

          namespace: string;

          /** the final result of the sync, this is be empty if the resources is yet to be appliedpruned and is always zero-value for hooks */
          status?: string;

          /** indicates the particular phase of the sync that this is for */
          syncPhase?: string;

          version: string;
        }[];

        /** Revision holds the revision of the sync */
        revision: string;

        /** Source records the application source information of the sync, used for comparing auto-sync */
        source: {
          /** Chart is a Helm chart name */
          chart?: string;

          /** Directory holds pathdirectory specific options */
          directory?: {
            /** ApplicationSourceJsonnet holds jsonnet specific options */
            jsonnet?: {
              /** ExtVars is a list of Jsonnet External Variables */
              extVars?: {
                code?: boolean;

                name: string;

                value: string;
              }[];

              /** TLAS is a list of Jsonnet Top-level Arguments */
              tlas?: {
                code?: boolean;

                name: string;

                value: string;
              }[];
            };

            recurse?: boolean;
          };

          /** Helm holds helm specific options */
          helm?: {
            /** FileParameters are file parameters to the helm template */
            fileParameters?: {
              /** Name is the name of the helm parameter */
              name?: string;

              /** Path is the path value for the helm parameter */
              path?: string;
            }[];

            /** Parameters are parameters to the helm template */
            parameters?: {
              /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
              forceString?: boolean;

              /** Name is the name of the helm parameter */
              name?: string;

              /** Value is the value for the helm parameter */
              value?: string;
            }[];

            /** The Helm release name. If omitted it will use the application name */
            releaseName?: string;

            /** ValuesFiles is a list of Helm value files to use when generating a template */
            valueFiles?: string[];

            /** Values is Helm values, typically defined as a block */
            values?: string;
          };

          /** Ksonnet holds ksonnet specific options */
          ksonnet?: {
            /** Environment is a ksonnet application environment name */
            environment?: string;

            /** Parameters are a list of ksonnet component parameter override values */
            parameters?: {
              component?: string;

              name: string;

              value: string;
            }[];
          };

          /** Kustomize holds kustomize specific options */
          kustomize?: {
            /** CommonLabels adds additional kustomize commonLabels */
            commonLabels?: {
              [key: string]: string;
            };

            /** Images are kustomize image overrides */
            images?: string[];

            /** NamePrefix is a prefix appended to resources for kustomize apps */
            namePrefix?: string;

            /** NameSuffix is a suffix appended to resources for kustomize apps */
            nameSuffix?: string;

            /** Version contains optional Kustomize version */
            version?: string;
          };

          /** Path is a directory path within the Git repository */
          path?: string;

          /** ConfigManagementPlugin holds config management plugin specific options */
          plugin?: {
            env?: {
              /** the name, usually uppercase */
              name: string;

              /** the value */
              value: string;
            }[];

            name?: string;
          };

          /** RepoURL is the repository URL of the application manifests */
          repoURL: string;

          /** TargetRevision defines the commit, tag, or branch in which to sync the application to. If omitted, will sync to HEAD */
          targetRevision?: string;
        };
      };
    };

    /** ReconciledAt indicates when the application state was reconciled using the latest git version */
    reconciledAt?: string;

    resources?: {
      group?: string;

      health?: {
        message?: string;

        /** Represents resource health status */
        status?: string;
      };

      hook?: boolean;

      kind?: string;

      name?: string;

      namespace?: string;

      requiresPruning?: boolean;

      /** SyncStatusCode is a type which represents possible comparison results */
      status?: string;

      version?: string;
    }[];

    sourceType?: string;

    summary?: {
      /** ExternalURLs holds all external URLs of application child resources. */
      externalURLs?: string[];

      /** Images holds all images of application child resources. */
      images?: string[];
    };

    /** SyncStatus is a comparison result of application spec and deployed application. */
    sync: {
      /** ComparedTo contains application source and target which was used for resources comparison */
      comparedTo: {
        /** ApplicationDestination contains deployment destination information */
        destination: {
          /** Namespace overrides the environment namespace value in the ksonnet app.yaml */
          namespace?: string;

          /** Server overrides the environment server value in the ksonnet app.yaml */
          server?: string;
        };

        /** ApplicationSource contains information about github repository, path within repository and target application environment. */
        source: {
          /** Chart is a Helm chart name */
          chart?: string;

          /** Directory holds pathdirectory specific options */
          directory?: {
            /** ApplicationSourceJsonnet holds jsonnet specific options */
            jsonnet?: {
              /** ExtVars is a list of Jsonnet External Variables */
              extVars?: {
                code?: boolean;

                name: string;

                value: string;
              }[];

              /** TLAS is a list of Jsonnet Top-level Arguments */
              tlas?: {
                code?: boolean;

                name: string;

                value: string;
              }[];
            };

            recurse?: boolean;
          };

          /** Helm holds helm specific options */
          helm?: {
            /** FileParameters are file parameters to the helm template */
            fileParameters?: {
              /** Name is the name of the helm parameter */
              name?: string;

              /** Path is the path value for the helm parameter */
              path?: string;
            }[];

            /** Parameters are parameters to the helm template */
            parameters?: {
              /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
              forceString?: boolean;

              /** Name is the name of the helm parameter */
              name?: string;

              /** Value is the value for the helm parameter */
              value?: string;
            }[];

            /** The Helm release name. If omitted it will use the application name */
            releaseName?: string;

            /** ValuesFiles is a list of Helm value files to use when generating a template */
            valueFiles?: string[];

            /** Values is Helm values, typically defined as a block */
            values?: string;
          };

          /** Ksonnet holds ksonnet specific options */
          ksonnet?: {
            /** Environment is a ksonnet application environment name */
            environment?: string;

            /** Parameters are a list of ksonnet component parameter override values */
            parameters?: {
              component?: string;

              name: string;

              value: string;
            }[];
          };

          /** Kustomize holds kustomize specific options */
          kustomize?: {
            /** CommonLabels adds additional kustomize commonLabels */
            commonLabels?: {
              [key: string]: string;
            };

            /** Images are kustomize image overrides */
            images?: string[];

            /** NamePrefix is a prefix appended to resources for kustomize apps */
            namePrefix?: string;

            /** NameSuffix is a suffix appended to resources for kustomize apps */
            nameSuffix?: string;

            /** Version contains optional Kustomize version */
            version?: string;
          };

          /** Path is a directory path within the Git repository */
          path?: string;

          /** ConfigManagementPlugin holds config management plugin specific options */
          plugin?: {
            env?: {
              /** the name, usually uppercase */
              name: string;

              /** the value */
              value: string;
            }[];

            name?: string;
          };

          /** RepoURL is the repository URL of the application manifests */
          repoURL: string;

          /** TargetRevision defines the commit, tag, or branch in which to sync the application to. If omitted, will sync to HEAD */
          targetRevision?: string;
        };
      };

      revision?: string;

      /** SyncStatusCode is a type which represents possible comparison results */
      status: string;
    };
  };
};
export function createApplication(
  data: Omit<Application, "apiVersion" | "kind">,
): Application {
  return { apiVersion: "argoproj.io/v1alpha1", kind: "Application", ...data };
}

/** AppProject provides a logical grouping of applications, providing controls for: * where the apps may deploy to (cluster whitelist) * what may be deployed (repository whitelist, resource whitelistblacklist) * who can access these applications (roles, OIDC group claims bindings) * and what they can do (RBAC policies) * automation access to these roles (JWT tokens) */
export type AppProject = {
  apiVersion?: string;

  kind?: string;

  metadata: ObjectMeta;

  /** AppProjectSpec is the specification of an AppProject */
  spec: {
    /** ClusterResourceWhitelist contains list of whitelisted cluster level resources */
    clusterResourceWhitelist?: {
      group: string;

      kind: string;
    }[];

    /** Description contains optional project description */
    description?: string;

    /** Destinations contains list of destinations available for deployment */
    destinations?: {
      /** Namespace overrides the environment namespace value in the ksonnet app.yaml */
      namespace?: string;

      /** Server overrides the environment server value in the ksonnet app.yaml */
      server?: string;
    }[];

    /** NamespaceResourceBlacklist contains list of blacklisted namespace level resources */
    namespaceResourceBlacklist?: {
      group: string;

      kind: string;
    }[];

    /** NamespaceResourceWhitelist contains list of whitelisted namespace level resources */
    namespaceResourceWhitelist?: {
      group: string;

      kind: string;
    }[];

    /** OrphanedResources specifies if controller should monitor orphaned resources of apps in this project */
    orphanedResources?: {
      /** Warn indicates if warning condition should be created for apps which have orphaned resources */
      warn?: boolean;
    };

    /** Roles are user defined RBAC roles associated with this project */
    roles?: {
      /** Description is a description of the role */
      description?: string;

      /** Groups are a list of OIDC group claims bound to this role */
      groups?: string[];

      /** JWTTokens are a list of generated JWT tokens bound to this role */
      jwtTokens?: {
        exp?: number;

        iat: number;

        id?: string;
      }[];

      /** Name is a name for this role */
      name: string;

      /** Policies Stores a list of casbin formated strings that define access policies for the role in the project */
      policies?: string[];
    }[];

    /** SourceRepos contains list of repository URLs which can be used for deployment */
    sourceRepos?: string[];

    /** SyncWindows controls when syncs can be run for apps in this project */
    syncWindows?: {
      /** Applications contains a list of applications that the window will apply to */
      applications?: string[];

      /** Clusters contains a list of clusters that the window will apply to */
      clusters?: string[];

      /** Duration is the amount of time the sync window will be open */
      duration?: string;

      /** Kind defines if the window allows or blocks syncs */
      kind?: string;

      /** ManualSync enables manual syncs when they would otherwise be blocked */
      manualSync?: boolean;

      /** Namespaces contains a list of namespaces that the window will apply to */
      namespaces?: string[];

      /** Schedule is the time the window will begin, specified in cron format */
      schedule?: string;
    }[];
  };
};
export function createAppProject(
  data: Omit<AppProject, "apiVersion" | "kind">,
): AppProject {
  return { apiVersion: "argoproj.io/v1alpha1", kind: "AppProject", ...data };
}
