function bracketMatch(text) {
  /*moves = 2

  balance = 1
  ( -> balance++
   balance below zero-> invalid brackets
  // your code goes here
  [(] -> 1 move
  "(()"

  balance = -2
  if balance goes negative or going further negative, add to moves
  otherwise add to balance

  moves = 2
  badParens = [), )]
  stack = [(, (]

 if backwards, stack is empty, moves++
  “()))((”
  [)]
  */
  // let stack = []
  // let badParens = []
  // for (let i = 0; i < text.length; i++){
  //   if (text[i] === "("){
  //     //add to stack
  //     stack.push("(")
  //   } else {
  //     //encounter ")"
  //     if (!stack.length){
  //       badParens.push(text[i])
  //     } else if (stack[stack.length - 1] === "("){
  //       stack.pop()
  //     }
  //   }
  // }
  // return stack.length + badParens.length

//   input:  text = “(()”
// output: 1

// input:  text = “(())”
// output: 0

// input:  text = “())(”
// output: 2
  let moves = 0;
  let balance = 0;
  for (let i = 0; i < text.length; i++){
    let forwards = "("
    let backwards = ")"
    if (text[i] === forwards){
      if (moves > 0){
        // here it's
        balance++
        moves++
      } else {
        // what happens if it's forwards but balance is 0?
        // "))("
        balance++
        moves++
        // balance is -1
      }
    } else {
      // it's backwards
      if (balance === 0){
        // if backwards and it's 0
        moves++
        // ")"
      } else {
        // here it's a closing bracket closing an opening
        balance--
        moves--
      }
    }
  }
  return moves

}

console.log(bracketMatch("())("))
