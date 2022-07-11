#!bin/bash
docker stop rabbitmq || true && docker rm rabbitmq || true
cp ./Dockerfile ./Dockerfile_prod
cp ./Dockerfile_stage ./Dockerfile
docker image build  --no-cache --force-rm=true -t sheepkai-menu-front:stage ./ 
docker run -itd --rm=true --name=sheepkai-menu-front-stage sheepkai-menu-front:stage