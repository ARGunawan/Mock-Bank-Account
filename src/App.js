// src/App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
import Credits from "./components/Credits";
import Debits from "./components/Debits";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      debitBalance: 0,
      creditBalance: 0,
      debitInfo: [],
      creditInfo: [],
      currentUser: {
        userName: "joe_shmo",
        memberSince: "07/23/96",
      },
    };

  
    this.updateCreditBalance = this.updateCreditBalance.bind(this);
    this.updateDebitBalance = this.updateDebitBalance.bind(this);
    this.updateDebitInfo = this.updateDebitInfo.bind(this);
    this.updateCreditInfo = this.updateCreditInfo.bind(this);
  }

  componentDidMount = () => {
    //getting the credits when app is mounted
    axios
      .get("https://moj-api.herokuapp.com/credits") //gets data from api
      .then((response) => {
        const data = response.data; //stores data from api
        let holder = []; // hold the data temporary
        for (
          let i = 0;
          i < data.length;
          i++ //loops through data
        ) {
          holder = [data[i].description, data[i].amount, data[i].date]; //loads data
          this.setState({
            creditInfo: [...this.state.creditInfo, holder],
            creditBalance: this.state.creditBalance + data[i].amount,
            accountBalance: this.state.accountBalance + data[i].amount,
          });
        }
      })
      .catch((err) => console.log(err)); //if data doesnt load catch error
  
      axios
      .get("https://moj-api.herokuapp.com/debits") //get the data
      .then((response) => {
        const data = response.data;
        
        let holder = []; // hold the data for now
        for (
          let a = 0;
          a < data.length;
          a++ //go through all the data
        ) {
          holder = [data[a].description, data[a].amount, data[a].date]; //load the data
          this.setState({
            debitInfo: [...this.state.debitInfo, holder],
            debitBalance: this.state.debitBalance + data[a].amount,
            accountBalance: this.state.accountBalance - data[a].amount,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  //update functions
  updateDebitBalance(event) {
    this.setState({
      accountBalance: this.state.accountBalance - event,
      debitBalance: this.state.debitBalance + event,
    });
  }
  updateDebitInfo(event) {
    this.setState({ debitInfo: [event, ...this.state.debitInfo] });
  }

  updateCreditInfo(event) {
    this.setState({ creditInfo: [event, ...this.state.creditInfo] });
  }

  updateCreditBalance(event) {
    this.setState({
      accountBalance: this.state.accountBalance + event,
      creditBalance: this.state.creditBalance + event,
    });
  }

  render() {
    const HomeComponent = () => (
      <Home accountBalance = {this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName = {this.state.currentUser.userName}
        memberSince = {this.state.currentUser.memberSince}
      />
    );
    const LogInComponent = () => (
      <LogIn user = {this.state.currentUser} mockLogIn={this.mockLogIn} />
    );
    const CreditsComponent = () => (
      <Credits
        updateCreditBalance = {this.updateCreditBalance}
        updateCreditInfo = {this.updateCreditInfo}
        creditInfo = {this.state.creditInfo}
        creditBalance = {this.state.creditBalance}
        accountBalance = {this.state.accountBalance}
      />
    );
    const DebitsComponent = () => (
      <Debits
        updateDebitBalance = {this.updateDebitBalance}
        updateDebitInfo = {this.updateDebitInfo}
        debitInfo = {this.state.debitInfo}
        debitBalance = {this.state.debitBalance}
        accountBalance = {this.state.accountBalance}
      />
    );

    return (
      <Router>
        <div>
          <Route exact path = "/" render={HomeComponent} />
          <Route exact path = "/userProfile" render={UserProfileComponent} />
          <Route exact path = "/login" render={LogInComponent} />
          <Route exact path = "/credits" render={CreditsComponent} />
          <Route exact path = "/debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
