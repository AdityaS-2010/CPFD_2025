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
console.log(names.join('\n'));
