FROM node:16-alpine3.15

ENV NODE_OPTIONS="–max_old_space_size=512"

WORKDIR /home

RUN npm i npm@latest -g

COPY ./package*.json ./
RUN npm install

COPY . ./
RUN npm run build

EXPOSE 5006
CMD npm start
