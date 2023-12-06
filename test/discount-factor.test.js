// discount-factor.test.js

const { discountFactor } = require('../src/discount-factor'); // Adjust the path as needed

describe('discountFactor', () => {
  it('should compute discount factors', () => {
    const expectedValues = [1, 0.91, 0.827, 0.752, 0.684];
    const rate = 10;
    const numOfPeriods = 6;

    const result = discountFactor(rate, numOfPeriods);

    for (let i = 0; i < expectedValues.length; i++) {
      expect(result[i]).toBeCloseTo(expectedValues[i]);
    }
  });
});
