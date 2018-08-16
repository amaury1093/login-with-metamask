FROM node:8
COPY package.json /app/package.json
RUN cd /app && yarn install
COPY . /app
WORKDIR /app
EXPOSE 3000/tcp
CMD yarn start