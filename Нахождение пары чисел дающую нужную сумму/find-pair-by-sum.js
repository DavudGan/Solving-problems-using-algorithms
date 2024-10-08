const summ = (array, summ) => {
  const s = {};

  for (let i = 0; i < array.length; i++) {
    const possiblePair = summ - array[i];
    if (s[array[i]] === undefined) {
      s[possiblePair] = i;
    } else {
      return s[array[i]] + " and " + i;
    }
  }

  return null;
};

module.exports = summ;
