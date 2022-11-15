

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
}

module.exports = Statement;