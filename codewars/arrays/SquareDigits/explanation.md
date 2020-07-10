# [Square Every Digit](https://www.codewars.com/kata/square-every-digit/javascript) Solution


**Approach**:
For this problem, we're given an integer (no decimals). We need to return a new number, where every digit is squared. 
For example, if we're given the number 9119, we would return 811181, since the 9^2 = 81, and 1^2 = 1. We need to make sure that we return an integer afterwards. You'll see why down below. Here's the general approach:
1. Get a list of digits.
2. For each digit in the list, square it.
3. Join each digit.
4. Return the new number with squared digits. 

**Solution 1**:
```js
/**
 * Returns a new number with squared digits
 * Time complexity: O(n), space complexity: O(n)
 * @param {Number} num an integer
 * @returns {Number} an integer with squared digits
 */
const squareDigits = num => {
    // Get an array of digits
    const digits = num.toString().split('')

    // Square each digit. Because JavaScript has 
    // automatic type coercion, it will quietly convert each string
    // into a number to perform multiplication
    const squaredDigits = digits.map(n => n * n)

    // Join each digit together, then use the + operator 
    // to convert the string into a number
    const squaredNumber = squaredDigits.join('')

    return +squaredNumber
}
```

**Explanation**: 
This is a good problem to apply JavaScript's string methods to split the digits and save them into an array. Since there aren't built in methods that can do this, we have to convert the number into a string. Then, we can use array iteration methods to square each digit before we return the new number. Here's how we'll do it. 

1. We use `toString()` to create a string representation of the number. If we pass our function `9119`, this will create a string representation of this which would be `'9119'`. 

2. Following our `toString()` method, we split the string using `.split('')`. This means that we're breaking up the number into individual digits, and then saving them to an array.
   
   ```js
    const digits = num.toString().split('')
   ```
    This will result into an array that looks like this: 

    ```js
    ['9', '1', '1', '9']
    ```
        
3. For each digit, we need to square them. Now that we have an array of strings, we can use `map()` look through our original array, and multiply each digit by itself. This saves us space since we're only updating our original array instead of creating a new one.

    ```js
    const squaredDigits = digits.map(n => n * n)
    ```
    You may be wondering how this is even possible since we're used to multiplying numbers only right? JavaScript hooked us up with something called "automatic type coercion!" This just means that we're using operations with certain types, in this case JavaScript will secretly convert the digits into numeric values!

    After, our array will look like this: 
    ```js
    [81, 1, 1, 81]
    ```

4. We'll use `.join('')` to join each digit together. This will give us the *string* representation of our new number:
    ```js
    const squaredNumber = squaredDigits.join('')
    ```
5. The problem statment wants a numeric value to be returned, not a string! We can do this easily using the `+` prefix before our `squaredNumber` constant. This will convert it into a number:
    ```js
    return +squaredNumber
    ```


The time complexity for this solution is O(n) since we are squaring each digit in the array. The space complexity is O(n) since we are creating a new array using `.split('')`.


Solution 2's a fun one liner one!
**Solution 1**:
```js
/**
 * Returns a new number with squared digits
 * Time complexity: O(n), space complexity: O(n)
 * @param {Number} num an integer
 * @returns {Number} an integer with squared digits
 */
const squareDigits = num => {
    return +Array.from(num.toString(), n => n * n).join('')
}
```

Now what in the world is this one doing?

* Array.from creates an array from our input
* Inside this method, we convert our number into a string. This allows Array.from to create an array of String.
* Then, we use the otional mapping argument, where we'll square our digits
* After, we'll join each digit ,and convert the number with the + operator