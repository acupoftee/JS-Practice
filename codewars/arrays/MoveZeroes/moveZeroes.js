const moveZeros = arr => {
    // 1. filter out zeroes
    const noZeroes = arr.filter(x => x !== 0)

    // 2. count how many zeroes we took out
    const zeroCount = arr.length - noZeroes.length

    // 3. for each zero filtered, push them to the end
    while (zeroCount > 0) {
      noZeroes.push(0)
      zeroCount--
    }

    return noZeroes
  }

const moveZeroesTwo = arr => {
  // 1. Filter out zeroes
  const noZeroes = arr.filter(x => x !== 0)

  // 2. Get the number of zeroes to add
  const zeroCount = arr.length - noZeroes.length
    
  // 3. Add a new array filled with zeroes to the filtered array
  return noZeroes.concat(Array(zeroCount).fill(0))
}