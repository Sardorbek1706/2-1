const CaesarCipher = require('./caesar');

const cipher = new CaesarCipher(3);
const encoded = cipher.encode('Hello, World!');
const decoded = cipher.decode(encoded);

console.log('Encoded:', encoded);
console.log('Decoded:', decoded);
