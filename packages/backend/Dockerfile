FROM node:14
COPY . /app
RUN cd /app && yarn install && yarn build
WORKDIR /app
EXPOSE 8000/tcp
CMD yarn start
