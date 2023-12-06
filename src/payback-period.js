function paybackPeriod(numOfPeriods, ...cfs) {
  // for even cash flows
  if (numOfPeriods === 0) {
    return Math.abs(cfs[0]) / cfs[1];
  }
  
  // for uneven cash flows
  let cumulativeCashFlow = cfs[0];
  let yearsCounter = 1;

  for (let i = 1; i < cfs.length; i++) {
    cumulativeCashFlow += cfs[i];
    
    if (cumulativeCashFlow > 0) {
      yearsCounter += (cumulativeCashFlow - cfs[i]) / cfs[i];
      return yearsCounter;
    } else {
      yearsCounter++;
    }
  }
}

module.exports = {
  paybackPeriod,
};
