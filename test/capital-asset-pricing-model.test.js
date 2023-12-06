const { capitalAssetPricingModel } = require('../src/capital-asset-pricing-model'); // Adjust the path as needed

describe('Capital Asset Pricing Model (CAPM)', () => {
  it('should compute CAPM', () => {
    const riskFreeRate = 2;
    const marketReturn = 2;
    const beta = 10;
    const expectedResult = 0.18; // Adjust the expected result as needed

    const resultCAPM = capitalAssetPricingModel(riskFreeRate, marketReturn, beta);

    expect(resultCAPM).toBeCloseTo(expectedResult);
  });
});
