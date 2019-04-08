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

  // udemy Solution:
      insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
console.log(heap.insert(55))


