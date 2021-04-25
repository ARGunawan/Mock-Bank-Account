// src/App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
import Credits from "./components/Credits";
import Debits from "/components/Debits";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      debitInfo: [],
      debitBalance: 0,
      currentUser: {
        userName: "joe_shmo",
        memberSince: "07/23/96",
      },
    };
    this.updateDebitBalance = this.updateDebitBalance.bind(this);
    this.updateDebitInfo = this.updateDebitInfo.bind(this);
  }
  
  componentDidMount = () =>{
    //getting the debits when app is mounted    
    axios
      .get('https://moj-api.herokuapp.com/debits') //get the data
      .then((response) => {
        const data = response.data;
        //console.log(data);
        let holder = []; // hold the data for now
        for( let a = 0; a< data.length; a++) //go through all the data
        {
          holder = [data[a].description, data[a].amount, data[a].date]; //load the data
          this.setState({debitInfo:[...this.state.debitInfo, holder], debitBalance: this.state.debitBalance + data[a].amount})
        }
      })
      .catch((err) => console.log(err));
  }

  //update functions
  updateDebitBalance(event){
    this.setState({accountBalance:this.state.accountBalance - event, debitBalance:this.state.debitBalance + event})
  }
  updateDebitInfo(event){
    this.setState({debitInfo: [event, ...this.state.debitInfo]})
  }

  render() {
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );
    const CreditComponent = () => <Credits />;
    const DebitsComponent = () =>(<Debits updateDebitBalance={this.updateDebitBalance} updateDebitInfo={this.updateDebitInfo} debitInfo={this.state.debitInfo} debitBalance={this.state.debitBalance}/>);

    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/credits" render={CreditComponent} />
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
