# Dashboard

This is a generic dashboard web app template with node, ejs and Chart.js

## Dockerfile

The dockerfile is a basic docker taht will allow you to start the project.

## Gitlab-ci

Incase you want to use this project in gitlab and have a CI/CD you can use as a template the gitlab-ci.txt file

Gitlab runner instalation and registration steps in https://www.notion.so/Gitlab-Runner-329fc8ced9224c43a6056de39b541bbe

## Docker Compose

El puerto 80 es por default y node project esta seteado en el puerto 3000 (puerto en el contenedor). el puerto 443 es para el certificado HTTPS.
El depends_on es pq el contenedor de node depende de que primero arranque el de sql
