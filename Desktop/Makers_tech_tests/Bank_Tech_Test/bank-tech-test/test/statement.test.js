const Statement = require("../lib/statement");
const Account = require("../lib/account");

const account = new Account();
const statement = new Statement(account);

describe('statement', () => { it("returns statement header", () => {
    expect(statement.getHeader()).toEqual(
      "date || credit || debit || balance"
    )})
});
