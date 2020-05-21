import './index.css';

import { config as dotEnvConfig } from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import {BrowserRouter} from 'react-router-dom'



// Load ENV variables
dotEnvConfig({
  path:
    process.env.NODE_ENV === 'production'
      ? '.env.production'
      : '.env.development',
});

ReactDOM.render(
<BrowserRouter>
<App />, 
</BrowserRouter>,
document.getElementById('root'));
