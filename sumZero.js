function sumZero(arr){
  let smallPointer = 0
  let largePointer = arr.length - 1
  while (smallPointer !== largePointer){
    // can also say while left < right
    // will also stop before they equal each other
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
