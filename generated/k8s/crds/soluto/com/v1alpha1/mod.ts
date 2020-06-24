/* Generated for soluto/com/v1alpha1/mod.ts */
import { ObjectMeta } from "https://deno.land/x/gh:yshayy:deploykit@0.0.10/generated/k8s/v1.18.3/apimachinery/pkg/apis/meta/v1/mod.ts";

undefined;
export type KamusSecret = {
  data?: {
    [key: string]: any;
  };

  serviceAccount?: string;

  type?: string;

  metadata?: ObjectMeta;

  apiVersion?: string;

  kind?: string;
};
export function createKamusSecret<
  T extends Omit<KamusSecret, "apiVersion" | "kind">,
>(data: T): KamusSecret & T & Pick<KamusSecret, "apiVersion" | "kind"> {
  return { apiVersion: "soluto.com/v1alpha1", kind: "KamusSecret", ...data };
}
