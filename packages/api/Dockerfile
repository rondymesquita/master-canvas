FROM node:16-alpine3.15

WORKDIR /home

RUN npm i npm@latest -g

COPY ./package*.json ./
RUN npm install

COPY . ./
RUN npm run build

EXPOSE 5006
CMD npm start
