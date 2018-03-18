import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <p>
          Please select your login method.<br />For the purpose of this demo,
          only MetaMask login is implemented.
        </p>
        <button className="Login-button Login-metamask">
          Login with MetaMask
        </button>
        <button className="Login-button Login-facebook" disabled>
          Login with Facebook
        </button>
        <button className="Login-button Login-email" disabled>
          Login with Email
        </button>
      </div>
    );
  }
}

export default Login;
