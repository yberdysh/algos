let array = [3, 5, 9, 10, 12, 20]



function bubbleSort(arr){
  while (!isSorted(arr)){
    let end = arr.length
    for (let i = 1; i < end; i++){
      if (arr[i] < arr[i - 1]){
        swap(arr, i, i - 1)
      }
    }
    end--
  }
  return arr;
}

function bubbleSort(arr){
  while (!isSorted(arr)){
    let end = arr.length - 1
    for (let i = 0; i < end; i++){
      if (arr[i] > arr[i + 1]){
        swap(arr, i, i + 1)
      }
    }
    end--
  }
  return arr;
}

// same:
// function bubbleSort(arr){
//   while (!isSorted(arr)){
//     let end = arr.length
//     for (let i = 1; i < end; i++){
//       if (arr[i] < arr[i - 1]){
//         swap(arr, i, i - 1)
//       }
//     }
//     end--
//   }
//   return arr;
// }


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

function bubbleSortConcise(arr){
  let noSwaps;
  for (let i = arr.length; i > 0; i--){
    noSwaps = true;
    for (let j = 0; j < i - 1; j++){
      if (arr[j] > arr[j + 1]){
        //swap
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break;
    //if no swaps occured, we know aarray is in order and can break out of loop
  }
  return arr
}
