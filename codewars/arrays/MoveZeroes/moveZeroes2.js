const moveZeroes = arr => {
    let noZeroes = arr.filter(x => x !== 0)
    let zeroCount = arr.length - noZeroes.length
    
    return noZeroes.concat(new Array(zeroCount).fill(0))
}