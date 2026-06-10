const fs = require('fs');

let indexHtml = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', 'utf8');
let treksHtml = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/treks.html', 'utf8');

// Extract treks section
const treksStart = treksHtml.indexOf('<section class="treks-section"');
const treksEnd = treksHtml.indexOf('</section>', treksStart) + 10;
const treksSection = treksHtml.substring(treksStart, treksEnd);

// Generate SVG Prayer Flags Divider
let svgFlags = '';
const colors = ['#1565C0', '#FFFFFF', '#c62828', '#2E7D32', '#F9A825'];
let x = 20;
for(let i=0; i<25; i++) {
    // Math to approximate the curve y
    // path is M0,20 Q250,80 500,20 T1000,20
    let y = 20;
    if (x < 500) {
        let t = x / 500;
        y = 20 * Math.pow(1-t, 2) + 2 * 80 * (1-t) * t + 20 * Math.pow(t, 2);
    } else {
        let t = (x - 500) / 500;
        y = 20 * Math.pow(1-t, 2) + 2 * -40 * (1-t) * t + 20 * Math.pow(t, 2);
    }
    y += 1; // slight offset so it hangs on rope
    
    // rotation based on slope
    let rotation = (x < 500) ? (x < 250 ? 5 : -5) : (x < 750 ? -5 : 5);
    
    let color = colors[i % 5];
    svgFlags += `<rect x="${x}" y="${y}" width="25" height="35" fill="${color}" transform="rotate(${rotation} ${x+12} ${y})"/>`;
    x += 40;
}

const flagsDivider = `
    <!-- ═══════════ PRAYER FLAGS DIVIDER ═══════════ -->
    <div class="prayer-flags-wrapper" style="width: 100%; height: 100px; background: linear-gradient(to bottom, #f8fbff 50%, var(--ch-forest-deep) 50%); position: relative; z-index: 10; overflow: hidden; display: flex; align-items: center;">
        <svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" style="filter: drop-shadow(0 5px 10px rgba(0,0,0,0.3));">
            <path d="M0,20 Q250,80 500,20 T1000,20" fill="none" stroke="#555" stroke-width="1.5"/>
            ${svgFlags}
        </svg>
    </div>
`;

// Inject into index.html after cinematic-packages
const insertPoint = indexHtml.indexOf('</section>', indexHtml.indexOf('class="cinematic-packages"')) + 10;

indexHtml = indexHtml.substring(0, insertPoint) + '\n' + flagsDivider + '\n' + treksSection + '\n' + indexHtml.substring(insertPoint);

fs.writeFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', indexHtml);
console.log('Successfully injected flags and treks into index.html');
