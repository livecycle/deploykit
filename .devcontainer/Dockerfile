#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

# To fully customize the contents of this image, use the following Dockerfile instead:
# https://github.com/microsoft/vscode-dev-containers/tree/v0.117.1/containers/codespaces-linux/.devcontainer/Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu20.04
ENV SHELL=/usr/bin/zsh

RUN curl -fsSL https://download.docker.com/linux/static/stable/x86_64/docker-19.03.8.tgz | \
    tar zxvf - --strip 1 -C /usr/bin docker/docker

RUN curl -fsSL https://deno.land/x/install/install.sh | zsh -s v1.12.2
ENV DENO_INSTALL="/root/.deno" 
ENV PATH="/$DENO_INSTALL/bin:$PATH"