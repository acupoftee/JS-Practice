# [Find Parity Outlier](https://www.codewars.com/kata/5526fc09a1bbd946250002dct) Solution


**Approach**:
For this problem, we're given an array of integers (positive and negative whole numbers). It'll either be an array of even numbers with one odd number, or vice versa. We need to find the special outlier 🌈 The approach for this problem is as follows:
1. Get all the zeroes in the array.
2. 

**Solution 1**:
```js
/**
 * @param {number[]} arr an array of integers
 * @return {number} the outlier in arr
 */
const findOutlier = integers => {
    // 1. Get even integers, and odd integers
    const even = integers.filter(x => x % 2 === 0)
    const odd = integers.filter(x => x % 2 !== 0)
  
    // 2. If the length is one, then get the first number and return
    return even.length === 1 ? even[0] : odd[0]
}

```

**Explanation**: 
This is a straight forward and readable approach to the problem that gets the job done! 💪 Lets use the example `[1, 0, 0, false, "hi hello", 4, 0, 7, true]`

1. We'll filter out all zeroes using `Array.filter()`. This will give us a **new** array without the zeroes if we tell the filter that we don't want any elements that equal 0:
   ```js
   const noZeroes = arr.filter(x => x !== 0)
   ```

    After our filter, we'll get a brand new array like this:

    ```js
    [1, false, "hi hello", 4, 7, true]
    ```


2. We'll count how many zeroes we took out. This count determine how many zeroes we need to add during our next step. Our inital array `arr` has 3 zeroes. We can get this by subtracting the length of our filtered array `noZeroes` with 6 elements from `arr` with 9 elements like so:
   
   ```js
   // 9 elements - 6 elements = 3 zeroes to add
    const zeroCount = arr.length - noZeroes.length
   ```
    
3. For each zero, we want to add it to the end of the array. We'll do this using a for loop, and we'll append these elements using `Array.push()`. Going back to our example, since we have 3 zeores, our loop will append a zero 3 times. When that's done, we'll return this array:

    ```js
    [1, false, "hi hello", 4, 7, true, 0, 0, 0]
    ```

**Solution 2**: Using  `concat()` and `fill()`
```js
/**
 * @param {Object[]} arr an array of integers
 * @return {Object[]} the array with all zeroes at the end
 */
const moveZeroesTwo = arr => {
  // 1. Filter out zeroes
  const noZeroes = arr.filter(x => x !== 0)

  // 2. Get the number of zeroes to add
  const zeroCount = arr.length - noZeroes.length
    
  // 3. Add a new array filled with zeroes to the filtered array
  return noZeroes.concat(Array(zeroCount).fill(0))
}
```

Another approach to this solution is using `Array.fill()` to create an array of zeroes and use `Array.concat(arr)` to add the zero array to the filtered array. That way, we don't need to use a for loop.
