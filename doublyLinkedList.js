class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
    if (!this.head){
      this.head = node
      if (!this.tail){
        this.tail = node
      }
    } else {
      this.head = this.insertBefore(this.head, node)
    }

  }

  setTail(node) {
    if (this.tail){
      this.tail = this.insertAfter(this.tail, node)
    } else {
      this.tail = node
      if (!this.head) this.head = node
    }
    // Write your code here.
  }

  insertBefore(node, insertNode) {
    let prev = node.prev
    if (prev) prev.next = insertNode
    insertNode.next = node
    node.prev = insertNode
    insertNode.prev = prev
    return insertNode

    // Write your code here.
  }

  insertAfter(node, insertNode) {
    // Write your code here.
    let afterNode = node.next
    node.next = insertNode
    insertNode.prev = node
    if (afterNode) afterNode.prev = insertNode
    insertNode.next = afterNode
    return insertNode

  }

  insertAtPosition(position, insertNode) {
    let node = this.traverseForwards(position)
    if (position === 1) {
      this.setHead(insertNode)
    } else if (position === this.traverseForwards().length){
      this.setTail(insertNode)
    } else {
      this.insertBefore(node, insertNode)
    }
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
    if (this.traverseForwards().length === 1) {
      this.head = null
      this.tail = null
      return;
    }
    let current = this.head
    while (current){
      if (current.val === value){
        this.remove(current)
      }
      current = current.next
    }
  }

  remove(node) {
    if (this.traverseForwards().length === 1) {
      this.head = null
      this.tail = null
      return;
    }
    let prevNode = node.prev
    let nextNode = node.next
    if (prevNode){
      prevNode.next = nextNode
    } else {
      this.head = nextNode
    }
    if (nextNode){
      nextNode.prev = prevNode
    } else {
      this.tail = prevNode
    }
    // Write your code here.
  }

  containsNodeWithValue(value) {
    if (this.traverseForwards(null, value) === true){
      return true
    } else {
      return false
    }

    // Write your code here.
  }

  traverseForwards(howFar = null, searchVal){
    // debugger;
    let current = this.head
    let arr = []
    while (current){
      arr.push(current)
      if (searchVal && current.val === searchVal){
        return true
      }
      current = current.next
    }
    if (howFar) return arr[howFar - 1]
    return arr
  }


}

class Node{
  constructor(val){
    this.val = val
    this.prev = null
    this.next = null
  }
}

// 5 -> <- 10     15 -><-  20

// head: 5
// tail: 10

// 5, 10
const linkedList = new DoublyLinkedList();
const first = new Node(1);
const second = new Node(2);
const nodes = [first, second];

linkedList.setHead(first);
linkedList.setTail(second);
  // expectHeadTail(linkedList, first, second);
nodes.forEach(node => linkedList.remove(node))
console.log(linkedList.traverseForwards())
linkedList.setHead(first);
// linkedList.insertAfter(first, second);
  // expectEmpty(linkedList);

// let linkedList = new DoublyLinkedList()
// let node = new Node(1)
// linkedList.setHead(node)
// linkedList.remove(node)
// linkedList.setTail(node)
// linkedList.removeNodesWithValue(1)
// linkedList.insertAtPosition(1, node)
// console.log(linkedList.tail)

// let list = new DoublyLinkedList()
// list.setHead(new Node(10))
// list.setHead(new Node(10))
// // list.setHead(new Node(5))
// list.setTail(new Node(15))
// list.setTail(new Node(20))
// // list.insertAtPosition(1, new Node(2))
// // list.insertAtPosition(5, new Node(20))
// list.setTail(new Node(25))
// list.setTail(new Node(25))
// // list.insertAtPosition(4, new Node(12))
// // console.log(list.containsNodeWithValue(11))
// // list.remove(list.head)
// list.removeNodesWithValue(10)
console.log(linkedList.traverseForwards())
// // console.log(list.tail)
