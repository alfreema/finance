const { compoundAnnualGrowthRate } = require('../src/compound-annual-growth-rate'); // Adjust the path as needed

describe('compoundAnnualGrowthRate', () => {
  it('should compute compound annual growth rate (CAGR)', () => {
    const beginningValue = 10000;
    const endingValue = 19500;
    const numOfPeriods = 3;

    const result = compoundAnnualGrowthRate(beginningValue, endingValue, numOfPeriods);

    expect(result).toBeCloseTo(24.93);
  });
});
