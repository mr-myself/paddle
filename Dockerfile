FROM golang:1.16-alpine AS app

ENV APP_DIR /home/app

WORKDIR $APP_DIR
ARG DB_HOST=${DB_HOST}

RUN mkdir -p $APP_DIR

RUN addgroup -g 1000 -S app && \
    adduser -u 1000 -S app -G app

RUN apk update && \
    apk add mysql-client \
    gcc \
    curl
RUN curl -L https://github.com/golang-migrate/migrate/releases/download/v4.11.0/migrate.linux-amd64.tar.gz | tar xvz
RUN mv ./migrate.linux-amd64 /usr/bin/migrate

USER app

COPY --chown=app:app ./ $APP_DIR

CMD go run main.go
