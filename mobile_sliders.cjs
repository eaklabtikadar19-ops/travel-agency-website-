const fs = require('fs');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let css = fs.readFileSync(cssPath, 'utf8');

const mobileSliderCSS = `
/* ═══════════════════════════════════════════
   GLOBAL MOBILE HORIZONTAL SLIDERS (CARDS)
═══════════════════════════════════════════ */
@media (max-width: 768px) {
    /* Convert grids and vertical flex containers into horizontal scrolling tracks */
    .dest-grid, 
    .pkg-grid, 
    .trek-grid, 
    .hanging-grid, 
    .sd-cards,
    .gallery-grid,
    .why-grid {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        scroll-snap-type: x mandatory;
        gap: 16px !important;
        padding-bottom: 24px !important;
        -webkit-overflow-scrolling: touch;
        margin-left: -20px !important;
        margin-right: -20px !important;
        padding-left: 20px !important;
        padding-right: 20px !important;
    }
    
    /* Hide scrollbars for a clean look */
    .dest-grid::-webkit-scrollbar,
    .pkg-grid::-webkit-scrollbar,
    .trek-grid::-webkit-scrollbar,
    .hanging-grid::-webkit-scrollbar,
    .sd-cards::-webkit-scrollbar,
    .gallery-grid::-webkit-scrollbar,
    .why-grid::-webkit-scrollbar {
        display: none;
    }
    
    /* Force cards to be consistent width and snap */
    .dest-card, 
    .pkg-card, 
    .trek-card, 
    .hanging-card, 
    .sd-card,
    .gallery-item,
    .why-item {
        flex: 0 0 85% !important; /* Take up 85% of screen width */
        max-width: 340px !important;
        scroll-snap-align: center !important;
        height: auto !important;
        align-self: stretch !important; /* Equal height across cards */
    }

    /* Specific fix for sd-cards which had staggered widths/heights */
    .sd-card {
        height: 220px !important; /* Fixed height for sd-cards on mobile */
        flex-direction: column !important;
    }
    
    .sd-card-content {
        padding: 20px !important;
    }
    
    .sd-card-image {
        display: none; /* Hide massive background images if they break the tight flex layout */
    }
    
    /* Make sure inner images scale correctly */
    .dest-image-wrapper {
        padding-top: 60% !important; /* Make images slightly shorter on mobile swipe */
    }
}
`;

if (!css.includes('GLOBAL MOBILE HORIZONTAL SLIDERS')) {
    css += '\n' + mobileSliderCSS;
    fs.writeFileSync(cssPath, css, 'utf8');
}

// Bust cache
const htmlPath = 'e:/ACTUAL PROJECTS/calling hills/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
fs.writeFileSync(htmlPath, html, 'utf8');

console.log("Mobile sliders applied globally.");
