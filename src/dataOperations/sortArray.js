module.exports = function sortArray(arr, order = 'asc') {
  if (!Array.isArray(arr)) return [];
  const copy = arr.slice();
  copy.sort((a,b) => a - b);
  if (order === 'desc') copy.reverse();
  return copy;
};
