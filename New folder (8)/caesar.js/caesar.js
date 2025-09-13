class CaesarCipher {
constructor(shift) {
if (!Number.isFinite(shift)) throw new Error('shift must be a number');
shift = Math.round(shift);
shift = ((shift % 26) + 26) % 26; 
if (shift === 0) shift = 26; 
this.shift = shift;
}


_shiftChar(ch, shift) {
const A = 'A'.charCodeAt(0);
const Z = 'Z'.charCodeAt(0);
const a = 'a'.charCodeAt(0);
const z = 'z'.charCodeAt(0);
const code = ch.charCodeAt(0);
if (code >= A && code <= Z) {
const pos = code - A;
const npos = (pos + shift + 26) % 26;
return String.fromCharCode(A + npos);
}
if (code >= a && code <= z) {
const pos = code - a;
const npos = (pos + shift + 26) % 26;
return String.fromCharCode(a + npos);
}
return ch; 
}


encode(text) {
if (typeof text !== 'string') return '';
return text.split('').map(ch => this._shiftChar(ch, this.shift)).join('').toUpperCase();
}


decode(text) {
if (typeof text !== 'string') return '';
return text.split('').map(ch => this._shiftChar(ch, -this.shift)).join('').toUpperCase();
}
}


module.exports = CaesarCipher;