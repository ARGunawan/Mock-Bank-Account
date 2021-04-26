// src/components/UserProfile.js
import {Link} from 'react-router-dom';
import React, {Component} from 'react';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <Link to="/">Return to Home</Link>
          <br/>
          <Link to ="/credits">Credits</Link>
          <br/>
          <Link to ="/debits">Debits</Link>
          <br/>
          <Link to ="/login">Login</Link>
          <br/>
          
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          
        </div>
    );
  }
}

export default UserProfile;