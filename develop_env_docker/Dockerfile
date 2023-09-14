#nodeイメージをpullする
FROM node:18.17.1-alpine

#working directory
WORKDIR /app

COPY package*.json ./
#インストール
RUN npm install;

COPY . .
#shファイルをコンテナにコピー
CMD ["npm","run","serve"]
