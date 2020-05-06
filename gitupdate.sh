##!/bin/bash
### Actualiza los datos en git y Heroku


git status
git add .
git commit -am "update"
git push origin master
heroku login -i
git push heroku master


# Tiker of related Problem 
# https://help.heroku.com/sharing/e07183a3-0bed-4747-9fb9-30d6df7ec57b
