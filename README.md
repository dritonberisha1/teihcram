# Easter challenge
Easter challenge campaign for Alten
* [Local Setup](#local-setup)
* [Where is the Database](#where-is-the-database)

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
* After these steps are done you can run `npm start` in their respective conainers for the Api and Web.

## Where is the Database?
There is a local version of DynamoDB running as a docker container you can see your local database by going to `localhost:8001`
(Make sure the `localstack` & `dynamodb-admin` containers are up by running `docker ps` to activate the containers if they are down `docker-compose up`)
