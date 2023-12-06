function stockPresentValue(g, ke, D0) {
  var valueOfStock = (D0 * (1 + g / 100)) / ((ke / 100) - (g / 100));
  return Math.round(valueOfStock);
}

module.exports = {
  stockPresentValue,
};
