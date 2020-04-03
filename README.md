# Teihcram
Easter challenge campaign for Alten
* [Local Setup](#local-setup)
* [Web app](#web-app)

## Local setup

* Install Git
* Install Docker
* Install Docker composer
* Clone Project
* Go in the main project folder and run `docker-compose build`
* After doing a docker build run `docker-compose up` or `docker-compose up -d` If you want to keep using the same terminal page
* When all the containers are up you can go into each individual one and run a `npm install`
     * You can go into a container by running `docker exec -it {container_name} bash`
     * You can see the conainer names by running `docker ps`
* After these steps are done you can run `npm start` in their respective conainers for the Web.


## Web app