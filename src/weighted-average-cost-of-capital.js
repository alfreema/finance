function weightedAverageCostOfCapital(marketValueOfEquity, marketValueOfDebt, costOfEquity, costOfDebt, taxRate) {
  var E = marketValueOfEquity;
  var D = marketValueOfDebt;
  var V = marketValueOfEquity + marketValueOfDebt;
  var Re = costOfEquity;
  var Rd = costOfDebt;
  var T = taxRate;

  var WACC = ((E / V) * Re / 100) + (((D / V) * Rd / 100) * (1 - T / 100));
  return Math.round(WACC * 1000) / 10;
}

module.exports = {
  weightedAverageCostOfCapital,
};
