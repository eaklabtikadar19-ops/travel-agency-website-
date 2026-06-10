const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let content = fs.readFileSync(filePath, 'utf-8');

// Update Discover Himalayas section
content = content.replace(
    /\.destinations-section\s*\{\s*background:\s*var\(--ch-cream-mid\);/g,
    '.destinations-section {\n            background: var(--ch-cream-light);'
);

// Update Signature Packages section is already --ch-cream-light, but let's double check. It is.

// Update .pkg-card shadow
// It currently has border: 1px solid rgba(48, 109, 41, 0.12);
content = content.replace(
    /(\.pkg-card\s*\{[\s\S]*?transition:\s*all\s*0\.4s\s*var\(--ease-out-expo\);)\s*\}/,
    '$1\n            box-shadow: 0 12px 32px rgba(13, 83, 14, 0.06), 0 4px 12px rgba(0,0,0,0.04);\n        }'
);

// Update .hanging-card shadow
content = content.replace(
    /box-shadow:\s*2px\s*10px\s*20px\s*rgba\(0,0,0,0\.3\);/g,
    'box-shadow: 0 15px 35px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.1);'
);

// For hover on hanging card:
content = content.replace(
    /box-shadow:\s*5px\s*20px\s*30px\s*rgba\(0,0,0,0\.5\);/g,
    'box-shadow: 0 25px 50px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.15);'
);


fs.writeFileSync(filePath, content, 'utf-8');
console.log("Updated shadows and backgrounds in main.css");
