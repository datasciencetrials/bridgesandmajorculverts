const fs = require('fs');

const file = 'd:/OneDrive/Bridge stuff/bridge_traffic_deploy/app.js';
const lines = fs.readFileSync(file, 'utf8').split('\n');

// Map variables: lines 5155 to 5173 (0-indexed: 5156 to 5174 in 1-indexed)
// BMS variables: lines 1224 to 1311 (0-indexed: 1225 to 1312 in 1-indexed)

// Extract map vars (highest index first so it doesn't offset the lower one)
const mapVars = lines.splice(5155, 19);

// Extract BMS vars
const bmsVars = lines.splice(1224, 88);

// Insert BMS after line 11 (0-indexed 10, so index 11)
lines.splice(11, 0, ...bmsVars);

// Find CONTROLLER & STATE again (it might have moved down by 88 lines)
// Let's just find the index of '//  CONTROLLER & STATE'
const controllerIdx = lines.findIndex(l => l.includes('//  CONTROLLER & STATE'));
if (controllerIdx !== -1) {
    // Insert mapVars after the next line (which is `// ==========================`)
    lines.splice(controllerIdx + 2, 0, ...mapVars);
}

fs.writeFileSync(file, lines.join('\n'), 'utf8');
console.log("Spliced correctly.");
