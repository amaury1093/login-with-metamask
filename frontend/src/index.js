import React from 'react';
import ReactDOM from 'react-dom';
import { config as dotEnvConfig } from 'dotenv';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Load ENV variables
dotEnvConfig({
  path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env'
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
