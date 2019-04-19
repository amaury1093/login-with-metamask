import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { config as dotEnvConfig } from 'dotenv';

import './index.css';
import { App } from './App';

// Load ENV variables
dotEnvConfig({
  path:
    process.env.NODE_ENV === 'production'
      ? '.env.production'
      : '.env.development'
});

ReactDOM.render(<App />, document.getElementById('root'));
