import './App.css';

import React from 'react';

import { Login } from '../Login';
import { Profile } from '../Profile/Profile';
import { Auth } from '../types';
import logo from './logo.svg';

const LS_KEY = 'login-with-metamask:auth';

interface State {
  auth?: Auth;
}

export class App extends React.Component<{}, State> {
  state: State = {};

  componentDidMount(): void {
    // Access token is stored in localstorage
    const ls = window.localStorage.getItem(LS_KEY);
    const auth = ls && JSON.parse(ls);
    this.setState({
      auth,
    });
  }

  handleLoggedIn = (auth: Auth): void => {
    localStorage.setItem(LS_KEY, JSON.stringify(auth));
    this.setState({ auth });
  };

  handleLoggedOut = (): void => {
    localStorage.removeItem(LS_KEY);
    this.setState({ auth: undefined });
  };

  render(): JSX.Element {
    const { auth } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Login with MetaMask Demo</h1>
        </header>
        <div className="App-intro">
          {auth ? (
            <Profile auth={auth} onLoggedOut={this.handleLoggedOut} />
          ) : (
            <Login onLoggedIn={this.handleLoggedIn} />
          )}
        </div>
      </div>
    );
  }
}
