const fs = require('fs');

// 1. Remove branches from all HTML files
const htmlFiles = [
    'e:/ACTUAL PROJECTS/calling hills/index.html',
    'e:/ACTUAL PROJECTS/calling hills/destinations.html',
    'e:/ACTUAL PROJECTS/calling hills/packages.html',
    'e:/ACTUAL PROJECTS/calling hills/about.html',
    'e:/ACTUAL PROJECTS/calling hills/gallery.html',
    'e:/ACTUAL PROJECTS/calling hills/contact.html',
    'e:/ACTUAL PROJECTS/calling hills/treks.html'
];

htmlFiles.forEach(htmlPath => {
    if (fs.existsSync(htmlPath)) {
        let content = fs.readFileSync(htmlPath, 'utf-8');
        
        // Remove tree-branches-bg
        content = content.replace(/<div class="tree-branches-bg"><\/div>\s*/g, '');

        // Cache bust CSS
        content = content.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
        fs.writeFileSync(htmlPath, content, 'utf-8');
    }
});

// 2. Adjust the shader in CSS to be "little" (more subtle)
const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// The user wants the shader effect to be "little" (subtle).
// Let's reduce the alpha channels slightly to make the green glow more delicate.
cssContent = cssContent.replace(
    /\.ambient-gradient-bg\s*\{[\s\S]*?background:\s*linear-gradient\([\s\S]*?\);/,
    `.ambient-gradient-bg {
    position: fixed;
    top: 0; 
    left: 0; 
    width: 100vw; 
    height: 100vh;
    z-index: -2;
    background: linear-gradient(
        135deg, 
        rgba(244, 242, 238, 1) 0%, 
        rgba(216, 226, 214, 0.4) 25%, 
        rgba(48, 109, 41, 0.05) 50%, 
        rgba(216, 226, 214, 0.3) 75%, 
        rgba(244, 242, 238, 1) 100%
    );`
);

// We should also remove .tree-branches-bg completely from CSS just to clean up.
cssContent = cssContent.replace(
    /\.tree-branches-bg\s*\{[\s\S]*?z-index:\s*-1;\s*\}/,
    ''
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');

console.log("Removed tree branches and made gradient shader more subtle.");
