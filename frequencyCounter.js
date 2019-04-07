function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  let string1 = num1.toString()
  let string2 = num2.toString()
  let frequency1 = produceHash(string1)
  let frequency2 = produceHash(string2)
  for (let key in frequency1){
      if (!frequency2[key]){
          return false
      }
      if (frequency2[key] !== frequency1[key]){
          return false
      }
  }
  return true
}

function produceHash(string){
    let frequency = {}
    for (let i = 0; i < string.length; i++){
      if (!frequency[string[i]]){
          frequency[string[i]] = 1
      } else {
          frequency[string[i]]++
      }
  }
  return frequency
}

console.log(sameFrequency(34, 14))
