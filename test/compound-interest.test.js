const { compoundInterest } = require('../src/compound-interest'); // Adjust the path as needed

describe('compoundInterest', () => {
  it('should compute compound interest', () => {
    const rate = 4.3;
    const compoundingsPerPeriod = 4;
    const principal = 1500;
    const numOfPeriods = 6;

    const result = compoundInterest(rate, compoundingsPerPeriod, principal, numOfPeriods);

    expect(result).toBeCloseTo(1938.84);
  });
});
