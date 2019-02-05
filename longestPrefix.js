var longestCommonPrefix = function(strs) {
  debugger;
    let test = strs[0] ? strs[0] : ''
    const testLen = test.length
    for (let i = 0; i < strs.length; i++){
      for (let j = 0; j < testLen; j++){
        if (!strs[i].startsWith(test)){
          test = test.slice(0, -1)
        }
      }
    }
    return test
};
// Input: ["flower","flow","flight"]
// Output: "fl"
// empty string if none
longestCommonPrefix(["cba", ""])

function longestCommon(str1, str2){
  let prefix = ''
    while (str2.length){
      if (str1.startsWith(str2)){
        return str2
      } else {
        str2 = str2.slice(0, -1)
      }
    }
    return prefix;
}

// i=0
// Prefix=""
// While i<min(len(s1), len(s2)):
// If s1[i] ==s2[i] then:
// prefix+=s1[i]
// i++
// Else:
// Return prefix

longestCommon("cba", "")

let number = 0;
let string = "hello"
!!number
//-> false
if (!number) console.log(`The number ${number} is falsy.`)
if (string) console.log(`The string ${string} is truthy.`)
console.log(typeof longestCommon)
