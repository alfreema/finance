// stock-present-value.test.js

const { stockPresentValue } = require('../src/stock-present-value'); // Adjust the path as needed

describe('Stock Present Value', () => {
  it('should compute stockPV', () => {
    const dividend = 5;
    const requiredRateOfReturn = 15;
    const growthRate = 10;
    const expectedResult = 105; // Adjust the expected result as needed

    const resultStockPV = stockPresentValue(dividend, requiredRateOfReturn, growthRate);

    expect(resultStockPV).toBeCloseTo(expectedResult);
  });
});
