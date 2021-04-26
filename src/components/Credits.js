import React, { Component } from "react";
import { Link } from "react-router-dom";

class Credits extends Component {
  constructor(props) {
    super(props);
    this.clickAddCredit = this.clickAddCredit.bind(this);
  }

  clickAddCredit(event) {
    event.preventDefault(); //prevent any potential defaults on the submit button
    //This holds our information from the input field boxes after we click on addCredit
    let creditData = [
      event.target.creditDescription.value,
      event.target.creditAmount.value,
      new Date().toLocaleString(),
    ];
    this.props.updateCreditBalance(Number(event.target.creditAmount.value));
    this.props.updateCreditInfo(creditData);
  }

  render() {
    return (
      <div>
        <Link to="/">Home Page</Link>
        <br/>
        <Link to ="/userProfile">User Profile</Link>
        <br/>
        <Link to ="/debits">Debits</Link>
        <br/>
        <Link to ="/login">Login</Link>
        <br/>
        <h1>Credit</h1>
        <p>Account Balance: {this.props.accountBalance}</p>
        <form onSubmit={this.clickAddCredit}>
          <input
            type="text"
            name="creditDescription"
            placeholder="Enter Credit Description"
          ></input>
          <input
            type="number"
            name="creditAmount"
            placeholder="Enter Credit Amount"
          ></input>
          <input type="submit"></input>
        </form>
        <div>
          {this.props.creditInfo.map((x, index) => (
            <div>
              <li>Description: {x[0]}</li>
              <li>Amount: ${x[1]}</li>
              <li>Date: {x[2]}</li>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Credits;
