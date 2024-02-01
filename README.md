<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Shop Api

1. Clonar el proyecto
2. Instalar dependencias ``` yarn install ```
3. Configurar las variables de entorno con base en el archivo ```.env.template``` y ponerlo en el archivo ```.env```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Levantar en modo desarrollo
```
yarn start:dev
```
6. Poblar la base de datos 
```
http://localhost:3000/seed
```


## Stack
* Nest
* TypeScript
* Postgresql
* TypeOrm
* Docker