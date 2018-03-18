import React, { Component } from 'react';

import './Login.css';

const web3 = window.web3;

class Login extends Component {
  state = {
    mmInstalled: false, // If MetaMask is installed (i.e. if web3 present)
    mmUnlocked: false, // If MetaMask is unlocked
    loading: false, // When the app is making the request to authenticate
    nonce: null, // User's nonce fetched from the backend
    publicAddress: null, // User's public address fetched from MetaMask
    signup: true // Whether user is already present in the database or not
  };

  componentDidMount() {
    // Generally, on componentDidMount, web3 is already injected by MetaMask
    // For more precise tuning, see npm package `react-web3-hoc`
    this.setState({
      mmInstalled: !!window.web3
    });

    const publicAddress = web3.eth.coinbase;
    if (!publicAddress) {
      return;
    }
    // If we can access to web3.eth.coinbase, it means MetaMask has been
    // unlocked
    this.setState({
      mmUnlocked: true,
      publicAddress
    });

    // Fetch the nonce from the backend associated to the current publicAddress
  }

  handleClick = () => {};

  loginWithMetaMask = () => {
    const { nonce, publicAddress } = this.state;
    web3.personal.sign(
      web3.fromUtf8(`I am signing my one-time nonce: ${nonce}`),
      publicAddress,
      (err, signature) => {
        if (err) return;
        this.setState({ loading: true });
        console.log(signature);
      }
    );
  };

  render() {
    const { nonce, signup } = this.state;
    return (
      <div>
        <p>
          Please select your login method.<br />For the purpose of this demo,
          only MetaMask login is implemented.
        </p>
        <button
          className="Login-button Login-mm"
          disabled={!nonce && !signup}
          onClick={this.loginWithMetaMask}
        >
          {this.renderMetaMaskText()}
        </button>
        <button className="Login-button Login-fb" disabled>
          Login with Facebook
        </button>
        <button className="Login-button Login-email" disabled>
          Login with Email
        </button>
      </div>
    );
  }

  renderMetaMaskText = () => {
    const { loading, mmInstalled, mmUnlocked, nonce, signup } = this.state;
    if (!mmInstalled) return 'Please install MetaMask first';
    if (!mmUnlocked)
      return 'Please unlock your account on MetaMask and refresh the page';
    if (loading) return 'Loading...';
    if (signup) return 'Sign up with MetaMask';
    if (!nonce) return 'Fetching nonce...';
    return 'Login with MetaMask';
  };
}

export default Login;
