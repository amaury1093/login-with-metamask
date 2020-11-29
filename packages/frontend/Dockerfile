FROM node:12
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY src /app/src
RUN cd /app && yarn install
WORKDIR /app
ENV REACT_APP_BACKEND_URL=http://localhost:8000/api
EXPOSE 3000/tcp
CMD yarn start
