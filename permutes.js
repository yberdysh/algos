// function permutes(arr){
//   if (!arr.length) return [[]]
// } else {
//   let permutations = []
//   for (let i = 0; i < arr.length; i++){
//     let other_permutations = permute(nums[i].concat(nums[i + 1]))
//     permutations.push(...)
//   }
// }

// function helper(prefix, suffix, results){
//   // prefix = permutation we are building
//   // suffix is the leftover tail we are taking apart
//   // results stores all permutations
//   if (suffix.length === 0){
//     results.push(prefix)
//     // this means permutation is ready
//   } else {
//     for (let i = 0; i < suffix.length; i++){
//       helper(prefix.concat(suffix[i]).concat(suffix.slice(0, i)).concat(suffix.slic(i)))
//     }


//   }
// }

function getPermutations(arr){
  let permutations = []
  permutesHelper(arr, [], permutations);
  return permutations
}

function permutesHelper(arr, currentPerm, allPermutations){
  if (!arr.length && currentPerm.length){
    allPermutations.push(currentPerm)
  } else {
    for (let i = 0; i < arr.length; i++){
      let newArr = arr.slice(0, i).concat(arr.slice(i + 1))
      let newPermutation = currentPerm.concat(arr[i])
      permutesHelper(newArr, newPermutation, allPermutations)
    }
  }
}

console.log(getPermutations([1,2,3]))
