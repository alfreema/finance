function compoundInterest(rate, numOfCompoundings, principal, numOfPeriods) {
  const CI = principal * Math.pow((1 + ((rate / 100) / numOfCompoundings)), numOfCompoundings * numOfPeriods);
  return Math.round(CI * 100) / 100;
}

module.exports = {
  compoundInterest,
};
