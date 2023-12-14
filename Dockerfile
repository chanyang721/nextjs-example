FROM node:18-alpine as prod

COPY . .

RUN yarn