const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/gallery.html';
let content = fs.readFileSync(filePath, 'utf-8');

// Change "Browse Our Photos" to "View Our Products"
content = content.replace(
    /<h2 class="section-title"([^>]*)>Browse Our Photos<\/h2>/,
    '<h2 class="section-title"$1>View Our Products</h2>'
);

// Add text back to the interactive Image Trail
const oldTrailSection = `<section class="gallery-section" style="background: var(--ch-forest-deep); min-height: auto; position: relative;">
        <!-- Removed the header text completely as requested -->
        <div style="width: 100%; height: 400px; padding: 0 20px; display: flex; align-items: center; justify-content: center;">
            <div class="image-trail-container" id="main-gallery-trail" style="height: 100%; width: 100%;"></div>
        </div>
    </section>`;

const newTrailSection = `<section class="gallery-section" style="background: var(--ch-forest-deep); min-height: auto; position: relative; overflow: hidden;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; z-index: 10; pointer-events: none; width: 100%;">
            <div class="section-tag" style="color: var(--ch-gold); margin-bottom: 8px;">✦ INTERACTIVE</div>
            <h2 style="color: var(--ch-mist); font-family: var(--font-heading); font-size: 42px; margin-bottom: 8px;">Memories in Motion</h2>
            <p style="color: var(--ch-mist-dim); font-size: 18px;">Move your mouse or drag across this dark area to reveal hidden moments.</p>
        </div>
        <div style="width: 100%; height: 400px; padding: 0 20px; display: flex; align-items: center; justify-content: center; position: relative; z-index: 1;">
            <div class="image-trail-container" id="main-gallery-trail" style="height: 100%; width: 100%;"></div>
        </div>
    </section>`;

content = content.replace(oldTrailSection, newTrailSection);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Updated gallery text.");
