const fs = require('fs');
const path = require('path');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// 1. Change .pkg-card to var(--ch-green)
cssContent = cssContent.replace(
    /\.pkg-card\s*\{\s*background:\s*var\(--ch-forest\);/g,
    '.pkg-card {\n            background: var(--ch-green);'
);

// 2. Update .tree-branches-bg to be fixed and a bit darker
cssContent = cssContent.replace(
    /\.tree-branches-bg\s*\{[\s\S]*?mix-blend-mode:\s*multiply;\s*\}/,
    `.tree-branches-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-image: url('/images/pine_branches_overlay.png');
            background-position: top center;
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0.25; /* Darker than 0.15 */
            pointer-events: none;
            z-index: 10; /* Make sure it frames the content but stays under modals */
            mix-blend-mode: multiply;
        }`
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');

// 3. Inject fixed div into all HTML files and remove old absolute divs
const htmlFiles = [
    'e:/ACTUAL PROJECTS/calling hills/index.html',
    'e:/ACTUAL PROJECTS/calling hills/about.html',
    'e:/ACTUAL PROJECTS/calling hills/packages.html',
    'e:/ACTUAL PROJECTS/calling hills/destinations.html',
    'e:/ACTUAL PROJECTS/calling hills/gallery.html',
    'e:/ACTUAL PROJECTS/calling hills/contact.html'
];

htmlFiles.forEach(htmlPath => {
    if (fs.existsSync(htmlPath)) {
        let content = fs.readFileSync(htmlPath, 'utf-8');
        
        // Remove all existing instances of the tree branches div
        content = content.replace(/\s*<div class="tree-branches-bg"><\/div>/g, '');
        
        // Inject right after <body ...>
        content = content.replace(
            /(<body[^>]*>)/i,
            '$1\n    <div class="tree-branches-bg"></div>'
        );
        
        // Cache bust CSS just in case
        content = content.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
        
        fs.writeFileSync(htmlPath, content, 'utf-8');
    }
});

console.log("Updated pkg-card color to brand green and made tree branches a global fixed overlay.");
