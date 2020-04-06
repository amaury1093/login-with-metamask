# Login with MetaMask

[![Build Status](https://travis-ci.org/amaurymartiny/login-with-metamask-demo.svg?branch=master)](https://travis-ci.org/amaurymartiny/login-with-metamask-demo)
[![David (backend)](<https://img.shields.io/david/amaurymartiny/login-with-metamask-demo.svg?label=deps%20(backend)&path=packages/backend>)](https://david-dm.org/amaurymartiny/login-with-metamask-demo?path=packages/backend)
[![David (frontend)](<https://img.shields.io/david/amaurymartiny/login-with-metamask-demo.svg?label=deps%20(frontend)&path=packages/frontend>)](https://david-dm.org/amaurymartiny/login-with-metamask-demo?path=packages/frontend)
[![](https://img.shields.io/badge/Buy%20me%20a%20tree-%F0%9F%8C%B3-lightgreen)](https://offset.earth/amaurymartiny)

This demo is published as part of the corresponding blog article: ["One-Click Login with Blockchain: a MetaMask Tutorial"](https://www.toptal.com/ethereum/one-click-login-flows-a-metamask-tutorial).

> ❗Important note. The article was written in March 2018, and in between, MetaMask introduced a [breaking change](https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8). The codebase has since then been updated to support the breaking change. As such, the snippets in the article might not be exactly the same as the updated code today. The login flow however is still exactly the same. If you want to see the original code, please visit the [`original` branch](https://github.com/amaurymartiny/login-with-metamask-demo/tree/original).

## Live Demo: http://amaurymartiny.com/login-with-metamask-demo/

![demo](https://uploads.toptal.io/blog/image/125794/toptal-blog-image-1522395423193-b3227ea1f43c6cbb9f78e090bd7bb2ee.gif)

## Getting Started

I use [lerna](https://github.com/lerna/lerna) to manage a monorepo of packages here. There are 2 packages: a [`backend`](https://github.com/amaurymartiny/login-with-metamask-demo/tree/master/packages/backend) which is a REST API written in Express, and a [`frontend`](https://github.com/amaurymartiny/login-with-metamask-demo/tree/master/packages/frontend) which is a React single-page application. It's really a demo, so I tried to use as few libraries as possible, and the most popular ones when possible.

The simplest way to get started is to launch the demo using Docker Compose. Alternatively you could launch docker the containers manually, or run the node services using yarn.

#### Launch the demo using Docker Compose:

```bash
docker-compose up -d
```

This will leave a the bakcend listening on `localhost:8000` and the frontend on `localhost:3000`.

#### Launching the demo using Docker:

Build and launch the backend:

```bash
cd backend
docker build -t login-backend .
docker run -d -p 8000:8000 login-backend
```

Build and launch the frontend:

```bash
cd frontend
docker build -t login-front .
docker run -d -p 3000:3000 login-frontend
```

You can then access the app on `localhost:3000`.

#### Start the demo using Yarn:

From the root folder of this repo, run

```bash
yarn install # Install the dependencies
yarn start # Will launch the frontend and the backend at the same time
```

The backend should be running on `localhost:8000`, and the frontend on `localhost:3000`.

Alternatively, you can start the frontend and the backend separately:

```bash
# Start the backend
cd packages/backend
yarn start

# Start the frontend
cd packages/frontend
yarn start
```

## Tests

Since this project is a demo, I haven't written any tests for it. Only code linting is performed, via prettier, which you can run using `yarn lint`.

## Credits

If you liked this demo, I appreciate small donations. My Ethereum address is `0xa395447BF15f7525484C0378c76627D45ADE0B96`.

---

This demo is published as part of the corresponding blog article at [https://www.toptal.com/ethereum/one-click-login-flows-a-metamask-tutorial](https://www.toptal.com/ethereum/one-click-login-flows-a-metamask-tutorial).
