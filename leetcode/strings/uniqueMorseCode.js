/**
 * @param {string[]} words
 * @return {number} the length of the set
 */
const uniqueMorseRepresentations = words => {
    // define our alphabet dictionary
    const alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    // define our morse set
    const morseSet = []

    // to get the index, we'll subtract the value of lowercase a 
    // form the current letter's ascii value
    const letterOffset = 97
    for (const word of words) {
        let morse = ''

        for (const letter of word) {
            // get the ascii code of the current letter
            const letterCode = letter.charCodeAt(0)

            // look up the current letter in our alphabet
            morse += alphabet[letterCode - letterOffset]
        }

        // add the word to our set if we haven't seen it yet
        if (!morseSet.includes(morse)) {
            morseSet.push(morse)
        }
    }
    return morseSet.length
}