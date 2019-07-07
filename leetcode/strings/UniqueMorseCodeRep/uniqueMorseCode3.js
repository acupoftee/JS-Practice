const alphabet = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.." }

/**
 * @param {string[]} words the word array to convert to morse
 * @return {number} the length of unique morse representations
 */
const uniqueMorseRepresentations = function(words) {  
    // The Alggorithm is as follows: 

    // 1. We split the characters of each word with our first use of map
    // 2. Inside our outer map method, we map each letter to a morse rep
    // 3. We join each morse letter into one word

    // When step 3 is finished, we add the word to the set. The spread operator 
    // is used to create an array with the set entires and return the length. 

    // The lookup time for an array's length will be faster than using Set.prototype.size
    // as this is a function which counts the unique elements.
    // Array.length is however updated after each addition of a new element.

    // SEE: https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.push Step 11.
    // SEE: https://www.ecma-international.org/ecma-262/6.0/#sec-get-set.prototype.size
    return [...new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join('')))].length
}

