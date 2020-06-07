/* Generated for soluto/com/v1alpha2/mod.ts */
import { ObjectMeta } from "https://deno.land/x/gh:yshayy:deploykit@0.0.10/generated/k8s/v1.18.3/apimachinery/pkg/apis/meta/v1/mod.ts";
export type KamusSecret = {
  data?: {
    [key: string]: any;
  };

  stringData?: {
    [key: string]: any;
  };

  serviceAccount?: string;

  type?: string;

  metadata?: ObjectMeta;

  apiVersion?: string;

  kind?: string;
};
export function createKamusSecret(
  data: Omit<KamusSecret, "apiVersion" | "kind">,
): KamusSecret {
  return { apiVersion: "soluto.com/v1alpha2", kind: "KamusSecret", ...data };
}
