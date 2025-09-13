export function processInfo() {
return {
pid: process.pid,
argv: process.argv,
cwd: process.cwd(),
nodeVersion: process.version
};
}