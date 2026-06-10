const fs = require('fs');
const path = require('path');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// 1. Update .pkg-card to dark green
cssContent = cssContent.replace(
    /\.pkg-card\s*\{\s*background:\s*var\(--ch-cream\);/g,
    '.pkg-card {\n            background: var(--ch-forest);' // Use --ch-forest for a dark rich green
);

// Update text colors inside .pkg-card so they are readable on dark green
// .pkg-title
cssContent = cssContent.replace(
    /\.pkg-title\s*\{\s*font-family:\s*var\(--font-heading\);\s*font-size:\s*24px;\s*font-weight:\s*600;\s*color:\s*var\(--ch-text-dark\);\s*margin-bottom:\s*8px;\s*\}/,
    '.pkg-title {\n            font-family: var(--font-heading);\n            font-size: 24px;\n            font-weight: 600;\n            color: var(--ch-mist);\n            margin-bottom: 8px;\n        }'
);

// .pkg-desc
cssContent = cssContent.replace(
    /\.pkg-desc\s*\{\s*font-size:\s*15px;\s*line-height:\s*1\.6;\s*color:\s*var\(--ch-text-mid\);\s*margin-bottom:\s*24px;\s*\}/,
    '.pkg-desc {\n            font-size: 15px;\n            line-height: 1.6;\n            color: var(--ch-mist-dim);\n            margin-bottom: 24px;\n        }'
);

// .pkg-price amount
cssContent = cssContent.replace(
    /\.pkg-price\s*\.amount\s*\{\s*font-family:\s*var\(--font-heading\);\s*font-size:\s*24px;\s*font-weight:\s*700;\s*color:\s*var\(--ch-text-dark\);\s*\}/,
    '.pkg-price .amount {\n            font-family: var(--font-heading);\n            font-size: 24px;\n            font-weight: 700;\n            color: var(--ch-gold);\n        }'
);

// .pkg-price label
cssContent = cssContent.replace(
    /\.pkg-price\s*\.label\s*\{\s*font-size:\s*12px;\s*color:\s*var\(--ch-text-mid\);\s*text-transform:\s*uppercase;\s*letter-spacing:\s*1px;\s*\}/,
    '.pkg-price .label {\n            font-size: 12px;\n            color: var(--ch-mist-dim);\n            text-transform: uppercase;\n            letter-spacing: 1px;\n        }'
);

// .pkg-duration
cssContent = cssContent.replace(
    /\.pkg-duration\s*\{\s*font-family:\s*var\(--font-body\);\s*font-size:\s*13px;\s*font-weight:\s*600;\s*color:\s*var\(--ch-green\);\s*background:\s*rgba\(48,\s*109,\s*41,\s*0\.08\);/g,
    '.pkg-duration {\n            font-family: var(--font-body);\n            font-size: 13px;\n            font-weight: 600;\n            color: var(--ch-mist);\n            background: rgba(255, 255, 255, 0.1);'
);

// Add tree-branches-bg class
const treeBranchesCss = `
        .tree-branches-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/images/pine_branches_overlay.png');
            background-position: top center;
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0.15;
            pointer-events: none;
            z-index: 1;
            mix-blend-mode: multiply;
        }
        /* Make sure containers stay above the background */
        .packages-section .pkg-container,
        .destinations-section .dest-container,
        .page-header {
            position: relative;
            z-index: 2;
        }
`;

if (!cssContent.includes('.tree-branches-bg')) {
    cssContent += '\n' + treeBranchesCss;
}

fs.writeFileSync(cssPath, cssContent, 'utf-8');

// 2. Inject tree branches div into HTML files
const htmlFiles = [
    'e:/ACTUAL PROJECTS/calling hills/index.html',
    'e:/ACTUAL PROJECTS/calling hills/packages.html',
    'e:/ACTUAL PROJECTS/calling hills/destinations.html'
];

htmlFiles.forEach(htmlPath => {
    if (fs.existsSync(htmlPath)) {
        let content = fs.readFileSync(htmlPath, 'utf-8');
        
        // Ensure cache bust
        content = content.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
        
        if (htmlPath.includes('index.html')) {
            // Add to Signature Packages section
            content = content.replace(
                /(<section class="packages-section".*?>)/,
                '$1\n        <div class="tree-branches-bg"></div>'
            );
        } else {
            // For packages.html and destinations.html, we add it to their main header/content section
            // Looking for <main> or the first <section> after nav
            if (!content.includes('tree-branches-bg')) {
                content = content.replace(
                    /(<main.*?>|<section.*?>)/i,
                    '$1\n        <div class="tree-branches-bg"></div>'
                );
            }
        }
        
        fs.writeFileSync(htmlPath, content, 'utf-8');
    }
});

console.log("Updated package cards and added tree branches background.");
