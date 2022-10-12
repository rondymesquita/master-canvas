FROM node:14-alpine

WORKDIR /home
COPY . ./

RUN npm install --legacy-peer-deps --timeout=9999999
RUN npm run build

EXPOSE 5005

CMD ["sh", "-c", "npx pm2 serve --name web ./dist/ 5005 && npx pm2 logs web"]
