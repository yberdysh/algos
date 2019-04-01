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

function swap(arr, i, j){
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr;
}
