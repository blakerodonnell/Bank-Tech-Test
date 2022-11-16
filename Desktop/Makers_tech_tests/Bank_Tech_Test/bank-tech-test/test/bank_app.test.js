const bankApp = require("../lib/bankApp");

jest.useFakeTimers().setSystemTime(new Date("2022-11-16"));

describe("Bank", () => {
//   describe("getStatement()", () => {
    let bank = new bankApp();
    it("returns correct statement after initial deposit of 1000", () => {
      let statement = bank.getStatement();
      bank.deposit(1000);

      let expectedRow = "16/11/2022 || 1000.00 || || 1000.00";
      expect(statement[0]).toEqual(expectedRow);
      expect(statement.includes(expectedRow)).toBe(true);
    });

    describe("withdraw()", () => {
        let bank = new bankApp();
        it("Removes 24.75 from the balance", () => {
          let statement = bank.getStatement();
          bank.deposit(100);
          bank.withdraw(24.75);
    
          let expectedRow = "16/11/2022 || || 24.75 || 75.25";
          expect(statement[1]).toEqual(expectedRow);
          expect(statement.includes(expectedRow)).toBe(true);
        });
    });
});