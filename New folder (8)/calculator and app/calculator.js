const args = process.argv.slice(2);
if (args.length < 3) {
console.error('Usage: node calculator.js <num1> <op> <num2>');
process.exit(1);
}


const [aRaw, op, bRaw] = args;
const a = Number(aRaw);
const b = Number(bRaw);
if (!isFinite(a) || !isFinite(b)) {
console.error('Both operands must be numbers');
process.exit(1);
}


let res;
switch (op) {
case '+': res = a + b; break;
case '-': res = a - b; break;
case '*': res = a * b; break;
case '/':
if (b === 0) { console.error('Division by zero'); process.exit(1); }
res = a / b; break;
default:
console.error('Unsupported operator. Use + - * /'); process.exit(1);
}


console.log(res);