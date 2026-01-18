const fs = require('fs');
const path = require('path');
const catalogPath = path.join(__dirname, '..', 'Pathways', 'catalog.js');
const catalog = fs.readFileSync(catalogPath, 'utf8');

const objRe = /\{\s*name:\s*"([^"]+?)",([\s\S]*?)\}/g;
let match;
let missing = [];
while((match = objRe.exec(catalog)) !== null){
  const name = match[1];
  const body = match[2];
  if(!/courseCode\s*:/.test(body)){
    missing.push(name);
  }
}

console.log('Missing courseCode for', missing.length, 'courses');
missing.slice(0,200).forEach(n => console.log(n));
if(missing.length > 200) console.log('... (truncated)');
