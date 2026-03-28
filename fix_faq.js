const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace(/const FAQ = \(\) => \{[\s\S]*?<\//section >\n  \); \n\};/g, '');
c = c.replace(/export default function Page\(\) \{/g, 'import { FAQ } from "@/components/pages/FAQ";\n\nexport default function Page() {');

fs.writeFileSync('src/app/page.tsx', c);
console.log('Fixed FAQ import');
