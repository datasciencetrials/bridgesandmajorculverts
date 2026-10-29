import { readFileSync, writeFileSync } from 'node:fs';

const path = new URL('./bridge_data.js', import.meta.url);
const source = readFileSync(path, 'utf8');
const lines = source.trimEnd().split(/\r?\n/);
if (lines.length !== 2) throw new Error('Unexpected bridge data declarations');

function parseDeclaration(line, name) {
  const prefix = `const ${name} = `;
  if (!line.startsWith(prefix) || !line.endsWith(';')) {
    throw new Error(`Unexpected ${name} declaration`);
  }
  return JSON.parse(line.slice(prefix.length, -1));
}

const bridges = parseDeclaration(lines[0], 'BRIDGES');
const culverts = parseDeclaration(lines[1], 'MAJOR_CULVERTS');
if (bridges.length !== 552 || culverts.length !== 452) {
  throw new Error('Governed structure counts changed');
}
if (new Set(bridges.map(bridge => bridge.bridge_no)).size !== 552) {
  throw new Error('Bridge identifiers are not unique');
}

for (const bridge of bridges) {
  delete bridge.inspector;
  delete bridge.firm;
  delete bridge.date_modified;
  if (/\b(?:xlsx?|mdb|accdb|csv)\b/i.test(String(bridge.comment || ''))) {
    delete bridge.comment;
  }
}

writeFileSync(path,
  `const BRIDGES = ${JSON.stringify(bridges)};\n` +
  `const MAJOR_CULVERTS = ${JSON.stringify(culverts)};\n`,
  'utf8');

console.log(`Sanitised ${bridges.length} bridges and retained ${culverts.length} major culverts`);
