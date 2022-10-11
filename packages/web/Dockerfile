FROM node:16-alpine3.15

WORKDIR /home
COPY . ./

RUN npm ci
RUN npm run build

EXPOSE 5005
CMD npm start
