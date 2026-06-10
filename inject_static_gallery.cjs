const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/gallery.html';
let content = fs.readFileSync(filePath, 'utf-8');

let gridHTML = `
    <style>
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
            padding: 60px clamp(20px, 4vw, 60px);
            max-width: 1400px;
            margin: 0 auto;
        }

        .gallery-grid-item {
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            aspect-ratio: 4/5;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            background: rgba(13, 31, 23, 0.6);
        }

        .gallery-grid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-grid-item:hover {
            transform: translateY(-12px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            z-index: 2;
        }

        .gallery-grid-item:hover img {
            transform: scale(1.08);
        }
    </style>
    
    <section class="gallery-grid-section" style="background: var(--ch-forest); padding: 40px 0 100px 0;">
        <div style="text-align: center; margin-bottom: 40px;">
            <div class="section-tag" style="color: var(--ch-gold);">✦ THE FULL COLLECTION</div>
            <h2 class="section-title" style="color: var(--ch-mist); font-family: var(--font-heading); font-size: 36px; margin-top: 12px;">Browse Our Photos</h2>
        </div>
        <div class="gallery-grid">
`;

for (let i = 1; i <= 24; i++) {
    gridHTML += `
            <div class="gallery-grid-item">
                <img src="/images/gallery (${i}).jpg" alt="Gallery Image ${i}" loading="lazy">
            </div>`;
}

gridHTML += `
        </div>
    </section>
`;

const footerStr = '<footer class="footer">';
content = content.replace(footerStr, gridHTML + '\n    ' + footerStr);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Injected static grid gallery into gallery.html");
