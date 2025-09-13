module.exports = function convertToASCII(str) {
  if (typeof str !== 'string') return [];
  return Array.from(str).map(ch => ch.charCodeAt(0));
};
