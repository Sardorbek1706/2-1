const os = require('os');
const cmd = process.argv[2];


function formatBytes(bytes) {
const mb = bytes / 1024 / 1024;
if (mb >= 1024) return (mb / 1024).toFixed(2) + ' GB';
if (mb < 1) return Math.round(bytes / 1024) + ' KB';
return Math.round(mb) + ' MB';
}


if (cmd === 'check-memory') {
const free = os.freemem();
const total = os.totalmem();
console.log('Free memory:', formatBytes(free));
console.log('Total memory:', formatBytes(total));
console.log('Free memory (MB float):', (free/1024/1024).toFixed(2) + ' MB');
} else {
console.log('No command provided');
}