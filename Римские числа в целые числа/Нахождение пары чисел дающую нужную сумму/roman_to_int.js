function romanToInt(x) {
  const roman = new Map();
  roman.set("I", 1);
  roman.set("V", 5);
  roman.set("X", 10);
  roman.set("L", 50);
  roman.set("C", 100);
  roman.set("D", 500);
  roman.set("M", 1000);

  let summ = 0;

  for (let i = 0; i < x.length; i++) {
    if (i < x.length - 1 && roman.get(x[i]) < roman.get(x[i + 1])) {
      summ -= roman.get(x[i]);
    } else {
      summ += roman.get(x[i]);
    }
  }
  return summ;
}

module.exports = romanToInt;
