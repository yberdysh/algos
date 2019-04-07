class Tree {
  constructor(value){
    this.value = value
    this.right = null
    this.left = null
  }

// iterative approach
  // insert(num){
  //   let current = this
  //   let direction = current.value < num ? "right" : "left"
  //   while (current[direction]){
  //     current = current[direction]
  //     direction = current.value < num ? "right" : "left"
  //   }
  //   current[direction] = new Tree(num)
  // }

// recursive approach
  insert(num){
    let direction = num < this.value ? "left" : "right"
    if (!this[direction]){
      this[direction] = new Tree(num)
    } else {
      this[direction].insert(num)
    }
  }
// recursive
  // find(num){
  //   let direction = num < this.value ? "left" : "right"
  //   if (this.value === num){
  //     return true
  //   } else if (!this[direction]){
  //     return false
  //   } else {
  //     return this[direction].find(num)
  //   }
  // }

// iterative
  find(num){
    let direction = num < this.value ? "left" : "right"
    let current = this
    // if current.value === num return true
    while (current){
      if (current.value === num){
        return true
      } else {
        current = current[direction]
      }
    }
    return false
  }

}


let newTree = new Tree(10)
newTree.right = new Tree(15)
newTree.right.right = new Tree(17)
newTree.right.left = new Tree(13)

newTree.left = new Tree(5)
newTree.left.left = new Tree(1)
newTree.left.right = new Tree(7)

newTree.insert(131)

console.log(newTree.find(131))

