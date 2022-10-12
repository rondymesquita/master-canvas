FROM node:14-alpine

WORKDIR /home
COPY . ./

RUN npm install --timeout=9999999

EXPOSE 5000

CMD ["sh", "-c", "npx pm2 start --name proxy start.js && npx pm2 logs proxy"]
