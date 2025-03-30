#nodeイメージをpullする
# パッケージたちのキャッシュ
FROM node:20.10-slim AS cache
WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install;

# 実行
FROM node:20.10-slim AS build-stage
WORKDIR /app
COPY . .
COPY --from=cache /app/node_modules /app/node_modules

CMD ["npm","run","serve"]
