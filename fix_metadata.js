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

function fixPageMetadata(filePath) {
    if (!filePath.endsWith('page.tsx')) return;

    // Calculate relative route (e.g. /where-to-buy)
    let relativePath = filePath.replace(srcAppDir, '').replace(/\\/g, '/').replace(/\/page\.tsx$/, '');
    if (relativePath === '') relativePath = '/';

    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. Remove redundancy in title
    // e.g. title: 'Where to Buy | Triple Output DC Power Supply'
    // should become title: 'Where to Buy'
    content = content.replace(/title:\s*['"](.*?)(\s*\|\s*Triple Output DC Power Supply)['"]/g, "title: '$1'");

    // 2. Add alternates and openGraph to the metadata object if they don't exist
    // We'll safely inject it inside `export const metadata: Metadata = {`
    if (content.includes('export const metadata: Metadata = {') && !content.includes('alternates: {')) {
        const metaRouteText = `
  alternates: { canonical: '${relativePath}' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '${relativePath}',
  },`;

        content = content.replace('export const metadata: Metadata = {', `export const metadata: Metadata = {${metaRouteText}`);
    }

    // 3. Specifically fix the home page's duplicates
    if (relativePath === '/') {
        content = content.replace(
            "title: 'Programmable Triple Output DC Bench Power Supply | Low Noise & High Precision'",
            "title: 'Programmable Triple Output DC Bench Power Supply', alternates: { canonical: '/' }, openGraph: { url: '/' }"
        );
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed metadata in:', relativePath);
}

walkDir(srcAppDir, fixPageMetadata);
console.log('Done!');
