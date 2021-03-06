// in a maxBinaryHeap, parents are larger than both children
// in a minBinaryHeap, parents are smaller than both children
//         41
//     39      33
//   18  27  12
// every left and right has to be filled before we move down
// left children are filled out first

//             100
//      19            36
//   17   3         25   1
// 2   7
// the only real rule is that child must be smaller than parent
// no implied ordering between children
// ***Heaps are useful for priority queues
// an importance to each item and moves to the right spot in queue based on priority
// used commonly with graph traversal
// can use an array or list to represent a heap
// root at index 0
// next two values are children (index 1 and 2)
// index 3 and 4 are children from index 1
// if you have an index of a parent, where are it's 2 children located?
// for any index n, the left child is stored at 2n + 1
// right child at 2n + 2
// to get where parent is of a child:
// (n-1)/2 floored

class MaxBinaryHeap{
  constructor(){
    this.values = []
  }
  // inserting: add to the end, bubble up
  // push onto our array
  // swap until it finds fonal correct resting place

 //        41
//     39      33
//   18  27  12  add 55 here
// [41, 39, 33, 18, 27, 12, 55]
// compare node to its parent- 55 to 33, and swap if in wrong order
// compare to parent again- 41, and swap if needed
// results in: [55, 39, 41, 18, 27, 12, 33]
  insert(val){
    if (val === 55){
      debugger;
    }
    if (!this.values.length) {
      this.values.push(val)
      return this.values
    }
    var index = this.values.length
    this.values.push(val)
    let parent = Math.floor((index - 1)/2)
    while (val > this.values[parent]){
      let temp = this.values[index]
      // console.log("index", index)
      this.values[index] = this.values[parent]
      this.values[parent] = temp
      index = parent
      parent = Math.floor((index - 1)/2)
    }
    return this.values
  }

// didn't check that children are in bounds
  extractMax(){
    // also need to account for only 1 value in this.values- in that case, just remove it and return it
    // debugger;
    let root = this.values[0]
    let parent = this.values.pop()
    this.values[0] = parent
    let parentSpot = 0
    let leftChild = 2*parentSpot + 1
    let rightChild = 2*parentSpot + 2
    let temp = parent
    while (this.values[leftChild] > parent || this.values[rightChild] > parent){
      if (this.values[leftChild] > parent && this.values[rightChild] > parent){
        let greatestChild = this.values[leftChild] > this.values[rightChild] ? leftChild : rightChild
        // swap with that one
        // console.log(this.values)
        this.values[parentSpot] = this.values[greatestChild]
        this.values[greatestChild] = parent
        parentSpot = greatestChild
        leftChild = parentSpot*2 + 1
        rightChild = parentSpot*2 + 2
      } else {
        let greatOne = this.values[leftChild] > parent ? leftChild : rightChild
        // swap with great one
        this.values[parentSpot] = this.values[greatOne]
        this.values[greatOne] = parent
        parentSpot = greatOne
        leftChild = parentSpot*2 + 1
        rightChild = parentSpot*2 + 2
      }

    }
    return root

    // removes root
    // swaps first element (largest) with last
    // then call sinkDown, compare 12 to children
    // swap with one of the children
    // swap with larger one
    // return what we removed
  }

  // udemy Solution:
    //   insert(element){
    //     this.values.push(element);
    //     this.bubbleUp();
    // }
    // bubbleUp(){
    //     let idx = this.values.length - 1;
    //     const element = this.values[idx];
    //     while(idx > 0){
    //         let parentIdx = Math.floor((idx - 1)/2);
    //         let parent = this.values[parentIdx];
    //         if(element <= parent) break;
    //         this.values[parentIdx] = element;
    //         this.values[idx] = parent;
    //         idx = parentIdx;
    //     }
    // }

    // udemySolution to extractMax
    extractMax(){
      // edge case
      const max = this.values[0]
      const end = this.values.pop()
      this.values[0] = end;
      this.sinkDown();

      return max
    }

    sinkDown(){
      let idx = 0;
      const length = this.values.length
      const element = this.values[0]
      while (true){
        let leftChildIdx = 2*idx + 1
        let rightChildIdx = 2*idx + 2
        // check children in bounds //
        let leftChild, rightChild;
        let swap = null

        if (leftChildIdx < length){
          leftChild = this.values[leftChildIdx]
          if (leftChild > element){
            swap = leftChildIdx
          }
        }
        if (rightChildIdx < length){
          righChild = this.values[rightChildIdx]
          if (swap === null && rightChild > element || (swap !== null && rightChild > leftChild)){
            swap = rightChildIdx
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap]
        this.values[swap] = element
        idx = swap

      }
    }
}

let heap = new MaxBinaryHeap
heap.insert(41)
heap.insert(33)
heap.insert(39)
heap.insert(27)
heap.insert(18)
heap.insert(20)
// [41, 39, 33, 18, 27, 12]
//         41
//     33      39
//   27  18   20
// [41, 33, 39, 27, 18, 20]
//         39
//     33      20
//   27  18
// [39, 33, 20, 27, 18]
// console.log(heap.insert(55))
//         39
//     27      33
//   18  20
// [39, 27, 33, 18, 20]

heap.extractMax()
console.log(heap.values)


