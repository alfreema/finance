function leverageRatio(totalLiabilities, totalDebts, totalIncome) {
  return (totalLiabilities + totalDebts) / totalIncome;
}

module.exports = {
  leverageRatio,
};
