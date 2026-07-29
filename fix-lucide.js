const fs = require('fs');
const path = require('path');
function kebabCase(str) { 
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase().replace(/^-/, ''); 
}
function replaceInFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      replaceInFiles(filePath);
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      const regex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/g;
      if (regex.test(content)) {
        content = content.replace(regex, (match, p1) => {
          const imports = p1.split(',').map(s => s.trim()).filter(Boolean);
          return imports.map(imp => {
            const [actual, alias] = imp.includes(' as ') ? imp.split(' as ').map(s=>s.trim()) : [imp, imp];
            return `import ${alias} from 'lucide-react/dist/esm/icons/${kebabCase(actual)}';`;
          }).join('\n');
        });
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated', filePath);
      }
    }
  });
}
replaceInFiles('src');
