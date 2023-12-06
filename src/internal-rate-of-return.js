function internalRateOfReturn(cfs) {
  const depth = cfs.depth;
  const args = cfs.cashFlow;
  let numberOfTries = 1;
  let positive = false;
  let negative = false;

  args.forEach(function (value) {
    if (value > 0) positive = true;
    if (value < 0) negative = true;
  });

  if (!positive || !negative) {
    throw new Error('Internal Rate of Return (IRR) requires at least one positive value and one negative value');
  }

  function npv(rate) {
    numberOfTries++;
    if (numberOfTries > depth) {
      throw new Error('Internal Rate of Return (IRR) can\'t find a result');
    }

    const rrate = 1 + rate / 100;
    let npv = args[0];

    for (let i = 1; i < args.length; i++) {
      npv += args[i] / Math.pow(rrate, i);
    }

    return npv;
  }

  return Math.round(seekZero(npv) * 100) / 100;
}

function seekZero(fn) {
  let x = 1;

  while (fn(x) > 0) {
    x += 1;
  }

  while (fn(x) < 0) {
    x -= 0.01;
  }

  return x + 0.01;
}

module.exports = {
  internalRateOfReturn,
};
