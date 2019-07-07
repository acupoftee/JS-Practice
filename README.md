<p align="center">
<img src="https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png">
<h1>The JavaScript Dojo ✨</h1>
</p>

This repo is for JavaScript problem solving practice during *General Assembly's 2019 Software Engineering Immersive* and beyond. 💪🔥The goals for this are as follows: 

* Understand nuances in JavaScript problem solving. 
* Gain a deeper understanding of this super cool language.
* Apply JavaScript best practices.
* Break down complex topics with a direct and methodical approach.
* ***Explain solutions to anyone regardless of technical background.*** 

The last goal the most important goal because not only does this exemplify understanding of these concepts, it also helps make computer science more inclusive for all! 💕 

## Problems and Solutions
Problems will come from various sites like CodeWars, LeetCode, Hackerrank,Cracking the Coding Interview, and GeeksForGeeks. Each solution will describe the approach thoroughly and discuss tradeoffs and runtime. 

### Example Solution Discussion 
```js
/**
 * @param {string[]} words the word array to convert to morse
 * @return {number} the length of unique morse representations
 */
const uniqueMorseRepresentations = words => {  
    // The Alggorithm is as follows: 

    // 1. We split the characters of each word with our first use of map
    // 2. Inside our outer map method, we map each letter to a morse rep
    // 3. We attach each morse letter to create one word

    // When step 3 is finished, we add the word to the set. 
    // The spread operator is used to create an array with the set entires and return the length. 

    // The lookup time for an array's length will be faster than using the Set.prototype.size
    // as this is a function which counts the unique elements.
    // Array.length is however updated after each addition of a new element.

    // SEE: https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.push Step 11.
    // SEE: https://www.ecma-international.org/ecma-262/6.0/#sec-get-set.prototype.size
    return [...new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join('')))].length
}
```

Feedback and discussions about the solutions and its presentation are always welcome! Feel free to open an issue with questions or comments about any problems as this will help others learn as well. Thank you for following this JavaScript journey! 