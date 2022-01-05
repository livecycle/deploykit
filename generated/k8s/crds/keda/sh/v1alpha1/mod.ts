/* Generated for keda/sh/v1alpha1/mod.ts */
import { ObjectMeta } from "https://deno.land/x/deploykit@0.0.19/generated/k8s/v1.18.3/apimachinery/pkg/apis/meta/v1/mod.ts";

/** ScaledObject is a specification for a ScaledObject resource */
export type ScaledObject = {
  apiVersion: "keda.sh/v1alpha1";
  kind: "ScaledObject";

  metadata?: ObjectMeta;

  /** ScaledObjectSpec is the spec for a ScaledObject resource */
  spec: {
    /** AdvancedConfig specifies advance scaling options */
    advanced?: {
      /** HorizontalPodAutoscalerConfig specifies horizontal scale config */
      horizontalPodAutoscalerConfig?: {
        /** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
        behavior?: {
          /** scaleDown is scaling policy for scaling Down. If not set, the default value is to allow to scale down to minReplicas pods, with a 300 second stabilization window (i.e., the highest recommendation for the last 300sec is used). */
          scaleDown?: {
            /** policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid */
            policies?: {
              /** PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min). */
              periodSeconds: number;

              /** Type is used to specify the scaling policy. */
              type: string;

              /** Value contains the amount of change which is permitted by the policy. It must be greater than zero */
              value: number;
            }[];

            /** selectPolicy is used to specify which policy should be used. If not set, the default value MaxPolicySelect is used. */
            selectPolicy?: string;

            /** StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long). */
            stabilizationWindowSeconds?: number;
          };

          /** scaleUp is scaling policy for scaling Up. If not set, the default value is the higher of:   * increase no more than 4 pods per 60 seconds   * double the number of pods per 60 seconds No stabilization is used. */
          scaleUp?: {
            /** policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid */
            policies?: {
              /** PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min). */
              periodSeconds: number;

              /** Type is used to specify the scaling policy. */
              type: string;

              /** Value contains the amount of change which is permitted by the policy. It must be greater than zero */
              value: number;
            }[];

            /** selectPolicy is used to specify which policy should be used. If not set, the default value MaxPolicySelect is used. */
            selectPolicy?: string;

            /** StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long). */
            stabilizationWindowSeconds?: number;
          };
        };
      };

      restoreToOriginalReplicaCount?: boolean;
    };

    cooldownPeriod?: number;

    /** Fallback is the spec for fallback options */
    fallback?: {
      failureThreshold: number;

      replicas: number;
    };

    idleReplicaCount?: number;

    maxReplicaCount?: number;

    minReplicaCount?: number;

    pollingInterval?: number;

    /** ScaleTarget holds the a reference to the scale target Object */
    scaleTargetRef: {
      apiVersion?: string;

      envSourceContainerName?: string;

      kind?: string;

      name: string;
    };

    triggers: {
      /** ScaledObjectAuthRef points to the TriggerAuthentication or ClusterTriggerAuthentication object that is used to authenticate the scaler with the environment */
      authenticationRef?: {
        /** Kind of the resource being referred to. Defaults to TriggerAuthentication. */
        kind?: string;

        name: string;
      };

      fallback?: number;

      metadata: {
        [key: string]: string;
      };

      name?: string;

      type: string;
    }[];
  };

  /** ScaledObjectStatus is the status for a ScaledObject resource */
  status?: {
    /** Conditions an array representation to store multiple Conditions */
    conditions?: {
      /** A human readable message indicating details about the transition. */
      message?: string;

      /** The reason for the condition's last transition. */
      reason?: string;

      /** Status of the condition, one of True, False, Unknown. */
      status: string;

      /** Type of condition */
      type: string;
    }[];

    externalMetricNames?: string[];

    health?: {
      [key: string]: {
        numberOfFailures?: number;

        /** HealthStatusType is an indication of whether the health status is happy or failing */
        status?: string;
      };
    };

    lastActiveTime?: string;

    originalReplicaCount?: number;

    resourceMetricNames?: string[];

    /** GroupVersionKindResource provides unified structure for schema.GroupVersionKind and Resource */
    scaleTargetGVKR?: {
      group: string;

      kind: string;

      resource: string;

      version: string;
    };

    scaleTargetKind?: string;
  };
};
export function createScaledObject<
  T extends Omit<ScaledObject, "apiVersion" | "kind">,
>(data: T): ScaledObject & T & Pick<ScaledObject, "apiVersion" | "kind"> {
  return { apiVersion: "keda.sh/v1alpha1", kind: "ScaledObject", ...data };
}
