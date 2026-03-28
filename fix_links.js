const fs = require('fs');
const dir = 'src/components/pages';
fs.readdirSync(dir).forEach(f => {
    const p = dir + '/' + f;
    let content = fs.readFileSync(p, 'utf8');

    // Replace React Router 'to={}' or 'to=""' to Next.js 'href={}'
    content = content.replace(/\bto=\{/g, "href={");
    content = content.replace(/\bto="/g, "href=\"");
    content = content.replace(/\bto='/g, "href=\'");

    // Also remove any remaining useLocation or HashLink
    content = content.replace(/<HashLink/g, "<Link");
    content = content.replace(/<\/HashLink>/g, "</Link>");
    content = content.replace(/import { Link as ScrollLink } from 'react-scroll';/g, "");

    fs.writeFileSync(p, content);
});
console.log("Fixed Link hrefs");
