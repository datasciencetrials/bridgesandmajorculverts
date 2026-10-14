const fs = require('fs');
const path = require('path');

const sourcePath = process.argv[2];
if (!sourcePath) {
  throw new Error('Provide the source HTML path.');
}

const source = fs.readFileSync(sourcePath, 'utf8');
const names = ['ROAD_GEOMETRY', 'NATIONAL_ROAD_NETWORK'];
const declarations = names.map((name) => {
  const match = source.match(new RegExp(`^const ${name} = .*;$`, 'm'));
  if (!match) {
    throw new Error(`Missing ${name} in ${sourcePath}`);
  }
  return match[0];
});

const output = [
  '// Generated from the verified bridge traffic reference geometry.',
  ...declarations,
  '',
].join('\n');

fs.writeFileSync(path.join(__dirname, 'road_network_data.js'), output, 'utf8');

