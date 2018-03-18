import React, { Component } from 'react';

import './Username.css';

class Username extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <div className="Username">
        <p>My username is</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Username;
