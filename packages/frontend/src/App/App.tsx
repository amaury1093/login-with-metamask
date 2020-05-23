import './App.css';

import React from 'react';

import { Login } from '../Login';
import { Profile } from '../Profile/Profile';
import { Auth } from '../types';
import { useHistory } from 'react-router';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import StudentPage from '../Studentpage/StudentPage';
// import Popup from '../Modal/Modal';  

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
    const history = useHistory ();
    localStorage.setItem(LS_KEY, JSON.stringify(auth));
    this.setState({ auth });
    history.push("/studentpage");
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
  <Route path = '/studentpage'> <StudentPage/>
</Route>
  </Switch>
       
    );
  }
}
