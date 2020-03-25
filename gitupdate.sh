##!/bin/bash
### Actualiza los datos en git y Heroku

EMAIL=$(leonardosuarezromero@gmail.com)
PASWORD=$(Bolon&col4ever)
git status
git add .
git commit -am "update"
git push origin master
heroku login -i
$EMAIL
$PASWORD
git push heroku master
heroku logs

