import { KubeMetaContext } from "../../blueprint/k8s/mod.ts";
import {
  SecurityContext,
  EnvVar,
  NodeSelector,
  Affinity,
  Toleration,
  Probe,
} from "../../generated/k8s/native/api/core/v1/mod.ts";
import { DeploymentStrategy } from "../../generated/k8s/native/api/apps/v1/mod.ts";
import { ServiceMonitor } from "../../generated/k8s/crds/monitoring/coreos/com/v1/mod.ts";
import {
  PodDisruptionBudgetSpec,
} from "../../generated/k8s/native/api/policy/v1beta1/mod.ts";

type isEnabled = { enabled: boolean };

let defaultOpaContext = {
  "opa": {
    "services": {
      "controller": {
        "url": "https://www.openpolicyagent.org",
      },
    },
    "bundles": {
      "quickstart": {
        "service": "controller",
        "resource": "/bundles/helm-kubernetes-quickstart",
      },
    },
    "default_decision": "/helm_kubernetes_quickstart/main",
  },
  "certManager": {
    "enabled": false,
  },
  "prometheus": {
    "enabled": false,
  },
  "serviceMonitor": {
    "enabled": false,
    "interval": "15s",
    "additionalLabels": {},
  } as isEnabled & Omit<ServiceMonitor["spec"], "endpoints" | "selector">,
  "annotations": {},
  "bootstrapPolicies": {},
  "admissionControllerKind": "ValidatingWebhookConfiguration",
  "admissionControllerFailurePolicy": "Ignore",
  "admissionControllerNamespaceSelector": {
    "matchExpressions": [
      {
        "key": "openpolicyagent.org/webhook",
        "operator": "NotIn",
        "values": [
          "ignore",
        ],
      },
    ],
  },
  "admissionControllerSideEffect": "Unknown",
  "admissionControllerRules": [
    {
      "operations": [
        "*",
      ],
      "apiGroups": [
        "*",
      ],
      "apiVersions": [
        "*",
      ],
      "resources": [
        "*",
      ],
    },
  ],
  "podDisruptionBudget": {
    "enabled": false,
    "minAvailable": 1,
  } as PodDisruptionBudgetSpec & { enabled: boolean },
  "generateAdmissionControllerCerts": true,
  "admissionControllerCA": "",
  "admissionControllerCert": "",
  "admissionControllerKey": "",
  "authz": {
    "enabled": true,
  },
  "image": "openpolicyagent/opa",
  "imageTag": "0.15.1",
  "imagePullPolicy": "IfNotPresent",
  "port": 443,
  "mgmt": {
    "enabled": true,
    "image": "openpolicyagent/kube-mgmt",
    "imageTag": "0.10",
    "imagePullPolicy": "IfNotPresent",
    "extraArgs": [],
    "resources": {},
    "data": {
      "enabled": false,
    },
    "configmapPolicies": {
      "enabled": false,
      "namespaces": [
        "opa",
        "kube-federation-scheduling-policy",
      ],
      "requireLabel": true,
    },
    "replicate": {
      "cluster": [],
      "namespace": [],
      "path": "kubernetes",
    },
  },
  "logLevel": "info",
  "logFormat": "text",
  "replicas": 1,
  "affinity": {} as Affinity,
  "tolerations": [] as Toleration[],
  "nodeSelector": {} as NodeSelector,
  "resources": {},
  "rbac": {
    "create": true,
    "rules": {
      "cluster": [],
    },
  },
  "serviceAccount": {
    "create": true,
    "name": null,
  },
  "sar": {
    "enabled": false,
    "image": "lachlanevenson/k8s-kubectl",
    "imageTag": "latest",
    "imagePullPolicy": "IfNotPresent",
    "resources": {},
  },
  "readinessProbe": {
    "httpGet": {
      "path": "/health",
      "scheme": "HTTPS",
      "port": 443,
    },
    "initialDelaySeconds": 3,
    "periodSeconds": 5,
  } as Probe,
  "livenessProbe": {
    "httpGet": {
      "path": "/health",
      "scheme": "HTTPS",
      "port": 443,
    },
    "initialDelaySeconds": 3,
    "periodSeconds": 5,
  } as Probe,
  "securityContext": {
    "enabled": false,
    "runAsNonRoot": true,
    "runAsUser": 1,
  } as SecurityContext,
  "deploymentStrategy": {} as DeploymentStrategy,
};
