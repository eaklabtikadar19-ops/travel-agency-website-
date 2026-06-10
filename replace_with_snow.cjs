const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', 'utf8');

// Remove banyan roots
const banyanStart = html.indexOf('<!-- Banyan Roots and Monkeys Overlay -->');
const banyanEnd = html.indexOf('</div>', banyanStart) + 6;

if (banyanStart !== -1) {
    html = html.substring(0, banyanStart) + html.substring(banyanEnd);
}

// Add canvas if not exists
if (html.indexOf('id="snow-canvas"') === -1) {
    const sdHeader = '<div class="sd-header">';
    const canvasHtml = '<canvas id="snow-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;"></canvas>\n      ';
    html = html.replace(sdHeader, canvasHtml + sdHeader);
}

fs.writeFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', html);

// 2. Add Snow JS to main.js
let js = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/js/main.js', 'utf8');
if (js.indexOf('snow-canvas') === -1) {
    const snowScript = `
/* ==========================================================================
   SNOW PARTICLES FOR STUNNING DESTINATIONS
   ========================================================================== */
function initSnowParticles() {
    const canvas = document.getElementById('snow-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    function resize() {
        const section = canvas.parentElement;
        width = canvas.width = section.offsetWidth;
        height = canvas.height = section.offsetHeight;
    }
    
    window.addEventListener('resize', resize);
    resize();
    
    // Create snow particles
    const particleCount = window.innerWidth < 768 ? 50 : 120;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.5, // Small snow
            speedY: Math.random() * 1 + 0.5, // Falling speed
            speedX: Math.random() * 0.6 - 0.3, // Slight wind
            opacity: Math.random() * 0.5 + 0.3
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = \`rgba(255, 255, 255, \${p.opacity})\`;
            ctx.fill();
            
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Loop particles back to top
            if (p.y > height) {
                p.y = -10;
                p.x = Math.random() * width;
            }
            // Loop particles left/right
            if (p.x > width) p.x = 0;
            if (p.x < 0) p.x = width;
        });
        
        requestAnimationFrame(draw);
    }
    
    draw();
}

// Initialize snow after DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSnowParticles);
} else {
    initSnowParticles();
}
`;
    fs.appendFileSync('e:/ACTUAL PROJECTS/calling hills/js/main.js', snowScript);
}
console.log('Successfully updated to snow');
