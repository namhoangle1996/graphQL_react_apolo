FROM alpine
RUN apk add --no-cache nodejs npm


MAINTAINER NAMLEE

WORKDIR /app

COPY . /app

RUN npm install
RUN cd client && npm install

EXPOSE 5000

CMD node server.js && npm run client
