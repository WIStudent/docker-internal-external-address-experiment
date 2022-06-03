FROM node:18

WORKDIR /docker-internal-external-address-experiment
COPY package-lock.json package-lock.json
COPY package.json package.json
COPY service1.js service1.js
COPY service2.js service2.js
COPY service3.js service3.js

RUN npm ci

EXPOSE 8080
