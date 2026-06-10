const fs = require('fs');
const path = require('path');

const dir = 'e:/ACTUAL PROJECTS/calling hills';
const files = ['index.html', 'about.html', 'contact.html', 'destinations.html', 'packages.html'];

// Delete treks.html
const treksPath = path.join(dir, 'treks.html');
if (fs.existsSync(treksPath)) {
    fs.unlinkSync(treksPath);
    console.log('Deleted treks.html');
}

for (const file of files) {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Remove the Experiences link
    content = content.replace(/\s*<li><a href="\/treks\.html">Experiences<\/a><\/li>/g, '');
    
    // Change Gallery to About
    content = content.replace(/<li><a href="\/about\.html#gallery">Gallery<\/a><\/li>/g, '<li><a href="/about.html">About</a></li>');
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated navbar in ${file}`);
}
