// src/components/UserProfile.js
import {Link} from 'react-router-dom';
import React, {Component} from 'react';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default UserProfile;