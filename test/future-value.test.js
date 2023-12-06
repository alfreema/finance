const { futureValue } = require('../src/future-value');

describe('futureValue', () => {
  it('should compute FV', () => {
    const result = futureValue(0.5, 1000, 12);
    expect(result).toBeCloseTo(1061.68); // Use toBeCloseTo for floating-point comparisons
  });
});
