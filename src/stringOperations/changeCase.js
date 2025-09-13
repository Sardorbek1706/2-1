module.exports = function changeCase(str, mode = 'uppercase') {
  if (typeof str !== 'string') return '';
  if (mode === 'uppercase') return str.toUpperCase();
  if (mode === 'lowercase') return str.toLowerCase();
  return str;
};
