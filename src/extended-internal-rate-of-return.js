const { sumOfPresentValues } = require('./sum-of-present-values.js');

function extendedInternalRateOfReturn(cfs, dts, guess) {
  if (cfs.length !== dts.length) throw new Error('Number of cash flows and dates should match');

  var positive, negative;
  Array.prototype.slice.call(cfs).forEach(function (value) {
    if (value > 0) positive = true;
    if (value < 0) negative = true;
  });

  if (!positive || !negative) throw new Error('XIRR requires at least one positive value and one negative value');

  guess = guess || 0;

  var limit = 100; // loop limit
  var guess_last;
  var durs = [0];

  // Create Array of durations from First date
  for (var i = 1; i < dts.length; i++) {
    durs.push(durYear(dts[0], dts[i]));
  }

  do {
    guess_last = guess;
    guess = guess_last - sumOfPresentValues(cfs, durs);
    limit--;

  } while (guess_last.toFixed(5) !== guess.toFixed(5) && limit > 0);

  var xirr = guess_last.toFixed(5) !== guess.toFixed(5) ? null : guess * 100;

  return Math.round(xirr * 100) / 100;
}

//Returns duration in years between two dates
function durYear(first, last) {
  return (Math.abs(last.getTime() - first.getTime()) / (1000 * 3600 * 24 * 365));
}

module.exports = {
  extendedInternalRateOfReturn,
};
