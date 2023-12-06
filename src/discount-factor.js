function discountFactor(rate, numOfPeriods) {
  var dfs = [];
  
  for (var i = 1; i < numOfPeriods; i++) {
    var discountFactor = 1 / Math.pow((1 + rate/100), (i - 1));
    var roundedDiscountFactor = Math.ceil(discountFactor * 1000) / 1000;
    dfs.push(roundedDiscountFactor);
  }

  return dfs;
}

module.exports = {
  discountFactor,
};
