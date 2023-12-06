function netPresentValue(rate, ...cashFlows) {
  rate = rate / 100;
  let npv = cashFlows[0];

  for (let i = 1; i < cashFlows.length; i++) {
    npv += cashFlows[i] / Math.pow((1 + rate), i);
  }

  return Math.round(npv * 100) / 100;
}

module.exports = {
  netPresentValue,
};
