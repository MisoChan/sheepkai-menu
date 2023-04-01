#!bin/bash
SCRIPT_DIR=$(cd $(dirname $0); pwd)
# カレントを絶対パスベースでソース本体に移動
cd $SCRIPT_DIR;cd ../
docker stop "sheepkai-menu-front-"$1 || true && docker rm "sheepkai-menu-front-"$1 || true

docker build  --no-cache --force-rm=true -t "sheepkai-menu-front:"$1  "--build-arg=production" ./ 
docker run -itd --restart=always --read-only --name="sheepkai-menu-front-"$1 -v /var/cache/nginx -v /var/run -v /etc/nginx/conf.d -p $3":80"  --net "sheepkai-docker-network" "sheepkai-menu-front:"$1