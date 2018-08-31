FROM node:8.9.4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json  /usr/src/app/
RUN npm set strict-ssl false
RUN npm install
COPY . /usr/src/app/
RUN npm run build


FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]