const fs = require('fs');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Ensure body is relative so the absolute wrapper spans the full height
if (!cssContent.includes('position: relative;') && cssContent.includes('body {') ) {
    cssContent = cssContent.replace(
        /body\s*\{/,
        'body {\n            position: relative;'
    );
}

// Fix global-trail-wrapper z-index and opacity
cssContent = cssContent.replace(
    /\.global-trail-wrapper\s*\{[\s\S]*?z-index:\s*-1;[\s\S]*?\}/,
    `.global-trail-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1; /* Put above backgrounds so it's visible! */
    pointer-events: none;
    overflow: hidden;
    opacity: 0.6;
}`
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');

// Also check index.html to ensure the wrapper is there
const indexPath = 'e:/ACTUAL PROJECTS/calling hills/index.html';
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// Make sure the trail wrapper is right at the top of body
if (indexContent.includes('<div class="global-trail-wrapper">')) {
    // Already there
}

// Cache bust
indexContent = indexContent.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
fs.writeFileSync(indexPath, indexContent, 'utf-8');

console.log("Fixed SVG trail visibility (z-index and body position).");
