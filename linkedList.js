class ListNode {
  constructor(value){
    this.value = value
  }
}

let list = new ListNode(15)
list.next = new ListNode(25)

function addToList(aList, val){
  let current = aList
  while (current.next){
    current = current.next
  }
  current.next = new ListNode(val)
  return aList
}

function removeFromList(aList, someValue){
  let previous = null
  let current = aList
  let head = aList
  while (current){
    if (current.value === someValue){
      if (previous){
        previous.next = current.next
      } else {
        head = current.next
      }
    } else {
      previous = current
    }
    current = current.next
  }
  return aList
}


// 15, 20, 25, 40, 100
// removing 20


// console.log(list)
// addToList(list, 25)
addToList(list, 25)
addToList(list, 40)
addToList(list, 100)
console.dir(list)
console.log(removeFromList(list, 25))



