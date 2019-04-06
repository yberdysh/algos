  // return true if every value in arr1, has corresponding value squared in arr2
  // [1,2,3], [4,1,9] -> true
  // [1,2,3], [1,9] -> false
  // [1,2,1], [4,4,1] -> false

// naive solution
function same(arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    if (!arr2.includes(arr1[i]**2)){
      return false
    } else {
      let index = arr2.indexOf(arr1[i]**2)
      // arr2 = arr2.slice(0, index).concat(arr2.slice(index + 1))
      arr2.splice(index, 1)
    }
  }
  return true
}

// hash/frequency solution

function same(arr1, arr2){
  let frequency1 = produceFrequencies(arr1)
  let frequency2 = produceFrequencies(arr2)
  for (let key in frequency1){
    if (!frequency2[key**2]){
      return false
    }
    if (frequency1[key] !== frequency2[key**2]){
      return false
    }
  }
  return true
}

function produceFrequencies(arr){
  let frequency = {}
  for (let i = 0; i < arr.length; i++){
    if (!frequency[arr[i]]){
      frequency[arr[i]] = 1
    } else {
      frequency[arr[i]]++
    }
  }
// another way
  // for (let let val of arr){
  //   frequency[val] = (frequency[val] || 0) + 1
  // }
  return frequency
}
