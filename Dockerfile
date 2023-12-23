# パッケージたちのキャッシュ
FROM node:20.10-slim as cache
WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install;

FROM node:20.10-slim as build-stage
WORKDIR /app
COPY . .
COPY --from=cache /app/node_modules /app/node_modules
RUN npm run lint;npm run build --mode $BUILDMODE;

# 環境構築
FROM nginx:alpine-slim
RUN mkdir /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]