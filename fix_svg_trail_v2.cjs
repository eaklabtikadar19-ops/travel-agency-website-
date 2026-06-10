const fs = require('fs');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Update global-trail-wrapper css
cssContent = cssContent.replace(
    /\.global-trail-wrapper\s*\{[\s\S]*?opacity:\s*0\.6;\s*\}/,
    `.global-trail-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    pointer-events: none;
    overflow: hidden;
}`
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');

const indexPath = 'e:/ACTUAL PROJECTS/calling hills/index.html';
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// Update stroke widths and opacity to make it more visible
indexContent = indexContent.replace(
    /stroke="rgba\(200,\s*169,\s*110,\s*0\.15\)"\s*stroke-width="4"\s*stroke-dasharray="12 12"/g,
    'stroke="rgba(200, 169, 110, 0.4)" stroke-width="6" stroke-dasharray="20 20"'
);

indexContent = indexContent.replace(
    /stroke="var\(--ch-gold\)"\s*stroke-width="4"\s*stroke-dasharray="12 12"/g,
    'stroke="var(--ch-gold)" stroke-width="6" stroke-dasharray="20 20"'
);

// Update JS to correctly set height
const oldJsPattern = /<script>\s*document\.addEventListener\('DOMContentLoaded', \(\) => {[\s\S]*?const maskPath = document\.getElementById\('global-mask-path'\);[\s\S]*?<\/script>/;

const newJs = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const wrapper = document.querySelector('.global-trail-wrapper');
            const maskPath = document.getElementById('global-mask-path');
            
            function resizeTrail() {
                if (wrapper) {
                    wrapper.style.height = document.documentElement.scrollHeight + 'px';
                }
            }
            
            window.addEventListener('resize', resizeTrail);
            setTimeout(resizeTrail, 500);
            setTimeout(resizeTrail, 2000);
            resizeTrail();

            if (maskPath) {
                const length = maskPath.getTotalLength();
                maskPath.style.strokeDasharray = length;
                maskPath.style.strokeDashoffset = length;
                
                window.addEventListener('scroll', () => {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                    
                    let scrollPercent = 0;
                    if (maxScroll > 0) {
                        scrollPercent = scrollTop / maxScroll;
                    }
                    
                    let draw = length * scrollPercent;
                    if (draw < 0) draw = 0;
                    if (draw > length) draw = length;
                    
                    maskPath.style.strokeDashoffset = length - draw;
                });
            }
        });
    </script>
`;

indexContent = indexContent.replace(oldJsPattern, newJs.trim());

// Cache bust
indexContent = indexContent.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
fs.writeFileSync(indexPath, indexContent, 'utf-8');

console.log("Fixed SVG trail height calculations and visibility.");
