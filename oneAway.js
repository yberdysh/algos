function oneAway(str1, str2){
  // debugger;
  let str1Hash = createHash(str1)
  let str2Hash = createHash(str2)
  let numDiffs = 0
  for (let key in str1Hash){
    if (str1Hash[key] === str2Hash[key]){
      delete str1Hash[key]
      delete str2Hash[key]
    } else if (str1Hash[key] && str2Hash[key]){
      if (str1Hash[key] !== str2Hash[key]) {
        numDiffs = Math.abs(str1Hash[key] - str2Hash[key])
        delete str1Hash[key]
        delete str2Hash[key]
      }
    }
  }

  let arr1 = Object.values(str1Hash)
  let arr2 = Object.values(str2Hash)
  if (arr1.length === 1 && arr2.length === 1){
    if (arr1[0] === 1 && arr2[0] === 1 && numDiffs === 0){
      return true
    }
  } else if (!arr1.length && arr2.length === 1){
    if (arr2[0] === 1 && numDiffs === 0){
      return true
    }
  } else if (arr1.length === 1 && !arr2.length){
    if (arr1[0] === 1 && numDiffs === 0) {
      return true
    }
  } else if (!arr1.length && !arr2.length && numDiffs === 1){
    return true
  }
  return false
}

function createHash(str){
  let frequencies = {}
  for (let i = 0; i < str.length; i++){
    if (frequencies[str[i]]) {
      frequencies[str[i]]++
    } else {
      frequencies[str[i]] = 1
    }
  }
  return frequencies
}


function oneAwayBFS(str1, str2){
  // debugger;
  // deletion of 1 character
  for (let i = 0; i < str1.length; i++){
    let sliceAfterDelete = str1.slice(0, i) + str1.slice(i+1)
    if (sliceAfterDelete === str2) return true
  }
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
// replacement of 1 character
  for (let i = 0; i < str1.length; i++){
    let strArr = str1.split('')
    for (let char = 0; char < alphabet.length; char++){
      strArr[i] = alphabet[char]
      if (strArr.join('') === str2) return true
    }
  }
  // insertion of a character
  for (let i = 0; i < str1.length; i++){
  let strArr = str1.split('')
  for (let char = 0; char < alphabet.length; char++){
    let newWord = strArr.slice(0, i).concat(alphabet[char]).concat(strArr.slice(i))
    if (newWord.join('') === str2) return true
    }
  }
  return false
}


console.log(oneAwayBFS("hello", "heello"));
