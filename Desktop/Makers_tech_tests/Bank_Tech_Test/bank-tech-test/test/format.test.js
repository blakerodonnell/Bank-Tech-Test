const Format = require('../lib/format')

jest.useFakeTimers().setSystemTime(new Date("2022-11-16"));

describe("todaysDate()", () => {
const format = new Format()
    it("returns today's date formatted", () => {
      expect(format.todaysDate()).toEqual("16/11/2022");
    });
});

describe("convertToCurrency()", () => {
    const format = new Format()
    it("returns formatted number in 2 decimal format", () => {
        expect(format.convertToCurrency(500)).toEqual("500.00");
        expect(format.convertToCurrency(500.55)).toEqual("500.55");
    });
});

describe("transactionColumns()", () => {
    const format = new Format()
    it("returns correct formatting for a deposit", () => {
        transaction = { amount: 500, type: "deposit" };
    
        expect(format.transactionColumns(transaction)).toEqual(
        " 500.00 || "
        );
    });
    
    
    it("returns correct formatting for a withdrawal", () => {
        transaction = { amount: 500, type: "withdrawal" };
    
        expect(format.transactionColumns(transaction)).toEqual(
        " || 500.00 "
        );
    });
});
