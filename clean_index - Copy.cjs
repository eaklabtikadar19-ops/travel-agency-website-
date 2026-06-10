const fs = require('fs');
let html = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', 'utf8');

const sectionsToRemove = [
    'about', 'destinations', 'packages', 'treks', 'services', 'gallery', 'contact'
];

sectionsToRemove.forEach(secId => {
    const startRegex = new RegExp(`<section class="${secId}-section"`);
    const match = html.match(startRegex);
    if (match) {
        const start = match.index;
        const end = html.indexOf('</section>', start) + 10;
        html = html.substring(0, start) + html.substring(end);
    }
});

fs.writeFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', html);
console.log('Cleaned index.html');
