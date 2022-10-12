FROM node:16-alpine3.15

WORKDIR /home
COPY . ./

RUN npm install

EXPOSE 5000

CMD ["sh", "-c", "npx pm2 start --name proxy start.js && npx pm2 logs proxy"]
