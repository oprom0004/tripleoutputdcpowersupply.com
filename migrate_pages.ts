import fs from 'fs';
import path from 'path';

const SRC_PAGES_DIR = path.join(process.cwd(), '_old_vite', 'src', 'pages');
const APP_DIR = path.join(process.cwd(), 'src', 'app');
const COMPONENTS_DIR = path.join(process.cwd(), 'src', 'components', 'pages');

// App.tsx mapping to know the exact routing paths
const routeMapping: Record<string, string> = {
    'EtmSeries.tsx': 'etm-series',
    'HowToChoose.tsx': 'how-to-choose',
    'PricingGuide.tsx': 'pricing-guide',
    'WhereToBuy.tsx': 'where-to-buy',
    'ApplicationsHub.tsx': 'applications',
    'OpAmpTesting.tsx': 'applications/op-amp-testing',
    'MixedSignal.tsx': 'applications/mixed-signal-pcb-design',
    'IoTDevice.tsx': 'applications/iot-device-power-profiling',
    'Automotive.tsx': 'applications/automotive-electronics',
    'Education.tsx': 'applications/educational-university-labs',
    'HowToUseHub.tsx': 'how-to-use',
    'SeriesTracking.tsx': 'how-to-use/series-tracking-bipolar-supply',
    'ParallelMode.tsx': 'how-to-use/parallel-mode-high-current',
    'SCPIProgramming.tsx': 'how-to-use/scpi-programming-automation',
    'OvpOcp.tsx': 'how-to-use/setting-ovp-ocp-correctly',
    'GroundLoops.tsx': 'how-to-use/minimizing-ground-loops',
    'ResourcesHub.tsx': 'resources',
    'SelectionGuide.tsx': 'selection-guide',
    'Glossary.tsx': 'resources/glossary-power-supply-terms',
    'Downloads.tsx': 'resources/download-center',
    'ComparisonsHub.tsx': 'comparisons',
    'RigolDP832Alternative.tsx': 'comparisons/rigol-dp832-alternative',
    'AgilentE3631AAlternative.tsx': 'comparisons/agilent-e3631a-alternative',
    'ItechAlternative.tsx': 'comparisons/itech-it6300-alternative',
    'AboutUs.tsx': 'about-us',
    'PrivacyPolicy.tsx': 'privacy-policy',
    'TermsOfService.tsx': 'terms-of-service',
};

// Create directories if they don't exist
if (!fs.existsSync(COMPONENTS_DIR)) {
    fs.mkdirSync(COMPONENTS_DIR, { recursive: true });
}

fs.readdirSync(SRC_PAGES_DIR).forEach(file => {
    if (file === 'Home.tsx') return; // Handled

    const sourcePath = path.join(SRC_PAGES_DIR, file);
    if (!fs.statSync(sourcePath).isFile()) return;

    const content = fs.readFileSync(sourcePath, 'utf8');
    const route = routeMapping[file];

    if (!route) {
        console.log(`Skipping ${file} - no route mapped`);
        return;
    }

    // 1. Extract title for metadata
    let titleMatch = content.match(/document\.title\s*=\s*(['"`])(.*?)\1/);
    let pageTitle = titleMatch ? titleMatch[2] : file.replace('.tsx', '');

    // Also support useEffect(() => { document.title= ... }, [])
    let newContent = content.replace(/import\s+React.*?use(Effect|State|Location|Memo|Callback).*?['"];?/g, "import React from 'react';");
    // Some files have different imports, let's just do an aggressive replace of document.title
    newContent = newContent.replace(/useEffect\(\(\)\s*=>\s*\{[\s\n]*document\.title\s*=\s*(?:'|"|`)[^'"`]+(?:'|"|`);?[\s\n]*\},\s*\[\]\);?/g, '');
    newContent = newContent.replace(/const location = useLocation\(\);?/g, '');


    // 2. Tweak Link formats
    newContent = newContent.replace(/import {([^}]+)} from 'react-router-dom';?/g, (match, imports) => {
        return "import Link from 'next/link';";
    });
    newContent = newContent.replace(/<Link\s+to=/g, '<Link href=');

    // Handle HashLink
    newContent = newContent.replace(/<HashLink\s+to=/g, '<Link href=');
    newContent = newContent.replace(/<\/HashLink>/g, '</Link>');

    // 3. Write purely the component in page to components dir to enable reusability
    const componentName = file.replace('.tsx', '');
    const targetComponentPath = path.join(COMPONENTS_DIR, file);

    // Change export default or export const to a clean component if needed
    // For simplicity, we just keep it as is, but we will write it directly into app/[route]/page.tsx
    // Actually, separating into components/pages/ and importing in app/[route]/page.tsx is better "分离" (Separation)
    fs.writeFileSync(targetComponentPath, newContent);

    // 4. Create App Router Page
    const targetPageDir = path.join(APP_DIR, route);
    if (!fs.existsSync(targetPageDir)) {
        fs.mkdirSync(targetPageDir, { recursive: true });
    }

    const isDefaultExport = content.includes(`export default function ${componentName}`) || content.includes(`export default ${componentName}`);
    const importStatement = isDefaultExport
        ? `import ${componentName} from '@/components/pages/${componentName}';`
        : `import { ${componentName} } from '@/components/pages/${componentName}';`;

    const pageComponent = `import type { Metadata } from 'next';
${importStatement}

export const metadata: Metadata = {
  title: '${pageTitle.replace(/'/g, "\\'")}',
  // description: 'Individual description here...',
};

export default function Page() {
  return <${componentName} />;
}
`;

    fs.writeFileSync(path.join(targetPageDir, 'page.tsx'), pageComponent);
    console.log(`Migrated ${file} -> /${route} (TDK separate, Component isolated)`);
});
