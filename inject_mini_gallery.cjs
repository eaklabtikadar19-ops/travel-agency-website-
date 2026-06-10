const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/index.html';
let content = fs.readFileSync(filePath, 'utf-8');

const targetStr = '<!-- ═══════════ SECTION 10 — FOOTER ═══════════ -->';
const targetIdx = content.indexOf(targetStr);

if (targetIdx !== -1) {
    const replacement = `
    <!-- ═══════════ MINI GALLERY (IMAGE TRAIL) ═══════════ -->
    <link rel="stylesheet" href="/css/image-trail.css">
    <section class="mini-gallery-section" style="background: var(--ch-forest); padding: 80px 0; overflow: hidden;">
        <div style="text-align: center; margin-bottom: 32px; z-index: 10; position: relative; pointer-events: none;">
            <div class="section-tag" style="color: var(--ch-gold);">✦ GLIMPSES</div>
            <h2 class="section-title" style="color: var(--ch-mist); font-family: var(--font-heading); font-size: 36px; margin-bottom: 8px;">Explore Our Gallery</h2>
            <p style="color: var(--ch-mist-dim); font-size: 16px;">Move your mouse here to reveal memories</p>
            <a href="/gallery.html" class="btn-primary" style="margin-top: 24px; pointer-events: auto;">View Full Gallery &rarr;</a>
        </div>
        
        <div style="width: 100%; height: 400px; padding: 0 20px;">
            <div class="image-trail-container" id="mini-gallery-trail"></div>
        </div>
    </section>

    <script type="module">
        import { initImageTrail } from '/js/image-trail.js';
        const miniImages = [
            '/hero-bg.png',
            '/dest-darjeeling.png',
            '/dest-kalimpong.png',
            '/dest-dooars.png',
            '/dest-sikkim.png',
            '/pkg-darjeeling.png',
            '/pkg-dooars.png',
            '/pkg-sikkim.png',
            '/pkg-silkroute.png'
        ];
        
        // Wait for GSAP
        setTimeout(() => {
            if (typeof gsap !== 'undefined') {
                initImageTrail('#mini-gallery-trail', miniImages, 4); // Use variant 4 for the mini version
            }
        }, 500);
    </script>

    `;
    
    content = content.substring(0, targetIdx) + replacement + content.substring(targetIdx);
    
    // Fix footer link 'Trekking Routes' to 'Gallery' in index.html
    content = content.replace(/<li><a href="\/treks\.html">Trekking Routes<\/a><\/li>/g, '<li><a href="/gallery.html">Gallery</a></li>');
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("Updated index.html");
}
