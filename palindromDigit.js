// First of all we should take care of some edge cases. All negative numbers are not palindrome, for example: -123 is not a palindrome since the '-' does not equal to '3'. So we can return false for all negative numbers.

// Now let's think about how to revert the last half of the number. For number 1221, if we do 1221 % 10, we get the last digit 1, to get the second to the last digit, we need to remove the last digit from 1221, we could do so by dividing it by 10, 1221 / 10 = 122. Then we can get the last digit again by doing a modulus by 10, 122 % 10 = 2, and if we multiply the last digit by 10 and add the second last digit, 1 * 10 + 2 = 12, it gives us the reverted number we want. Continuing this process would give us the reverted number with more digits.

// Now the question is, how do we know that we've reached the half of the number?

// Since we divided the number by 10, and multiplied the reversed number by 10, when the original number is less than the reversed number, it means we've processed half of the number digits.

const palindromeDigit = function(number){
  let reversed = 0
  if(number < 0 || (number % 10 == 0 && number != 0)) {
      return false;
  }

  while (number > reversed){
    let lastDigit = number % 10
    reversed = reversed * 10 + lastDigit
    if (reversed === number){
      return true
    }
    number = Math.floor(number/10)

  }
  return reversed === number

}


// var isPalindrome = function(x) {
//     x = x.toString()
//     for (let i = 0; i < x.length/2; i++){
//         if (x[i] !== x[x.length - 1 - i]){
//             return false
//         }
//     }
//     return true
// };

palindromeDigit(1221)
