const fs = require('fs');
const path = require('path');
const md = fs.readFileSync(path.join(__dirname, '..', 'Pathways', 'Course Catalog 2025-2026.md'), 'utf8');
const catalog = fs.readFileSync(path.join(__dirname, 'catalog_names.txt'), 'utf8').split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
const catNorm = new Set(catalog.map(s=>s.toLowerCase()));

// Split MD into sections by heading '## **...**'
const lines = md.split(/\r?\n/);
const sections = [];
let i=0;
while (i<lines.length) {
  const ln = lines[i];
  const m = ln.match(/^##\s*\*\*([^\*]+)\*\*/);
  if (m) {
    const titleRaw = m[1].trim();
    const chunk = [];
    i++;
    while (i<lines.length && !lines[i].startsWith('##')) {
      chunk.push(lines[i]);
      i++;
    }
    sections.push({titleRaw, body: chunk.join('\n')});
  } else {
    i++;
  }
}

function extractGrade(body) {
  const m = body.match(/Grade:\s*([0-9]{1,2})(?:-(?:[0-9]{1,2}))?/i);
  if (m) return [parseInt(m[1],10)];
  return [];
}

function splitRange(title) {
  // Remove trailing course codes (e.g., 001301-001302) if present
  let t = title.replace(/\t+/g, ' ').trim();
  const codeMatch = title.match(/\s+(\d{3,6})(?:-(\d{3,6}))?$/);
  const hasCodeRange = !!(codeMatch && codeMatch[2]);
  // remove trailing code for base name
  t = t.replace(/\s+\d{3,6}(?:-\d{3,6})?$/,'').trim();
  // match suffix like ' 1-2', ' 1a-1b', ' 3-4', ' 1-2  ' etc
  const m = t.match(/(.+?)\s+([0-9]+[a-zA-Z]?)(?:-([0-9]+[a-zA-Z]?))?$/);
  if (m) {
    const base = m[1].trim();
    const a = m[2];
    const b = m[3];
    if (b) {
      // create two entries keeping suffixes
      return [base + ' ' + a, base + ' ' + b];
    } else {
      return [t];
    }
  }
  // if the MD used code ranges but no numeric suffix in title, expand to ' 1' and ' 2'
  if (hasCodeRange) {
    return [t + ' 1', t + ' 2'];
  }
  return [t];
}

const mdEntries = [];
for (const sec of sections) {
  const names = splitRange(sec.titleRaw);
  const grades = extractGrade(sec.body);
  for (const n of names) mdEntries.push({name:n, grades});
}

const missing = [];
for (const e of mdEntries) {
  if (!catNorm.has(e.name.toLowerCase())) missing.push(e);
}

console.log('Total MD normalized entries:', mdEntries.length);
console.log('Missing compared to catalog.js:', missing.length);
for (const m of missing) console.log('-', m.name, m.grades.length?('grades:'+m.grades.join(',')): 'grades:[]');

// write missing to file
fs.writeFileSync(path.join(__dirname, 'missing_normalized_md.json'), JSON.stringify(missing,null,2));
console.log('Wrote missing_normalized_md.json');
