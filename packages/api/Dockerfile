FROM node:16-alpine3.15

ENV NODE_OPTIONS="–max_old_space_size=512"
RUN npm config set fetch-retry-mintimeout 99999
RUN npm config set fetch-retry-maxtimeout 999999

RUN npm config rm proxy
RUN npm config rm https-proxy

WORKDIR /home

RUN npm i npm@latest -g

COPY ./package*.json ./
RUN npm install --timeout=9999999

COPY . ./
RUN npm run build

EXPOSE 5006
CMD npm start
