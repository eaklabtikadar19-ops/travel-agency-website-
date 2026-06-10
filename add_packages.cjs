const fs = require('fs');

// 1. Fix Logo Links in all HTML files
const files = fs.readdirSync('e:/ACTUAL PROJECTS/calling hills').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(`e:/ACTUAL PROJECTS/calling hills/${file}`, 'utf8');
    // Replace href="#" class="nav-logo" style="pointer-events: none;"
    // We should be careful with exact string matches
    content = content.replace(/<a href="#" class="nav-logo" style="pointer-events: none;">/g, '<a href="/index.html" class="nav-logo">');
    // Also replace in footer if any
    content = content.replace(/<a href="#" class="nav-logo-footer" style="pointer-events: none;">/g, '<a href="/index.html" class="nav-logo">');
    fs.writeFileSync(`e:/ACTUAL PROJECTS/calling hills/${file}`, content);
});

console.log('Fixed logo links.');

// 2. Inject Packages Section into index.html
let html = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', 'utf8');

const packagesHtml = `
    <!-- ═══════════ CINEMATIC PACKAGES SECTION ═══════════ -->
    <section class="cinematic-packages">
        <div class="cp-header">
            <h2 class="cp-title">Signature Packages</h2>
            <p class="cp-subtitle">Curated offbeat experiences for the soulful traveler.</p>
        </div>

        <div class="cp-slider-container">
            <div class="cp-slider-track">
                <!-- Original Set -->
                <div class="cp-card">
                    <div class="cp-card-bg" style="background-image: url('/pkg-darjeeling.png');"></div>
                    <div class="cp-card-glow" style="background-image: url('/pkg-darjeeling.png');"></div>
                    <div class="cp-card-content">
                        <div class="cp-info">
                            <h3 class="cp-name">Darjeeling Retreat</h3>
                            <p class="cp-meta">5 Days · 4 Nights</p>
                        </div>
                        <a href="/packages.html" class="cp-btn">Explore Now <span class="cp-arrow">&rsaquo;</span></a>
                    </div>
                </div>

                <div class="cp-card">
                    <div class="cp-card-bg" style="background-image: url('/pkg-dooars.png');"></div>
                    <div class="cp-card-glow" style="background-image: url('/pkg-dooars.png');"></div>
                    <div class="cp-card-content">
                        <div class="cp-info">
                            <h3 class="cp-name">Dooars Wildlife</h3>
                            <p class="cp-meta">4 Days · 3 Nights</p>
                        </div>
                        <a href="/packages.html" class="cp-btn">Explore Now <span class="cp-arrow">&rsaquo;</span></a>
                    </div>
                </div>

                <div class="cp-card">
                    <div class="cp-card-bg" style="background-image: url('/pkg-silkroute.png');"></div>
                    <div class="cp-card-glow" style="background-image: url('/pkg-silkroute.png');"></div>
                    <div class="cp-card-content">
                        <div class="cp-info">
                            <h3 class="cp-name">Sikkim Silk Route</h3>
                            <p class="cp-meta">6 Days · 5 Nights</p>
                        </div>
                        <a href="/packages.html" class="cp-btn">Explore Now <span class="cp-arrow">&rsaquo;</span></a>
                    </div>
                </div>

                <div class="cp-card">
                    <div class="cp-card-bg" style="background-image: url('/pkg-sikkim.png');"></div>
                    <div class="cp-card-glow" style="background-image: url('/pkg-sikkim.png');"></div>
                    <div class="cp-card-content">
                        <div class="cp-info">
                            <h3 class="cp-name">North Sikkim</h3>
                            <p class="cp-meta">5 Days · 4 Nights</p>
                        </div>
                        <a href="/packages.html" class="cp-btn">Explore Now <span class="cp-arrow">&rsaquo;</span></a>
                    </div>
                </div>

                <!-- Duplicate Set for Infinite Scroll -->
                <div class="cp-card">
                    <div class="cp-card-bg" style="background-image: url('/pkg-darjeeling.png');"></div>
                    <div class="cp-card-glow" style="background-image: url('/pkg-darjeeling.png');"></div>
                    <div class="cp-card-content">
                        <div class="cp-info">
                            <h3 class="cp-name">Darjeeling Retreat</h3>
                            <p class="cp-meta">5 Days · 4 Nights</p>
                        </div>
                        <a href="/packages.html" class="cp-btn">Explore Now <span class="cp-arrow">&rsaquo;</span></a>
                    </div>
                </div>

                <div class="cp-card">
                    <div class="cp-card-bg" style="background-image: url('/pkg-dooars.png');"></div>
                    <div class="cp-card-glow" style="background-image: url('/pkg-dooars.png');"></div>
                    <div class="cp-card-content">
                        <div class="cp-info">
                            <h3 class="cp-name">Dooars Wildlife</h3>
                            <p class="cp-meta">4 Days · 3 Nights</p>
                        </div>
                        <a href="/packages.html" class="cp-btn">Explore Now <span class="cp-arrow">&rsaquo;</span></a>
                    </div>
                </div>

                <div class="cp-card">
                    <div class="cp-card-bg" style="background-image: url('/pkg-silkroute.png');"></div>
                    <div class="cp-card-glow" style="background-image: url('/pkg-silkroute.png');"></div>
                    <div class="cp-card-content">
                        <div class="cp-info">
                            <h3 class="cp-name">Sikkim Silk Route</h3>
                            <p class="cp-meta">6 Days · 5 Nights</p>
                        </div>
                        <a href="/packages.html" class="cp-btn">Explore Now <span class="cp-arrow">&rsaquo;</span></a>
                    </div>
                </div>

                <div class="cp-card">
                    <div class="cp-card-bg" style="background-image: url('/pkg-sikkim.png');"></div>
                    <div class="cp-card-glow" style="background-image: url('/pkg-sikkim.png');"></div>
                    <div class="cp-card-content">
                        <div class="cp-info">
                            <h3 class="cp-name">North Sikkim</h3>
                            <p class="cp-meta">5 Days · 4 Nights</p>
                        </div>
                        <a href="/packages.html" class="cp-btn">Explore Now <span class="cp-arrow">&rsaquo;</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const insertAfter = '</section>'; // End of stunning-destinations
// We need to find the end of the stunning-destinations section
const sectionStart = html.indexOf('<section class="stunning-destinations">');
if (sectionStart !== -1) {
    const sectionEnd = html.indexOf('</section>', sectionStart) + 10;
    html = html.substring(0, sectionEnd) + '\n' + packagesHtml + '\n' + html.substring(sectionEnd);
    fs.writeFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', html);
    console.log('Injected packages section into index.html');
}

// 3. Append CSS to main.css
const css = `
/* ==========================================================================
   CINEMATIC PACKAGES (INFINITE SCROLL & GLOW)
   ========================================================================== */
.cinematic-packages {
    padding: 100px 0;
    background: #f8fbff; /* Clean light background matching the reference */
    overflow: hidden;
    position: relative;
}

.cp-header {
    text-align: center;
    margin-bottom: 60px;
}

.cp-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 48px;
    font-weight: 800;
    color: #1a1a1a;
    margin: 0 0 10px 0;
}

.cp-subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    color: #666;
    margin: 0;
}

.cp-slider-container {
    width: 100%;
    overflow: hidden;
    padding: 60px 0; /* Padding for shadows */
    position: relative;
}

/* Gradient fades on left and right to make it look smooth */
.cp-slider-container::before,
.cp-slider-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 150px;
    z-index: 10;
    pointer-events: none;
}
.cp-slider-container::before {
    left: 0;
    background: linear-gradient(to right, #f8fbff, transparent);
}
.cp-slider-container::after {
    right: 0;
    background: linear-gradient(to left, #f8fbff, transparent);
}

.cp-slider-track {
    display: flex;
    gap: 40px;
    width: max-content;
    animation: scrollPackages 30s linear infinite;
}

/* Pause on hover */
.cp-slider-track:hover {
    animation-play-state: paused;
}

@keyframes scrollPackages {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 20px)); } /* -50% minus half the gap */
}

.cp-card {
    position: relative;
    width: 320px;
    height: 440px;
    border-radius: 24px;
    flex-shrink: 0;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 2;
    cursor: pointer;
}

.cp-card:hover {
    transform: translateY(-15px) scale(1.03);
    z-index: 5;
}

/* The actual image background */
.cp-card-bg {
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background-size: cover;
    background-position: center;
    z-index: 2;
    overflow: hidden;
}

/* Dark gradient overlay for text readability */
.cp-card-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
}

/* The glowing drop shadow taking the color of the image */
.cp-card-glow {
    position: absolute;
    top: 20px;
    left: 10%;
    width: 80%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(40px);
    opacity: 0.7;
    z-index: 1;
    transition: opacity 0.4s ease;
}

.cp-card:hover .cp-card-glow {
    opacity: 1;
    filter: blur(50px);
}

/* Content Layout inside card */
.cp-card-content {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 30px 24px;
    color: white;
}

.cp-info {
    margin-bottom: 20px;
}

.cp-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 6px 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.cp-meta {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    opacity: 0.8;
    margin: 0;
    font-weight: 500;
}

.cp-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    text-decoration: none;
    padding: 14px 20px;
    border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 15px;
    transition: background 0.3s ease, border-color 0.3s ease;
}

.cp-btn:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.4);
}

.cp-arrow {
    font-size: 20px;
    line-height: 1;
    font-weight: 400;
}
`;

fs.appendFileSync('e:/ACTUAL PROJECTS/calling hills/css/main.css', css);
console.log('Appended cinematic packages CSS');
