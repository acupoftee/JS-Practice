const peakIndexInMountainArray = (A, low = 0, high = A.length - 1) => {
  if (!A.length) {
    return -1
  }

  const mid = ((low + high) / 2) | 0
  if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
    return mid
  }

  if (A[mid] < A[mid - 1]) {
    return peakIndexInMountainArray(A, low, mid)
  }

  if (A[mid] < A[mid + 1]) {
    return peakIndexInMountainArray(A, mid, high)
  }
}
