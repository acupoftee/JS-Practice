const isUnique = word => {
    const set = [...new Set(word.split(''))]
    return word.length === set.length
}