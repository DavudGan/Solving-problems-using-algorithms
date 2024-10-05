// Условия
// Даны начала двух отсортированных связных списков list1 и list2.
// Необходимо объединить эти два списка в один отсортированный список, соединив узлы первых двух списков.
// Вернуть начало объединенного связного списка.
//  • Начала двух связных списков list1 и list2 не пустые.
// Примеры
// Пример 1
// Ввод:
// list1 = 1 -> 2 -> 4, list2 = 1 -> 3 -> 4
// Вывод:
// 1 -> 1 -> 2 -> 3 -> 4 -> 4
// Пример 2
// Ввод:
// list1 = 1 -> 5 -> 6, list2 = 2 -> 3 -> 4
// Вывод:
// 1 -> 2 -> 3 -> 4 -> 5 -> 6

// Узел
class Node {
    constructor(value) {
        this.value = value // Значение узла
        this.next = null // Ссылка на следующий узел
    }
}

class LinkedList {
    constructor() {
        this.head = null // Начало списка 
        this.size = 0 // Размер списка
    }

    // Добавление нового узла в конец списка
    append(value) {
        const newNode = new Node(value)

        if(!this.head) {
            this.head = newNode
        } else {
            let current = this.head

            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    printList() {
        let current = this.head
        while (current) {
            console.log(current.value)
            current = current.next
            
        }
    }
}

const list1 = new LinkedList()
const list2 = new LinkedList()

list1.append(1)
list1.append(2)
list1.append(4)


list2.append(1)
list2.append(3)
list2.append(4)
list2.append(5)
list2.append(6)


function mergeList(list1,list2) {
    let cursorList1 = list1.head
    let cursorList2 = list2.head
    const list3 = new LinkedList()

    while (cursorList1 !== null || cursorList2 !== null) {
        const value1 = cursorList1?.value || Infinity
        const value2 = cursorList2.value || Infinity

        if(value1 <= value2) {
            list3.append(cursorList1.value)
            cursorList1 = cursorList1.next
        } else {
            list3.append(cursorList2.value)
            cursorList2 = cursorList2.next
        }

    }
    
    list3.printList()
}

splitList(list1,list2)