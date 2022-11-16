const Account = require("./Account");
const Statement = require("./statement");

class bankApp {
  constructor() {
    this.balance = new Account();
    this.statement = new Statement(this.balance);
  }

  deposit(amount) {
    const deposit = parseFloat(amount);

    const transaction = {
      amount: deposit,
      type: "deposit",
    };

    this.balance.add(deposit);
    this.statement.add(transaction);
  }

  withdraw(amount) {
    const withdrawal = parseFloat(amount);

    let transaction = {
      amount: withdrawal,
      type: "withdrawal",
    };

    this.balance.withdraw(withdrawal);
    this.statement.add(transaction);
  }

  getStatement() {
    return this.statement.get();
  }

  printStatement() {
    console.log(this.statement.getHeader());
    this.statement.get().forEach((statementRow) => {
      console.log(statementRow);
    });
  }
}

  module.exports = bankApp;