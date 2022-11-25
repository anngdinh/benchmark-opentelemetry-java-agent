# https://m-shaeri.ir/blog/restful-spring-boot-application-swagger-mysql-docker-a-real-world-example/#JPA-configuration-and-preload-data
# https://github.com/birddevelper/NoteBookManager

build:
	cd ./spring-app && mvn install
	cp ./spring-app/target/NoteBookManagerRest-0.0.1-SNAPSHOT.jar ./spring-app/jar/NoteBookManagerRest-0.0.1-SNAPSHOT.jar

up1:
	cd ./server/agent && docker-compose up --build
up2:
	cd ./server/no_agent && docker-compose up --build

down1:
	cd ./server/agent && docker-compose down
down2:
	cd ./server/no_agent && docker-compose down

storage-up:
	cd ./storage && docker-compose up -d
storage-down:
	cd ./storage && docker-compose down

tracing-up:
	cd ./tracing && docker-compose up -d
tracing-down:
	cd ./tracing && docker-compose down


image-clean:
	docker image prune

# test-crud:
# 	curl --location --request GET 'http://localhost:8090/api/notebooks?page=0&pageSize=30' --header 'accept: application/json'