import './App.css';

import React from 'react';

import { Login } from '../Login';
// eslint-disable-next-line
import { Profile } from '../Profile/Profile';
import { Auth } from '../types';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StudentPage from '../Studentpage/StudentPage';
import LoggedIn from '../LoggedIn/LoggedIn';

const LS_KEY = 'login-with-metamask:auth';

interface State {
  auth?: Auth;
}

export class App extends React.Component<{}, State> {
  state: State = {};

  componentDidMount() {
    // Access token is stored in localstorage
    const ls = window.localStorage.getItem(LS_KEY);
    const auth = ls && JSON.parse(ls);
    this.setState({
      auth,
    });
  }

  handleLoggedIn = (auth: Auth) => {
    localStorage.setItem(LS_KEY, JSON.stringify(auth));
    this.setState({ auth });
  };

  handleLoggedOut = () => {
    localStorage.removeItem(LS_KEY);
    this.setState({ auth: undefined });
  };

  render() {
    // eslint-disable-next-line
    const { auth } = this.state;

    return (
      <Switch>
        <Route
          path="/login"
          render={() => <Login onLoggedIn={this.handleLoggedIn} />}
        />
        <Route path="/studentpage">
          {' '}
          <StudentPage />
        </Route>
        <Route path="/loggedin">
          {' '}
          <LoggedIn />{' '}
        </Route>
      </Switch>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to Login with Portis Demo</h1>
      //   </header>
      //    <div className="App-intro">
      //    {auth ? (
      //    <Profile auth={auth} onLoggedOut={this.handleLoggedOut} />
      //   ) : (
      //    <Login onLoggedIn={this.handleLoggedIn} />
      //    )}
      //   </div>
      // </div>
    );
  }
}
