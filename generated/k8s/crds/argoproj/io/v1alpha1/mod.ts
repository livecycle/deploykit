/* Generated for argoproj/io/v1alpha1/mod.ts */
import { ObjectMeta } from "https://deno.land/x/deploykit@0.0.19/generated/k8s/v1.18.3/apimachinery/pkg/apis/meta/v1/mod.ts";

undefined;
export type AnalysisRun = {
  apiVersion: "argoproj.io/v1alpha1";
  kind: "AnalysisRun";

  metadata?: ObjectMeta;

  spec: {
    args?: {
      name: string;

      value?: string;

      valueFrom?: {
        fieldRef?: {
          fieldPath: string;
        };

        secretKeyRef?: {
          key: string;

          name: string;
        };
      };
    }[];

    dryRun?: {
      metricName: string;
    }[];

    metrics: {
      consecutiveErrorLimit?: number | string;

      count?: number | string;

      failureCondition?: string;

      failureLimit?: number | string;

      inconclusiveLimit?: number | string;

      initialDelay?: string;

      interval?: string;

      name: string;

      provider: {
        cloudWatch?: {
          interval?: string;

          metricDataQueries: {
            expression?: string;

            id?: string;

            label?: string;

            metricStat?: {
              metric?: {
                dimensions?: {
                  name?: string;

                  value?: string;
                }[];

                metricName?: string;

                namespace?: string;
              };

              period?: number | string;

              stat?: string;

              unit?: string;
            };

            period?: number | string;

            returnData?: boolean;
          }[];
        };

        datadog?: {
          interval?: string;

          query: string;
        };

        graphite?: {
          address?: string;

          query?: string;
        };

        job?: {
          metadata?: {
            annotations?: {
              [key: string]: string;
            };

            labels?: {
              [key: string]: string;
            };
          };

          spec: {
            activeDeadlineSeconds?: number;

            backoffLimit?: number;

            completionMode?: string;

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

            suspend?: boolean;

            template: {
              metadata?: {
                annotations?: {
                  [key: string]: string;
                };

                labels?: {
                  [key: string]: string;
                };
              };

              spec?: {
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

                    requiredDuringSchedulingIgnoredDuringExecution?: {
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

                        namespaceSelector?: {
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

                      namespaceSelector?: {
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

                        namespaceSelector?: {
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

                      namespaceSelector?: {
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
                      configMapKeyRef?: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef?: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef?: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef?: {
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

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

                    timeoutSeconds?: number;
                  };

                  resources?: {
                    limits?: any;

                    requests?: any;
                  };

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

                    seccompProfile?: {
                      localhostProfile?: string;

                      type: string;
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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
                      configMapKeyRef?: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef?: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef?: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef?: {
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

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

                    timeoutSeconds?: number;
                  };

                  resources?: {
                    limits?: any;

                    requests?: any;
                  };

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

                    seccompProfile?: {
                      localhostProfile?: string;

                      type: string;
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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
                      configMapKeyRef?: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef?: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef?: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef?: {
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

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

                    timeoutSeconds?: number;
                  };

                  resources?: {
                    limits?: any;

                    requests?: any;
                  };

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

                    seccompProfile?: {
                      localhostProfile?: string;

                      type: string;
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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

                  fsGroupChangePolicy?: string;

                  runAsGroup?: number;

                  runAsNonRoot?: boolean;

                  runAsUser?: number;

                  seLinuxOptions?: {
                    level?: string;

                    role?: string;

                    type?: string;

                    user?: string;
                  };

                  seccompProfile?: {
                    localhostProfile?: string;

                    type: string;
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

                setHostnameAsFQDN?: boolean;

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

                volumes?: any;
              };
            };

            ttlSecondsAfterFinished?: number;
          };
        };

        kayenta?: {
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

        newRelic?: {
          profile?: string;

          query: string;
        };

        prometheus?: {
          address?: string;

          query?: string;
        };

        wavefront?: {
          address?: string;

          query?: string;
        };

        web?: {
          body?: string;

          headers?: {
            key: string;

            value: string;
          }[];

          insecure?: boolean;

          jsonPath?: string;

          method?: string;

          timeoutSeconds?: number;

          url: string;
        };
      };

      successCondition?: string;
    }[];

    terminate?: boolean;
  };

  status?: {
    dryRunSummary?: {
      count?: number;

      error?: number;

      failed?: number;

      inconclusive?: number;

      successful?: number;
    };

    message?: string;

    metricResults?: {
      consecutiveError?: number;

      count?: number;

      dryRun?: boolean;

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

    runSummary?: {
      count?: number;

      error?: number;

      failed?: number;

      inconclusive?: number;

      successful?: number;
    };

    startedAt?: string;
  };
};
export function createAnalysisRun<
  T extends Omit<AnalysisRun, "apiVersion" | "kind">,
>(data: T): AnalysisRun & T & Pick<AnalysisRun, "apiVersion" | "kind"> {
  return { apiVersion: "argoproj.io/v1alpha1", kind: "AnalysisRun", ...data };
}

undefined;
export type Rollout = {
  apiVersion: "argoproj.io/v1alpha1";
  kind: "Rollout";

  metadata?: ObjectMeta;

  spec: {
    analysis?: {
      successfulRunHistoryLimit?: number;

      unsuccessfulRunHistoryLimit?: number;
    };

    minReadySeconds?: number;

    paused?: boolean;

    progressDeadlineAbort?: boolean;

    progressDeadlineSeconds?: number;

    replicas?: number;

    restartAt?: string;

    revisionHistoryLimit?: number;

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

    strategy?: {
      blueGreen?: {
        abortScaleDownDelaySeconds?: number;

        activeMetadata?: {
          annotations?: {
            [key: string]: string;
          };

          labels?: {
            [key: string]: string;
          };
        };

        activeService: string;

        antiAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            weight: number;
          };

          requiredDuringSchedulingIgnoredDuringExecution?: {};
        };

        autoPromotionEnabled?: boolean;

        autoPromotionSeconds?: number;

        maxUnavailable?: number | string;

        postPromotionAnalysis?: {
          args?: {
            name: string;

            value?: string;

            valueFrom?: {
              fieldRef?: {
                fieldPath: string;
              };

              podTemplateHashValue?: string;
            };
          }[];

          dryRun?: {
            metricName: string;
          }[];

          templates?: {
            clusterScope?: boolean;

            templateName?: string;
          }[];
        };

        prePromotionAnalysis?: {
          args?: {
            name: string;

            value?: string;

            valueFrom?: {
              fieldRef?: {
                fieldPath: string;
              };

              podTemplateHashValue?: string;
            };
          }[];

          dryRun?: {
            metricName: string;
          }[];

          templates?: {
            clusterScope?: boolean;

            templateName?: string;
          }[];
        };

        previewMetadata?: {
          annotations?: {
            [key: string]: string;
          };

          labels?: {
            [key: string]: string;
          };
        };

        previewReplicaCount?: number;

        previewService?: string;

        scaleDownDelayRevisionLimit?: number;

        scaleDownDelaySeconds?: number;
      };

      canary?: {
        abortScaleDownDelaySeconds?: number;

        analysis?: {
          args?: {
            name: string;

            value?: string;

            valueFrom?: {
              fieldRef?: {
                fieldPath: string;
              };

              podTemplateHashValue?: string;
            };
          }[];

          dryRun?: {
            metricName: string;
          }[];

          startingStep?: number;

          templates?: {
            clusterScope?: boolean;

            templateName?: string;
          }[];
        };

        antiAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            weight: number;
          };

          requiredDuringSchedulingIgnoredDuringExecution?: {};
        };

        canaryMetadata?: {
          annotations?: {
            [key: string]: string;
          };

          labels?: {
            [key: string]: string;
          };
        };

        canaryService?: string;

        dynamicStableScale?: boolean;

        maxSurge?: number | string;

        maxUnavailable?: number | string;

        scaleDownDelayRevisionLimit?: number;

        scaleDownDelaySeconds?: number;

        stableMetadata?: {
          annotations?: {
            [key: string]: string;
          };

          labels?: {
            [key: string]: string;
          };
        };

        stableService?: string;

        steps?: {
          analysis?: {
            args?: {
              name: string;

              value?: string;

              valueFrom?: {
                fieldRef?: {
                  fieldPath: string;
                };

                podTemplateHashValue?: string;
              };
            }[];

            dryRun?: {
              metricName: string;
            }[];

            templates?: {
              clusterScope?: boolean;

              templateName?: string;
            }[];
          };

          experiment?: {
            analyses?: {
              args?: {
                name: string;

                value?: string;

                valueFrom?: {
                  fieldRef?: {
                    fieldPath: string;
                  };

                  podTemplateHashValue?: string;
                };
              }[];

              clusterScope?: boolean;

              name: string;

              requiredForCompletion?: boolean;

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

              weight?: number;
            }[];
          };

          pause?: {
            duration?: number | string;
          };

          setCanaryScale?: {
            matchTrafficWeight?: boolean;

            replicas?: number;

            weight?: number;
          };

          setWeight?: number;
        }[];

        trafficRouting?: {
          alb?: {
            annotationPrefix?: string;

            ingress: string;

            rootService?: string;

            servicePort: number;

            stickinessConfig?: {
              durationSeconds: number;

              enabled: boolean;
            };
          };

          ambassador?: {
            mappings: string[];
          };

          istio?: {
            destinationRule?: {
              canarySubsetName: string;

              name: string;

              stableSubsetName: string;
            };

            virtualService?: {
              name: string;

              routes?: string[];

              tlsRoutes?: {
                port?: number;

                sniHosts?: string[];
              }[];
            };

            virtualServices?: {
              name: string;

              routes?: string[];

              tlsRoutes?: {
                port?: number;

                sniHosts?: string[];
              }[];
            }[];
          };

          nginx?: {
            additionalIngressAnnotations?: {
              [key: string]: string;
            };

            annotationPrefix?: string;

            stableIngress: string;
          };

          smi?: {
            rootService?: string;

            trafficSplitName?: string;
          };
        };
      };
    };

    template?: {
      metadata?: {
        annotations?: {
          [key: string]: string;
        };

        labels?: {
          [key: string]: string;
        };
      };

      spec?: {
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

            requiredDuringSchedulingIgnoredDuringExecution?: {
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

                namespaceSelector?: {
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

              namespaceSelector?: {
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

                namespaceSelector?: {
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

              namespaceSelector?: {
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
              configMapKeyRef?: {
                key: string;

                name?: string;

                optional?: boolean;
              };

              fieldRef?: {
                apiVersion?: string;

                fieldPath: string;
              };

              resourceFieldRef?: {
                containerName?: string;

                divisor?: number | string;

                resource: string;
              };

              secretKeyRef?: {
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

              httpGet?: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket?: {
                host?: string;

                port: number | string;
              };
            };

            preStop?: {
              exec?: {
                command?: string[];
              };

              httpGet?: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket?: {
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

            httpGet?: {
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

            tcpSocket?: {
              host?: string;

              port: number | string;
            };

            terminationGracePeriodSeconds?: number;

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

            httpGet?: {
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

            tcpSocket?: {
              host?: string;

              port: number | string;
            };

            terminationGracePeriodSeconds?: number;

            timeoutSeconds?: number;
          };

          resources?: {
            limits?: any;

            requests?: any;
          };

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

            seccompProfile?: {
              localhostProfile?: string;

              type: string;
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

            httpGet?: {
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

            tcpSocket?: {
              host?: string;

              port: number | string;
            };

            terminationGracePeriodSeconds?: number;

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
              configMapKeyRef?: {
                key: string;

                name?: string;

                optional?: boolean;
              };

              fieldRef?: {
                apiVersion?: string;

                fieldPath: string;
              };

              resourceFieldRef?: {
                containerName?: string;

                divisor?: number | string;

                resource: string;
              };

              secretKeyRef?: {
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

              httpGet?: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket?: {
                host?: string;

                port: number | string;
              };
            };

            preStop?: {
              exec?: {
                command?: string[];
              };

              httpGet?: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket?: {
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

            httpGet?: {
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

            tcpSocket?: {
              host?: string;

              port: number | string;
            };

            terminationGracePeriodSeconds?: number;

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

            httpGet?: {
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

            tcpSocket?: {
              host?: string;

              port: number | string;
            };

            terminationGracePeriodSeconds?: number;

            timeoutSeconds?: number;
          };

          resources?: {
            limits?: any;

            requests?: any;
          };

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

            seccompProfile?: {
              localhostProfile?: string;

              type: string;
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

            httpGet?: {
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

            tcpSocket?: {
              host?: string;

              port: number | string;
            };

            terminationGracePeriodSeconds?: number;

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
              configMapKeyRef?: {
                key: string;

                name?: string;

                optional?: boolean;
              };

              fieldRef?: {
                apiVersion?: string;

                fieldPath: string;
              };

              resourceFieldRef?: {
                containerName?: string;

                divisor?: number | string;

                resource: string;
              };

              secretKeyRef?: {
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

              httpGet?: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket?: {
                host?: string;

                port: number | string;
              };
            };

            preStop?: {
              exec?: {
                command?: string[];
              };

              httpGet?: {
                host?: string;

                httpHeaders?: {
                  name: string;

                  value: string;
                }[];

                path?: string;

                port: number | string;

                scheme?: string;
              };

              tcpSocket?: {
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

            httpGet?: {
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

            tcpSocket?: {
              host?: string;

              port: number | string;
            };

            terminationGracePeriodSeconds?: number;

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

            httpGet?: {
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

            tcpSocket?: {
              host?: string;

              port: number | string;
            };

            terminationGracePeriodSeconds?: number;

            timeoutSeconds?: number;
          };

          resources?: {
            limits?: any;

            requests?: any;
          };

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

            seccompProfile?: {
              localhostProfile?: string;

              type: string;
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

            httpGet?: {
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

            tcpSocket?: {
              host?: string;

              port: number | string;
            };

            terminationGracePeriodSeconds?: number;

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

          fsGroupChangePolicy?: string;

          runAsGroup?: number;

          runAsNonRoot?: boolean;

          runAsUser?: number;

          seLinuxOptions?: {
            level?: string;

            role?: string;

            type?: string;

            user?: string;
          };

          seccompProfile?: {
            localhostProfile?: string;

            type: string;
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

        setHostnameAsFQDN?: boolean;

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

        volumes?: any;
      };
    };

    workloadRef?: {
      apiVersion?: string;

      kind?: string;

      name?: string;
    };
  };

  status?: {
    HPAReplicas?: number;

    abort?: boolean;

    abortedAt?: string;

    alb?: {
      canaryTargetGroup?: {
        arn: string;

        name: string;
      };

      loadBalancer?: {
        arn: string;

        name: string;
      };

      stableTargetGroup?: {
        arn: string;

        name: string;
      };
    };

    availableReplicas?: number;

    blueGreen?: {
      activeSelector?: string;

      postPromotionAnalysisRunStatus?: {
        message?: string;

        name: string;

        status: string;
      };

      prePromotionAnalysisRunStatus?: {
        message?: string;

        name: string;

        status: string;
      };

      previewSelector?: string;

      scaleUpPreviewCheckPoint?: boolean;
    };

    canary?: {
      currentBackgroundAnalysisRunStatus?: {
        message?: string;

        name: string;

        status: string;
      };

      currentExperiment?: string;

      currentStepAnalysisRunStatus?: {
        message?: string;

        name: string;

        status: string;
      };

      weights?: {
        additional?: {
          podTemplateHash?: string;

          serviceName?: string;

          weight: number;
        }[];

        canary: {
          podTemplateHash?: string;

          serviceName?: string;

          weight: number;
        };

        stable: {
          podTemplateHash?: string;

          serviceName?: string;

          weight: number;
        };

        verified?: boolean;
      };
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

    message?: string;

    observedGeneration?: string;

    pauseConditions?: {
      reason: string;

      startTime: string;
    }[];

    phase?: string;

    promoteFull?: boolean;

    readyReplicas?: number;

    replicas?: number;

    restartedAt?: string;

    selector?: string;

    stableRS?: string;

    updatedReplicas?: number;

    workloadObservedGeneration?: string;
  };
};
export function createRollout<T extends Omit<Rollout, "apiVersion" | "kind">>(
  data: T,
): Rollout & T & Pick<Rollout, "apiVersion" | "kind"> {
  return { apiVersion: "argoproj.io/v1alpha1", kind: "Rollout", ...data };
}

undefined;
export type Experiment = {
  apiVersion: "argoproj.io/v1alpha1";
  kind: "Experiment";

  metadata?: ObjectMeta;

  spec: {
    analyses?: {
      args?: {
        name: string;

        value?: string;

        valueFrom?: {
          fieldRef?: {
            fieldPath: string;
          };

          secretKeyRef?: {
            key: string;

            name: string;
          };
        };
      }[];

      clusterScope?: boolean;

      name: string;

      requiredForCompletion?: boolean;

      templateName: string;
    }[];

    dryRun?: {
      metricName: string;
    }[];

    duration?: string;

    progressDeadlineSeconds?: number;

    scaleDownDelaySeconds?: number;

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

      service?: {};

      template: {
        metadata?: {
          annotations?: {
            [key: string]: string;
          };

          labels?: {
            [key: string]: string;
          };
        };

        spec?: {
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

              requiredDuringSchedulingIgnoredDuringExecution?: {
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

                  namespaceSelector?: {
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

                namespaceSelector?: {
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

                  namespaceSelector?: {
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

                namespaceSelector?: {
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
                configMapKeyRef?: {
                  key: string;

                  name?: string;

                  optional?: boolean;
                };

                fieldRef?: {
                  apiVersion?: string;

                  fieldPath: string;
                };

                resourceFieldRef?: {
                  containerName?: string;

                  divisor?: number | string;

                  resource: string;
                };

                secretKeyRef?: {
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

                httpGet?: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket?: {
                  host?: string;

                  port: number | string;
                };
              };

              preStop?: {
                exec?: {
                  command?: string[];
                };

                httpGet?: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket?: {
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

              httpGet?: {
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

              tcpSocket?: {
                host?: string;

                port: number | string;
              };

              terminationGracePeriodSeconds?: number;

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

              httpGet?: {
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

              tcpSocket?: {
                host?: string;

                port: number | string;
              };

              terminationGracePeriodSeconds?: number;

              timeoutSeconds?: number;
            };

            resources?: {
              limits?: any;

              requests?: any;
            };

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

              seccompProfile?: {
                localhostProfile?: string;

                type: string;
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

              httpGet?: {
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

              tcpSocket?: {
                host?: string;

                port: number | string;
              };

              terminationGracePeriodSeconds?: number;

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
                configMapKeyRef?: {
                  key: string;

                  name?: string;

                  optional?: boolean;
                };

                fieldRef?: {
                  apiVersion?: string;

                  fieldPath: string;
                };

                resourceFieldRef?: {
                  containerName?: string;

                  divisor?: number | string;

                  resource: string;
                };

                secretKeyRef?: {
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

                httpGet?: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket?: {
                  host?: string;

                  port: number | string;
                };
              };

              preStop?: {
                exec?: {
                  command?: string[];
                };

                httpGet?: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket?: {
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

              httpGet?: {
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

              tcpSocket?: {
                host?: string;

                port: number | string;
              };

              terminationGracePeriodSeconds?: number;

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

              httpGet?: {
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

              tcpSocket?: {
                host?: string;

                port: number | string;
              };

              terminationGracePeriodSeconds?: number;

              timeoutSeconds?: number;
            };

            resources?: {
              limits?: any;

              requests?: any;
            };

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

              seccompProfile?: {
                localhostProfile?: string;

                type: string;
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

              httpGet?: {
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

              tcpSocket?: {
                host?: string;

                port: number | string;
              };

              terminationGracePeriodSeconds?: number;

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
                configMapKeyRef?: {
                  key: string;

                  name?: string;

                  optional?: boolean;
                };

                fieldRef?: {
                  apiVersion?: string;

                  fieldPath: string;
                };

                resourceFieldRef?: {
                  containerName?: string;

                  divisor?: number | string;

                  resource: string;
                };

                secretKeyRef?: {
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

                httpGet?: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket?: {
                  host?: string;

                  port: number | string;
                };
              };

              preStop?: {
                exec?: {
                  command?: string[];
                };

                httpGet?: {
                  host?: string;

                  httpHeaders?: {
                    name: string;

                    value: string;
                  }[];

                  path?: string;

                  port: number | string;

                  scheme?: string;
                };

                tcpSocket?: {
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

              httpGet?: {
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

              tcpSocket?: {
                host?: string;

                port: number | string;
              };

              terminationGracePeriodSeconds?: number;

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

              httpGet?: {
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

              tcpSocket?: {
                host?: string;

                port: number | string;
              };

              terminationGracePeriodSeconds?: number;

              timeoutSeconds?: number;
            };

            resources?: {
              limits?: any;

              requests?: any;
            };

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

              seccompProfile?: {
                localhostProfile?: string;

                type: string;
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

              httpGet?: {
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

              tcpSocket?: {
                host?: string;

                port: number | string;
              };

              terminationGracePeriodSeconds?: number;

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

            fsGroupChangePolicy?: string;

            runAsGroup?: number;

            runAsNonRoot?: boolean;

            runAsUser?: number;

            seLinuxOptions?: {
              level?: string;

              role?: string;

              type?: string;

              user?: string;
            };

            seccompProfile?: {
              localhostProfile?: string;

              type: string;
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

          setHostnameAsFQDN?: boolean;

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

          volumes?: any;
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

      podTemplateHash?: string;

      readyReplicas: number;

      replicas: number;

      serviceName?: string;

      status?: string;

      updatedReplicas: number;
    }[];
  };
};
export function createExperiment<
  T extends Omit<Experiment, "apiVersion" | "kind">,
>(data: T): Experiment & T & Pick<Experiment, "apiVersion" | "kind"> {
  return { apiVersion: "argoproj.io/v1alpha1", kind: "Experiment", ...data };
}

undefined;
export type AnalysisTemplate = {
  apiVersion: "argoproj.io/v1alpha1";
  kind: "AnalysisTemplate";

  metadata?: ObjectMeta;

  spec: {
    args?: {
      name: string;

      value?: string;

      valueFrom?: {
        fieldRef?: {
          fieldPath: string;
        };

        secretKeyRef?: {
          key: string;

          name: string;
        };
      };
    }[];

    dryRun?: {
      metricName: string;
    }[];

    metrics: {
      consecutiveErrorLimit?: number | string;

      count?: number | string;

      failureCondition?: string;

      failureLimit?: number | string;

      inconclusiveLimit?: number | string;

      initialDelay?: string;

      interval?: string;

      name: string;

      provider: {
        cloudWatch?: {
          interval?: string;

          metricDataQueries: {
            expression?: string;

            id?: string;

            label?: string;

            metricStat?: {
              metric?: {
                dimensions?: {
                  name?: string;

                  value?: string;
                }[];

                metricName?: string;

                namespace?: string;
              };

              period?: number | string;

              stat?: string;

              unit?: string;
            };

            period?: number | string;

            returnData?: boolean;
          }[];
        };

        datadog?: {
          interval?: string;

          query: string;
        };

        graphite?: {
          address?: string;

          query?: string;
        };

        job?: {
          metadata?: {
            annotations?: {
              [key: string]: string;
            };

            labels?: {
              [key: string]: string;
            };
          };

          spec: {
            activeDeadlineSeconds?: number;

            backoffLimit?: number;

            completionMode?: string;

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

            suspend?: boolean;

            template: {
              metadata?: {
                annotations?: {
                  [key: string]: string;
                };

                labels?: {
                  [key: string]: string;
                };
              };

              spec?: {
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

                    requiredDuringSchedulingIgnoredDuringExecution?: {
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

                        namespaceSelector?: {
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

                      namespaceSelector?: {
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

                        namespaceSelector?: {
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

                      namespaceSelector?: {
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
                      configMapKeyRef?: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef?: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef?: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef?: {
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

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

                    timeoutSeconds?: number;
                  };

                  resources?: {
                    limits?: any;

                    requests?: any;
                  };

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

                    seccompProfile?: {
                      localhostProfile?: string;

                      type: string;
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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
                      configMapKeyRef?: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef?: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef?: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef?: {
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

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

                    timeoutSeconds?: number;
                  };

                  resources?: {
                    limits?: any;

                    requests?: any;
                  };

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

                    seccompProfile?: {
                      localhostProfile?: string;

                      type: string;
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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
                      configMapKeyRef?: {
                        key: string;

                        name?: string;

                        optional?: boolean;
                      };

                      fieldRef?: {
                        apiVersion?: string;

                        fieldPath: string;
                      };

                      resourceFieldRef?: {
                        containerName?: string;

                        divisor?: number | string;

                        resource: string;
                      };

                      secretKeyRef?: {
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

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
                        host?: string;

                        port: number | string;
                      };
                    };

                    preStop?: {
                      exec?: {
                        command?: string[];
                      };

                      httpGet?: {
                        host?: string;

                        httpHeaders?: {
                          name: string;

                          value: string;
                        }[];

                        path?: string;

                        port: number | string;

                        scheme?: string;
                      };

                      tcpSocket?: {
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

                    timeoutSeconds?: number;
                  };

                  resources?: {
                    limits?: any;

                    requests?: any;
                  };

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

                    seccompProfile?: {
                      localhostProfile?: string;

                      type: string;
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

                    httpGet?: {
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

                    tcpSocket?: {
                      host?: string;

                      port: number | string;
                    };

                    terminationGracePeriodSeconds?: number;

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

                  fsGroupChangePolicy?: string;

                  runAsGroup?: number;

                  runAsNonRoot?: boolean;

                  runAsUser?: number;

                  seLinuxOptions?: {
                    level?: string;

                    role?: string;

                    type?: string;

                    user?: string;
                  };

                  seccompProfile?: {
                    localhostProfile?: string;

                    type: string;
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

                setHostnameAsFQDN?: boolean;

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

                volumes?: any;
              };
            };

            ttlSecondsAfterFinished?: number;
          };
        };

        kayenta?: {
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

        newRelic?: {
          profile?: string;

          query: string;
        };

        prometheus?: {
          address?: string;

          query?: string;
        };

        wavefront?: {
          address?: string;

          query?: string;
        };

        web?: {
          body?: string;

          headers?: {
            key: string;

            value: string;
          }[];

          insecure?: boolean;

          jsonPath?: string;

          method?: string;

          timeoutSeconds?: number;

          url: string;
        };
      };

      successCondition?: string;
    }[];
  };
};
export function createAnalysisTemplate<
  T extends Omit<AnalysisTemplate, "apiVersion" | "kind">,
>(
  data: T,
): AnalysisTemplate & T & Pick<AnalysisTemplate, "apiVersion" | "kind"> {
  return {
    apiVersion: "argoproj.io/v1alpha1",
    kind: "AnalysisTemplate",
    ...data,
  };
}

/** Application is a definition of Application resource. */
export type Application = {
  apiVersion: "argoproj.io/v1alpha1";
  kind: "Application";

  metadata: ObjectMeta;

  /** Operation contains information about a requested or running operation */
  operation?: {
    /** Info is a list of informational items for this operation */
    info?: {
      name: string;

      value: string;
    }[];

    /** InitiatedBy contains information about who initiated the operations */
    initiatedBy?: {
      /** Automated is set to true if operation was initiated automatically by the application controller. */
      automated?: boolean;

      /** Username contains the name of a user who started operation */
      username?: string;
    };

    /** Retry controls the strategy to apply if a sync fails */
    retry?: {
      /** Backoff controls how to backoff on subsequent retries of failed syncs */
      backoff?: {
        /** Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h") */
        duration?: string;

        /** Factor is a factor to multiply the base duration after each failed retry */
        factor?: number;

        /** MaxDuration is the maximum amount of time allowed for the backoff strategy */
        maxDuration?: string;
      };

      /** Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed. */
      limit?: number;
    };

    /** Sync contains parameters for the operation */
    sync?: {
      /** DryRun specifies to perform a `kubectl apply --dry-run` without actually performing the sync */
      dryRun?: boolean;

      /** Manifests is an optional field that overrides sync source with a local directory for development */
      manifests?: string[];

      /** Prune specifies to delete resources from the cluster that are no longer tracked in git */
      prune?: boolean;

      /** Resources describes which resources shall be part of the sync */
      resources?: {
        group?: string;

        kind: string;

        name: string;

        namespace?: string;
      }[];

      /** Revision is the revision (Git) or chart version (Helm) which to sync the application to If omitted, will use the revision specified in app spec. */
      revision?: string;

      /** Source overrides the source definition set in the application. This is typically set in a Rollback operation and is nil during a Sync operation */
      source?: {
        /** Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
        chart?: string;

        /** Directory holds pathdirectory specific options */
        directory?: {
          /** Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
          exclude?: string;

          /** Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
          include?: string;

          /** Jsonnet holds options specific to Jsonnet */
          jsonnet?: {
            /** ExtVars is a list of Jsonnet External Variables */
            extVars?: {
              code?: boolean;

              name: string;

              value: string;
            }[];

            /** Additional library search dirs */
            libs?: string[];

            /** TLAS is a list of Jsonnet Top-level Arguments */
            tlas?: {
              code?: boolean;

              name: string;

              value: string;
            }[];
          };

          /** Recurse specifies whether to scan a directory recursively for manifests */
          recurse?: boolean;
        };

        /** Helm holds helm specific options */
        helm?: {
          /** FileParameters are file parameters to the helm template */
          fileParameters?: {
            /** Name is the name of the Helm parameter */
            name?: string;

            /** Path is the path to the file containing the values for the Helm parameter */
            path?: string;
          }[];

          /** IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
          ignoreMissingValueFiles?: boolean;

          /** Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
          parameters?: {
            /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
            forceString?: boolean;

            /** Name is the name of the Helm parameter */
            name?: string;

            /** Value is the value for the Helm parameter */
            value?: string;
          }[];

          /** PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
          passCredentials?: boolean;

          /** ReleaseName is the Helm release name to use. If omitted it will use the application name */
          releaseName?: string;

          /** ValuesFiles is a list of Helm value files to use when generating a template */
          valueFiles?: string[];

          /** Values specifies Helm values to be passed to helm template, typically defined as a block */
          values?: string;

          /** Version is the Helm version to use for templating (either "2" or "3") */
          version?: string;
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
          /** CommonAnnotations is a list of additional annotations to add to rendered manifests */
          commonAnnotations?: {
            [key: string]: string;
          };

          /** CommonLabels is a list of additional labels to add to rendered manifests */
          commonLabels?: {
            [key: string]: string;
          };

          /** ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
          forceCommonAnnotations?: boolean;

          /** ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
          forceCommonLabels?: boolean;

          /** Images is a list of Kustomize image override specifications */
          images?: string[];

          /** NamePrefix is a prefix appended to resources for Kustomize apps */
          namePrefix?: string;

          /** NameSuffix is a suffix appended to resources for Kustomize apps */
          nameSuffix?: string;

          /** Version controls which version of Kustomize to use for rendering manifests */
          version?: string;
        };

        /** Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
        path?: string;

        /** ConfigManagementPlugin holds config management plugin specific options */
        plugin?: {
          /** Env is a list of environment variable entries */
          env?: {
            /** Name is the name of the variable, usually expressed in uppercase */
            name: string;

            /** Value is the value of the variable */
            value: string;
          }[];

          name?: string;
        };

        /** RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
        repoURL: string;

        /** TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version. */
        targetRevision?: string;
      };

      /** SyncOptions provide per-sync sync-options, e.g. Validate=false */
      syncOptions?: string[];

      /** SyncStrategy describes how to perform the sync */
      syncStrategy?: {
        /** Apply will perform a `kubectl apply` to perform the sync. */
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
    /** Destination is a reference to the target Kubernetes server and namespace */
    destination: {
      /** Name is an alternate way of specifying the target cluster by its symbolic name */
      name?: string;

      /** Namespace specifies the target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace */
      namespace?: string;

      /** Server specifies the URL of the target cluster and must be set to the Kubernetes control plane API */
      server?: string;
    };

    /** IgnoreDifferences is a list of resources and their fields which should be ignored during comparison */
    ignoreDifferences?: {
      group?: string;

      jqPathExpressions?: string[];

      jsonPointers?: string[];

      kind: string;

      /** ManagedFieldsManagers is a list of trusted managers. Fields mutated by those managers will take precedence over the desired state defined in the SCM and won't be displayed in diffs */
      managedFieldsManagers?: string[];

      name?: string;

      namespace?: string;
    }[];

    /** Info contains a list of information (URLs, email addresses, and plain text) that relates to the application */
    info?: {
      name: string;

      value: string;
    }[];

    /** Project is a reference to the project this application belongs to. The empty string means that application belongs to the 'default' project. */
    project: string;

    /** RevisionHistoryLimit limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10. */
    revisionHistoryLimit?: number;

    /** Source is a reference to the location of the application's manifests or chart */
    source: {
      /** Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
      chart?: string;

      /** Directory holds pathdirectory specific options */
      directory?: {
        /** Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
        exclude?: string;

        /** Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
        include?: string;

        /** Jsonnet holds options specific to Jsonnet */
        jsonnet?: {
          /** ExtVars is a list of Jsonnet External Variables */
          extVars?: {
            code?: boolean;

            name: string;

            value: string;
          }[];

          /** Additional library search dirs */
          libs?: string[];

          /** TLAS is a list of Jsonnet Top-level Arguments */
          tlas?: {
            code?: boolean;

            name: string;

            value: string;
          }[];
        };

        /** Recurse specifies whether to scan a directory recursively for manifests */
        recurse?: boolean;
      };

      /** Helm holds helm specific options */
      helm?: {
        /** FileParameters are file parameters to the helm template */
        fileParameters?: {
          /** Name is the name of the Helm parameter */
          name?: string;

          /** Path is the path to the file containing the values for the Helm parameter */
          path?: string;
        }[];

        /** IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
        ignoreMissingValueFiles?: boolean;

        /** Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
        parameters?: {
          /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
          forceString?: boolean;

          /** Name is the name of the Helm parameter */
          name?: string;

          /** Value is the value for the Helm parameter */
          value?: string;
        }[];

        /** PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
        passCredentials?: boolean;

        /** ReleaseName is the Helm release name to use. If omitted it will use the application name */
        releaseName?: string;

        /** ValuesFiles is a list of Helm value files to use when generating a template */
        valueFiles?: string[];

        /** Values specifies Helm values to be passed to helm template, typically defined as a block */
        values?: string;

        /** Version is the Helm version to use for templating (either "2" or "3") */
        version?: string;
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
        /** CommonAnnotations is a list of additional annotations to add to rendered manifests */
        commonAnnotations?: {
          [key: string]: string;
        };

        /** CommonLabels is a list of additional labels to add to rendered manifests */
        commonLabels?: {
          [key: string]: string;
        };

        /** ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
        forceCommonAnnotations?: boolean;

        /** ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
        forceCommonLabels?: boolean;

        /** Images is a list of Kustomize image override specifications */
        images?: string[];

        /** NamePrefix is a prefix appended to resources for Kustomize apps */
        namePrefix?: string;

        /** NameSuffix is a suffix appended to resources for Kustomize apps */
        nameSuffix?: string;

        /** Version controls which version of Kustomize to use for rendering manifests */
        version?: string;
      };

      /** Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
      path?: string;

      /** ConfigManagementPlugin holds config management plugin specific options */
      plugin?: {
        /** Env is a list of environment variable entries */
        env?: {
          /** Name is the name of the variable, usually expressed in uppercase */
          name: string;

          /** Value is the value of the variable */
          value: string;
        }[];

        name?: string;
      };

      /** RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
      repoURL: string;

      /** TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version. */
      targetRevision?: string;
    };

    /** SyncPolicy controls when and how a sync will be performed */
    syncPolicy?: {
      /** Automated will keep an application synced to the target revision */
      automated?: {
        /** AllowEmpty allows apps have zero live resources (default: false) */
        allowEmpty?: boolean;

        /** Prune specifies whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync (default: false) */
        prune?: boolean;

        /** SelfHeal specifes whether to revert resources back to their desired state upon modification in the cluster (default: false) */
        selfHeal?: boolean;
      };

      /** Retry controls failed sync retry behavior */
      retry?: {
        /** Backoff controls how to backoff on subsequent retries of failed syncs */
        backoff?: {
          /** Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h") */
          duration?: string;

          /** Factor is a factor to multiply the base duration after each failed retry */
          factor?: number;

          /** MaxDuration is the maximum amount of time allowed for the backoff strategy */
          maxDuration?: string;
        };

        /** Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed. */
        limit?: number;
      };

      /** Options allow you to specify whole app sync-options */
      syncOptions?: string[];
    };
  };

  /** ApplicationStatus contains status information for the application */
  status?: {
    /** Conditions is a list of currently observed application conditions */
    conditions?: {
      /** LastTransitionTime is the time the condition was last observed */
      lastTransitionTime?: string;

      /** Message contains human-readable message indicating details about condition */
      message: string;

      /** Type is an application condition type */
      type: string;
    }[];

    /** Health contains information about the application's current health status */
    health?: {
      /** Message is a human-readable informational message describing the health status */
      message?: string;

      /** Status holds the status code of the application or resource */
      status?: string;
    };

    /** History contains information about the application's sync history */
    history?: {
      /** DeployStartedAt holds the time the sync operation started */
      deployStartedAt?: string;

      /** DeployedAt holds the time the sync operation completed */
      deployedAt: string;

      /** ID is an auto incrementing identifier of the RevisionHistory */
      id: number;

      /** Revision holds the revision the sync was performed against */
      revision: string;

      /** Source is a reference to the application source used for the sync operation */
      source?: {
        /** Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
        chart?: string;

        /** Directory holds pathdirectory specific options */
        directory?: {
          /** Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
          exclude?: string;

          /** Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
          include?: string;

          /** Jsonnet holds options specific to Jsonnet */
          jsonnet?: {
            /** ExtVars is a list of Jsonnet External Variables */
            extVars?: {
              code?: boolean;

              name: string;

              value: string;
            }[];

            /** Additional library search dirs */
            libs?: string[];

            /** TLAS is a list of Jsonnet Top-level Arguments */
            tlas?: {
              code?: boolean;

              name: string;

              value: string;
            }[];
          };

          /** Recurse specifies whether to scan a directory recursively for manifests */
          recurse?: boolean;
        };

        /** Helm holds helm specific options */
        helm?: {
          /** FileParameters are file parameters to the helm template */
          fileParameters?: {
            /** Name is the name of the Helm parameter */
            name?: string;

            /** Path is the path to the file containing the values for the Helm parameter */
            path?: string;
          }[];

          /** IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
          ignoreMissingValueFiles?: boolean;

          /** Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
          parameters?: {
            /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
            forceString?: boolean;

            /** Name is the name of the Helm parameter */
            name?: string;

            /** Value is the value for the Helm parameter */
            value?: string;
          }[];

          /** PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
          passCredentials?: boolean;

          /** ReleaseName is the Helm release name to use. If omitted it will use the application name */
          releaseName?: string;

          /** ValuesFiles is a list of Helm value files to use when generating a template */
          valueFiles?: string[];

          /** Values specifies Helm values to be passed to helm template, typically defined as a block */
          values?: string;

          /** Version is the Helm version to use for templating (either "2" or "3") */
          version?: string;
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
          /** CommonAnnotations is a list of additional annotations to add to rendered manifests */
          commonAnnotations?: {
            [key: string]: string;
          };

          /** CommonLabels is a list of additional labels to add to rendered manifests */
          commonLabels?: {
            [key: string]: string;
          };

          /** ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
          forceCommonAnnotations?: boolean;

          /** ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
          forceCommonLabels?: boolean;

          /** Images is a list of Kustomize image override specifications */
          images?: string[];

          /** NamePrefix is a prefix appended to resources for Kustomize apps */
          namePrefix?: string;

          /** NameSuffix is a suffix appended to resources for Kustomize apps */
          nameSuffix?: string;

          /** Version controls which version of Kustomize to use for rendering manifests */
          version?: string;
        };

        /** Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
        path?: string;

        /** ConfigManagementPlugin holds config management plugin specific options */
        plugin?: {
          /** Env is a list of environment variable entries */
          env?: {
            /** Name is the name of the variable, usually expressed in uppercase */
            name: string;

            /** Value is the value of the variable */
            value: string;
          }[];

          name?: string;
        };

        /** RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
        repoURL: string;

        /** TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version. */
        targetRevision?: string;
      };
    }[];

    /** ObservedAt indicates when the application state was updated without querying latest git state Deprecated: controller no longer updates ObservedAt field */
    observedAt?: string;

    /** OperationState contains information about any ongoing operations, such as a sync */
    operationState?: {
      /** FinishedAt contains time of operation completion */
      finishedAt?: string;

      /** Message holds any pertinent messages when attempting to perform operation (typically errors). */
      message?: string;

      /** Operation is the original requested operation */
      operation: {
        /** Info is a list of informational items for this operation */
        info?: {
          name: string;

          value: string;
        }[];

        /** InitiatedBy contains information about who initiated the operations */
        initiatedBy?: {
          /** Automated is set to true if operation was initiated automatically by the application controller. */
          automated?: boolean;

          /** Username contains the name of a user who started operation */
          username?: string;
        };

        /** Retry controls the strategy to apply if a sync fails */
        retry?: {
          /** Backoff controls how to backoff on subsequent retries of failed syncs */
          backoff?: {
            /** Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h") */
            duration?: string;

            /** Factor is a factor to multiply the base duration after each failed retry */
            factor?: number;

            /** MaxDuration is the maximum amount of time allowed for the backoff strategy */
            maxDuration?: string;
          };

          /** Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed. */
          limit?: number;
        };

        /** Sync contains parameters for the operation */
        sync?: {
          /** DryRun specifies to perform a `kubectl apply --dry-run` without actually performing the sync */
          dryRun?: boolean;

          /** Manifests is an optional field that overrides sync source with a local directory for development */
          manifests?: string[];

          /** Prune specifies to delete resources from the cluster that are no longer tracked in git */
          prune?: boolean;

          /** Resources describes which resources shall be part of the sync */
          resources?: {
            group?: string;

            kind: string;

            name: string;

            namespace?: string;
          }[];

          /** Revision is the revision (Git) or chart version (Helm) which to sync the application to If omitted, will use the revision specified in app spec. */
          revision?: string;

          /** Source overrides the source definition set in the application. This is typically set in a Rollback operation and is nil during a Sync operation */
          source?: {
            /** Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
            chart?: string;

            /** Directory holds pathdirectory specific options */
            directory?: {
              /** Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
              exclude?: string;

              /** Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
              include?: string;

              /** Jsonnet holds options specific to Jsonnet */
              jsonnet?: {
                /** ExtVars is a list of Jsonnet External Variables */
                extVars?: {
                  code?: boolean;

                  name: string;

                  value: string;
                }[];

                /** Additional library search dirs */
                libs?: string[];

                /** TLAS is a list of Jsonnet Top-level Arguments */
                tlas?: {
                  code?: boolean;

                  name: string;

                  value: string;
                }[];
              };

              /** Recurse specifies whether to scan a directory recursively for manifests */
              recurse?: boolean;
            };

            /** Helm holds helm specific options */
            helm?: {
              /** FileParameters are file parameters to the helm template */
              fileParameters?: {
                /** Name is the name of the Helm parameter */
                name?: string;

                /** Path is the path to the file containing the values for the Helm parameter */
                path?: string;
              }[];

              /** IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
              ignoreMissingValueFiles?: boolean;

              /** Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
              parameters?: {
                /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
                forceString?: boolean;

                /** Name is the name of the Helm parameter */
                name?: string;

                /** Value is the value for the Helm parameter */
                value?: string;
              }[];

              /** PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
              passCredentials?: boolean;

              /** ReleaseName is the Helm release name to use. If omitted it will use the application name */
              releaseName?: string;

              /** ValuesFiles is a list of Helm value files to use when generating a template */
              valueFiles?: string[];

              /** Values specifies Helm values to be passed to helm template, typically defined as a block */
              values?: string;

              /** Version is the Helm version to use for templating (either "2" or "3") */
              version?: string;
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
              /** CommonAnnotations is a list of additional annotations to add to rendered manifests */
              commonAnnotations?: {
                [key: string]: string;
              };

              /** CommonLabels is a list of additional labels to add to rendered manifests */
              commonLabels?: {
                [key: string]: string;
              };

              /** ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
              forceCommonAnnotations?: boolean;

              /** ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
              forceCommonLabels?: boolean;

              /** Images is a list of Kustomize image override specifications */
              images?: string[];

              /** NamePrefix is a prefix appended to resources for Kustomize apps */
              namePrefix?: string;

              /** NameSuffix is a suffix appended to resources for Kustomize apps */
              nameSuffix?: string;

              /** Version controls which version of Kustomize to use for rendering manifests */
              version?: string;
            };

            /** Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
            path?: string;

            /** ConfigManagementPlugin holds config management plugin specific options */
            plugin?: {
              /** Env is a list of environment variable entries */
              env?: {
                /** Name is the name of the variable, usually expressed in uppercase */
                name: string;

                /** Value is the value of the variable */
                value: string;
              }[];

              name?: string;
            };

            /** RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
            repoURL: string;

            /** TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version. */
            targetRevision?: string;
          };

          /** SyncOptions provide per-sync sync-options, e.g. Validate=false */
          syncOptions?: string[];

          /** SyncStrategy describes how to perform the sync */
          syncStrategy?: {
            /** Apply will perform a `kubectl apply` to perform the sync. */
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

      /** RetryCount contains time of operation retries */
      retryCount?: number;

      /** StartedAt contains time of operation start */
      startedAt: string;

      /** SyncResult is the result of a Sync operation */
      syncResult?: {
        /** Resources contains a list of sync result items for each individual resource in a sync operation */
        resources?: {
          /** Group specifies the API group of the resource */
          group: string;

          /** HookPhase contains the state of any operation associated with this resource OR hook This can also contain values for non-hook resources. */
          hookPhase?: string;

          /** HookType specifies the type of the hook. Empty for non-hook resources */
          hookType?: string;

          /** Kind specifies the API kind of the resource */
          kind: string;

          /** Message contains an informational or error message for the last sync OR operation */
          message?: string;

          /** Name specifies the name of the resource */
          name: string;

          /** Namespace specifies the target namespace of the resource */
          namespace: string;

          /** Status holds the final result of the sync. Will be empty if the resources is yet to be appliedpruned and is always zero-value for hooks */
          status?: string;

          /** SyncPhase indicates the particular phase of the sync that this result was acquired in */
          syncPhase?: string;

          /** Version specifies the API version of the resource */
          version: string;
        }[];

        /** Revision holds the revision this sync operation was performed to */
        revision: string;

        /** Source records the application source information of the sync, used for comparing auto-sync */
        source?: {
          /** Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
          chart?: string;

          /** Directory holds pathdirectory specific options */
          directory?: {
            /** Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
            exclude?: string;

            /** Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
            include?: string;

            /** Jsonnet holds options specific to Jsonnet */
            jsonnet?: {
              /** ExtVars is a list of Jsonnet External Variables */
              extVars?: {
                code?: boolean;

                name: string;

                value: string;
              }[];

              /** Additional library search dirs */
              libs?: string[];

              /** TLAS is a list of Jsonnet Top-level Arguments */
              tlas?: {
                code?: boolean;

                name: string;

                value: string;
              }[];
            };

            /** Recurse specifies whether to scan a directory recursively for manifests */
            recurse?: boolean;
          };

          /** Helm holds helm specific options */
          helm?: {
            /** FileParameters are file parameters to the helm template */
            fileParameters?: {
              /** Name is the name of the Helm parameter */
              name?: string;

              /** Path is the path to the file containing the values for the Helm parameter */
              path?: string;
            }[];

            /** IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
            ignoreMissingValueFiles?: boolean;

            /** Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
            parameters?: {
              /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
              forceString?: boolean;

              /** Name is the name of the Helm parameter */
              name?: string;

              /** Value is the value for the Helm parameter */
              value?: string;
            }[];

            /** PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
            passCredentials?: boolean;

            /** ReleaseName is the Helm release name to use. If omitted it will use the application name */
            releaseName?: string;

            /** ValuesFiles is a list of Helm value files to use when generating a template */
            valueFiles?: string[];

            /** Values specifies Helm values to be passed to helm template, typically defined as a block */
            values?: string;

            /** Version is the Helm version to use for templating (either "2" or "3") */
            version?: string;
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
            /** CommonAnnotations is a list of additional annotations to add to rendered manifests */
            commonAnnotations?: {
              [key: string]: string;
            };

            /** CommonLabels is a list of additional labels to add to rendered manifests */
            commonLabels?: {
              [key: string]: string;
            };

            /** ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
            forceCommonAnnotations?: boolean;

            /** ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
            forceCommonLabels?: boolean;

            /** Images is a list of Kustomize image override specifications */
            images?: string[];

            /** NamePrefix is a prefix appended to resources for Kustomize apps */
            namePrefix?: string;

            /** NameSuffix is a suffix appended to resources for Kustomize apps */
            nameSuffix?: string;

            /** Version controls which version of Kustomize to use for rendering manifests */
            version?: string;
          };

          /** Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
          path?: string;

          /** ConfigManagementPlugin holds config management plugin specific options */
          plugin?: {
            /** Env is a list of environment variable entries */
            env?: {
              /** Name is the name of the variable, usually expressed in uppercase */
              name: string;

              /** Value is the value of the variable */
              value: string;
            }[];

            name?: string;
          };

          /** RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
          repoURL: string;

          /** TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version. */
          targetRevision?: string;
        };
      };
    };

    /** ReconciledAt indicates when the application state was reconciled using the latest git version */
    reconciledAt?: string;

    /** Resources is a list of Kubernetes resources managed by this application */
    resources?: {
      group?: string;

      /** HealthStatus contains information about the currently observed health state of an application or resource */
      health?: {
        /** Message is a human-readable informational message describing the health status */
        message?: string;

        /** Status holds the status code of the application or resource */
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

    /** SourceType specifies the type of this application */
    sourceType?: string;

    /** Summary contains a list of URLs and container images used by this application */
    summary?: {
      /** ExternalURLs holds all external URLs of application child resources. */
      externalURLs?: string[];

      /** Images holds all images of application child resources. */
      images?: string[];
    };

    /** Sync contains information about the application's current sync status */
    sync?: {
      /** ComparedTo contains information about what has been compared */
      comparedTo?: {
        /** Destination is a reference to the application's destination used for comparison */
        destination: {
          /** Name is an alternate way of specifying the target cluster by its symbolic name */
          name?: string;

          /** Namespace specifies the target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace */
          namespace?: string;

          /** Server specifies the URL of the target cluster and must be set to the Kubernetes control plane API */
          server?: string;
        };

        /** Source is a reference to the application's source used for comparison */
        source: {
          /** Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
          chart?: string;

          /** Directory holds pathdirectory specific options */
          directory?: {
            /** Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
            exclude?: string;

            /** Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
            include?: string;

            /** Jsonnet holds options specific to Jsonnet */
            jsonnet?: {
              /** ExtVars is a list of Jsonnet External Variables */
              extVars?: {
                code?: boolean;

                name: string;

                value: string;
              }[];

              /** Additional library search dirs */
              libs?: string[];

              /** TLAS is a list of Jsonnet Top-level Arguments */
              tlas?: {
                code?: boolean;

                name: string;

                value: string;
              }[];
            };

            /** Recurse specifies whether to scan a directory recursively for manifests */
            recurse?: boolean;
          };

          /** Helm holds helm specific options */
          helm?: {
            /** FileParameters are file parameters to the helm template */
            fileParameters?: {
              /** Name is the name of the Helm parameter */
              name?: string;

              /** Path is the path to the file containing the values for the Helm parameter */
              path?: string;
            }[];

            /** IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
            ignoreMissingValueFiles?: boolean;

            /** Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
            parameters?: {
              /** ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
              forceString?: boolean;

              /** Name is the name of the Helm parameter */
              name?: string;

              /** Value is the value for the Helm parameter */
              value?: string;
            }[];

            /** PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
            passCredentials?: boolean;

            /** ReleaseName is the Helm release name to use. If omitted it will use the application name */
            releaseName?: string;

            /** ValuesFiles is a list of Helm value files to use when generating a template */
            valueFiles?: string[];

            /** Values specifies Helm values to be passed to helm template, typically defined as a block */
            values?: string;

            /** Version is the Helm version to use for templating (either "2" or "3") */
            version?: string;
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
            /** CommonAnnotations is a list of additional annotations to add to rendered manifests */
            commonAnnotations?: {
              [key: string]: string;
            };

            /** CommonLabels is a list of additional labels to add to rendered manifests */
            commonLabels?: {
              [key: string]: string;
            };

            /** ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
            forceCommonAnnotations?: boolean;

            /** ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
            forceCommonLabels?: boolean;

            /** Images is a list of Kustomize image override specifications */
            images?: string[];

            /** NamePrefix is a prefix appended to resources for Kustomize apps */
            namePrefix?: string;

            /** NameSuffix is a suffix appended to resources for Kustomize apps */
            nameSuffix?: string;

            /** Version controls which version of Kustomize to use for rendering manifests */
            version?: string;
          };

          /** Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
          path?: string;

          /** ConfigManagementPlugin holds config management plugin specific options */
          plugin?: {
            /** Env is a list of environment variable entries */
            env?: {
              /** Name is the name of the variable, usually expressed in uppercase */
              name: string;

              /** Value is the value of the variable */
              value: string;
            }[];

            name?: string;
          };

          /** RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
          repoURL: string;

          /** TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version. */
          targetRevision?: string;
        };
      };

      /** Revision contains information about the revision the comparison has been performed to */
      revision?: string;

      /** Status is the sync state of the comparison */
      status: string;
    };
  };
};
export function createApplication<
  T extends Omit<Application, "apiVersion" | "kind">,
>(data: T): Application & T & Pick<Application, "apiVersion" | "kind"> {
  return { apiVersion: "argoproj.io/v1alpha1", kind: "Application", ...data };
}

/** AppProject provides a logical grouping of applications, providing controls for: * where the apps may deploy to (cluster whitelist) * what may be deployed (repository whitelist, resource whitelistblacklist) * who can access these applications (roles, OIDC group claims bindings) * and what they can do (RBAC policies) * automation access to these roles (JWT tokens) */
export type AppProject = {
  apiVersion: "argoproj.io/v1alpha1";
  kind: "AppProject";

  metadata: ObjectMeta;

  /** AppProjectSpec is the specification of an AppProject */
  spec: {
    /** ClusterResourceBlacklist contains list of blacklisted cluster level resources */
    clusterResourceBlacklist?: {
      group: string;

      kind: string;
    }[];

    /** ClusterResourceWhitelist contains list of whitelisted cluster level resources */
    clusterResourceWhitelist?: {
      group: string;

      kind: string;
    }[];

    /** Description contains optional project description */
    description?: string;

    /** Destinations contains list of destinations available for deployment */
    destinations?: {
      /** Name is an alternate way of specifying the target cluster by its symbolic name */
      name?: string;

      /** Namespace specifies the target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace */
      namespace?: string;

      /** Server specifies the URL of the target cluster and must be set to the Kubernetes control plane API */
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
      /** Ignore contains a list of resources that are to be excluded from orphaned resources monitoring */
      ignore?: {
        group?: string;

        kind?: string;

        name?: string;
      }[];

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

      /** Policies Stores a list of casbin formatted strings that define access policies for the role in the project */
      policies?: string[];
    }[];

    /** SignatureKeys contains a list of PGP key IDs that commits in Git must be signed with in order to be allowed for sync */
    signatureKeys?: {
      /** The ID of the key in hexadecimal notation */
      keyID: string;
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

      /** TimeZone of the sync that will be applied to the schedule */
      timeZone?: string;
    }[];
  };

  /** AppProjectStatus contains status information for AppProject CRs */
  status?: {
    /** JWTTokensByRole contains a list of JWT tokens issued for a given role */
    jwtTokensByRole?: {
      [key: string]: {
        items?: {
          exp?: number;

          iat: number;

          id?: string;
        }[];
      };
    };
  };
};
export function createAppProject<
  T extends Omit<AppProject, "apiVersion" | "kind">,
>(data: T): AppProject & T & Pick<AppProject, "apiVersion" | "kind"> {
  return { apiVersion: "argoproj.io/v1alpha1", kind: "AppProject", ...data };
}
