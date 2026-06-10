const fs = require('fs');

const indexPath = 'e:/ACTUAL PROJECTS/calling hills/index.html';
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// 1. Remove the global trail wrapper HTML
indexContent = indexContent.replace(
    /<!-- Global Winding Trekking Trail SVG -->\s*<div class="global-trail-wrapper">[\s\S]*?<\/div>\s*/g,
    ''
);

// 2. Remove the associated JS
indexContent = indexContent.replace(
    /<script>\s*document\.addEventListener\('DOMContentLoaded', \(\) => \{\s*const wrapper = document\.querySelector\('\.global-trail-wrapper'\);[\s\S]*?<\/script>\s*/g,
    ''
);

fs.writeFileSync(indexPath, indexContent, 'utf-8');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// 3. Remove the CSS classes
cssContent = cssContent.replace(
    /\.global-trail-wrapper\s*\{[\s\S]*?\}\s*/g,
    ''
);
cssContent = cssContent.replace(
    /\.global-trail-svg\s*\{[\s\S]*?\}\s*/g,
    ''
);

// 4. Remove position: relative from body if it was added for this
cssContent = cssContent.replace(
    /body\s*\{\s*position:\s*relative;\s*/g,
    'body {\n            '
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');

// Cache bust
indexContent = indexContent.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
fs.writeFileSync(indexPath, indexContent, 'utf-8');

console.log("Completely removed the global SVG trail.");
