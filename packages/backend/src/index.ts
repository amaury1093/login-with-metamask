import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import './db';
import { services } from './services';

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Mount REST on /api
app.use('/api', services);

app.listen(8000, () => console.log('Express app listening on localhost:8000'));
