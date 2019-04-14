function threeNumberSum(array, targetSum) {
  // debugger;
  array.sort((a, b) => a - b)
  let finals = []
  for (let i = 0; i < array.length; i++){
    let first = array[i]
    let smallPointer = i + 1
    let largePointer = array.length - 1
    while (smallPointer < largePointer) {
        let sum = first + array[smallPointer] + array[largePointer]
        if (sum === targetSum) {
          finals.push([first, array[smallPointer], array[largePointer]])
          // smallPointer++
          // largePointer--
        }
        if (sum < targetSum){
          smallPointer++
        } else {
          largePointer--
        }
    }
  }
  return finals
  // Write your code here.
}

console.log(threeNumberSum([8, 10, -2, 49, 14], 57))
