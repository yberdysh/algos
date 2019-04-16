let key = {
  "{": "}",
  "[": "]",
  "(": ")",
  "}": "{",
  "]": "[",
  ")": "("
}

function balancedBrackets(string) {
  debugger;
  let stack = []
  for (let i = 0; i < string.length; i++){
    if (!stack.length){
      stack.push(string[i])
    } else {
      if (stack[stack.length - 1] === key[string[i]]){
        stack.pop()
      } else {
        stack.push(string[i])
      }
    }
  }
  return stack.length === 0
}

let brackets = "(()())((()()()))"
console.log(balancedBrackets(brackets))
