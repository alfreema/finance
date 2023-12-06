const { paybackPeriod } = require('../src/payback-period');

describe('paybackPeriod', () => {
  it('should compute PP for even cash flows', () => {
    const result1 = paybackPeriod(0, -105, 25);
    expect(result1).toBeCloseTo(4.2); // Use toBeCloseTo for floating-point comparisons
  });

  it('should compute PP for uneven cash flows', () => {
    const result2 = paybackPeriod(5, -50, 10, 13, 16, 19, 22);
    expect(result2).toBeGreaterThanOrEqual(3.3);
    expect(result2).toBeLessThanOrEqual(3.6);
  });
});
