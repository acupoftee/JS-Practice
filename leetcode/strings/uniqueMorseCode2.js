/**
 * @param {string[]} words
 * @return {number} the length of the set
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
            morseWord += alphabet[letter]
        }

        // add the morse word to the set if it's not in there yet
        if (!morseSet.includes(morseWord)) {
            morseSet.push(morseWord)
        }
    }
    return morseSet.length
}

// Here we use an alphabet object to increase the lookup time 
// This reduces the runtime from 80 ms to 60ms
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
    z: "--.." 
}