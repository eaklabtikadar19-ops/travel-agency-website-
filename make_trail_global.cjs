const fs = require('fs');

const indexPath = 'e:/ACTUAL PROJECTS/calling hills/index.html';
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// 1. Remove the old inline SVG and script
indexContent = indexContent.replace(
    /<!-- Winding Trekking Trail SVG -->[\s\S]*?<\/svg>/,
    ''
);

indexContent = indexContent.replace(
    /<script>\s*document\.addEventListener\('DOMContentLoaded'[\s\S]*?maskPath\.style\.strokeDashoffset[\s\S]*?<\/script>/,
    ''
);

// 2. Add the global SVG trail wrapper right after <div class="tree-branches-bg"></div> or just inside <body>
const longPath = "M 200,0 C 600,200 1000,200 900,500 C 800,800 100,800 200,1200 C 300,1600 800,1600 1000,2000 C 1200,2400 0,2400 200,2800 C 400,3200 900,3200 800,3600 C 700,4000 100,4000 200,4400 C 300,4800 1000,4800 900,5200 C 800,5600 100,5600 200,6000 C 300,6400 800,6400 1000,6800 C 1200,7200 0,7200 200,7600 C 400,8000 900,8000 800,8400 C 700,8800 100,8800 200,9200 C 300,9600 1000,9600 900,10000";

const globalSvgHtml = `
    <!-- Global Winding Trekking Trail SVG -->
    <div class="global-trail-wrapper">
        <svg class="global-trail-svg" viewBox="0 0 1200 10000" preserveAspectRatio="none">
            <defs>
                <mask id="global-trail-mask">
                    <path id="global-mask-path" d="${longPath}" stroke="white" stroke-width="20" fill="none" stroke-linecap="round"/>
                </mask>
            </defs>
            <path d="${longPath}" stroke="rgba(200, 169, 110, 0.15)" stroke-width="4" stroke-dasharray="12 12" fill="none" stroke-linecap="round"/>
            <path d="${longPath}" stroke="var(--ch-gold)" stroke-width="4" stroke-dasharray="12 12" fill="none" mask="url(#global-trail-mask)" stroke-linecap="round"/>
        </svg>
    </div>
`;

// Insert after <div class="ambient-gradient-bg"></div> or just inside <body>
if (indexContent.includes('<div class="ambient-gradient-bg"></div>')) {
    indexContent = indexContent.replace(
        /<div class="ambient-gradient-bg"><\/div>/,
        '<div class="ambient-gradient-bg"></div>\n' + globalSvgHtml
    );
} else {
    indexContent = indexContent.replace(
        /<body>/,
        '<body>\n' + globalSvgHtml
    );
}

// 3. Inject new JS for the global trail
const globalJs = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const maskPath = document.getElementById('global-mask-path');
            if (maskPath) {
                const length = maskPath.getTotalLength();
                maskPath.style.strokeDasharray = length;
                maskPath.style.strokeDashoffset = length;
                
                window.addEventListener('scroll', () => {
                    // Calculate scroll progress through the ENTIRE document
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

indexContent = indexContent.replace(
    /<\/body>/,
    globalJs + '\n</body>'
);

fs.writeFileSync(indexPath, indexContent, 'utf-8');

// 4. Add CSS to main.css
const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Remove old trek-trail-svg css
cssContent = cssContent.replace(
    /\.trek-trail-svg\s*\{[\s\S]*?opacity:\s*0\.8;\s*\}/,
    ''
);

const globalCss = `
.global-trail-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
    opacity: 0.6;
}

.global-trail-svg {
    width: 100%;
    height: 100%;
}
`;

cssContent += '\n' + globalCss;

// Cache bust
indexContent = indexContent.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
fs.writeFileSync(indexPath, indexContent, 'utf-8');
fs.writeFileSync(cssPath, cssContent, 'utf-8');

console.log("Upgraded SVG trail to cover the entire homepage.");
