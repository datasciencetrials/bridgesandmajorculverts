import { readFileSync, writeFileSync } from 'node:fs';

const payloadPath = new URL('./bridge_traffic_sqlbot_payload.json', import.meta.url);
const wrapperPath = new URL('./bridge_traffic_sqlbot_payload.js', import.meta.url);
const appPath = new URL('./app.js', import.meta.url);

const payload = JSON.parse(readFileSync(payloadPath, 'utf8'));
const originalKeys = Object.keys(payload);
if (!originalKeys.includes('source_root') || !payload.link_evidence || !payload.bridge_predictions) {
  throw new Error('Unexpected traffic payload schema');
}

let removedSourceLists = 0;
function stripProvenance(value) {
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) {
    for (const item of value) stripProvenance(item);
    return;
  }
  if (Object.hasOwn(value, 'sources')) {
    delete value.sources;
    removedSourceLists += 1;
  }
  for (const child of Object.values(value)) stripProvenance(child);
}
delete payload.source_root;
stripProvenance(payload);

const app = readFileSync(appPath, 'utf8');
const match = app.match(/^const LEGACY_ATC_ACCURACY_DATA = (\{.*\});$/m);
if (!match) throw new Error('Legacy traffic declaration not found');
const legacy = JSON.parse(match[1]);
const profileCount = Object.keys(legacy).length;
if (!profileCount) throw new Error('Legacy traffic profiles missing');
for (const profile of Object.values(legacy)) delete profile.source;
const updatedApp = app.replace(match[0], `const LEGACY_ATC_ACCURACY_DATA = ${JSON.stringify(legacy)};`)
  .replace("sources: ev.sources || ['SQLBot annual data collection'],", "sources: [],")
  .replace("basis: ev.basis || 'SQLBot annual data model',", "basis: ev.basis || 'Annual traffic model',");
if (updatedApp === app || updatedApp.includes('"source":"ATC DATA SUMMARY 2016-2022.xlsx"')) {
  throw new Error('Traffic source labels not removed');
}

const json = JSON.stringify(payload);
writeFileSync(payloadPath, `${json}\n`, 'utf8');
writeFileSync(wrapperPath, `const SQLBOT_TRAFFIC_INTELLIGENCE = ${json};\n`, 'utf8');
writeFileSync(appPath, updatedApp, 'utf8');
console.log(`Removed internal traffic provenance from ${removedSourceLists} evidence groups and ${profileCount} legacy profiles`);
