const fs = require('fs');
const path = require('path');

const dir = 'e:/ACTUAL PROJECTS/calling hills';
const files = ['index.html', 'about.html', 'contact.html', 'destinations.html', 'packages.html', 'treks.html'];

for (const file of files) {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Fix the logo link
    content = content.replace(/href="#" class="nav-logo"/g, 'href="/index.html" class="nav-logo"');
    
    // In index.html, fix the text colors in the Hanging Treks section
    if (file === 'index.html') {
        content = content.replace(
            /style="color: var\(--ch-mist\); margin-bottom: 12px;">Himalayan Treks<\/h2>/,
            'style="color: #1a1a1a; margin-bottom: 12px;">Himalayan Treks</h2>'
        );
        content = content.replace(
            /color: var\(--ch-mist-dim\); max-width: 600px; margin: 0 auto;">\s*We provide accessibility support/,
            'color: #666; max-width: 600px; margin: 0 auto;">\n                We provide accessibility support'
        );
    }
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
}
