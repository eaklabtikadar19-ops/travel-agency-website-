const fs = require('fs');
const path = require('path');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// 1. Lower opacity and z-index of branches
cssContent = cssContent.replace(
    /\.tree-branches-bg\s*\{[\s\S]*?mix-blend-mode:\s*multiply;\s*\}/,
    `.tree-branches-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-image: url('/images/pine_branches_overlay.png');
            background-position: top center;
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0.15; /* Reduced opacity as requested */
            pointer-events: none;
            z-index: 1; /* Stay UNDER the cards and text! */
            mix-blend-mode: multiply;
        }`
);

// 2. Ensure all main content containers are above the branches
// The previous block was:
// .packages-section .pkg-container,
// .destinations-section .dest-container,
// .page-header {
//     position: relative;
//     z-index: 2;
// }

cssContent = cssContent.replace(
    /\.packages-section\s*\.pkg-container,[\s\S]*?z-index:\s*2;\s*\}/,
    `.packages-section .pkg-container,
        .destinations-section .dest-container,
        .page-header,
        .gallery-section > div,
        .endless-gallery-section > div,
        .about-section .container,
        .contact-section .container,
        .hanging-card-wrapper,
        .ht-slider-track,
        .ht-header,
        section > .container,
        section > div:not(.tree-branches-bg) {
            position: relative;
            z-index: 2;
        }`
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');
console.log("Fixed z-indexing and reduced branch opacity.");
