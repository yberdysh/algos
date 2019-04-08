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

  breadthFirstSearch(){
    let final = []
    let queue = []
    queue.push(this)
    // add root to queue
    // loop for as long as anything in queue
    // dequeue and store in final
    // if there's a left property on value dequeued, add to queue
    // same with right
    while (queue.length){
      let dequeuedNode = queue.shift()
      final.push(dequeuedNode.value)
      if (dequeuedNode.left){
        queue.push(dequeuedNode.left)
      }
      if (dequeuedNode.right){
        queue.push(dequeuedNode.right)
      }
    }
    return final
  }

// with helper function recursion:
  // preOrderTraversal(){
  //   let nodes = []
  //   function traverse(node){
  //     nodes.push(node.value)
  //     if (node.left) traverse(node.left)
  //     if (node.right) traverse(node.right)
  //   }
  //   traverse(this)
  //   return nodes
  // }

preOrderTraversal(){
    let nodes = []
    nodes.push(this.value)
    if (this.left) {
      // same as nodes.push(...this.left.preOrderTraversal())
      nodes = nodes.concat(this.left.preOrderTraversal())
    }
    if (this.right) {
      nodes = nodes.concat(this.right.preOrderTraversal())
    }
    return nodes
  }

}


let newTree = new Tree(10)
newTree.insert(15)
newTree.insert(20)
newTree.insert(6)
newTree.insert(8)
newTree.insert(3)

// console.log(newTree)
console.log(newTree.preOrderTraversal())

