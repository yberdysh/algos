function permutations_helper(string, char){
  let permutes = []
  for (let i = 0; i <= string.length; i++){
    permutes.push(string.slice(0, i) + char + (string.slice(i)))
  }
  return permutes
}

function permutations(string){
  if (string.length < 2){
    return string;
  }
  let permutes = [];
  let head = string[0]
  let tail = string.slice(1)
  let smaller_permutations = permutations(tail);
  for (let i = 0; i < smaller_permutations.length; i++){
    permutes.push(...permutations_helper(smaller_permutations[i], head));
  }
  return permutes;
}

console.log(permutations("abcd"))
