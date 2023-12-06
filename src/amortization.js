function amortization(principal, rate, period, yearOrMonth, payAtBeginning) {
  var numerator, denominator, am;
  var ratePerPeriod = rate / 12 / 100;

  // for inputs in years
  if (!yearOrMonth) {
    numerator = buildNumerator(period * 12);
    denominator = Math.pow((1 + ratePerPeriod), period * 12) - 1;

  // for inputs in months
  } else if (yearOrMonth === 1) {
    numerator = buildNumerator(period);
    denominator = Math.pow((1 + ratePerPeriod), period) - 1;

  } else {
    console.log('not defined');
  }

  am = principal * (numerator / denominator);
  return Math.round(am * 100) / 100;

  function buildNumerator(numInterestAccruals) {
    if (payAtBeginning) {
      // if payments are made in the beginning of the period, then interest shouldn't be calculated for the first period
      numInterestAccruals -= 1;
    }
    return ratePerPeriod * Math.pow((1 + ratePerPeriod), numInterestAccruals);
  }
}

module.exports = {
  amortization,
};
