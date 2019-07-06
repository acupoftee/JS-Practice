// Implement a function that adds two numbers 
// together and returns their sum in binary. 
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.

/**
 * Returns the sum of two integers in the form of a 
 * binary string. Time complexity: O(n) time
 * @param {number} a first number
 * @param {number} b second number
 */
const binaryAddition = (a, b) => {
    let sum = a + b, result = ''

    while (sum > 0) {
        result = (sum % 2) + result
        sum = Math.floor(sum / 2)
    }

    return result
}