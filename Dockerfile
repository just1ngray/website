# simple build for now. git lfs must be pulled first

FROM denoland/deno:2.7.7 AS builder
WORKDIR /website
COPY . /website
WORKDIR /website
RUN deno run build

FROM nginx:1.28.3-alpine
COPY --from=builder --chown=nginx:nginx /website/dist /usr/share/nginx/html
