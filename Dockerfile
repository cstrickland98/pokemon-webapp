FROM node:gallium-alpine3.16 as build-step
WORKDIR /pokemon-webapp
COPY package*.json ./
RUN npm install
COPY . .
RUN ng build

FROM nginx
COPY --from=build-step /pokemon-webapp/dist /usr/share/nginx/html