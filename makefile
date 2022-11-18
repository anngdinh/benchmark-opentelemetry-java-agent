# https://m-shaeri.ir/blog/restful-spring-boot-application-swagger-mysql-docker-a-real-world-example/#JPA-configuration-and-preload-data
# https://github.com/birddevelper/NoteBookManager

run:
	docker compose up -d

clear:
	docker compose down

image-clean:
	docker image prune
