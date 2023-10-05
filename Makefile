include app.env

postgres:
	docker run --name chant-postgres -e POSTGRES_LOG_STATEMENTS=all -e POSTGRES_USER=root -e POSTGRES_PASSWORD=kurero17 -p 5432:5432 -d postgres:16-alpine

remove-postgres:
	docker rm -f chant-postgres

createdb:
	docker exec -it chant-postgres psql -U root -c "CREATE DATABASE chant;"

dropdb:
	docker exec -it chant-postgres psql -U root -c "DROP DATABASE chant;"

migrateup:
	migrate -path backend/db/migration -database ${DB_SOURCE} -verbose up

migratedown:
	migrate -path backend/db/migration -database $(DB_SOURCE) -verbose down

test:
	go test -v -cover ./...

server:
	go run main.go

PHONY: postgres createdb dropdb migrateup migratedown test server
