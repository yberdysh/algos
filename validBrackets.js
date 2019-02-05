// var isValid = function(s) {
//     let array = s.split("");
//     let stack = [];
//     if (array.length) stack.push(array.pop())
//     let pairs = {
//       "(": ")",
//       ")": "(",
//       "[": "]",
//       "]": "[",
//       "{": "}",
//       "}": "{"
//     }
//     while (array.length){
//         let item = array.pop()
//         if (pairs[stack[stack.length - 1]] === item){
//             stack.pop()
//         } else {
//             stack.push(item)
//         }
//     }
//     return stack.length === 0
// };

var isValid = function(s) {
    let array = s.split("");
    let stack = [];
    if (array.length) stack.push(array.shift())
    let pairs = {
      ")": "(",
      "]": "[",
      "}": "{"
    }
    while (array.length){
        let item = array.shift()
        if (item === "[" || item === "(" || item === "{"){
          stack.push(item)
        } else if (pairs[item] === stack[stack.length - 1]){
          stack.pop()
        } else {
          return false
        }
    }
    return stack.length === 0
};

isValid("[")

// need pairs
// let pairs = {
//   "(": ")",
//   ")": "(",
//   "[": "]",
//   "]": "[",
//   "{": "}",
//   "}": "{"
// }
