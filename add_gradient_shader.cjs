const fs = require('fs');

// 1. Add CSS for the animated gradient
const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

const gradientCss = `
/* Animated Ambient Gradient Background */
.ambient-gradient-bg {
    position: fixed;
    top: 0; 
    left: 0; 
    width: 100vw; 
    height: 100vh;
    z-index: -2; /* Behind the tree branches which are -1 */
    background: linear-gradient(
        135deg, 
        rgba(244, 242, 238, 1) 0%, 
        rgba(216, 226, 214, 0.6) 25%, 
        rgba(48, 109, 41, 0.08) 50%, 
        rgba(216, 226, 214, 0.4) 75%, 
        rgba(244, 242, 238, 1) 100%
    );
    background-size: 400% 400%;
    animation: gradientFlow 18s ease-in-out infinite;
    pointer-events: none;
}

@keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
`;

if (!cssContent.includes('.ambient-gradient-bg')) {
    cssContent += '\n' + gradientCss;
    fs.writeFileSync(cssPath, cssContent, 'utf-8');
}

// 2. Inject the div into HTML files
const htmlFiles = [
    'e:/ACTUAL PROJECTS/calling hills/destinations.html',
    'e:/ACTUAL PROJECTS/calling hills/packages.html',
    'e:/ACTUAL PROJECTS/calling hills/about.html',
    'e:/ACTUAL PROJECTS/calling hills/gallery.html'
];

htmlFiles.forEach(htmlPath => {
    if (fs.existsSync(htmlPath)) {
        let content = fs.readFileSync(htmlPath, 'utf-8');
        
        // Ensure we don't inject multiple times
        if (!content.includes('<div class="ambient-gradient-bg"></div>')) {
            content = content.replace(
                /<div class="tree-branches-bg"><\/div>/,
                '<div class="ambient-gradient-bg"></div>\n    <div class="tree-branches-bg"></div>'
            );
        }

        // Cache bust CSS
        content = content.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
        fs.writeFileSync(htmlPath, content, 'utf-8');
    }
});

console.log("Added automatic green gradient shader to the requested pages.");
