// we will implement minHeap with smaller priority numbers being a higher priority
class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(node) {
        if (!this.values.length) {
            this.values.push(node)
            return this.values
        }
        let childIdx = this.values.length
        this.values.push(node)
        let parentIdx = Math.floor((childIdx - 1) / 2)
        let parent = this.values[parentIdx]
        let child = node
        // if child is smaller than parent, we swap
        while (childIdx > 0 && child.priority < parent.priority) {
            this.values[parentIdx] = child
            this.values[childIdx] = parent
            childIdx = parentIdx
            parentIdx = Math.floor((childIdx - 1) / 2)
            parent = this.values[parentIdx]
        }
        return this.values
    }

    dequeue() {
        let removed = this.values[0]
        this.values[0] = this.values.pop()
        let toBeSunkIdx = 0
        let toBeSunk = this.values[0]
        let leftChildIdx = 2 * toBeSunkIdx + 1
        let rightChildIdx = 2 * toBeSunkIdx + 2
        let leftChild = this.values[leftChildIdx]
        let rightChild = this.values[rightChildIdx]
        // while bigger than left or right child, needs to move
        while (leftChildIdx < this.values.length &&
              rightChildIdx < this.values.length &&
              (toBeSunk.priority > leftChild.priority ||
              toBeSunk.priority > leftChild.priority)) {
            // of bigger than both, swap with larger
            let swapIdx;
            let swap;
            if (toBeSunk.priority > leftChild.priority &&
                toBeSunk.priority > leftChild.priority) {
                swapIdx = leftChild.priority < rightChild.priority ? leftChildIdx : rightChildIdx
                swap = this.values[swapIdx]
            } else {
                swapIdx = toBeSunk.priority < leftChild.priority ? leftChildIdx : rightChildIdx
                swap = this.values[swapIdx]
                // figure out what child it's bigger than
                // switch with that child
            }
            this.values[toBeSunkIdx] = swap
            this.values[swapIdx] = toBeSunk
            toBeSunkIdx = swapIdx
            leftChildIdx = 2 * toBeSunkIdx + 1
            rightChildIdx = 2 * toBeSunkIdx + 2
            leftChild = this.values[leftChildIdx]
            rightChild = this.values[rightChildIdx]
        }
        return removed
    }
}
// test what happens when start from empty queue

// ex:
//         3
//   4           15
// 10 20        30
// [3, 4, 15, 10, 20, 30]

// we are only using priority to compare
// value can be string like "pay bills", number, etc
class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

let queue = new PriorityQueue()
queue.enqueue(new Node("get job", 3))
queue.enqueue(new Node("Atlas food", 4))
queue.enqueue(new Node("Pus food", 15))
queue.enqueue(new Node("new curtains", 10))
queue.enqueue(new Node("get sushi", 20))
queue.enqueue(new Node("get nails done", 30))
queue.dequeue()
console.log(queue.values)
