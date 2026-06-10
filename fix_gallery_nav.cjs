const fs = require('fs');
const path = require('path');

const dir = 'e:/ACTUAL PROJECTS/calling hills';
const files = ['index.html', 'about.html', 'contact.html', 'destinations.html', 'packages.html', 'gallery.html'];

for (const file of files) {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // 1. Remove the mini gallery from index.html
    if (file === 'index.html') {
        const miniGalleryStart = content.indexOf('<!-- ═══════════ MINI GALLERY (IMAGE TRAIL) ═══════════ -->');
        const footerStart = content.indexOf('<!-- ═══════════ SECTION 10 — FOOTER ═══════════ -->');
        
        if (miniGalleryStart !== -1 && footerStart !== -1 && miniGalleryStart < footerStart) {
            content = content.substring(0, miniGalleryStart) + content.substring(footerStart);
            console.log('Removed mini gallery from index.html');
        }
    }
    
    // 2. Ensure "Gallery" link is in the header navigation
    // First, let's remove any existing Gallery links to avoid duplicates
    content = content.replace(/\s*<li><a href="\/gallery\.html">Gallery<\/a><\/li>/g, '');
    
    // Then add it directly after the About link
    content = content.replace(
        /<li><a href="\/about\.html">About<\/a><\/li>/g,
        '<li><a href="/about.html">About</a></li>\n            <li><a href="/gallery.html">Gallery</a></li>'
    );
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated navigation in ${file}`);
}
