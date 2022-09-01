FROM node as development

WORKDIR /usr/src/app

RUN npm i -g nest

COPY package.json ./

RUN npm install

COPY . .

ENV NODE_ENV=development

RUN npm run build
