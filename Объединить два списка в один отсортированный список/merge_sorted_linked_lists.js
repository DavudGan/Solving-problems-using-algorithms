// Узел
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Добавление нового узла в конец списка
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

function mergeList(list1, list2) {
  let cursorList1 = list1.head;
  let cursorList2 = list2.head;
  const list3 = new LinkedList();

  while (cursorList1 !== null || cursorList2 !== null) {
    const value1 = cursorList1?.value || Infinity;
    const value2 = cursorList2?.value || Infinity;

    if (value1 <= value2) {
      list3.append(value1);
      cursorList1 = cursorList1.next;
    } else {
      list3.append(value2);
      cursorList2 = cursorList2.next;
    }
  }

  return list3;
}

module.exports = { mergeList, LinkedList };
