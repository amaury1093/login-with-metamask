import './index.css';

import { config as dotEnvConfig } from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// Enable us to use "window.ethereum".
declare global {
	interface Window {
		ethereum: any;
	}
}

// Load ENV variables
dotEnvConfig({
	path:
		process.env.NODE_ENV === 'production'
			? '.env.production'
			: '.env.development',
});

ReactDOM.render(<App />, document.getElementById('root'));
