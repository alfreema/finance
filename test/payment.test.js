const { payment } = require('../src/payment'); // Adjust the path as needed

describe('Payment (PMT)', () => {
  it('should compute PMT', () => {
    const rate = 2;
    const numberOfPayments = 36;
    const loanPrincipal = -1000000;
    const expectedResult = 39232.85;

    const resultPMT = Number(payment(rate, numberOfPayments, loanPrincipal).toFixed(2));

    expect(resultPMT).toBeCloseTo(expectedResult);
  });
});
