FROM node:16-alpine3.15

WORKDIR /home
COPY . ./

RUN npm install --timeout=9999999
RUN npm run build

RUN chmod +x ./docker-entrypoint.sh

EXPOSE 5006
# CMD ./docker-entrypoint.sh
CMD npm start
