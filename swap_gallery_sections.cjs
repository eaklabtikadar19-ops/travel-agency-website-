const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/gallery.html';
let content = fs.readFileSync(filePath, 'utf-8');

// The endless gallery section string
const endlessGalleryStart = content.indexOf('<section class="endless-gallery-section"');
const endlessGalleryEnd = content.indexOf('</section>', endlessGalleryStart) + 10;
const endlessGallerySection = content.substring(endlessGalleryStart, endlessGalleryEnd);

// The Memories in Motion section string
const memoriesStart = content.indexOf('<section class="gallery-section"');
const memoriesEnd = content.indexOf('</section>', memoriesStart) + 10;
const memoriesSection = content.substring(memoriesStart, memoriesEnd);

// Make the Memories in Motion section shorter (change 75vh to 400px)
const modifiedMemoriesSection = memoriesSection.replace(
    'height: 75vh;',
    'height: 400px;'
);

if (endlessGalleryStart !== -1 && memoriesStart !== -1) {
    // Delete both sections from their original positions
    // We assume memoriesStart < endlessGalleryStart currently
    content = content.substring(0, memoriesStart) + content.substring(memoriesEnd, endlessGalleryStart) + content.substring(endlessGalleryEnd);
    
    // Now insert them in reverse order right after the style tags end
    // Or just find the spot where memoriesStart used to be (the top of the content area)
    const insertionPoint = content.indexOf('</style>') + 8;
    
    const newContent = content.substring(0, insertionPoint) + 
                       '\n\n' + endlessGallerySection + 
                       '\n\n' + modifiedMemoriesSection + 
                       content.substring(insertionPoint);
                       
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log("Swapped the gallery sections and made Memories in Motion shorter.");
} else {
    console.log("Error finding sections.");
}
