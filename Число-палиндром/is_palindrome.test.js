const longestCommonPrefix = require("./is_palindrome");

describe("Задача: Число-палиндром", () => {
  test("Пример 1: число является полиндромом", () => {
    expect(longestCommonPrefix(121)).toBe(true);
  });

  test("Пример 2: общего префикса нет", () => {
    expect(longestCommonPrefix(-121)).toBe(false);
  });

  test("Пустое значание", () => {
    expect(longestCommonPrefix()).toBe(false);
  });

  test("Одна цифра", () => {
    expect(longestCommonPrefix(1)).toBe(true);
  });

  test("Все числа одинаковые", () => {
    expect(longestCommonPrefix(222)).toBe(true);
  });
});
