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

const finalUpdateMap = {
    'src/app/applications/op-amp-testing/page.tsx': "Triple Output DC Power Supply for Op-Amp & Bipolar Testing",
    'src/app/applications/mixed-signal-pcb-design/page.tsx': "Mixed-Signal PCB Design: Clean Rails With 3-Output Supplies",
    'src/app/applications/iot-device-power-profiling/page.tsx': "Precision IoT Power Profiling with Triple Output Supplies",
    'src/app/applications/automotive-electronics/page.tsx': "Automotive ECU Testing with Triple Output DC Bench Power",
    'src/app/applications/educational-university-labs/page.tsx': "Precision Bench Power for University & Research Labs",
    'src/app/how-to-use/series-tracking-bipolar-supply/page.tsx': "Series Tracking: Dual ±V Rails on Triple Output Supplies",
    'src/app/how-to-use/parallel-mode-high-current/page.tsx': "Parallel Tracking: Max Current on Triple Output DC Supplies",
    'src/app/how-to-use/setting-ovp-ocp-correctly/page.tsx': "Safe Operation: OVP & OCP on Triple Output DC Bench Power",
    'src/app/how-to-use/minimizing-ground-loops/page.tsx': "Eliminate Ground Loops in 3-Channel Power Testing",
    'src/app/comparisons/page.tsx': "Compare Leading Triple Output DC Power Supply Top Picks",
    'src/app/resources/page.tsx': "Triple Output DC Power Supply Datasheets & User Manuals",
    'src/app/resources/glossary-power-supply-terms/page.tsx': "Glossary of Triple Output DC Power Supply Technical Terms",
    'src/app/resources/download-center/page.tsx': "Download PC Software for Triple Output DC Power Supplies"
};

function applyFinalTitles() {
    for (const [relPath, newTitle] of Object.entries(finalUpdateMap)) {
        const filePath = path.resolve(__dirname, relPath.replace(/\//g, path.sep));
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf-8');
            // Matches the simple title we set previously, handling single and double quotes
            content = content.replace(/title:\s*['"](.*?)['"]/, `title: '${newTitle}'`);
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log('Updated title in:', relPath);
        } else {
            console.log('File not found:', relPath);
        }
    }
}

applyFinalTitles();
console.log('Final Title Optimization Done!');
