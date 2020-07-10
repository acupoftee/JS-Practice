const binarySearch = (arr, element) => {
    let startIndex = 0, stopIndex = arr.length - 1

    while (startIndex <= stopIndex) {
        const midpointIndex = Math.ceil((stopIndex - startIndex) / 2)

        if (arr[midpointIndex] === element) {
            return midpointIndex
        } else if (arr[midpointIndex] < element) {
            startIndex = midpointIndex + 1
        } else {
            stopIndex = midpointIndex - 1
        }
    }
    return -1
}