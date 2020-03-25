##!/bin/bash
### Actualiza los datos en git y Heroku

PASWORD=$("Bolon&col4ever")
echo "$PASWORD"
git status
git add .
git commit -am "update"
git push origin master
heroku login -i
git push heroku master
heroku logs

