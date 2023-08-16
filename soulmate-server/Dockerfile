FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY /build .

EXPOSE 6379

CMD [ "node", "index.js"]