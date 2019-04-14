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
    let prev = node.previous
    if (prev) prev.next = insertNode
    insertNode.next = node
    node.previous = insertNode
    insertNode.previous = prev
    return insertNode

    // Write your code here.
  }

  insertAfter(node, insertNode) {
    // Write your code here.
    let afterNode = node.next
    node.next = insertNode
    insertNode.previous = node
    if (afterNode) afterNode.previous = insertNode
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
  }

  remove(node) {
    // Write your code here.
  }

  containsNodeWithValue(value) {
    if (this.traverseForwards(null, value) === true) return true
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
    this.previous = null
    this.next = null
  }
}

// 5 -> <- 10     15 -><-  20

// head: 5
// tail: 10

// 5, 10
let list = new DoublyLinkedList()
list.setHead(new Node(10))
list.setHead(new Node(5))
list.setTail(new Node(15))
list.setTail(new Node(20))
list.insertAtPosition(1, new Node(2))
list.insertAtPosition(5, new Node(25))
list.insertAtPosition(4, new Node(12))
console.log(list.traverseForwards())
// console.log(list.tail)
