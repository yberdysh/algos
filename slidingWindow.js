// for finding a subset of an array or string such as longest sequence of unique characters
// finding a max subArray sum
// get an array and n, calculate the max sum of consecutive n elements in the array

// naive approach
function maxSubarraySum(arr, n){
  let max = 0;
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

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
