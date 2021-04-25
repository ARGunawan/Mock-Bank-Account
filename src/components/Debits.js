// src/components/Debits.js
import { Link } from "react-router-dom";
import React, { Component } from "react";

class Debits extends Component {
  constructor(props) {
    super(props);
    this.submitDebit = this.submitDebit.bind(this);
  }

  submitDebit(event) {
    event.preventDefault();
    console.log("Debit value submitted:" + event.target.debitAmount.value);
    let tempDebit = [
      event.target.debitDes.value,
      event.target.debitAmount.value,
      new Date().toLocaleString(),
    ];
    this.props.updateDebitBalance(Number(event.target.debitAmount.value));
    this.props.updateDebitInfo(tempDebit);
  }

  render() {
    return (
      <div>
        <Link to="/">Return to Home</Link>

        <div>
          <div>
            <h4>
              Debits: $
              {(Math.round(this.props.debitBalance * 100) / 100).toFixed(2)}
            </h4>

            <form onSumbit={this.submitDebit}>
              <input
                type="text"
                name="debitDes"
                placeholder="Debit Description"
              />
              <input
                type="number"
                name="debitAmount"
                placeholder="Debit Amount"
              />
              <input type="submit" />
            </form>
          </div>

          <div>
            {this.props.debitInfo.map((x, index) => (
              <div key={index} style={{ border: "2px black solid" }}>
                <p className="alert alert-dark"> Description: {x[0]}</p>
                <p className="list-group-item"> Amount: ${x[1]} </p>
                <p className="list-group-item "> Date: {x[2]} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Debits;
