import os from 'os';
export function freeMemory() {
return { free: os.freemem(), total: os.totalmem() };
}