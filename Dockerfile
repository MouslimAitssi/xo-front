#The project was builded manually

FROM nginx:alpine

COPY /dist/frontend /usr/share/nginx/html

EXPOSE 80
