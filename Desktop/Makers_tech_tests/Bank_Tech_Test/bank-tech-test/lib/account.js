class Account {
    constructor() {
      const STARTING_BALANCE = 0;
    this.balance = STARTING_BALANCE;
    }
  add (amount) {
    this.balance += amount}
  withdraw (amount) {
    if (amount > this.balance) return "Insufficient funds";
    this.balance -= amount
  }
}
module.exports = Account;