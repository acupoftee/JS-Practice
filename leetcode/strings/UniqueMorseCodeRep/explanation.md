# [Unique Morse Code Words](https://leetcode.com/problems/unique-morse-code-words/) Solution

*[Check this explanation out on LeetCode](https://leetcode.com/problems/unique-morse-code-words/discuss/329303/javascript-one-line-solution-w-explanation)* ❤️

**Approach**:
We need to return the number of morse representations for the given list of words. The approach for this problem is as follows:
1. Look at each word in `words`.
2. For each word, look at each letter.
3. Get the morse representation of each letter
4. Build the word with the morse letter
5. Once we finished building the word, add it to our set if it isn't already in there
6. Return the number of *unique* morse representations.

**Solution 1**:
```js
const alphabet = {
    a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
    n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..' 
}

/**
 * @param {string[]} words the word array to convert to morse
 * @return {number} the length of unique morse representations
 */
const uniqueMorseRepresentations = words => { 
    // Create our set of unique representations 
    const morseSet = []

    // loop through each word
    for (const word of words) {

        // create a new morse string
        let morseWord = ''

        // loop through each letter and add the morse letter 
        // to the morse string
        for (const letter of word) {
            morseWord = morseWord + alphabet[letter]
        }

        // add the morse word to the set if it's not in there yet
        if (!morseSet.includes(morseWord)) {
            morseSet.push(morseWord)
        }
    }
    return morseSet.length
}
```

**Explanation**: 
This is a very readable approach to the problem that gets the job done nicely! We'll use the example `words = ['gin', 'zen', 'gig', 'msg']` to explain how this works:

1. We'll loop through each word in our word list.
2. We'll create an empty string for our Morse word. This will help us spell out our Morse word. 
3. For each letter in the current word, we'll get the corresponding Morse code letter and append it to our Morse word.
4. When we've finished building our word in the inner for loop, we'll add it to our Morse word set if it's not already in there. 

**Solution 2**: 
```js
const alphabet = {
    a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
    n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..' 
}

/**
 * @param {string[]} words the word array to convert to morse
 * @return {number} the length of unique morse representations
 */
const uniqueMorseRepresentations = words => {  
    return [...new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join('')))].length
}
```
**Explanation**: 
This is a fun problem to apply [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)! Since we're changing every element in the array, `map()` works nicely.  We'll use the example `words = ['gin', 'zen', 'gig', 'msg']` again to explain how this works:

1. For each word, we'll split its characters in our first call to `map()`. We'll have something like this after looking at one word:

	```js  
	[ ['g', 'i', 'n'], 'zen', 'gig', 'msg' ] 
	 ```
	
2. We'll use `map()`  again inside our first map method. We'll do this to look at each letter of the inner array to create a Morse Code word. 

3.  For each letter during our second use of `map()`, we'll get the letter's Morse Code, and build a word with it using `join('')`. After one use of both `map()` methods, we'll get the first Morse word for `'gin'`: 
	```js  
	['--...-.', 'zen', 'gig', 'msg'] 
	 ```

4. We'll repeat steps 1-3 until we have an array of new Morse Code words:

	```js
	['--...-.', '--...-.', '--...--.', '--...--.']
	```


5. We'll use JavaScript's [Set Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) to only keep the unique representations. The Set constructor takes in an array, which will be the array shown in Step 2, and then removes duplicate elements, so we'll only be left with unique Morse Code words:

	```js
	['--...-.', '--...--.']
	```

We use [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (`...`) here to create an array with the set entires and return its length/the number of words.  We're using an array instead of a set because the lookup time for an array's length will be faster than using [Set.prototype.size](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size). This is because it's a [function which counts the number of unique elements]( https://www.ecma-international.org/ecma-262/6.0/#sec-get-set.prototype.size). Array.length however is updated after each addition of a new element (*See [array.prototype.push specifications](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.push)*).

