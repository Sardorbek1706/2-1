import { freeMemory } from './memory.mjs';
import { processInfo } from './processInfo.mjs';
import { uptime } from './uptime.mjs';


export default function gather() {
return {
memory: freeMemory(),
process: processInfo(),
uptime: uptime()
};
}