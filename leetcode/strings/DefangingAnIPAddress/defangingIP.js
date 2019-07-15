/**
 * @param {string} address the starter IP address 
 * @return {string} The new IP address
 */
const defangIPaddr = address => {
    return address.split('').map(c => c === '.' ? '[.]' : c).join('')
}

/**
 * @param {string} address the starter IP address 
 * @return {string} The new IP address
 */
const defangIPaddrTwo = address => {
    return address.split('.').join('[.]')
}