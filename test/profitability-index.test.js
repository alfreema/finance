const { profitabilityIndex } = require('../src/profitability-index');

describe('profitabilityIndex', () => {
  it('should compute PI', () => {
    const result = profitabilityIndex(10, -40000, 18000, 12000, 10000, 9000, 6000);
    expect(result).toBeCloseTo(0.08); // Use toBeCloseTo for floating-point comparisons
  });
});
