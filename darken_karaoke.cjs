const fs = require('fs');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Update color to darker green for the karaoke text
cssContent = cssContent.replace(
    /\.dest-summary-text\s*\{[\s\S]*?color:\s*var\(--ch-text-mid\);\s*[\s\S]*?\}/,
    `.dest-summary-text {
            padding: 24px;
            font-family: var(--font-body);
            font-size: 16px;
            line-height: 1.6;
            color: var(--ch-forest-deep); 
            display: flex;
            flex-direction: column;
            gap: 16px;
        }`
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');

const destPath = 'e:/ACTUAL PROJECTS/calling hills/destinations.html';
let destContent = fs.readFileSync(destPath, 'utf-8');
// Cache bust
destContent = destContent.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
fs.writeFileSync(destPath, destContent, 'utf-8');

console.log("Updated karaoke text color to darker.");
