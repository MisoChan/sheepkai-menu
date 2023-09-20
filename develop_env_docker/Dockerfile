#nodeイメージをpullする
FROM node:18.17.1-alpine

#working directory
WORKDIR /app

COPY . .
#インストール
RUN npm install;

#shファイルをコンテナにコピー
CMD ["npm","run","serve"]
