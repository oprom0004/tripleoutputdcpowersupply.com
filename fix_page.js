const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace(/useEffect\(\(\) => \{\s*document\.title[^}]+\s*\}, \[\]\);/, '');

fs.writeFileSync('src/app/page.tsx', c);
console.log('Fixed useEffect in page.tsx');
