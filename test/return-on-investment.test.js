const { returnOnInvestment } = require('../src/return-on-investment');

describe('returnOnInvestment', () => {
  it('should compute ROI', () => {
    const result = returnOnInvestment(-55000, 60000);
    expect(result).toBeCloseTo(9.09); // Use toBeCloseTo for floating-point comparisons
  });
});
