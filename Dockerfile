# ビルド環境
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g --production --cache /tmp/empty-cache && rm -rf /tmp/empty-cache
COPY . .
RUN npm run build;npm run lint

#production環境
FROM build-stage as production-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]