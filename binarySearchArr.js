// function binarySearch(arr, target) {
//   // Write your code here.
//   // debugger;
//   let midIdx = Math.floor(arr.length/2)
//   while (midIdx >= 0 && midIdx < arr.length){
//     if (arr[midIdx] === target){
//       return midIdx
//     }
//     if (target < arr[midIdx]){
//       midIdx = Math.floor(midIdx/2)
//     } else {
//       midIdx = Math.floor((arr.length - midIdx)/2) + midIdx
//     }
//   }
//   return -1
// }

function binarySearch(arr, target) {
  // Write your code here.
  let left = 0;
  let right = arr.length - 1
  let mid = Math.floor((left + right)/2)
  while (left <= right){
    if (arr[mid] === target) return mid
    if (target < arr[mid]){
      right--
      mid = Math.floor((left + right)/2)
    } else {
      left++
      mid = Math.floor((left + right)/2)
    }

  }
  return -1

}

console.log(binarySearch([1,5,23,111, 115], 5))
