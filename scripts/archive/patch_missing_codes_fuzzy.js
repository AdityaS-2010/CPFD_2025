const fs = require('fs');
const path = require('path');
const mdPath = path.join(__dirname, '..', 'Pathways', 'Course Catalog 2025-2026.md');
const catalogPath = path.join(__dirname, '..', 'Pathways', 'catalog.js');
let md = fs.readFileSync(mdPath, 'utf8');
let catalog = fs.readFileSync(catalogPath, 'utf8');

const headingRe = /\*\*(.+?)\s+([0-9]{6}(?:-[0-9]{6})?)\*\*/g;
let m;
const headings = [];
function norm(s){
  return s.toLowerCase().replace(/[\u2013\u2014\-:,()\.\!\?\\/\'\"]+/g,' ').replace(/\s+/g,' ').trim();
}
function tokens(s){
  return norm(s).split(' ').filter(t=>t.length>0 && !['the','and','or','of','a','an','to','for','in','on','by'].includes(t));
}
while((m = headingRe.exec(md)) !== null){
  const raw = m[1].trim();
  const codes = m[2].split('-');
  headings.push({ raw, codes, key: norm(raw), toks: tokens(raw) });
}

const objRe = /\{\s*name:\s*"([^\"]+?)",([\s\S]*?)\}/g;
let match;
let replacements = [];
let applied = 0;

function findBestMatch(name){
  const nameKey = norm(name.replace(/\b(1a|1b|2a|2b)\b/,'').replace(/\b1-2\b/,'').trim());
  const nameToks = tokens(name);
  let best = null;
  for(const h of headings){
    const inter = nameToks.filter(t=>h.toks.includes(t)).length;
    const score = inter / Math.max(1, Math.min(nameToks.length, h.toks.length));
    if(score >= 0.6){
      if(!best || score > best.score) best = {h, score, inter};
    }
  }
  return best ? best.h : null;
}

while((match = objRe.exec(catalog)) !== null){
  const full = match[0];
  const name = match[1];
  const body = match[2];
  if(/courseCode\s*:/i.test(body)) continue;
  const best = findBestMatch(name);
  if(!best) continue;
  // decide which code to use
  let code = null;
  // find trailing numeric part
  const numMatch = name.match(/(\d+)(?:a|b)?\s*$/i);
  if(best.codes.length === 1) code = best.codes[0];
  else if(numMatch){
    const n = parseInt(numMatch[1],10);
    code = (n % 2 === 1) ? best.codes[0] : best.codes[1];
  } else {
    const letterMatch = name.match(/(\d+)([ab])$/i);
    if(letterMatch){
      code = (letterMatch[1] % 2 === 1) ? best.codes[0] : best.codes[1];
    } else {
      code = best.codes[0];
    }
  }
  const insert = ` courseCode: "${code}",`;
  const newFull = full.replace(/(name:\s*"[^"]+?",)/, `$1${insert}`);
  if(newFull !== full){
    replacements.push({ from: full, to: newFull });
    applied++;
  }
}

let out = catalog;
for(const r of replacements){
  out = out.replace(r.from, r.to);
}

if(applied === 0){
  console.log('No fuzzy updates applied (no confident matches).');
} else {
  fs.writeFileSync(catalogPath, out, 'utf8');
  console.log(`Applied ${applied} fuzzy courseCode insertions to ${catalogPath}`);
}
const fs = require('fs');
const path = require('path');
const mdPath = path.join(__dirname, '..', 'Pathways', 'Course Catalog 2025-2026.md');
const catalogPath = path.join(__dirname, '..', 'Pathways', 'catalog.js');
let md = fs.readFileSync(mdPath, 'utf8');
let catalog = fs.readFileSync(catalogPath, 'utf8');

const headingRe = /\*\*(.+?)\s+([0-9]{6}(?:-[0-9]{6})?)\*\*/g;
let m;
const headings = [];
function norm(s){
  return s.toLowerCase().replace(/[\u2013\u2014\-:,()\.\!\?\\/\'\"]+/g,' ').replace(/\s+/g,' ').trim();
}
function tokens(s){
  return norm(s).split(' ').filter(t=>t.length>0 && !['the','and','or','of','a','an','to','for','in','on','by'].includes(t));
}
while((m = headingRe.exec(md)) !== null){
  const raw = m[1].trim();
  const codes = m[2].split('-');
  headings.push({ raw, codes, key: norm(raw), toks: tokens(raw) });
}

const objRe = /\{\s*name:\s*"([^"]+?)",([\s\S]*?)\}/g;
let match;
let replacements = [];
let applied = 0;

function findBestMatch(name){
  const nameKey = norm(name.replace(/\b(1a|1b|2a|2b)\b/,'').replace(/\b1-2\b/,'').trim());
  const nameToks = tokens(name);
  let best = null;
  for(const h of headings){
    const inter = nameToks.filter(t=>h.toks.includes(t)).length;
    const score = inter / Math.max(1, Math.min(nameToks.length, h.toks.length));
    if(score >= 0.6){
      if(!best || score > best.score) best = {h, score, inter};
    }
  }
  return best ? best.h : null;
}

while((match = objRe.exec(catalog)) !== null){
  const full = match[0];
  const name = match[1];
  const body = match[2];
  if(/courseCode\s*:/i.test(body)) continue;
  const best = findBestMatch(name);
  if(!best) continue;
  // decide which code to use
  let code = null;
  // find trailing numeric part
  const numMatch = name.match(/(\d+)(?:a|b)?\s*$/i);
  if(best.codes.length === 1) code = best.codes[0];
  else if(numMatch){
    const n = parseInt(numMatch[1],10);
    code = (n % 2 === 1) ? best.codes[0] : best.codes[1];
  } else {
    const letterMatch = name.match(/(\d+)([ab])$/i);
    if(letterMatch){
      code = (letterMatch[1] % 2 === 1) ? best.codes[0] : best.codes[1];
    } else {
      code = best.codes[0];
    }
  }
  const insert = ` courseCode: "${code}",`;
  const newFull = full.replace(/(name:\s*"[^"]+?",)/, `$1${insert}`);
  if(newFull !== full){
    replacements.push({ from: full, to: newFull });
    applied++;
  }
}

let out = catalog;
for(const r of replacements){
  out = out.replace(r.from, r.to);
}

if(applied === 0){
  console.log('No fuzzy updates applied (no confident matches).');
} else {
  fs.writeFileSync(catalogPath, out, 'utf8');
  console.log(`Applied ${applied} fuzzy courseCode insertions to ${catalogPath}`);
}
const fs = require('fs');
const path = require('path');
const mdPath = path.join(__dirname, '..', 'Pathways', 'Course Catalog 2025-2026.md');
const catalogPath = path.join(__dirname, '..', 'Pathways', 'catalog.js');
let md = fs.readFileSync(mdPath, 'utf8');
let catalog = fs.readFileSync(catalogPath, 'utf8');

const headingRe = /\*\*(.+?)\s+([0-9]{6}(?:-[0-9]{6})?)\*\*/g;
let m;
const headings = [];
function norm(s){
  return s.toLowerCase().replace(/[\u2013\u2014\-:,()\.!?\\/\'\"]+/g,' ').replace(/\s+/g,' ').trim();
}
function tokens(s){
  return norm(s).split(' ').filter(t=>t.length>0 && !['the','and','or','of','a','an','to','for','in','on','by'].includes(t));
}
while((m = headingRe.exec(md)) !== null){
  const raw = m[1].trim();
  const codes = m[2].split('-');
  headings.push({ raw, codes, key: norm(raw), toks: tokens(raw) });
}

const objRe = /\{\s*name:\s*"([^"]+?)",([\s\S]*?)\}/g;
let match;
let replacements = [];
let applied = 0;

function findBestMatch(name){
  const nameKey = norm(name.replace(/\b(1a|1b|2a|2b)\b/,'').replace(/\b1-2\b/,'').trim());
  const nameToks = tokens(name);
  let best = null;
  for(const h of headings){
    const inter = nameToks.filter(t=>h.toks.includes(t)).length;
    const score = inter / Math.max(1, Math.min(nameToks.length, h.toks.length));
    if(score >= 0.6){
      if(!best || score > best.score) best = {h, score, inter};
    }
  }
  return best ? best.h : null;
}

while((match = objRe.exec(catalog)) !== null){
  const full = match[0];
  const name = match[1];
  const body = match[2];
  if(/courseCode\s*:/i.test(body)) continue;
  const best = findBestMatch(name);
  if(!best) continue;
  // decide which code to use
  let code = null;
  // find trailing numeric part
  const numMatch = name.match(/(\d+)(?:a|b)?\s*$/i);
  if(best.codes.length === 1) code = best.codes[0];
  else if(numMatch){
    const n = parseInt(numMatch[1],10);
    code = (n % 2 === 1) ? best.codes[0] : best.codes[1];
  } else {
    // if name contains '1a' or '1b' etc
    const letterMatch = name.match(/(\d+)([ab])$/i);
    if(letterMatch){
      code = (letterMatch[1] % 2 === 1) ? best.codes[0] : best.codes[1];
    } else {
      // fallback to first
      code = best.codes[0];
    }
  }
  const insert = ` courseCode: "${code}",