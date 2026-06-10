const fs = require('fs');
const path = require('path');

const files = [
    'e:/ACTUAL PROJECTS/calling hills/index.html',
    'e:/ACTUAL PROJECTS/calling hills/gallery.html'
];

files.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        // Replace main.css with cache-busting version
        content = content.replace(
            /href="\/css\/main\.css(\?v=\d+)?"/g,
            'href="/css/main.css?v=' + Date.now() + '"'
        );
        fs.writeFileSync(filePath, content, 'utf-8');
    }
});

console.log("Cache busted for main.css");
