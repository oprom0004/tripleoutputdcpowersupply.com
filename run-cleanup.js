const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CONFIG = {
    targetDirs: ['src/app', 'src/components'],
    excludeDirs: ['node_modules', '.next', '.git', 'dist', 'build', '_old_vite'],
    excludeFiles: ['layout.tsx', 'globals.css', 'next.config.ts', 'tailwind.config.ts', 'tsconfig.json']
};

const dryRun = process.argv.includes('--dry-run');
const scriptPath = path.resolve(__dirname, '../rockpoolsydney.com/scripts/remove-ai-flavor.js');

function getAllTSXFiles(dirPath, files = []) {
    if (!fs.existsSync(dirPath)) return files;
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (!CONFIG.excludeDirs.includes(item)) getAllTSXFiles(fullPath, files);
        } else if ((item.endsWith('.tsx') || item.endsWith('.ts')) && !CONFIG.excludeFiles.includes(item)) {
            files.push(fullPath);
        }
    }
    return files;
}

let allFiles = [];
for (const dir of CONFIG.targetDirs) {
    allFiles = allFiles.concat(getAllTSXFiles(dir));
}

console.log(`\n找到 ${allFiles.length} 个文件\n`);
if (dryRun) console.log('🔍 DRY RUN 模式 - 不会实际修改文件\n');

for (const file of allFiles) {
    try {
        const args = dryRun ? ' --dry-run' : '';
        execSync(`node "${scriptPath}" "${file}"${args}`, { stdio: 'inherit', encoding: 'utf8' });
    } catch (e) {
        console.error('处理失败:', file);
    }
}
console.log('\n✅ 扫描完成');
