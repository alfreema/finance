function compoundAnnualGrowthRate(beginningValue, endingValue, numOfPeriods) {
  const CAGR = Math.pow((endingValue / beginningValue), 1 / numOfPeriods) - 1;
  return Math.round(CAGR * 10000) / 100;
}

module.exports = {
  compoundAnnualGrowthRate,
};
