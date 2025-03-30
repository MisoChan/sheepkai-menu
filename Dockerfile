# パッケージたちのキャッシュ
FROM node:20.10-slim AS cache
WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install;

# Productionビルド
FROM node:20.10-slim AS build-stage
WORKDIR /app
ARG VUE_APP_API_URL
ARG VUE_APP_DEFAULT_LANGUAGE
COPY . .
COPY --from=cache /app/node_modules /app/node_modules

## FIXME: 謎にARGが効かない…
## ビルド時に直接.env.productionを書き込む
RUN echo "VUE_APP_API_URL=${VUE_APP_API_URL}" > .env.production && \
    echo "VUE_APP_DEFAULT_LANGUAGE=${VUE_APP_DEFAULT_LANGUAGE}" >> .env.production

RUN npm run build;

# 環境構築
FROM nginx:alpine-slim
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]