import { compileType } from "./compile_type.ts";

Deno.test("compile type", () => {
  let dataType = {
    "description": "LeaseSpec is a specification of a Lease.",
    "properties": {
      "acquireTime": {
        "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime",
        "description":
          "acquireTime is a time when the current lease was acquired.",
      },
      "holderIdentity": {
        "description":
          "holderIdentity contains the identity of the holder of a current lease.",
        "type": "string",
      },
      "leaseDurationSeconds": {
        "description":
          "leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.",
        "format": "int32",
        "type": "integer",
      },
      "leaseTransitions": {
        "description":
          "leaseTransitions is the number of transitions of a lease between holders.",
        "format": "int32",
        "type": "integer",
      },
      "renewTime": {
        "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime",
        "description":
          "renewTime is a time when the current holder of a lease has last updated the lease.",
      },
    },
    "type": "object",
  };

  compileType(dataType as any);
});
