/* Generated for soluto/com/v1alpha2/mod.ts */
import { ObjectMeta } from "https://deno.land/x/gh:yshayy:deploykit@0.0.1/generated/k8s/native/apimachinery/pkg/apis/meta/v1/mod.ts";
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

  apiversion?: string;

  kind?: string;
};
