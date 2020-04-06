# @login-with-metamask/backend

## Deploy to Heroku

This Express app is deployed to Heroku via the following command (run from root folder):

```bash
git subtree push --prefix packages/backend heroku master
```

Some small tweaks are made for this backend to work on Heroku:
- the `tsconfig.json` could have extended the root one, but doesn't
- a `web` script has been added in `package.json`, that's the command Heroku uses to run the web server
- the web server listens on the `$PORT` environment variable, which has been added in `src/index.ts`
