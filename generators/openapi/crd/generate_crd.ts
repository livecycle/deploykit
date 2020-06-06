import { Definition, GroupVersionKind } from "../k8s/types.ts";
import { generateDefs } from "../k8s/generate.ts";

export type CRD = {
  spec: {
    group: string;
    version?: string;
    names: {
      kind: string;
    };
    validation?: {
      openAPIV3Schema?: Definition;
    };
    versions?: {
      name: string;
      schema?: {
        openAPIV3Schema?: Definition;
      };
    }[];
  };
};

let minSchema = {
  type: "object",
  properties: {
    apiVersion: {
      type: "string",
    },
    kind: {
      type: "string",
    },
  },
};

export function generateFromCRDs(
  crds: CRD[],
  baseK8SResourceUrl =
    "https://deno.land/x/gh:yshayy:deploykit@0.0.1/generated/k8s/native",
): { location: string; content: string }[] {
  let all = crds.map(crdToDefs).reduce((acc, next) => ({ ...acc, ...next }));
  return generateDefs({ definitions: all }, {
    externalRefs: {
      "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta": baseK8SResourceUrl +
        "/apimachinery/pkg/apis/meta/v1/mod.ts",
    },
  });
}

export function crdToDefs(crd: CRD): { [key: string]: Definition } {
  let versions = crd.spec.versions ||
    [{ name: crd.spec.version!, schema: crd.spec.validation }];
  let defs = versions.map((version) => {
    let gvkProperties: GroupVersionKind = {
      group: crd.spec.group,
      version: version.name,
      kind: crd.spec.names.kind,
    };
    let schema = version.schema?.openAPIV3Schema ||
      crd.spec.validation?.openAPIV3Schema || (minSchema as Definition);
    if (schema.properties) {
      schema.properties["metadata"] = {
        type: "string",
        "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta",
      };
      schema["x-kubernetes-group-version-kind"] = [gvkProperties];
    }
    return [
      [gvkProperties.group, gvkProperties.version, gvkProperties.kind].join(
        ".",
      ),
      schema,
    ] as [string, Definition];
  });
  return Object.fromEntries(defs);
}
