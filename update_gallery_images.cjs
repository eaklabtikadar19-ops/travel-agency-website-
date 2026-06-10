const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/gallery.html';
let content = fs.readFileSync(filePath, 'utf-8');

const newImages = [];
for (let i = 1; i <= 24; i++) {
    newImages.push(`            '/images/gallery (${i}).jpg'`);
}

const imagesStr = `const images = [\n${newImages.join(',\n')}\n        ];`;

content = content.replace(/const images = \[[\s\S]*?\];/, imagesStr);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Updated images in gallery.html");
