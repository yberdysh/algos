// function shortestWordEditPath(source, target, words) {
//   let queue = [source]
//   let processed = []
//   while (queue.length){
//     let word = queue.shift()
//     processed.push(word)
//     let candidates = findCandidates(word)
//     candidates.forEach(candidate => {
//       console.log(queue)
//       if (!queue.includes(candidate) && target !== candidate && words.includes(candidate)){
//         queue.push(candidate)
//         count++
//       }
//     })
//   }
//   return count

//   //queue = [but, put, pot, pog, lot, dog]

//   *
//   @param source: string
//   @param target: string
//   @param words: string[]
//   @return: integer


//   // your code goes here
// }

// function findCandidates(word){
//   let candidates = []
//   let letters = 'abcdefghijklmnopqrstuvwxyz'
//   for (let i = 0; i < word.length; i++){
//     for (let letter = 0; letter < letters.length; letter++){
//       let splitWord = word.split("")
//       splitWord[i] = letters[letter]
//       let candidate = splitWord.join("")
//       // console.log(candidate)
//       candidates.push(candidate)
//     }
//   }
//   return candidates
// }
// queue = [bit 0, but 1, I]
function shortestWordEditPath(source, target, words){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let wordSet = new Set(words)
  let queue = []
  queue.push([source, 0])
  let seen = new Set([source])
  while (queue.length){
    let [word, depth] = queue.shift()
    if (word === target){
      return depth
    }
    for (let i = 0; i < word.length; i++){
      for (let letter of alphabet){
        let newWord = word.split("")
        newWord[i] = letter
        newWord = newWord.join('')
        if (wordSet.has(newWord) && !seen.has(newWord)){
            queue.push([newWord, depth+1])
            seen.add(newWord)
        }
      }
    }
  }
  return -1
}

console.log(shortestWordEditPath("bit", "dog", ["but", "put", "big", "pot", "pog", "dog", "lot"]))
