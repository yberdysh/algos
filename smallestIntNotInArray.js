function smallestIntNotInArr(arr){
  let mySet = new Set(arr)
  console.log(arr.find(num => num >= 0))
  let smallestNonNeg = arr.find(num => num >= 0)
  while (mySet.has(smallestNonNeg)){
    smallestNonNeg++
  }
  return smallestNonNeg
}

smallestIntNotInArr([-1, 0,1,2,3,4])
