# Deploykit
A Deno based toolkit for generating deployment configuration files using typescript with focus on k8s resources.  
Inspired by Pulumi, JKCfg, CDK, Helm and others...

## Quick example

#### Deploy.ts
```typescript
import { createMicroservice } from "https://raw.githubusercontent.com/Yshayy/deploykit/master/blueprint/k8s/app.ts";
import { addDeployment, addService, expose } from "https://raw.githubusercontent.com/Yshayy/deploykit/master/blueprint/k8s/operators/all.ts";

createMicroservice().with(
    addDeployment({ image: "my-image" }),
    addService({ port: 80 }),
    expose({ domain: "my-app.com" }),
  ).dump(
    { name: "my-app", namespace: "my-namespace", labels: { app: "my-app" } },
  )
```
<details><summary>Output</summary>
```yaml
apiVersion: extensions/v1beta1
kind: Ingress
spec:
  rules:
    - host: my-app.com
      http:
        paths:
          - backend:
              serviceName: my-app
              servicePort: 80
metadata:
  name: my-app
  namespace: my-namespace
  labels:
    app: my-app
-----
apiVersion: v1
kind: Service
spec:
  ports:
    - port: 80
      targetPort: 80
metadata:
  name: my-app
  namespace: my-namespace
  labels:
    app: my-app
-----
apiVersion: apps/v1
kind: Deployment
spec:
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: app
          image: my-image
metadata:
  name: my-app
  namespace: my-namespace
  labels:
    app: my-app
```
</details>

Usage with kubectl:  
```deno run ./deploy.ts | kubectl apply -f -```


## Why Deno?
The aim of this project, is to simplify typescript-configuration based deployment. 
Deno provide some capabilites in the area:

* No need for typescript toolchain (tsc, prettier, etc...)
* No need to manage dependencies or package.json or deployment project folder
* Sandboxed security - scripts can generate configuration files and nothing more

These capabilies allow us to easily create a single deploy.ts file that is easy to manage, execute or integrated in CI/CD

## Why Typescript


## Ingredients


## Compared to other alternatives


# Roadmap

