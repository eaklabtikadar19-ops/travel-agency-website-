const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/gallery.html';
let content = fs.readFileSync(filePath, 'utf-8');

// We need to replace the entire <section class="gallery-grid-section"> to </section> and the <style> above it.
// The easiest way is to find `<style>\n        .gallery-grid {` and `<footer class="footer">`.
const startIdx = content.indexOf('<style>\n        .gallery-grid {');
const endIdx = content.indexOf('<footer class="footer">');

if (startIdx !== -1 && endIdx !== -1) {
    let imagesMarkup = '';
    for (let i = 1; i <= 24; i++) {
        imagesMarkup += `
            <div class="marquee-item" onclick="openLightbox('/images/gallery (${i}).jpg')">
                <img src="/images/gallery (${i}).jpg" alt="Gallery Image ${i}" loading="lazy">
            </div>`;
    }

    const replacement = `
    <style>
        /* Endless Marquee Container */
        .marquee-wrapper {
            width: 100%;
            overflow: hidden;
            padding: 80px 0;
            position: relative;
        }

        .marquee-track {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: endless-scroll 50s linear infinite;
        }

        .marquee-track:hover {
            animation-play-state: paused;
        }

        @keyframes endless-scroll {
            0% { transform: translateX(0); }
            /* 24 items + 24 gaps. Shift exactly halfway. Halfway point = exactly the width of one set + gaps. */
            100% { transform: translateX(calc(-50% - 12px)); }
        }

        /* Gallery Items */
        .marquee-item {
            width: 300px;
            aspect-ratio: 4/5;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            flex-shrink: 0;
            background: rgba(13, 31, 23, 0.1);
        }

        .marquee-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Zig-Zag Staggering */
        .marquee-item:nth-child(even) {
            transform: translateY(40px);
        }
        .marquee-item:nth-child(odd) {
            transform: translateY(-40px);
        }

        /* Hover Effects */
        .marquee-item:hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            z-index: 10;
        }

        .marquee-item:nth-child(even):hover {
            transform: translateY(25px); /* Lift slightly from 40px */
        }
        .marquee-item:nth-child(odd):hover {
            transform: translateY(-55px); /* Lift slightly from -40px */
        }

        .marquee-item:hover img {
            transform: scale(1.08);
        }

        /* Lightbox Modal */
        .lightbox-modal {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(13, 31, 23, 0.95);
            backdrop-filter: blur(15px);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
        }

        .lightbox-modal.active {
            opacity: 1;
            pointer-events: auto;
        }

        .lightbox-content {
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 12px;
            box-shadow: 0 30px 80px rgba(0,0,0,0.6);
            transform: scale(0.95);
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            object-fit: contain;
        }

        .lightbox-modal.active .lightbox-content {
            transform: scale(1);
        }

        .lightbox-close {
            position: absolute;
            top: 30px;
            right: 40px;
            background: none;
            border: none;
            color: white;
            font-size: 50px;
            line-height: 1;
            font-weight: 300;
            cursor: pointer;
            transition: color 0.3s ease;
            z-index: 10000;
        }
        .lightbox-close:hover {
            color: var(--ch-gold);
        }
    </style>
    
    <section class="endless-gallery-section" style="background: var(--ch-cream-light); padding: 80px 0 120px 0;">
        <div style="text-align: center; margin-bottom: 40px;">
            <div class="section-tag" style="color: var(--ch-gold);">✦ THE FULL COLLECTION</div>
            <h2 class="section-title" style="color: #1a1a1a; font-family: var(--font-heading); font-size: 36px; margin-top: 12px;">Browse Our Photos</h2>
        </div>
        
        <div class="marquee-wrapper">
            <div class="marquee-track">
                <!-- First Set -->
                ${imagesMarkup}
                <!-- Duplicate Set for Endless Loop -->
                ${imagesMarkup}
            </div>
        </div>
    </section>

    <!-- Lightbox Modal HTML -->
    <div class="lightbox-modal" id="lightbox-modal" onclick="closeLightbox(event)">
        <button class="lightbox-close" onclick="closeLightbox(event)">&times;</button>
        <img src="" alt="Full Screen Image" class="lightbox-content" id="lightbox-img">
    </div>

    <script>
        function openLightbox(src) {
            const modal = document.getElementById('lightbox-modal');
            const img = document.getElementById('lightbox-img');
            img.src = src;
            modal.classList.add('active');
        }

        function closeLightbox(event) {
            // Close if clicking outside the image or on the close button
            if (event.target.id === 'lightbox-modal' || event.target.classList.contains('lightbox-close')) {
                const modal = document.getElementById('lightbox-modal');
                modal.classList.remove('active');
            }
        }
    </script>
`;

    content = content.substring(0, startIdx) + replacement + content.substring(endIdx);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("Replaced static gallery with endless zig-zag gallery and lightbox.");
} else {
    console.log("Could not find insertion points.");
}
