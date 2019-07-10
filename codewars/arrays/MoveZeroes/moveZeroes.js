var moveZeros = function (arr) {
    // TODO: Program me
    // 1. filter out zeroes
    // 2. count how many zeroes we took out
    // 3. for each zero filtered, push them to the end
    const noZeroes = arr.filter(x => x !== 0)
    let zeroCount = arr.length - noZeroes.length
    while (zeroCount > 0) {
      noZeroes.push(0)
      zeroCount--
    }
    return noZeroes
  }