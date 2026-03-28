const fs = require('fs');
const dir = 'src/components/pages';
fs.readdirSync(dir).forEach(f => {
    const p = dir + '/' + f;
    let content = fs.readFileSync(p, 'utf8');

    // Fix the duplicate react strings
    content = content.replace(/import React from 'react';react';/g, "import React from 'react';");
    content = content.replace(/import React from 'react';react";/g, "import React from 'react';");
    content = content.replace(/import React from 'react';react\";/g, "import React from 'react';");
    // Also remove any remaining useLocation or other missing imports if not cleaned carefully
    content = content.replace(/const location = useLocation\(\);?/g, "");

    fs.writeFileSync(p, content);
});
console.log("Fixed syntax");
