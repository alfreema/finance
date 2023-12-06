// The initial investment is the first cash flow
function profitabilityIndex(rate, ...cashFlows) {
  let totalOfPVs = 0;

  for (let i = 0; i < cashFlows.length; i++) {
    const discountFactor = calculateDiscountFactor(rate, i + 1);
    totalOfPVs += cashFlows[i] * discountFactor;
  }

  const PI = totalOfPVs / Math.abs(cashFlows[0]);

  return Math.round(PI * 100) / 100;
}

function calculateDiscountFactor(rate, n) {
  return 1 / Math.pow((1 + rate / 100), n);
}

module.exports = {
  profitabilityIndex,
};
