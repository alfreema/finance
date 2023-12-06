// iar.test.js

const { inflationAdjustedReturn } = require('../src/inflation-adjusted-return'); // Adjust the path as needed

describe('Investment Adjusted Return (IAR)', () => {
  it('should compute IAR', () => {
    const investmentReturn = 0.08;
    const inflationRate = 0.03;
    const expectedResult = 4.854368932038833;

    const resultIAR = inflationAdjustedReturn(investmentReturn, inflationRate);

    expect(resultIAR).toBeCloseTo(expectedResult);
  });
});
