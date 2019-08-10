# [Move Zeroes](https://www.codewars.com/kata/move-zeroes/javascript) Solution


**Approach**:
For this problem, we're given an array of *anything* ✨This array can have numbers, strings, booleans (oh my)! We need to find all the zeroes in the array and move all of them to the end. The approach for this problem is as follows:
1. Get all the zeroes in the array.
2. Count the number of zeroes we have to add. 
3. Get the morse representation of each letter
4. For each zero we find, add it to the end of the array.
5. Return the new array with appended zeroes.

**Solution 1**:
```js
/**
 * @param {Object[]} arr an array of integers
 * @return {Object[]} the array with all zeroes at the end
 */
const moveZeros = arr => {
    // 1. We'll make a new array without the zeroes. 
    // We're telling the filter that we don't wany anything 
    // equal to 0
    const noZeroes = arr.filter(x => x !== 0)

    // 2. Count how many zeroes we took out.
    const zeroCount = arr.length - noZeroes.length

    // 3. For each zero, push them to the end of our new array
    for (let i = 0; i < zeroCount; i++) {
        zeroes.push(0)
    }

    return noZeroes
}
```

**Explanation**: 
This is a straight forward and readable approach to the problem that gets the job done! 💪 Lets use the example `[1, 0, 0, false, "hi hello", 4, 0, 7, true]`

1. We'll filter out all zeroes using `Array.filter()`. To keep track of the new array without the zeroes, we'll save it to a constant called `noZeroes`. This will give us a **new** array without the zeroes if we tell the filter that we don't want any elements that equal 0:
   ```js
   const noZeroes = arr.filter(x => x !== 0)
   ```

    After our filter, we'll get a brand new array like this:

    ```js
    [1, false, "hi hello", 4, 7, true]
    ```


2. We'll count how many zeroes we took out. This count determines how many zeroes we need to add during our next step. Our inital array `arr` has 3 zeroes. We can get this by subtracting the length of our new array `noZeroes` with 6 elements from `arr` with 9 elements like so:
   
   ```js
   // 9 elements - 6 elements = 3 zeroes to add
    const zeroCount = arr.length - noZeroes.length
   ```
    
3. For each zero, we want to add it to the end of our final array. We'll do this using a for loop, and we'll append these elements using `Array.push()`. Going back to our example, since we have 3 zeores, our loop will append a zero 3 times. When that's done, we'll return this array:

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
