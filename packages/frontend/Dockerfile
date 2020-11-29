FROM node:12
COPY . /app
RUN cd /app && yarn install
WORKDIR /app
EXPOSE 3000/tcp
CMD yarn start
