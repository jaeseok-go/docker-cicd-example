FROM node:alpine

WORKDIR /app

COPY ./node-js-app/package.json ./

RUN npm install

COPY ./node-js-app/ .

CMD ["npm", "run", "start"]