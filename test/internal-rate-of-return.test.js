const { internalRateOfReturn } = require('../src/internal-rate-of-return');

describe('internalRateOfReturn', () => {
  it('should compute IRR', () => {
    const data = {
      depth: 10000,
      cashFlow: [-6, 297, 307],
    };
    const irr = internalRateOfReturn(data);
    // should be ~4951.29
    expect(irr).toBeGreaterThanOrEqual(4951);
    expect(irr).toBeLessThanOrEqual(4952);
  });
});
