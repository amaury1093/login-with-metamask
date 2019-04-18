import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import services from './services';

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Mount REST on /api
app.use('/api', services);

app.listen(8000, () => console.log('Express app listening on localhost:8000'));
