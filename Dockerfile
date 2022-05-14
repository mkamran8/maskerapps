#Dockerfile for running the app in production
FROM node:16-alpine

#Create App Directory
WORKDIR /urs/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "node", ".output/server/index.mjs" ]