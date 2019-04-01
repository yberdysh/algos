let array = [5, 4, 6, 1, 3, 8, 7]

function selectionSort(arr){
  let start = 0
  while (start < arr.length){
    let minIndex = findMin(arr.slice(start))
    swap(arr, minIndex, start)
    start++
  }
  return arr
}

function findMin(arr, startAt){
  let min = arr[startAt]
  let ind = startAt
  for (let i = startAt + 1; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i]
      ind = i
    }
  }
  return ind
  // let min = Math.min(...arr)
  // return indexOf(min)
}

function swap(arr, i, j){
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

function isSorted(arr){
  // check if sorted and return true
  for (let i = 1; i < arr.length; i++){
    if (arr[i] < arr[i - 1]){
      return false
    }
  }
  return true;
}

// without helpers:
function selectionSort(arr){
  for (var i = 0; i < arr.length; i++){
    var lowest = i
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[lowest]){
        lowest = j
      }
    }
    var temp = arr[i]
    arr[i] = arr[lowest]
    arr[lowest] = temp
  }
  return arr;
}
