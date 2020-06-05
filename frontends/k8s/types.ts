export type KubeMetaContext = {
  name: string;
  namespace?: string;
  labels: {
    [key: string]: string;
  };
};
