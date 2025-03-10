FROM node:18 AS build
WORKDIR /app
COPY package.json . /app/
COPY yarn.lock . /app/
COPY nginx.conf . /app/

ARG BUILD_ENV
COPY . .
RUN yarn
RUN yarn build

FROM nginx:alpine 
# Copy config nginx
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
# Remove default nginx static ./assets
RUN rm -rf ./*
# Copy static ./assets from builder stage
COPY --from=build /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]