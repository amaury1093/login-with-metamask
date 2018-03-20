import React, { Component } from 'react';

import Login from '../Login';
import logo from './logo.svg';
import Username from '../Username/Username';
import './App.css';

const LS_KEY = 'mm-login-demo:auth';

class App extends Component {
  componentWillMount() {
    // Access token is stored in localstorage
    const auth = JSON.parse(localStorage.getItem(LS_KEY));
    this.setState({
      auth
    });
  }

  handleLoggedIn = auth => {
    localStorage.setItem(LS_KEY, JSON.stringify(auth));
    this.setState({ auth });
  };

  handleLoggedOut = () => {
    localStorage.removeItem(LS_KEY);
    this.setState({ auth: undefined });
  };

  render() {
    const { auth } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MetaMask Login Demo</h1>
        </header>
        <div className="App-intro">
          {auth ? (
            <Username onLoggedOut={this.handleLoggedOut} />
          ) : (
            <Login onLoggedIn={this.handleLoggedIn} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
