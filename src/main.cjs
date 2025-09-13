const { dataOps, stringOps } = require('./index');
const [cmd, ...rest] = process.argv.slice(2);
if (!cmd) { console.log('Provide command'); process.exit(0); }

if (cmd === 'filter') {
  const arr = JSON.parse(rest[0]);
  const expr = rest[1];
  console.log(dataOps.filterArray(arr, expr));
} else if (cmd === 'sort') {
  const arr = JSON.parse(rest[0]);
  console.log(dataOps.sortArray(arr));
} else if (cmd === 'ascii') {
  const str = rest[0];
  console.log(stringOps.convertToASCII(str));
} else if (cmd === 'uppercase') {
  console.log(stringOps.changeCase(rest[0], 'uppercase'));
} else if (cmd === 'lowercase') {
  console.log(stringOps.changeCase(rest[0], 'lowercase'));
} else {
  console.log('Unknown command');
}
