# [Binary Addition](https://www.codewars.com/kata/binary-addition/javascript) Solution

**Approach**:
We need to return the sum of two numbers in a binary string (ex: 1 + 2 = 3 = "11"). This approach does require basic binary knowledge, but don't fret! We'll be going over this as well. Here's a basic approach:
1. Get the sum of a and b
2. Create a variable to save the result
3. While the sum is not equal to zero, get the corresponding digit and binary spot
4. Add the digit to the left of the result string
5. Divide the sum by 2 to move to the next binary place
6. Repat steps 3-5 until the sum equals zero
7. Return the binary string

**Binary Refresher:**

Binary is a number system that uses 1s and 0s to represent the numbers we know and love. It's in base 2, and so the only way to represent numbers we've seen with base 10 are to use 0 and 1. 

When we're increaing a number, we add digits to the left of the previous digit since they're read from left to right. 

**Solution**: 
```js
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
```
**Explanation**: 
Here, we'll use the numeric sum to keep track of our binary conversion. Since binary is in base 2, and that the last bit of an odd number ends in one, we'll do the following: 

1. Get the current digit by finding the remainder using the % operator.
2. In binary, we add digits to the left when the number increases, so we'll add our new digit to the left of the last saved digits.
3. To move on to the next base 2 digit, we need to divide the sum by 2.  We'll have to use Math.floor() here to round the answer DOWN to the nearest whole number.
4. Continue with steps 1-3 until the sum is 0. This will get our while loop to stop. (SEE: https://www.mathsisfun.com/binary-number-system.html for binary info)

