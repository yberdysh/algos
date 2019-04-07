// function countUniqueValues(arr){
//   // accepts a sorted array
//   // counts the unique values in the array
//   // use a set to create unique values and count that?
//   // [1,1,1,1,1,2] -> 2
//   // [1, 2, 3, 4, 4, 7, 7, 12, 12, 13] -> 7
//   // [] -> 0
//   // [-2, -1, -1, 0, 1]

//   let uniques = new Set(arr)
//   return uniques.size


// }

console.log(countUniqueValues([1,1,1,1,1,2]))

// pointer solution
function countUniqueValues(arr){
  if (!arr.length) return 0
  let count = 1
  let pointA = 0
  let pointB = 0
  while (pointB < arr.length){
    if (arr[pointA] !== arr[pointB]){
      count++
      pointA = pointB
    }
    pointB++
  }
  return count
}
