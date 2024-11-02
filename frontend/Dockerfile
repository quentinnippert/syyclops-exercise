FROM node:alpine as development

ENV NODE_ENV development

WORKDIR /app

COPY ./package*.json /app/package.json

RUN npm install

COPY . .

CMD ["npm", "start"]
