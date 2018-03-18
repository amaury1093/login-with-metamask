import React, { Component } from 'react';

import Login from '../Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to MetaMask Login Demo</h1>
        </header>
        <div className="App-intro">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
