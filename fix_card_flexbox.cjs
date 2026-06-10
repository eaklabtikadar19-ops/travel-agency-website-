const fs = require('fs');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Update .trek-title
cssContent = cssContent.replace(
    /\.trek-title\s*\{[\s\S]*?line-height:\s*1\.3;\s*\}/,
    `.trek-title {
            font-family: var(--font-heading);
            font-size: 20px;
            font-weight: 600;
            color: var(--ch-mist);
            line-height: 1.3;
            flex: 1; /* Allow title to wrap and take up remaining space */
            word-wrap: break-word; /* Ensure extremely long words wrap safely */
        }`
);

// Update .trek-difficulty
cssContent = cssContent.replace(
    /\.trek-difficulty\s*\{[\s\S]*?white-space:\s*nowrap;\s*\}/,
    `.trek-difficulty {
            font-family: var(--font-body);
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            padding: 4px 8px;
            border-radius: 4px;
            white-space: nowrap;
            flex-shrink: 0; /* Prevent the pill from being squished! */
        }`
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');
console.log("Fixed flexbox squishing on trek cards.");
