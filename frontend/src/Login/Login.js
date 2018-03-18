import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <button className="Login-button">Login with MetaMask</button>
        <button className="Login-button" disabled>
          Login with Facebook
        </button>
        <button className="Login-button" disabled>
          Login with Email
        </button>
      </div>
    );
  }
}

export default Login;
