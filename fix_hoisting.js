const fs = require('fs');
const path = require('path');

const filePath = path.join('d:/OneDrive/Bridge stuff/bridge_traffic_deploy', 'app.js');
let content = fs.readFileSync(filePath, 'utf8');

// Find and extract BMS_CODE_LOOKUPS
const bmsRegex = /const\s+BMS_CODE_LOOKUPS\s*=\s*\{[\s\S]*?\n\};\n/g;
let bmsMatch = bmsRegex.exec(content);
if (bmsMatch) {
    let bmsCode = bmsMatch[0];
    content = content.replace(bmsCode, '');
    // Insert after //  HELPERS & CONSTANTS
    content = content.replace('//  HELPERS & CONSTANTS\n// ===========================================\n', '//  HELPERS & CONSTANTS\n// ===========================================\n' + bmsCode);
} else {
    console.log("Could not find BMS_CODE_LOOKUPS");
}

// Find and extract selectedMapBridge
const smbRegex = /let\s+selectedMapBridge\s*=\s*null;\n/g;
let smbMatch = smbRegex.exec(content);
if (smbMatch) {
    let smbCode = smbMatch[0];
    content = content.replace(smbCode, '');
    // Insert after //  CONTROLLER & STATE
    content = content.replace('//  CONTROLLER & STATE\n// ===========================================\n', '//  CONTROLLER & STATE\n// ===========================================\n' + smbCode);
} else {
    console.log("Could not find selectedMapBridge");
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Fixes applied.");
