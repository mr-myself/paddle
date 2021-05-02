.DEFAULT_GOAL := help

dc-preparation:
	docker-compose run go go generate
	docker-compose run go go get github.com/golang-migrate/migrate

dc-generate-orm: dc-preparation
	docker-compose run go go get github.com/volatiletech/sqlboiler/v4@v4.4.0
	docker-compose run go go get github.com/volatiletech/sqlboiler/v4/drivers/sqlboiler-mysql
	docker-compose run go sqlboiler --wipe mysql

dc-migrate:
	docker-compose run go migrate - database mysql://apuser:password@tcp\(db:3306\)/paddle -source file:///home/app/db/migrations up

help:
	@perl -n -e 'printf "\033[36m%-30s\033[0m %s\n", do { (my $$tn = $$1) =~ s|\\||g; $$tn }, $$2 if $$_ =~ /^(\w.*?):.*? ## (.*)/' $(MAKEFILE_LIST) |sort
