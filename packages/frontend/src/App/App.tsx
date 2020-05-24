import './App.css';

import React from 'react';

import { Login } from '../Login';
import { Profile } from '../Profile/Profile';
import { Auth } from '../types';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { StudentPage } from '../StudentPage/StudentPage';
import {LoggedIn} from '../LoggedIn/LoggedIn';

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
     // @ts-ignore
     window.location = './studentpage';
   
  };

  handleLoggedOut = () => {
    localStorage.removeItem(LS_KEY);
    this.setState({ auth: undefined });
  };

  render() {
    const { auth } = this.state;

    return (
   
  <Switch>
  <Route path='/login'
  render={() => (<Login onLoggedIn={this.handleLoggedIn} />)}
      />
  <Route path = '/studentpage' 
  render = {() =>(<StudentPage/>)}
      />
   <Route path = '/loggedin' 
  render = {() =>(<LoggedIn/>)}
      />
  </Switch>
   );  
   
  }
}
