##!/bin/bash
### Actualiza los datos en git y Heroku


git status
git add .
git commit -am "update"
git config --global http.postBuffer 500M
git config --global http.maxRequestBuffer 100M
git config --global core.compression 0
git push origin master
heroku login -i
#heroku plugins:install heroku-repo
#heroku repo:reset -a smart-beta
git push heroku master


# Tiker of related Problem 
# https://help.heroku.com/sharing/e07183a3-0bed-4747-9fb9-30d6df7ec57b


# heroku plugins:install heroku-repo
# heroku repo:reset -a smart-beta

# heroku git:remote -a smart-betas