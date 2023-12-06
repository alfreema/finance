const { netPresentValue } = require('../src/net-present-value');

describe('netPresentValue', () => {
  it('should compute NPV', () => {
    const result = netPresentValue(10, -500000, 200000, 300000, 200000);
    expect(result).toBeCloseTo(80015.03); // Use toBeCloseTo for floating-point comparisons
  });
});
