const fs = require('fs');

const indexHtmlPath = 'e:/ACTUAL PROJECTS/calling hills/index.html';
let html = fs.readFileSync(indexHtmlPath, 'utf8');

const svgMarkup = `
         <!-- Glowing SVG Trail -->
         <svg class="sd-trail-svg" viewBox="0 0 1000 800" preserveAspectRatio="none">
             <defs>
                 <linearGradient id="sd-glow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stop-color="#ffffff" stop-opacity="0.1" />
                     <stop offset="50%" stop-color="#ffffff" stop-opacity="0.8" />
                     <stop offset="100%" stop-color="#ffffff" stop-opacity="0.1" />
                 </linearGradient>
                 <filter id="sd-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                     <feGaussianBlur stdDeviation="8" result="blur" />
                     <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
             </defs>
             <path class="sd-trail-path" d="M 250 90 C 800 90, 800 300, 500 300 C 200 300, 200 520, 500 520 C 800 520, 800 710, 250 710" filter="url(#sd-glow-filter)" />
         </svg>
`;

if (!html.includes('sd-trail-svg')) {
    html = html.replace(/<div class="sd-cards">/, '<div class="sd-cards">\n' + svgMarkup);
    fs.writeFileSync(indexHtmlPath, html, 'utf8');
}

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let css = fs.readFileSync(cssPath, 'utf8');

const svgCss = `
/* ═══════════════════════════════════════════
   STUNNING DESTINATIONS GLOWING SVG PATH
═══════════════════════════════════════════ */
.sd-trail-svg {
    position: absolute;
    top: 5%;
    left: 0;
    width: 100%;
    height: 90%;
    z-index: 1; /* Below the cards which are z-index: 2 */
    pointer-events: none;
    overflow: visible;
}

.sd-trail-path {
    fill: none;
    stroke: url(#sd-glow-grad);
    stroke-width: 4;
    stroke-dasharray: 12 12;
    stroke-dashoffset: 0;
    animation: sdDashAnim 30s linear infinite;
    opacity: 0.7;
}

@keyframes sdDashAnim {
    to {
        stroke-dashoffset: -300;
    }
}

/* Hide the vertical winding path on mobile where it becomes a horizontal slider */
@media (max-width: 768px) {
    .sd-trail-svg {
        display: none !important;
    }
}
`;

if (!css.includes('STUNNING DESTINATIONS GLOWING SVG PATH')) {
    css += '\n' + svgCss;
    fs.writeFileSync(cssPath, css, 'utf8');
}

console.log("SVG injected successfully.");
