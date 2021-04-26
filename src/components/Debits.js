import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

class Debits extends Component {
  constructor(props) {
    super(props);
    this.submitDebit = this.submitDebit.bind(this);
  }

  submitDebit(event) {
    event.preventDefault();
    console.log("DEBIT SUBMIT VALUE " + event.target.newDebitAmount.value);
    let temp = [
      event.target.debitDes.value,
      event.target.newDebitAmount.value,
      new Date().toLocaleString(),
    ];
    this.props.updateDebitBalance(Number(event.target.newDebitAmount.value));
    this.props.updateDebitInfo(temp);
  }

  render() {
    return (
      <div>
        <Link to="/"> Home</Link>

        <div>
          <div>
            <h4>
              <div>Debits</div>
              <p>Account Balance: {this.props.accountBalance}</p>
            </h4>

            <form onSubmit={this.submitDebit}>
              <input
                type="text"
                name="debitDes"
                placeholder="Debit Description"
              />
              <input
                type="number"
                name="newDebitAmount"
                placeholder="Debit amount"
              />
              <input type="submit" />
            </form>
          </div>

          <div>
            {this.props.debitInfo.map((x, index) => (
              <div key={index}>
                <ul>
                  <li> Description: {x[0]}</li>
                  <li> Amount: ${x[1]} </li>
                  <li> Date: {x[2]} </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Debits;
