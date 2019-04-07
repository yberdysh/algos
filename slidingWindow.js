// for finding a subset of an array or string such as longest sequence of unique characters
// finding a max subArray sum
// get an array and n, calculate the max sum of consecutive n elements in the array

// naive approach, O(n)^2
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

// O(n) - sliding window!
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

// about same as mine
  function udemyApproach(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null
      // loop from 0 to n to get initial sum
    for (let i = 0; i < num; i++){
      maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++){
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
  }

console.log(udemyApproach([1, 2, 5, 2, 8, 1, 5], 4))
