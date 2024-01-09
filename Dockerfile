FROM node:20.10-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

COPY . .
RUN npm install --prefer-offline --ignore-scripts

CMD ["npm", "run", "start:prod"]
