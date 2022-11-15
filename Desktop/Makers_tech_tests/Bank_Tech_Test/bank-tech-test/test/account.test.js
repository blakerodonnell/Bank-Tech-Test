const Account = require('../lib/account.js');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account()
  })

  test('Should start with an initial balance of 0', () => {
    expect(account.balance).toEqual(0)});
  
  test('Depositor should be able to add funds', () => {
    account.add(1000);

    expect(account.balance).toEqual(1000)
  });
  
  test('Should allow a Account Holder to withdraw money from their account', () => {
    account.add(1000);
    account.withdraw(500);

    expect(account.balance).toEqual(500);
  });

  test('Should allow a Account Holder to get their balance', () => {
    account.add(1000);
    account.withdraw(500);

    expect(account.getBalance()).toEqual("500.00");
  });
})