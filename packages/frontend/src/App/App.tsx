import './App.css';

import React from 'react';

import { Login } from '../Login';
// eslint-disable-next-line
import { Profile } from '../Profile/Profile';
import { Auth } from '../types';
<<<<<<< HEAD
import { useHistory } from 'react-router';
=======
<<<<<<< HEAD

// >>>>>>> d7ab624221ee94f734b6b281e8a391139bf2a24f
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

=======
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> meet1
import StudentPage from '../Studentpage/StudentPage';
<<<<<<< HEAD
// import Popup from '../Modal/Modal';  
=======
import LoggedIn from '../LoggedIn/LoggedIn';
import { useHistory } from 'react-router';

import { DemoLogin } from '../DemoLogin';


// >>>>>>> d7ab624221ee94f734b6b281e8a391139bf2a24f

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
<<<<<<< HEAD
    history.push("/studentpage");
=======

    // @ts-ignore
    window.location = './studentpage';
    // localStorage.setItem(LS_KEY, JSON.stringify(auth));
    // this.setState({ auth });
// >>>>>>> d7ab624221ee94f734b6b281e8a391139bf2a24f
  };

  handleLoggedOut = () => {
    localStorage.removeItem(LS_KEY);
    this.setState({ auth: undefined });
  };

  render() {
    // eslint-disable-next-line
    const { auth } = this.state;

    return (
<<<<<<< HEAD
   
<Switch>
  <Route path='/login'
  render={() => (<Login onLoggedIn={this.handleLoggedIn} />)}
      />
  <Route path = '/studentpage'> <StudentPage/>
</Route>
  </Switch>
       
=======
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
>>>>>>> d7ab624221ee94f734b6b281e8a391139bf2a24f
    );
  }
}
