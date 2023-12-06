// present-value.test.js
const { presentValue } = require('../src/present-value.js');
const { discountFactor } = require('../src/discount-factor.js');

jest.mock('../src/discount-factor', () => ({
  discountFactor: jest.fn()
}));

describe('presentValue', () => {
  it('should compute PV with default numOfPeriod', () => {
    discountFactor.mockReturnValue(0.9); // Mocking discountFactor for simplicity
    const result = presentValue(5, 100);
    expect(result).toBeCloseTo(90.0); // Use toBeCloseTo for floating-point comparisons
    expect(discountFactor).toHaveBeenCalledWith(0.05, 1); // Verifying discountFactor call
  });

  it('should compute PV with specified numOfPeriod', () => {
    discountFactor.mockReturnValue(0.8); // Mocking discountFactor for simplicity
    const result = presentValue(5, 100, 5);
    expect(result).toBeCloseTo(80.0); // Use toBeCloseTo for floating-point comparisons
    expect(discountFactor).toHaveBeenCalledWith(0.05, 5); // Verifying discountFactor call
  });
});
