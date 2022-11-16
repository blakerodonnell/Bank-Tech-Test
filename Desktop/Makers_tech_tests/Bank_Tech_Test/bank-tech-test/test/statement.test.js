const Statement = require("../lib/statement");
const Account = require("../lib/account");

const account = new Account();
const statement = new Statement(account);

describe('statement', () => { it("returns statement header", () => {
    expect(statement.getHeader()).toEqual(
      "date || credit || debit || balance"
    )})
});

describe("Statement", () => {
        it("initially returns empty statement", () => {
        expect(statement.get()).toEqual([]);
    });
});

describe("add()", () => {
    it("Adds a deposit", () => {
      const deposit = { amount: 2000, type: "deposit" };
      statement.add(deposit);

      const statementPrint = statement.get();
      expect(statementPrint[0].includes("2000.00")).toBe(true);
    });

    it("Adds a deposit and balance is updated", () => {
        const balance = new Account();
        balance.add(500);
        const statement = new Statement(balance);
  
        const deposit = { amount: 500, type: "deposit" };
        statement.add(deposit);
  
        const statementPrint = statement.get();
        expect(statementPrint[0]).toEqual("16/11/2022 || 500.00 || || 500.00")
    });

    it("Adds a withdrawal and balance is updated", () => {
        const balance = new Account();
        balance.add(500);
        balance.withdraw(50);
        const statement = new Statement(balance);
  
        const withdrawal = { amount: 50, type: "withdrawal" };
        statement.add(withdrawal);
  
        const statementPrint = statement.get();
  
        expect(statementPrint[0]).toEqual("16/11/2022 || || 50.00 || 450.00")
    });
});