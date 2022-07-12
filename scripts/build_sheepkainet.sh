#!bin/bash

docker stop "sheepkai-menu-front-"$1 || true && docker rm "sheepkai-menu-front-"$1 || true
docker image build  --no-cache --force-rm=true --target deploy-stage -t "sheepkai-menu-front:"$1 ./ 
docker run -itd --rm=true --name="sheepkai-menu-front-"$1 -p $2":80" "sheepkai-menu-front:"$1