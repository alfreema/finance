const { amortization } = require('../src/amortization');

describe('amortization', () => {
  it('should compute AM (Amortization) for inputs in years', () => {
    const result = amortization(20000, 7.5, 5, 0);
    expect(result).toBeCloseTo(400.76); // Use toBeCloseTo for floating-point comparisons
  });

  it('should compute AM (Amortization) for inputs in months', () => {
    const result = amortization(20000, 7.5, 60, 1);
    expect(result).toBeCloseTo(400.76); // Use toBeCloseTo for floating-point comparisons
  });

  it('should compute AM (Amortization) for inputs in years when payment is at the beginning of the month', () => {
    const result = amortization(20000, 7.5, 5, 0, 1);
    expect(result).toBeCloseTo(398.27); // Use toBeCloseTo for floating-point comparisons
  });

  it('should compute AM (Amortization) for inputs in months when payment is at the beginning of the month', () => {
    const result = amortization(20000, 7.5, 60, 1, 1);
    expect(result).toBeCloseTo(398.27); // Use toBeCloseTo for floating-point comparisons
  });
});
