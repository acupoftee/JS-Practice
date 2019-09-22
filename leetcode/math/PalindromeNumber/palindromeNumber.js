/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  // if it's a negative number
  // it's not a palindrome
  if (x < 0) return false
  
  // well create a variable for our reversed number
  // and another variable which is 
  // a copy of x
  let reversed = 0, y = x

  while (y > 0) {
      // 1. isolate the last digit
      // 2. append the last digit to reverse
      // 3. remove the last digit from the number
      reversed = (reversed * 10) + (y % 10)
      y = (y / 10) | 0
  }
  // return true if the numbers are equal
  return x === reversed
}