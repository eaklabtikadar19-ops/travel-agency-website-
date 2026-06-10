const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/gallery.html';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace the main destinations section with a gallery section
const startIdx = content.indexOf('<section class="destinations-section"');
const endIdx = content.indexOf('<footer class="footer">');

if (startIdx !== -1 && endIdx !== -1) {
    const replacement = `
    <!-- Image Trail CSS -->
    <link rel="stylesheet" href="/css/image-trail.css">
    
    <section class="gallery-section" style="background: var(--ch-forest-deep); padding: 120px 0 60px 0; min-height: 100vh; position: relative;">
        <div style="text-align: center; margin-bottom: 20px; z-index: 10; position: relative; pointer-events: none;">
            <div class="section-tag" style="color: var(--ch-gold);">✦ MEMORIES IN MOTION</div>
            <h2 class="section-title" style="color: var(--ch-mist); font-family: var(--font-heading); font-size: 48px;">Our Gallery</h2>
            <p style="color: var(--ch-mist-dim); font-size: 18px; margin-top: 12px;">Move your mouse or touch the screen below to reveal our Himalayan journeys.</p>
        </div>
        
        <div style="width: 100%; height: 70vh; padding: 0 20px;">
            <div class="image-trail-container" id="main-gallery-trail"></div>
        </div>
    </section>

    <script type="module">
        import { initImageTrail } from '/js/image-trail.js';
        const images = [
            '/hero-bg.png',
            '/dest-darjeeling.png',
            '/dest-kalimpong.png',
            '/dest-dooars.png',
            '/dest-sikkim.png',
            '/pkg-darjeeling.png',
            '/pkg-dooars.png',
            '/pkg-sikkim.png',
            '/pkg-silkroute.png',
            'https://picsum.photos/id/1015/600/600',
            'https://picsum.photos/id/1016/600/600',
            'https://picsum.photos/id/1018/600/600',
            'https://picsum.photos/id/1019/600/600',
            'https://picsum.photos/id/1036/600/600',
            'https://picsum.photos/id/1043/600/600',
            'https://picsum.photos/id/1044/600/600'
        ];
        
        // Wait for GSAP to be available
        setTimeout(() => {
            if (typeof gsap !== 'undefined') {
                initImageTrail('#main-gallery-trail', images, 1);
            } else {
                console.error("GSAP not found.");
            }
        }, 500);
    </script>
    `;
    
    content = content.substring(0, startIdx) + replacement + content.substring(endIdx);
    
    // Also add Gallery link back to navbar
    content = content.replace(
        /<li><a href="\/about\.html">About<\/a><\/li>/g,
        '<li><a href="/about.html">About</a></li>\n            <li><a href="/gallery.html">Gallery</a></li>'
    );
    
    fs.writeFileSync(filePath, content, 'utf-8');
}
