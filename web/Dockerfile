FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install
RUN apk update && apk add bash

COPY . .
COPY wait-for-it.sh .

EXPOSE 8000
#CMD ["node", "server.js"]
CMD ["npm","run","dev"]
