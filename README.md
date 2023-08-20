url: http://localhost:3500/api

# DOCKER

## Crear contenedor:

`docker run -d --name incubadora_c11 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=devsafio MYSQL_PASSWORD=root -e MYSQL_DATABASE=incubadora_c11 -p 3306:3306 mysql:8.1.0`

## Cargar la basededatos

1. ` docker cp C:\...\...\C11-Backend\src\database\database.sql incubadora_c11:/tmp/database.sql`

2. entrar contenedor: `mysql -u devsafio -p`
3. contraseña `root`
4. una ves adentro:
   1. `use incubadora_c11`
   2. `source /tmp/database.sql;`
