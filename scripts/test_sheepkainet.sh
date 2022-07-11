#!bin/bash

cp ./Dockerfile ./Dockerfile_prod
cp ./Dockerfile_stage ./Dockerfile
docker image build  --no-cache --force-rm=true --target build-stage -t sheepkai-menu-front:test ./ 
docker run --rm=true --name=sheepkai-menu-front-test sheepkai-menu-front:test