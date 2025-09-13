// filterArray.js
module.exports = function filterArray(arr, expr) {
  // expr examples: 'x = 4', 'x > 3', 'x < 5'
  if (!Array.isArray(arr)) return [];
  const m = expr.match(/x\s*([=<>]+)\s*(.+)/);
  if (!m) return arr;
  const op = m[1];
  const rhsRaw = m[2].trim();
  const rhs = Number(rhsRaw);
  return arr.filter(x => {
    switch (op) {
      case '=': return x === rhs;
      case '==': return x == rhs;
      case '>': return x > rhs;
      case '<': return x < rhs;
      case '>=': return x >= rhs;
      case '<=': return x <= rhs;
      default: return false;
    }
  });
};
