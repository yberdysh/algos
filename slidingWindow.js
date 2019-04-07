// for finding a subset of an array or string such as longest sequence of unique characters
// finding a max subArray sum
// get an array and n, calculate the max sum of consecutive n elements in the array

// naive approach
function maxSubarraySum(arr, n){
  if (n > arr.length) return null
  let max = -Infinity;
  for (let i = 0; i <= arr.length - n; i++){
    let sum = arr[i];
    let count = 1
    while (count < n){
      sum += arr[i + count]
      count++
    }
    if (sum > max){
      max = sum
    }
  }
  return max
}

function creativeApproach(arr, n){
  if (n > arr.length) return null
    let leftMost = 0
    let sum = arr.slice(0, n).reduce((a, b) => a + b)
    let max = sum;
    for (let i = n; i < arr.length; i++){
      sum -= arr[leftMost]
      sum += arr[i]
      leftMost++
      if (sum > max){
        max = sum
      }
    }
    return max
  }

console.log(creativeApproach([1, 2, 5, 2, 8, 1, 5], 4))
