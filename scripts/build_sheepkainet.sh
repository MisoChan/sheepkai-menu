#!bin/bash
pwd
docker stop "sheepkai-menu-front-"$1 || true && docker rm "sheepkai-menu-front-"$1 || true
cp ".env.branch-"$1 ".env.production"
docker image build  --no-cache --force-rm=true --target deploy-stage -t "sheepkai-menu-front:"$1  "--build-arg=production" ./ 
docker run -itd --rm=true --name="sheepkai-menu-front-"$1 -p $3":80" --net "sheepkai-docker-network" "sheepkai-menu-front:"$1