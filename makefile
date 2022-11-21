# https://m-shaeri.ir/blog/restful-spring-boot-application-swagger-mysql-docker-a-real-world-example/#JPA-configuration-and-preload-data
# https://github.com/birddevelper/NoteBookManager

run:
	mvn install
	docker compose up --build
clear:
	docker compose down

image-clean:
	docker image prune

test-crud:
	curl --location --request GET 'http://localhost:8090/api/notebooks?page=0&pageSize=30' --header 'accept: application/json'