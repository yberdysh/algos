
// no caps
// function fuzzyMatch(word, input){
//   for (let i = 0; i < input.length; i++){
//     const index = word.indexOf(input[i])
//     if (index > -1){
//       word = word.slice(index + 1)
//     } else {
//       return false
//     }
//   }
//   return true
// }

// function filteringWords(words, input){
//   return words.filter((word) => fuzzyMatch(word, input))
// }

// // console.log(fuzzyMatch("muscle", "mx"))
// console.log(filteringWords(["DogCat", "OwlCat", "DogCatOwl"], "DogC"))


let words = ["MouseClick", "MouseClickHandle", "MooClass"]
let sub = "MooC"

function fuzzyMatcher(word, input){
  // loop through input
  // each letter of input
  const caps = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
  for (let i = 0; i < input.length; i++){
    // if on capital letter of input, can check if word includes that letter and slice it
    let index = word.indexOf(input[i])
    if (caps.includes(input[i])){
      if (index > -1){
        word = word.slice(index + 1)
        // MouseHandle -> ouseHandle
        // MouseHandle -> andle
      }
    } else {
      // if not on capital letter of input, need to go in same order (index needs to match )
      if (word[0] === input[i]){
        word = word.slice(1)
      } else {
        return false
      }
    }
  }
  return true;
}

function overallFunc(array, input){
  return array.filter(word => fuzzyMatcher(word, input))
}

console.log(overallFunc(words, sub))






