const { extendedInternalRateOfReturn } = require('../src/extended-internal-rate-of-return'); // Adjust the path as needed

describe('Extended Internal Rate of Return (XIRR)', () => {
  it('should compute XIRR', () => {
    const cashFlows = [-1000, -100, 1200];
    const dates = [new Date(2015, 11, 1), new Date(2016, 7, 1), new Date(2016, 7, 19)];
    const tolerance = 0; // Adjust the tolerance as needed
    const expectedResult = 14.11; // Adjust the expected result as needed

    const resultXIRR = extendedInternalRateOfReturn(cashFlows, dates, tolerance);

    expect(resultXIRR).toBeCloseTo(expectedResult);
  });
});
