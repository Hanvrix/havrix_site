const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/#f59e0b/g, '#b45309');
  
  if (file.endsWith('globals.css')) {
    newContent = newContent.replace(/--brand-accent:\s*#[a-zA-Z0-9]+;/g, '--brand-accent: #b45309;');
  }

  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    changedFiles++;
    console.log('Modified:', file);
  }
});

console.log('Total files modified:', changedFiles);
