# ビルド環境
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package.json ./
RUN rm -rf node_modules package-lock.json;npm install -g @vue/cli @vue/cli-init;npm install --production --cache /tmp/empty-cache && rm -rf /tmp/empty-cache
COPY . .
RUN npm run lint;npm run build;

#production環境
FROM nginx:latest as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]