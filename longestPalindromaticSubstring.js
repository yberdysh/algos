function longestPalindromaticSubstring(str){
  // debugger
  let left = 0
  let right = str.length - 1
  let longest = 0;
  let palindrome = ""
  while (left < str.length){
    while (left <= right){
      let potentialPalindrome = str.slice(left, right + 1)
      if (isPalindrome(potentialPalindrome)){
        if (potentialPalindrome.length > longest){
          longest = potentialPalindrome.length
          palindrome = potentialPalindrome
        }
      // left++
      }
      right--
    }
    left++
    right = str.length - 1
  }
  return palindrome

}

function isPalindrome(str){
  for (let i = 0; i < str.length; i++){
    if (str[i] !== str[str.length - 1- i]) return false
  }
return true
}

console.log(longestPalindromaticSubstring("zzzzzzz2345abbbba5432zzbbababa"))
