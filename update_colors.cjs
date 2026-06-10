const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Both sections to --ch-cream-mid
content = content.replace(
    /\.destinations-section\s*\{\s*background:\s*var\(--ch-cream-light\);/g,
    '.destinations-section {\n            background: var(--ch-cream-mid);'
);
content = content.replace(
    /\.packages-section\s*\{\s*background:\s*var\(--ch-cream-light\);/g,
    '.packages-section {\n            background: var(--ch-cream-mid);'
);

// 2. Package cards to be more beige instead of white
content = content.replace(
    /\.pkg-card\s*\{\s*background:\s*var\(--ch-mist\);/g,
    '.pkg-card {\n            background: var(--ch-cream);'
);

// 3. Himalayan section opacity lower (Prayer flags are slightly translucent fabric)
content = content.replace(
    /\.hanging-card\s*\{([\s\S]*?)transition:\s*transform/g,
    '.hanging-card {$1opacity: 0.92;\n    transition: transform'
);

// On hover, make hanging card fully opaque
content = content.replace(
    /\.hanging-card:hover\s*\{([\s\S]*?)z-index:\s*20;/g,
    '.hanging-card:hover {$1z-index: 20;\n    opacity: 1;'
);

// Also change the white prayer flag to a softer beige/cream so it's not stark white
content = content.replace(
    /\.flag-white\s*\{\s*background:\s*#f5f5f5;/g,
    '.flag-white { background: var(--ch-cream);'
);


fs.writeFileSync(filePath, content, 'utf-8');
console.log("Updated colors and opacities in main.css");
