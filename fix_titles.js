const fs = require('fs');
const path = require('path');

const srcAppDir = path.resolve(__dirname, 'src/app');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const titleReplacements = {
    'Triple Output DC Power Supply Pricing': 'Pricing',
    'Triple Output DC Power Supply Selection | How to Choose': 'Selection Guide',
    'Triple Output DC Power Supply Resources, Glossary & Downloads': 'Resources & Downloads',
    ' | Triple Output DC Power Supply Setup': '',
    ' | Triple Output DC Power Supply Comparison': '',
    'How to Use a Triple Output DC Power Supply | Tutorials & Guides': 'Tutorials & Guides',
    'How to Choose a Triple Output DC Power Supply': 'How to Choose',
    'Compare Triple Output DC Power Supplies': 'Compare Products',
    ' | Programmable Triple Output DC Power Supplies': ''
};

function fixPageTitles(filePath) {
    if (!filePath.endsWith('page.tsx')) return;

    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;

    // 1. Remove the hardcoded openGraph title that was injected by mistake
    // We want Next.js to automatically inherit the page title for OG
    content = content.replace(/\s*title:\s*'Triple Output DC Power Supply',/g, '');

    // 2. Clean up redundant keywords in page titles
    for (const [oldStr, newStr] of Object.entries(titleReplacements)) {
        content = content.replace(oldStr, newStr);
    }

    // 3. One generic regex pass to remove trailing/leading 'Triple Output DC Power Supply' if any others exist
    content = content.replace(/title:\s*['"]Triple Output DC Power Supply\s*\|\s*(.*?)['"]/g, "title: '$1'");

    // For the root page, we WANT it to be long, but we must use `absolute` so it doesn't get the template appended!
    if (filePath.endsWith('src\\app\\page.tsx') || filePath.endsWith('src/app/page.tsx')) {
        content = content.replace(
            "title: 'Programmable Triple Output DC Bench Power Supply'",
            "title: { absolute: 'Programmable Triple Output DC Bench Power Supply | Low Noise & High Precision' }"
        );
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('Cleaned titles in:', filePath.split('src/app')[1]);
    }
}

walkDir(srcAppDir, fixPageTitles);
console.log('Title cleanup done!');
