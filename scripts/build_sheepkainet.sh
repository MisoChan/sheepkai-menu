#!bin/bash

docker image build  --no-cache --force-rm=true -t sheepkai-menu-front:latest ./ 
docker run -itd --rm=true --name=sheepkai-menu-front-stage -p 64080:80 sheepkai-menu-front:latest