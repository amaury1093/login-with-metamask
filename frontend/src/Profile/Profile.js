import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

class Profile extends Component {
  render() {
    const { auth: { accessToken }, onLoggedOut } = this.props;
    const { payload: { publicAddress } } = jwtDecode(accessToken);
    return (
      <div className="Profile">
        <p>Logged in as {publicAddress}.</p>
        <p>
          <button onClick={onLoggedOut}>Logout</button>
        </p>
      </div>
    );
  }
}

export default Profile;
