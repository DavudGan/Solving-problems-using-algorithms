/*
 Нахождение пары чисел, дающую нужную сумму (через словарь).
*/

const array = [5, 2, 3, 4, 9, 3];

const summ = (array, summ) => {
  const s = {};

  for (let i = 0; i < array.length; i++) {
    const possiblePair = summ - array[i];
    if (s[array[i]] === undefined) {
      s[possiblePair] = i;
    } else {
      return console.log(s[array[i]] + " and " + i);
    }
  }

  return null;
};

summ(array, 8);
