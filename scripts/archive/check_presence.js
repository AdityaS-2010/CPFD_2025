const fs = require('fs');
const path = require('path');
const cat = fs.readFileSync(path.join(__dirname,'catalog_names.txt'),'utf8').split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
const set = new Set(cat.map(s=>s.toLowerCase()));
const tests = ['World History 1','AP Calculus AB 1','Integrated Math 1a','Chinese 1','AVID 1'];
for(const t of tests){
  console.log(t, set.has(t.toLowerCase()));
}
console.log('catalog count', cat.length);
console.log('\nSample catalog entries (first 10) with char codes:');
for(let i=0;i<10 && i<cat.length;i++){
  const s = cat[i];
  const codes = Array.from(s).map(c=>c.charCodeAt(0));
  console.log(i+1, JSON.stringify(s), 'len', s.length, 'codes', codes.slice(0,30));
}
