# ビルド環境
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN rm -rf ./node_modules ./package-lock.json;npm install;
COPY . .
RUN npm run lint;
RUN npm run build;

# 環境構築
FROM nginx:latest as deploy-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]