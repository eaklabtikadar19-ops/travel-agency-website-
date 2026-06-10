const fs = require('fs');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Reduce branches opacity even more
cssContent = cssContent.replace(
    /opacity:\s*0\.07;\s*\/\*[\s\S]*?\*\//g,
    'opacity: 0.03; /* Extremely subtle opacity */'
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');

// Cache bust all HTML files
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
        content = content.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
        fs.writeFileSync(htmlPath, content, 'utf-8');
    }
});

console.log("Lowered branch opacity and cache busted all HTML files.");
