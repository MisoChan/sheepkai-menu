#!bin/bash

cp ./Dockerfile ./Dockerfile_prod
cp ./Dockerfile_test ./Dockerfile
docker image build  --no-cache --force-rm=true --target build-test -t sheepkai-menu-front:test ./ 
docker run -itd --rm=true --name=sheepkai-menu-front-stage -p 63080:80 sheepkai-menu-front:stage