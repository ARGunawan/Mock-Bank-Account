// src/components/Home.js
import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
      <div>
        <img id = "img" src = "https://bomarsecurity.com/wp-content/uploads/2013/06/bank-header.jpg" alt="bank"/>
        <h1>Bank of React</h1>

        <Link to ="/userProfile">User Profile</Link>
        <br/>
        <Link to ="/credits">Credits</Link>
        <br/>
        <Link to ="/debits">Debits</Link>
        <br/>
        <AccountBalance accountBalance =  {this.props.accountBalance} />
      </div>
      </div>
    );
  }
}

export default Home;
