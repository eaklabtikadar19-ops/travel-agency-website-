const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/gallery.html';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Remove ImageTrail CSS link and section
const trailStart = content.indexOf('<!-- Image Trail CSS -->');
const trailEnd = content.indexOf('</script>', trailStart) + 9;

if (trailStart !== -1 && trailEnd !== -1) {
    content = content.substring(0, trailStart) + content.substring(trailEnd);
}

// 2. Change endless gallery title to be the main page title
content = content.replace(
    /<div class="section-tag".*?>✦ THE FULL COLLECTION<\/div>/,
    '<div class="section-tag" style="color: var(--ch-gold);">✦ MEMORIES IN MOTION</div>'
);
content = content.replace(
    /<h2 class="section-title" style="color: #1a1a1a; font-family: var(--font-heading); font-size: 36px; margin-top: 12px;">Browse Our Photos<\/h2>/,
    '<h1 class="section-title" style="color: #1a1a1a; font-family: var(--font-heading); font-size: 48px; margin-top: 12px;">Our Gallery</h1>'
);

// 3. Make the lightbox even more full-screen
content = content.replace(
    /max-width: 90vw;\s*max-height: 90vh;/,
    'max-width: 95vw;\n            max-height: 95vh;'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Removed Image Trail section and updated endless gallery title.");
