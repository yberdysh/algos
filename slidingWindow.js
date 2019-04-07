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


// this doesn't actually work with edge cases
  // function longestSequenceOfUniqueChars(string){
  //   if (string.length < 1) return 0;
  //   let seen = new Set
  //   let count = 1
  //   let max = 0;
  //   seen.add(string[0])
  //   for (let i = 1; i < string.length; i++){
  //     if (!seen.has(string[i])){
  //       seen.add(string[i])
  //       count++
  //     } else {
  //       seen = new Set
  //       seen.add(string[i])
  //       if (count > max){
  //         max = count
  //       }
  //     }
  //   }
  //   return max
  // }




function longestSequenceOfUniqueChars(string){
	let seen = {}
	let max = 0;
	let longestSubstring = ""
	let pointer = 0;
	let substring = ""
	for (let i = 0; i < string.length; i++){
		if (seen[string[i]] === undefined){
			substring += string[i]
			if (substring.length > max){
				max = substring.length
				longestSubstring = substring
			}
		} else {
			pointer = seen[string[i]] + 1
			substring = string.slice(pointer, i + 1)
		    if (substring.length > max){
				max = substring.length
				longestSubstring = substring
			}
		}
		seen[string[i]] = i
	}
	return longestSubstring
}

// still doesn't work for all specs
function longestDustringWithoutDuplication(string){
	let lastSeen = {}
	let longest = [0, 1]
	let startIndex = 0
	for (let i = 0; i < string.length; i++){
		if (lastSeen[i] !== undefined){
			startIndex = Math.max(startIndex, lastSeen[string[i]] + 1)
		}
		if (longest[1] - longest[0] < i + 1 - startIndex){
			longest = [startIndex, i + 1]
		}
		lastSeen[string[i]] = i
	}
	return string.slice(longest[0], longest[1])
}




// console.log(udemyApproach([1, 2, 5, 2, 8, 1, 5], 4))
// console.log(longestSequenceOfUniqueChars("bonjourmonami"))
// console.log(longestSequenceOfUniqueChars("clementisacap"))
console.log(longestSequenceOfUniqueChars("abccdeaabbcddef"))
