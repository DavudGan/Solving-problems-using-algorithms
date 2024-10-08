const { mergeList, LinkedList } = require("./merge_sorted_linked_lists");

describe("Тесты для функции mergeList", () => {
  test("Объединение двух списков", () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(4);

    const list2 = new LinkedList();
    list2.append(1);
    list2.append(3);
    list2.append(4);
    list2.append(5);
    list2.append(6);

    const mergedList = mergeList(list1, list2);
    expect(mergedList.toArray()).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });

  test("Объединение пустого списка с непустым", () => {
    const list1 = new LinkedList();
    list1.append(2);
    list1.append(4);

    const list2 = new LinkedList();

    const mergedList = mergeList(list1, list2);
    expect(mergedList.toArray()).toEqual([2, 4]);
  });

  test("Объединение непустого списка с пустым", () => {
    const list1 = new LinkedList(); // Пустой список
    const list2 = new LinkedList();
    list2.append(1);
    list2.append(3);
    list2.append(4);

    const mergedList = mergeList(list1, list2);
    expect(mergedList.toArray()).toEqual([1, 3, 4]);
  });

  test("Объединение двух пустых списков", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const mergedList = mergeList(list1, list2);
    expect(mergedList.toArray()).toEqual([]);
  });

  test("Объединение списков с одинаковыми элементами", () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(1);

    const list2 = new LinkedList();
    list2.append(1);
    list2.append(1);

    const mergedList = mergeList(list1, list2);
    expect(mergedList.toArray()).toEqual([1, 1, 1, 1]);
  });
});
