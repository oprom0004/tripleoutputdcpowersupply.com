const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const p1 = c.split('const FAQ = () => {')[0];
const p2 = c.split('export default function Page() {')[1];

const finalContent = p1 + 'import { FAQ } from "@/components/pages/FAQ";\n\nexport default function Page() {' + p2;

fs.writeFileSync('src/app/page.tsx', finalContent);
console.log('Fixed FAQ flawlessly');
