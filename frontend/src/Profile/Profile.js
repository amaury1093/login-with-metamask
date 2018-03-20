import React, { Component } from 'react';
import Blockies from 'react-blockies';
import jwtDecode from 'jwt-decode';

import './Profile.css';

class Profile extends Component {
  render() {
    const { auth: { accessToken }, onLoggedOut } = this.props;
    const { payload: { publicAddress } } = jwtDecode(accessToken);
    return (
      <div className="Profile">
        <p>
          Logged in as <Blockies seed={publicAddress} /> {publicAddress}.
        </p>
        <p>
          <button onClick={onLoggedOut}>Logout</button>
        </p>
      </div>
    );
  }
}

export default Profile;
