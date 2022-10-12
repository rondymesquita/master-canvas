FROM node:14-alpine

WORKDIR /home

RUN npm i npm@latest -g

COPY ./package*.json ./
RUN npm install --timeout=9999999

COPY . ./
RUN npm run build

RUN chmod +x ./docker-entrypoint.sh

EXPOSE 5006
# CMD ./docker-entrypoint.sh
CMD npm start
