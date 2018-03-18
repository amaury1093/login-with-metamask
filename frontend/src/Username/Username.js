import React, { Component } from 'react';

import './Username.css';

class Username extends Component {
  state = {
    username: ''
  };

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  handleSubmit = () => {};

  render() {
    const { auth, onLogout } = this.props;
    const { username } = this.state;

    return (
      <div className="Username">
        <p>
          My public address is<button onClick={onLogout}>Logout</button>
        </p>

        <p>My username is {auth || 'not set.'}</p>
        <div>
          <label htmlFor="username">Change username:</label>
          <input
            name="username"
            onChange={this.handleChange}
            value={username}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Username;
