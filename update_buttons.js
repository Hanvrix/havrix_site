const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'app', 'services');

const serviceFolders = [
  'digital-transformation',
  'web-app-development',
  'custom-development',
  'cms-ecommerce-erp',
  'support'
];

serviceFolders.forEach(folder => {
  const filePath = path.join(servicesDir, folder, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the Final CTA section and replace the Button's className
    const finalCTARegex = /({\/\* Final CTA \*\/}[\s\S]*?<Button variant="white" className=")([^"]+)(")/;
    
    content = content.replace(finalCTARegex, (match, prefix, oldClass, suffix) => {
      console.log(`Updated button in ${folder}`);
      return prefix + "px-12 shadow-2xl shadow-brand-primary/20" + suffix;
    });
    
    fs.writeFileSync(filePath, content);
  }
});
console.log('Update complete.');
