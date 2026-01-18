const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'Pathways', 'catalog.js');
const txt = fs.readFileSync(file, 'utf8');
const re = /\{\s*name:\s*"([^"]+)"/g;
let m;
const names = [];
while ((m = re.exec(txt)) !== null) {
  names.push(m[1]);
}
fs.writeFileSync(path.join(__dirname,'catalog_names.txt'), names.join('\n'), 'utf8');
console.log('Wrote catalog_names.txt (utf8) entries:', names.length);
