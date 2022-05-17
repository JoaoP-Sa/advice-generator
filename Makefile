run:
	docker-compose up

build:
	docker build -t advice-generator .

kill:
	docker-compose stop

clean:
	docker container rm -f advices
	docker image rm -f advice-generator