const findOutlier = integers => {
    // 1. Get even integers, and odd integers
    const even = integers.filter(x => x % 2 === 0)
    const odd = integers.filter(x => x % 2 !== 0)
  
    // 2. If the length is one, then get the first number and return
    return even.length === 1 ? even[0] : odd[0]
}
