const fs = require('fs');
const path = require('path');

// 1. Copy images
const leftRootPath = 'C:/Users/User/.gemini/antigravity-ide/brain/ce04eff2-4578-4d4f-a390-b0549aef124f/banyan_roots_left_1781112431327.png';
const rightRootPath = 'C:/Users/User/.gemini/antigravity-ide/brain/ce04eff2-4578-4d4f-a390-b0549aef124f/banyan_roots_right_1781112454988.png';
const destLeft = 'e:/ACTUAL PROJECTS/calling hills/banyan_roots_left.png';
const destRight = 'e:/ACTUAL PROJECTS/calling hills/banyan_roots_right.png';

fs.copyFileSync(leftRootPath, destLeft);
fs.copyFileSync(rightRootPath, destRight);

// 2. Modify index.html
let indexHtml = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', 'utf8');

const banyanHtml = `
      <!-- Banyan Roots and Monkeys Overlay -->
      <div class="banyan-roots-container">
         <img src="/banyan_roots_left.png" class="banyan-root-left" alt="Banyan Roots with Monkey">
         <img src="/banyan_roots_right.png" class="banyan-root-right" alt="Banyan Roots with Monkey">
      </div>
`;

// Insert after <section class="stunning-destinations">
const sectionMatch = '<section class="stunning-destinations">';
const insertPos = indexHtml.indexOf(sectionMatch) + sectionMatch.length;

if (indexHtml.indexOf('banyan-roots-container') === -1) {
    indexHtml = indexHtml.substring(0, insertPos) + banyanHtml + indexHtml.substring(insertPos);
    fs.writeFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', indexHtml);
}

// 3. Append CSS to main.css
const css = `
/* ==========================================================================
   BANYAN ROOTS & MONKEYS
   ========================================================================== */
.banyan-roots-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Pass clicks through to cards underneath */
    z-index: 2; /* Below the sd-cards (which have z-index) but above background */
    overflow: hidden;
}

.banyan-root-left, .banyan-root-right {
    position: absolute;
    top: -50px; /* Slight overhang */
    width: 300px;
    height: auto;
    mix-blend-mode: multiply; /* Removes the white background perfectly */
    opacity: 0.9;
    filter: contrast(1.1) brightness(0.95); /* Better blending with the moody background */
    animation: gentleSway 6s ease-in-out infinite alternate;
    transform-origin: top center;
}

.banyan-root-left {
    left: -30px;
}

.banyan-root-right {
    right: -30px;
    animation-delay: -3s; /* Asynchronous swaying */
}

@keyframes gentleSway {
    0% { transform: rotate(-1deg); }
    100% { transform: rotate(2deg); }
}

@media (max-width: 768px) {
    .banyan-root-left, .banyan-root-right {
        width: 150px;
        top: -20px;
    }
}
`;

let mainCss = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/css/main.css', 'utf8');
if (mainCss.indexOf('.banyan-roots-container') === -1) {
    fs.appendFileSync('e:/ACTUAL PROJECTS/calling hills/css/main.css', css);
}

console.log('Successfully added Banyan roots to index.html and main.css');
