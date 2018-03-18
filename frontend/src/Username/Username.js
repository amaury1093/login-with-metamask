import React, { Component } from 'react';

import './Username.css';

class Username extends Component {
  render() {
    const { onLogout } = this.props;
    return (
      <div className="Username">
        <p>My username is</p>
        <button onClick={onLogout}>Logout</button>
      </div>
    );
  }
}

export default Username;
