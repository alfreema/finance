function futureValue(rate, cf0, numOfPeriod) {
  var rate = rate / 100;
  var fv = cf0 * Math.pow((1 + rate), numOfPeriod);
  return Math.round(fv * 100) / 100;
}

module.exports = {
  futureValue
};
