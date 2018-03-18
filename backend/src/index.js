import express from 'express';
import bodyParser from 'body-parser';

import services from './services';

const app = express();

// Middlewares
app.use(bodyParser.json());

// Mount REST on /api
app.use('/api', services);

app.listen(3000, () => console.log('Express app listening on localhost:3000'));
