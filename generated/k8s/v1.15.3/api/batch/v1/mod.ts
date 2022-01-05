/* Generated for api/batch/v1/mod.ts */
import { PodTemplateSpec } from "../../core/v1/mod.ts";
import {
  LabelSelector,
  ListMeta,
  ObjectMeta,
  Time,
} from "../../../apimachinery/pkg/apis/meta/v1/mod.ts";

/** Job represents the configuration of a single job. */
export type Job = {
  apiVersion: "batch/v1";
  kind: "Job";

  /** Standard object's metadata. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** Specification of the desired behavior of a job. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#spec-and-status */
  spec?: JobSpec;

  /** Current status of a job. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#spec-and-status */
  status?: JobStatus;
};
export function createJob<T extends Omit<Job, "apiVersion" | "kind">>(
  data: T,
): Job & T & Pick<Job, "apiVersion" | "kind"> {
  return { apiVersion: "batch/v1", kind: "Job", ...data };
}

/** JobCondition describes current state of a job. */
export type JobCondition = {
  /** Last time the condition was checked. */
  lastProbeTime?: Time;

  /** Last time the condition transit from one status to another. */
  lastTransitionTime?: Time;

  /** Human readable message indicating details about last transition. */
  message?: string;

  /** (brief) reason for the condition's last transition. */
  reason?: string;

  /** Status of the condition, one of True, False, Unknown. */
  status: string;

  /** Type of job condition, Complete or Failed. */
  type: string;
};

/** JobList is a collection of jobs. */
export type JobList = {
  apiVersion: "batch/v1";

  /** items is the list of Jobs. */
  items: Job[];
  kind: "JobList";

  /** Standard list metadata. More info: https:git.k8s.iocommunitycontributorsdevelapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createJobList<T extends Omit<JobList, "apiVersion" | "kind">>(
  data: T,
): JobList & T & Pick<JobList, "apiVersion" | "kind"> {
  return { apiVersion: "batch/v1", kind: "JobList", ...data };
}

/** JobSpec describes how the job execution will look like. */
export type JobSpec = {
  /** Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it; value must be positive integer */
  activeDeadlineSeconds?: number;

  /** Specifies the number of retries before marking this job failed. Defaults to 6 */
  backoffLimit?: number;

  /** Specifies the desired number of successfully finished pods the job should be run with.  Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https:kubernetes.iodocsconceptsworkloadscontrollersjobs-run-to-completion */
  completions?: number;

  /** manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensionsv1beta1` API. More info: https:kubernetes.iodocsconceptsworkloadscontrollersjobs-run-to-completion#specifying-your-own-pod-selector */
  manualSelector?: boolean;

  /** Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https:kubernetes.iodocsconceptsworkloadscontrollersjobs-run-to-completion */
  parallelism?: number;

  /** A label query over pods that should match the pod count. Normally, the system sets this field for you. More info: https:kubernetes.iodocsconceptsoverviewworking-with-objectslabels#label-selectors */
  selector?: LabelSelector;

  /** Describes the pod that will be created when executing a job. More info: https:kubernetes.iodocsconceptsworkloadscontrollersjobs-run-to-completion */
  template: PodTemplateSpec;

  /** ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes. This field is alpha-level and is only honored by servers that enable the TTLAfterFinished feature. */
  ttlSecondsAfterFinished?: number;
};

/** JobStatus represents the current state of a Job. */
export type JobStatus = {
  /** The number of actively running pods. */
  active?: number;

  /** Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
  completionTime?: Time;

  /** The latest available observations of an object's current state. More info: https:kubernetes.iodocsconceptsworkloadscontrollersjobs-run-to-completion */
  conditions?: JobCondition[];

  /** The number of pods which reached phase Failed. */
  failed?: number;

  /** Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
  startTime?: Time;

  /** The number of pods which reached phase Succeeded. */
  succeeded?: number;
};
