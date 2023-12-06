const { ruleOf72 } = require('../src/rule-of-72'); // Adjust the path as needed

describe('Rule of 72', () => {
  it('should compute R72', () => {
    const interestRate = 10;
    const expectedResult = 7.2;

    const resultR72 = ruleOf72(interestRate);

    expect(resultR72).toBeCloseTo(expectedResult);
  });
});
