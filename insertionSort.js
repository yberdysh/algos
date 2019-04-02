let array = [7,3,5,9,1,3,7,4,8,3,10,2]
// i = 1
// j = 0
// 3 < 7, swap
// [3, 7, 5]
// i = 2
// j = 0
// 5 < 3 ? no
// 5 < 7? yes, swap
// [3,5,7,]
function insertionSort(arr){
  //start at second element
  //compare to one before it and swap if needed
  for (let i = 1; i < arr.length; i++){
    for (let j = 0; j < i; j++){
      if (arr[i] < arr[j]){
        //if 3 < 7, swap
        swap(arr, i, j)
      }
    }
  }
  return arr;
}
// this isn't as optimized because the first numbers are already sorted. Need to work backwards to optimize

function insertionSortOptimized(arr){
  for (let i = 1; i < arr.length; i++){
    let currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      //if j > current, need to sort
      arr[j+1] = arr[j]
      }
      arr[j+1] = currentVal
    }
  return arr;
  }

  // es6 implementation
  insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
      let current = arr[i];
      let j = i - 1;
      while(j >= 0 && arr[j] > current){
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }

  // works well for nearly sorted arrays
  // works very well when live data is being streamed and coming in

function swap(arr, i, j){
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr;
}
