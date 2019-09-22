**Solution: No String Conversion**
This approach takes a mathematical approach to the problem, because *math is a wonderful thing*.
 ```js
/**
 * @param {number} x the number to check
 * @return {boolean} true if it's a palindrome number
 */
const isPalindrome = x => {
    if (x < 0) return false
    
    let reversed = 0, y = x

    while (y > 0) {
	    const lastDigit = y % 10
        reversed = (reversed * 10) + lastDigit
        y = (y / 10) | 0
    }
    return x === reversed
}
```
**Explanation:**
1. First, we check and see if the number is negative. If it is, then we know it's not a palindrome because the numbers will read differently backwards and forwards. 
	```js
	if (x < 0) return false
	```

2. If the number is positive, we'll create two variables. The first variable `reversed`  will store our reversed number, and the second variable `y` is copy of our input number. `y` will be used to reverse  the input number without modifying our original input. 

The following steps take place inside our while loop:

3. Get the last digit of the number using the modulo (`%`) operator. Here, we're dividing `y` by 10 and returning the remainder. Let's refer to the example input `121`. The hundreds column `100` is divided by 10 with a remainder of 0, and the tens column `20` is divided by 10 with a remainder of 0. When we divided the ones column `1` by 10, we'll get a remainder of 1 since 1 can't be divided by 10 evenly. After, we save the remainder to `lastDigit`:

	  ```js
		const lastDigit = y % 10
      ```
4. We append the last digit to `reversed`. We have to multiply `reversed` by 10 on the right side of the assignment to ensure that we're always appending `lastDigit` to the ones column.
	```js
	 reversed = (reversed * 10) + lastDigit
	```
5. Remove the last digit from `y` by dividing it by 10, and truncating the last decimal. We can do this using the bitwise OR operator `|`. In this case, we're converting the result into an integer, and then return the new integer:
	```js
	y = (y / 10) | 0
	```
6. Finally, if `reversed === x`, then it's a palindrome! 