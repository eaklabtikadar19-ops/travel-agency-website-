const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Upgrade the default hanging-card shadow to be much deeper and directional
content = content.replace(
    /box-shadow:\s*0\s*15px\s*35px\s*rgba\(0,0,0,0\.15\),\s*0\s*5px\s*15px\s*rgba\(0,0,0,0\.1\);/g,
    'box-shadow: inset 0 2px 5px rgba(255,255,255,0.15), -15px 25px 40px rgba(0,0,0,0.25), -5px 10px 15px rgba(0,0,0,0.15);'
);

// 2. Upgrade the hover shadow to be even more dramatic
content = content.replace(
    /box-shadow:\s*0\s*25px\s*50px\s*rgba\(0,0,0,0\.25\),\s*0\s*10px\s*20px\s*rgba\(0,0,0,0\.15\);/g,
    'box-shadow: inset 0 2px 5px rgba(255,255,255,0.2), -25px 40px 60px rgba(0,0,0,0.35), -10px 15px 25px rgba(0,0,0,0.2);'
);

// 3. Add subtle gradients to the flags so they don't look like flat solid colors
// Blue
content = content.replace(
    /\.flag-blue\s*\{\s*background:\s*#0d47a1;\s*color:\s*#ffffff;\s*\}/g,
    '.flag-blue { background: linear-gradient(135deg, #1565c0, #0d47a1); color: #ffffff; }'
);
// White (Cream)
content = content.replace(
    /\.flag-white\s*\{\s*background:\s*var\(--ch-cream\);\s*color:\s*#1a1a1a;\s*\}/g,
    '.flag-white { background: linear-gradient(135deg, #ffffff, var(--ch-cream)); color: #1a1a1a; }'
);
// Red
content = content.replace(
    /\.flag-red\s*\{\s*background:\s*#b71c1c;\s*color:\s*#ffffff;\s*\}/g,
    '.flag-red { background: linear-gradient(135deg, #d32f2f, #b71c1c); color: #ffffff; }'
);
// Green
content = content.replace(
    /\.flag-green\s*\{\s*background:\s*#1b5e20;\s*color:\s*#ffffff;\s*\}/g,
    '.flag-green { background: linear-gradient(135deg, #2e7d32, #1b5e20); color: #ffffff; }'
);
// Yellow
content = content.replace(
    /\.flag-yellow\s*\{\s*background:\s*#fbc02d;\s*color:\s*#1a1a1a;\s*\}/g,
    '.flag-yellow { background: linear-gradient(135deg, #fdd835, #fbc02d); color: #1a1a1a; }'
);

// To ensure the cards cast shadows correctly when overlapping, I'll remove the opacity hack (it kills box-shadow intensity) and just keep them at opacity 1, since the user said the shadow depth is missing, and opacity blending often flattens shadows.
content = content.replace(
    /opacity:\s*0\.92;/g,
    '/* opacity removed to restore shadow depth */'
);


fs.writeFileSync(filePath, content, 'utf-8');
console.log("Upgraded hanging cards with 3D depth and gradients.");
