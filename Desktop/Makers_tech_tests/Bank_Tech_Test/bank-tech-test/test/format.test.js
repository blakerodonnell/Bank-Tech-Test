const Format = require('../lib/format')

describe("todaysDate()", () => {
const format = new Format()
    it("returns today's date formatted", () => {
      expect(format.todaysDate()).toEqual("15/11/2022");
    });
});

describe("convertToCurrency()", () => {
    const format = new Format()
    it("returns formatted number in 2 decimal format", () => {
        expect(format.convertToCurrency(500)).toEqual("500.00");
        expect(format.convertToCurrency(500.55)).toEqual("500.55");
    });
});
