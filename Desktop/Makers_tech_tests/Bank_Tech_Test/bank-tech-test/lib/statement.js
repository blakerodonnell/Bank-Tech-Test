

const Format = require("../lib/format");

class Statement {
  constructor(balance) {
    this.statement = [];
    this.format = new Format();
    this.balance = balance;
  }
  
  getHeader() {
    return "date || credit || debit || balance";
  }

  get() {
    return this.statement;
  }

  add(transaction) {
    let date = this.format.todaysDate();
    let balance = this.balance.getBalance();
    let transactionColumns = this.format.transactionColumns(transaction);

    this.statement.push(`${date} ||${transactionColumns}|| ${balance}`);
  }
}

module.exports = Statement;