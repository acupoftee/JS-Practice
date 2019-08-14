/**
 * @param {Number} num an integer
 * @returns {Number} an integer with squared digits
 */
const squareDigits = num => {
    // Get an array of digits
    const digits = num.toString().split('')

    // Square each digit. Because JavaScript has 
    // automatic type coercion, it will quietly convert each string
    // into a number to perform multiplication
    const squaredDigits = digits.map(n => n * n)

    // Join each digit together, then use the + operator 
    // to convert the string into a number
    const squaredNumber = +squaredDigits.join('')

    return squaredNumber
}

const squareDigits2 = num => {
    // Array.from creates an array from our input.
    // First, we convert our number into a string. This allows Array.from
    // to create an array. 
    // Then, we use the optional mapping argument where we'll square our digits.
    // after, we'll join each digit, and convert it to a number with the + operator
    return +Array.from(num.toString(), n => n * n).join('')
}

console.log(squareDigits2(9119))