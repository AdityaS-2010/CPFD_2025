const fs = require('fs');
const path = require('path');
const mdFile = path.join(__dirname, '..', 'Pathways', 'Course Catalog 2025-2026.md');
const out = path.join(__dirname, 'md_names.txt');
const txt = fs.readFileSync(mdFile, 'utf8');
const re = /##\s*\*\*([^\*]+?)\*\*/g;
let m;
const names = [];
while ((m = re.exec(txt)) !== null) {
  let name = m[1].trim();
  name = name.replace(/\s+\t.*$/, '').trim();
  names.push(name);
}
fs.writeFileSync(out, names.join('\n'));
console.log('Wrote', out);
