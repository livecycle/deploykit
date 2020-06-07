export interface Definition {
  description?: string;
  type: string;
  format?: string;
  items?: Definition;
  $ref?: string;
  properties?: { [key: string]: Definition };
  required?: string[];
  additionalProperties?: Definition;
  enum?: any[];
  oneOf?: Definition[];
  anyOf?: Definition[];
  [key: string]: any;
}

export interface GroupVersionKind {
  group: string;
  kind: string;
  version: string;
}
