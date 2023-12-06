function returnOnInvestment(cf0, earnings) {
  const roi = (earnings - Math.abs(cf0)) / Math.abs(cf0) * 100;
  return Math.round(roi * 100) / 100;
}

module.exports = {
  returnOnInvestment,
};
