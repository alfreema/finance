const { discountFactor } = require('./discount-factor.js');

function presentValue(rate, cf1, numOfPeriod) {
  numOfPeriod = typeof numOfPeriod !== 'undefined' ? numOfPeriod : 1;
  var rate = rate / 100, pv;
  pv = cf1 * discountFactor(rate, numOfPeriod);
  return Math.round(pv * 100) / 100;
}

module.exports = {
  presentValue
};