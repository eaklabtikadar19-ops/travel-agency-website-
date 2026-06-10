const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/gallery.html';
let content = fs.readFileSync(filePath, 'utf-8');

// The image trail block
const imageTrailBlock = `
    <!-- Image Trail CSS -->
    <link rel="stylesheet" href="/css/image-trail.css">
    
    <section class="gallery-section" style="background: var(--ch-forest-deep); min-height: auto; position: relative;">
        <!-- Removed the header text completely as requested -->
        <div style="width: 100%; height: 75vh; padding: 0 20px; display: flex; align-items: center; justify-content: center;">
            <div class="image-trail-container" id="main-gallery-trail" style="height: 100%; width: 100%;"></div>
        </div>
    </section>

    <script type="module">
        import { initImageTrail } from '/js/image-trail.js';
        const images = [
            '/images/gallery (1).jpg',
            '/images/gallery (2).jpg',
            '/images/gallery (3).jpg',
            '/images/gallery (4).jpg',
            '/images/gallery (5).jpg',
            '/images/gallery (6).jpg',
            '/images/gallery (7).jpg',
            '/images/gallery (8).jpg',
            '/images/gallery (9).jpg',
            '/images/gallery (10).jpg',
            '/images/gallery (11).jpg',
            '/images/gallery (12).jpg',
            '/images/gallery (13).jpg',
            '/images/gallery (14).jpg',
            '/images/gallery (15).jpg',
            '/images/gallery (16).jpg',
            '/images/gallery (17).jpg',
            '/images/gallery (18).jpg',
            '/images/gallery (19).jpg',
            '/images/gallery (20).jpg',
            '/images/gallery (21).jpg',
            '/images/gallery (22).jpg',
            '/images/gallery (23).jpg',
            '/images/gallery (24).jpg'
        ];
        
        // Initialize Image Trail
        initImageTrail('#main-gallery-trail', images, 1);
    </script>
`;

// Inject back below the <nav> and its spacer if any
const styleTagIdx = content.indexOf('<style>');

if (styleTagIdx !== -1) {
    content = content.substring(0, styleTagIdx) + imageTrailBlock + content.substring(styleTagIdx);
    
    // Also, restore the title of the endless gallery back to "Browse Our Photos"
    content = content.replace(
        '<div class="section-tag" style="color: var(--ch-gold);">✦ MEMORIES IN MOTION</div>',
        '<div class="section-tag" style="color: var(--ch-gold);">✦ THE FULL COLLECTION</div>'
    );
    content = content.replace(
        '<h1 class="section-title" style="color: #1a1a1a; font-family: var(--font-heading); font-size: 48px; margin-top: 12px;">Our Gallery</h1>',
        '<h2 class="section-title" style="color: #1a1a1a; font-family: var(--font-heading); font-size: 36px; margin-top: 12px;">Browse Our Photos</h2>'
    );

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("Restored Image Trail without the text and reverted endless gallery titles.");
} else {
    console.log("Could not find style tag insertion point");
}
