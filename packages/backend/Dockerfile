FROM node:12
COPY package.json /app/package.json
RUN cd /app && yarn install
COPY . /app
WORKDIR /app
EXPOSE 8000/tcp
CMD yarn start
