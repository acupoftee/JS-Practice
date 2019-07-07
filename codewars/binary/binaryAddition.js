/**
 * Returns the sum of two integers in the form of a 
 * binary string. Time complexity: O(n) time
 * @param {number} a first number
 * @param {number} b second number
 */
const binaryAddition = (a, b) => {
    // Lets get the sum, and then create an empty string for our answer
    // result will also save the digits we've created
    let sum = a + b, result = ''

    // Here, we'll use the numeric sum to keep track of our binary conversion.
    // Since binary is in base 2, and that the last bit of an odd number ends in one,
    // we'll do the following: 

    // 1. Get the current digit by finding the remainder using the % operator
    // 2. In binary, we add digits to the left when the number increases,
    // so we'll add our new digit to the left of the last saved digits
    // 3. To move on to the next base 2 digit, we need to divide the sum by 2. 
    // We'll have to use Math.floor() here to round the answer DOWN to the nearest whole number.
    // 4. Continue with steps 1-3 until the sum is 0. This will get our while loop to stop.
    // SEE: https://www.mathsisfun.com/binary-number-system.html for binary info
    while (sum > 0) {
        // adding the result of sum % 2 to our string variable "result" 
        // will give us a new string
        result = (sum % 2) + result

        // decrease the sum for the next digit
        sum = Math.floor(sum / 2)
    }

    // return the new binary string.
    return result
}