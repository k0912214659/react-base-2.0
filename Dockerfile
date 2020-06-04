FROM node:latest as builder
WORKDIR /build
COPY . .
RUN npm install \
  && npm run build

FROM nginx:alpine
COPY . /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
