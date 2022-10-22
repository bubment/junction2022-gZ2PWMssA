FROM node:16-alpine

EXPOSE 3000
ENV NODE_ENV=production
WORKDIR /usr/src/app

RUN npm i -g npm-run-all
# copy package(-lock)?.json files separately, so dependency install layer can be cached
COPY ./package* /usr/src/app/
COPY ./frontend/package* /usr/src/app/frontend/
COPY ./backend/package* /usr/src/app/backend/
RUN npm run ci-all

COPY . /usr/src/app
RUN npm run build-all

ENTRYPOINT ["npm", "run", "start"]
