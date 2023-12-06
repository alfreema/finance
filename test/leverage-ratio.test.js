const { leverageRatio } = require('../src/leverage-ratio'); // Adjust the path as needed

describe('leverageRatio', () => {
  it('should compute leverage ratio (LR)', () => {
    const totalLiabilities = 25;
    const totalDebts = 10;
    const totalIncome = 20;

    const result = leverageRatio(totalLiabilities, totalDebts, totalIncome);

    expect(result).toBeCloseTo(1.75);
  });
});
