function sumZero(arr){
  let smallPointer = 0
  let largePointer = arr.length - 1
  while (smallPointer !== largePointer){
    // can also say while left < right
    let sum = arr[smallPointer] + arr[largePointer]
    if (sum === 0){
      return [arr[smallPointer], arr[largePointer]]
    } else if (sum > 0){
      largePointer--
    } else {
      smallPointer++
    }
  }
}
