#FROM node:18-alpine3.15 as builder

#RUN mkdir -p target

#WORKDIR /target

#COPY . /target/

#RUN npm install

#RUN npm run build

FROM nginx:alpine

COPY /dist/frontend /usr/share/nginx/html

EXPOSE 80
