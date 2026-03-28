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

function restoreFullTitles(filePath) {
    if (!filePath.endsWith('page.tsx')) return;

    // Skip the home page which we already handled specifically
    if (filePath.endsWith('src\\app\\page.tsx') || filePath.endsWith('src/app/page.tsx')) return;

    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;

    // Restoration logic: If we find one of our previously shortened titles, put the descriptive theme back
    // but WITHOUT the pipe | and the brand name that's in layout.tsx.

    const restorations = {
        "'Pricing'": "'Triple Output DC Power Supply Pricing'",
        "'Selection Guide'": "'How to Choose a Triple Output DC Power Supply'",
        "'Resources & Downloads'": "'Triple Output DC Power Supply Resources, Glossary & Downloads'",
        "'Tutorials & Guides'": "'How to Use a Triple Output DC Power Supply | Tutorials & Guides'",
        "'How to Choose'": "'How to Choose a Triple Output DC Power Supply'",
        "'Compare Products'": "'Compare Triple Output DC Power Supplies'",
        "'Where to Buy'": "'Where to Buy | Triple Output DC Power Supply'",
        "'Terms of Service'": "'Terms of Service | Triple Output DC Power Supply'",
        "'Privacy Policy'": "'Privacy Policy | Triple Output DC Power Supply'",
        "'About Us'": "'About Us | Triple Output DC Power Supply'"
    };

    for (const [short, long] of Object.entries(restorations)) {
        content = content.replace(new RegExp(`title:\\s*${short}`, 'g'), `title: ${long}`);
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('Restored full title in:', filePath.split('src/app')[1]);
    }
}

walkDir(srcAppDir, restoreFullTitles);
console.log('Title restoration done!');
