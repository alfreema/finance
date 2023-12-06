function payment(rate, numOfPayments, principal) {
  rate = rate / 100;
  var pmt = -(principal * rate) / (1 - Math.pow(1 + rate, -numOfPayments));
  return Math.round(pmt * 100) / 100;
}

module.exports = {
  payment,
};
