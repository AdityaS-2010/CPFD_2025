const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', 'Pathways', 'Course Catalog 2025-2026.md');
const catalogPath = path.join(__dirname, '..', 'Pathways', 'catalog.js');

let md = fs.readFileSync(mdPath, 'utf8');
let catalog = fs.readFileSync(catalogPath, 'utf8');

// Extract bold headings with course codes, e.g. **World History\t001301-001302**
const headingRe = /\*\*(.+?)\s+([0-9]{6}(?:-[0-9]{6})?)\*\*/g;
let m;
const mapping = {}; // normalized baseTitle -> array of codes

function normalizeKey(s){
  return s.toLowerCase().replace(/[^a-z0-9 ]+/g,'').replace(/\s+/g,' ').trim();
}

while((m = headingRe.exec(md)) !== null){
  let rawTitle = m[1].trim();
  const codes = m[2].split('-');
  // remove sequence numbers like "1-2", "3-4" from title
  const cleaned = rawTitle.replace(/\b\d+(?:-\d+)?\b/g, '').replace(/\s+/g,' ').trim();
  const key = normalizeKey(cleaned);
  mapping[key] = codes;
}

// Utility to find courseCode for a given object name
function findCodeFor(name){
  // extract trailing numeric part if present
  const numMatch = name.match(/\b(\d+)\s*$/);
  const base = name.replace(/\b\d+\s*$/,'').trim();
  const key = normalizeKey(base);
  const codes = mapping[key];
  if(!codes) return null;
  if(codes.length === 1){
    return codes[0];
  }
  if(numMatch){
    const n = parseInt(numMatch[1],10);
    // For paired sequences like 1-2 or 3-4, map odd -> first code, even -> second code
    return (n % 2 === 1) ? codes[0] : codes[1];
  }
  // no trailing number; if only one code, return it, else null
  return null;
}

// Find object entries in catalog.js and insert courseCode where missing
const objRe = /\{\s*name:\s*"([^"]+?)",([\s\S]*?)\}/g;
let out = catalog;
let edits = 0;
let match;

// We'll build replacements to avoid overlapping edits
const replacements = [];
while((match = objRe.exec(catalog)) !== null){
  const full = match[0];
  const name = match[1];
  const body = match[2];
  if(/courseCode\s*:/i.test(body)) continue; // already has code
  const code = findCodeFor(name);
  if(!code) continue;
  // insert courseCode after name property
  const insert = ` courseCode: "${code}",`;
  // find position after the name property closing comma in the matched snippet
  const newFull = full.replace(/(name:\s*"[^"]+?",)/, `$1${insert}`);
  if(newFull !== full){
    replacements.push({ from: full, to: newFull });
    edits++;
  }
}

for(const r of replacements){
  out = out.replace(r.from, r.to);
}

if(edits === 0){
  console.log('No updates applied (no matches or all entries already have courseCode).');
} else {
  fs.writeFileSync(catalogPath, out, 'utf8');
  console.log(`Applied ${edits} courseCode insertions to ${catalogPath}`);
}
