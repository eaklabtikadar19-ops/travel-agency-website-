const fs = require('fs');

const html = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', 'utf8');

// Extract head + nav (everything up to end of nav)
// Wait, nav ends at </nav>
const navEndIndex = html.indexOf('</nav>') + 6;
const headerContent = html.substring(0, navEndIndex);

// Extract footer
const footerStartIndex = html.indexOf('<footer class="footer">');
const footerEndIndex = html.indexOf('</footer>') + 9;
const footerContent = html.substring(footerStartIndex, footerEndIndex);

// Extract scripts/closing tags
const scriptsContent = html.substring(footerEndIndex);

// Function to extract a section
function extractSection(htmlStr, sectionId) {
    const start = htmlStr.indexOf(`<section class="${sectionId}-section"`);
    if (start === -1) return '';
    let end = htmlStr.indexOf('</section>', start) + 10;
    
    // For packages, there's a nested section or div? Let's use a simpler regex or manual search.
    // The safest way is to regex search for the section comment.
    return htmlStr.substring(start, end);
}

const sections = [
    { id: 'about', file: 'about.html' },
    { id: 'destinations', file: 'destinations.html' },
    { id: 'packages', file: 'packages.html' },
    { id: 'treks', file: 'treks.html' },
    { id: 'contact', file: 'contact.html' },
];

sections.forEach(sec => {
    let content = extractSection(html, sec.id);
    if (!content) {
        // Fallback for contact
        if (sec.id === 'contact') {
            const start = html.indexOf('<section class="contact-section"');
            const end = html.indexOf('</section>', start) + 10;
            content = html.substring(start, end);
        }
    }
    
    // Also include the Trust Bar in every page?
    const trustBarStart = html.indexOf('<div class="trust-bar">');
    const trustBarEnd = html.indexOf('</div>', html.indexOf('</div>', html.indexOf('</div>', trustBarStart) + 1) + 1) + 6; // Rough guess. Let's just omit trust bar from subpages for simplicity, or include it.
    
    // Create new HTML
    // We add a top padding spacer so the fixed navbar doesn't cover content
    const pageHtml = headerContent + 
        '\n<div style="height: 72px;"></div>\n' + 
        content + 
        '\n' + footerContent + 
        scriptsContent;
        
    fs.writeFileSync(`e:/ACTUAL PROJECTS/calling hills/${sec.file}`, pageHtml);
    console.log(`Created ${sec.file}`);
});

console.log('Pages generated successfully!');
