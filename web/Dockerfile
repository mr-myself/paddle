FROM node:14.16-alpine3.13 AS web

ENV APP_DIR /home/app

WORKDIR $APP_DIR

RUN addgroup -g 2000 -S app && \
    adduser -u 2000 -S app -G app
USER app

COPY --chown=app:app ./ $APP_DIR
RUN yarn install

CMD yarn start
