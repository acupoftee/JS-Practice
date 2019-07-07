/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
    const alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    const morseSet = []
    const letterOffset = 97
    for (const word of words) {
        let morse = ''
        
        for (const letter of word) {
            const letterCode = letter.charCodeAt(0)
            morse += alphabet[letterCode - letterOffset]
        }

        if (!morseSet.includes(morse)) {
            morseSet.push(morse)
        }
    }
    return morseSet.length
}