// given two strings, write a function to determine if the second string is an anagram of the first

// set up two objects, each associated with a string
// strore letters as keys and frequencies as values
// iterate over one object comparing to second
// return false if key doesn't exist in second, or if frequency isn't the same

function anagrams(an1, an2){
  let frequencies1 = makeFrequencyHash(an1)
  let frequencies2 = makeFrequencyHash(an2)
  for (let key in frequencies1){
    // if key doesn't exist in frequencies2, return false
    if (!frequencies1[key]){
      return false
    }
    if (frequencies1[key] !== frequencies2[key]){
      return false
    }
  }
  return true;
}

function makeFrequencyHash(string){
  let frequencies = {}
  for (let char of string){
    frequencies[char] = (frequencies[char] + 1) || 1
  }
  return frequencies
}
