/**
 * @param {number[]} A the sorted array
 * @return {number[]} a sorted array of squared values
 */
const sortedSquares = A => {
    return A.map(n => n ** 2).sort((a, b) => a - b)
}

