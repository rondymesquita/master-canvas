FROM node:16-alpine3.15

WORKDIR /home
COPY . ./

RUN npm install --legacy-peer-deps
RUN npm run build

EXPOSE 5005

CMD ["sh", "-c", "npx pm2 serve --name web ./dist/ 5005 && npx pm2 logs web"]
