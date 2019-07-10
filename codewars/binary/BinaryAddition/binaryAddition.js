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