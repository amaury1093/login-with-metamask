import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

import './Username.css';

class Username extends Component {
  render() {
    const { auth: { accessToken }, onLoggedOut } = this.props;
    return (
      <div className="Username">
        <h3>Logged In!</h3>
        <p>The data in the accessToken is:</p>
        <p>{JSON.stringify(jwtDecode(accessToken))}</p>
        <p>
          <button onClick={onLoggedOut}>Logout</button>
        </p>
      </div>
    );
  }
}

export default Username;
