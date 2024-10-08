const longestCommonPrefix = require("./longestCommonPrefix");

describe("Задача: Самый длинный общий префикс", () => {
  test("Пример 1: общий префикс существует", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  test("Пример 2: общего префикса нет", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  test("Пустой массив", () => {
    expect(longestCommonPrefix([])).toBe("");
  });

  test("Одна строка в массиве", () => {
    expect(longestCommonPrefix(["apple"])).toBe("apple");
  });

  test("Все строки одинаковые", () => {
    expect(longestCommonPrefix(["test", "test", "test"])).toBe("test");
  });
});
