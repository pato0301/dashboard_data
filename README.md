# Dashboard

This is a generic dashboard web app template with node, ejs and Chart.js

## Dockerfile

The dockerfile is a basic docker taht will allow you to start the project.

## Gitlab-ci

Incase you want to use this project in gitlab and have a CI/CD you can use as a template the gitlab-ci.txt file

## Docker Compose

El puerto 80 es por default y node project esta seteado en el puerto 3000 (puerto en el contenedor). el puerto 443 es para el certificado HTTPS.
El depends_on es pq el contenedor de node depende de que primero arranque el de sql