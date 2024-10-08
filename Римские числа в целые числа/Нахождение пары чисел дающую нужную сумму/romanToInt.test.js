const romanToInt = require("./romanToInt");

describe("Тесты для функции romanToInt", () => {
  test("Тест 1: III -> 3", () => {
    expect(romanToInt("III")).toBe(3);
  });

  test("Тест 2: IV -> 4", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  test("Тест 3: IX -> 9", () => {
    expect(romanToInt("IX")).toBe(9);
  });

  test("Тест 4: LVIII -> 58", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  test("Тест 5: MCMXCIV -> 1994", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  test("Тест 6: MMXXI -> 2021", () => {
    expect(romanToInt("MMXXI")).toBe(2021);
  });

  test("Тест 7: пустая строка -> 0", () => {
    expect(romanToInt("")).toBe(0);
  });
});
