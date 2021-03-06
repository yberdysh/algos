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
  find(num){
    let direction = num < this.value ? "left" : "right"
    if (this.value === num){
      return true
    } else if (!this[direction]){
      return false
    } else {
      return this[direction].find(num)
    }
  }

// iterative
  // find(num){
  //   debugger;
  //   let current = this
  //   // if current.value === num return true
  //   while (current){
  //   let direction = num < this.value ? "left" : "right"
  //     if (current.value === num){
  //       return true
  //     } else {
  //       current = current[direction]
  //     }
  //   }
  //   return false
  // }

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

  // postOrderTraversal(){
  //   let arr = []
  //   if (this.left){
  //     // arr = arr.concat(this.left.postOrderTraversal())
  //     arr.push(...this.left.postOrderTraversal())
  //   }
  //   if (this.right){
  //     // arr = arr.concat(this.right.postOrderTraversal())
  //     arr.push(...this.right.postOrderTraversal())
  //   }
  //   arr.push(this.value)
  //   return arr;
  // }

  postOrderTraversal(array){
    // console.log(array)
    if (this.left){
      // arr = arr.concat(this.left.postOrderTraversal())
      this.left.postOrderTraversal(array)
    }
    if (this.right){
      // arr = arr.concat(this.right.postOrderTraversal())
      this.right.postOrderTraversal(array)
    }
    array.push(this.value)
    return array;
  }

  // inOrderTraverse(){
  //   // push left, push root, push right
  //   let nodes = []
  //   function traverse(node){
  //     if (node.left) traverse(node.left)
  // or node.left && traverse(node.left)
  //     nodes.push(node.value)
  //     if (node.right) traverse(node.right)
  //   }
  // traverse(this)
  // return nodes
  // }

  // inOrderTraverse(){
  //   // push left, push root, push right
  //   let nodes = []
  //   if (this.left) {
  //     // nodes.push(...this.left.inOrderTraverse())
  //     nodes = nodes.concat(this.left.inOrderTraverse())
  //   }
  //     nodes.push(this.value)
  //     if (this.right) {
  //      nodes = nodes.concat(this.right.inOrderTraverse())
  //     }
  // return nodes
  // }

  inOrderTraverse(arr){
    // push left, push root, push right
    // let nodes = []
    if (this.left) {
      // nodes.push(...this.left.inOrderTraverse())
      this.left.inOrderTraverse(arr)
    }
      arr.push(this.value)
      if (this.right) {
       this.right.inOrderTraverse(arr)
      }
  return arr
  }

  findSmallestNode(){
    if (!this.left) return this
      return this.left.findSmallestNode()
  }

  delete(){
    if (!this.right){
      let smallestNode = this.right.findSmallestNode();
      smallest.right = this.right
      smallest.left = this.left
    }
  }

  remove(value, parent = null){
    if (value < this.value){
      if
    }
  }

}

// for deletion- we act on the node we want to delete, we find the smallest value in it's right subtree (the smallest value of everything bigger than it), and we replace it with that node. Then we delete that node later down

let newTree = new Tree(10)
newTree.insert(15)
newTree.insert(20)
newTree.insert(6)
newTree.insert(8)
newTree.insert(3)
console.log(newTree.right.findSmallestNode())

console.log(newTree)
// console.log(newTree.inOrderTraverse([]))

