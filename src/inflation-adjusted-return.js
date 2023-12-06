function inflationAdjustedReturn(investmentReturn, inflationRate) {
  return 100 * (((1 + investmentReturn) / (1 + inflationRate)) - 1);
}

module.exports = {
  inflationAdjustedReturn,
};
