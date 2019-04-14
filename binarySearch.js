class BinarySearchTree {
  constructor(value){
    this.value = value
  }

  insert(val){
    // every node is a BST
    // if value is smaller than current Val, go left
    // if value is larger than current val, go right
    const newTree = new BinarySearchTree(val)
    if (val < this.value){
      if (!this.left){
        this.left = newTree
      } else {
        this.left.insert(val)
      }
    }

    if (val > this.value){
      if (!this.right){
        this.right = newTree
      } else {
        this.right.insert(val)
      }
    }
  }

  returnRight(){
    return this.right
  }

  returnLeft(){
    return this.left
  }

  search(val){
    if (val > this.value){
      if (!this.right){
        return false
      } else {
        return this.right.search(val)
      }
    }
    if (val < this.value){
      if (!this.left){
        return false
      } else {
        return this.left.search(val)
      }
    }
    if (val === this.value){
      return true;
    }
  }

  inOrderTraverse(){
    let arr = [];
    if (this.left){
      arr.push(...this.left.inOrderTraverse())
    }
    arr.push(this.value)
    if (this.right){
      arr.push(...this.right.inOrderTraverse())
    }
    return arr
  }

  preOrderTraversal(){
    // root, left, right
    let arr = []
    arr.push(this.value)
    if (this.left){
      arr.push(...this.left.preOrderTraversal())
    }
    if (this.right){
      arr.push(...this.right.preOrderTraversal())
    }
    return arr
  }

  postOrderTraversal(){
    // left, right, root
    let arr = []
    if (this.left){
      arr.push(...this.left.postOrderTraversal())
    }
    if (this.right){
      arr.push(...this.right.postOrderTraversal())
    }
    arr.push(this.value)
    return arr;
  }

  breadthFirst(){
    let arr = [];
    arr.push(this.value)
    if (this.left){

    }
  }



}


function findClosestValueInBst(tree, target) {
  let current = tree
  let lowestDiff = Infinity;
  let lowestDiffNode;
  let direction;

  while (current){
    let diff = Math.abs(target - current.value)
    if (diff < lowestDiff){
      lowestDiff = diff
      lowestDiffNode = current
    }
    direction = target > current.value ? "right" : "left"
    current = current[direction]
  }
  console.log(lowestDiffNode)
  return lowestDiffNode.value
    // Write your code here.
}

const tree = new BinarySearchTree(10)
tree.insert(5)
tree.insert(15)
tree.insert(2)
tree.insert(6)
tree.insert(1)
tree.insert(15)
tree.insert(13)
tree.insert(22)
tree.insert(14)

console.log(findClosestValueInBst(tree, 12))
// tree.insert(15)
// tree.insert(30)
// tree.insert(9)
// tree.insert(17)
// tree.insert(25)
// tree.insert(35)
// tree.insert(7)
// tree.insert(11)
// tree.insert(16)
// tree.insert(18)
// tree.insert(22)
// tree.insert(26)
// tree.insert(34)
// tree.insert(36)
// tree.search(22)
console.log(tree)
// console.log("RIGHT TREE", tree.returnRight())
// console.log("LEFT TREE", tree.returnLeft())
console.log(tree.inOrderTraverse())

//                   20
//        15                   30
//    9       17             25   35
 // 7  11   16  18         22 26 34 36
