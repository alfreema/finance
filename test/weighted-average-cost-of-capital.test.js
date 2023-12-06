// weighted-average-cost-of-capital.test.js

const { weightedAverageCostOfCapital } = require('../src/weighted-average-cost-of-capital'); // Adjust the path as needed

describe('Weighted Average Cost of Capital (WACC)', () => {
  it('should compute WACC', () => {
    const marketValueOfEquity = 600000;
    const marketValueOfDebt = 400000;
    const costOfEquity = 6;
    const costOfDebt = 5;
    const taxRate = 35;
    const expectedResult = 4.9;

    const resultWACC = weightedAverageCostOfCapital(
      marketValueOfEquity,
      marketValueOfDebt,
      costOfEquity,
      costOfDebt,
      taxRate
    );

    expect(resultWACC).toBeCloseTo(expectedResult);
  });
});
