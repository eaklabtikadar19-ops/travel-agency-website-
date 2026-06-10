const fs = require('fs');

let indexHtml = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', 'utf8');

// We need to remove the old prayer-flags-wrapper and treks-section
const flagsStart = indexHtml.indexOf('<!-- ═══════════ PRAYER FLAGS DIVIDER ═══════════ -->');
const treksEnd = indexHtml.indexOf('</section>', indexHtml.indexOf('class="treks-section"')) + 10;

if (flagsStart !== -1 && treksEnd > flagsStart) {
    indexHtml = indexHtml.substring(0, flagsStart) + indexHtml.substring(treksEnd);
}

// Now we define the new hanging treks section
const treksData = [
    { title: "Sandakphu–Phalut Trek", diff: "Moderate", diffClass: "diff-mod", region: "📍 Darjeeling", desc: "A classic high-altitude trek offering panoramic views of four of the world's highest peaks." },
    { title: "Dzongri–Goechala Trek", diff: "Difficult", diffClass: "diff-hard", region: "📍 West Sikkim", desc: "Get up close with Mount Kanchenjunga on this challenging but rewarding high-altitude trail." },
    { title: "Kanchenjunga Base Camp", diff: "Difficult", diffClass: "diff-hard", region: "📍 North Sikkim", desc: "An epic expedition into the remote heart of the Himalayas, surrounded by towering snow peaks." },
    { title: "Singalila Ridge Trek", diff: "Moderate", diffClass: "diff-mod", region: "📍 Darjeeling", desc: "Walk along the border of India and Nepal with stunning rhododendron forests and mountain vistas." },
    { title: "Barsey Rhododendron Trek", diff: "Easy–Moderate", diffClass: "diff-easy", region: "📍 West Sikkim", desc: "A gentle walk through vibrant, blooming rhododendron sanctuaries and misty woodlands." },
    { title: "Yuksom–Dzongri Trek", diff: "Moderate", diffClass: "diff-mod", region: "📍 West Sikkim", desc: "A majestic journey through sacred forests, alpine meadows, and pristine mountain rivers." },
    { title: "Neora Valley Forest Trek", diff: "Easy–Moderate", diffClass: "diff-easy", region: "📍 Kalimpong", desc: "Explore virgin, dense canopies in one of the richest biological zones in the Eastern Himalayas." },
    { title: "Zuluk–Gnathang Ridge Walk", diff: "Easy", diffClass: "diff-easy", region: "📍 East Sikkim", desc: "Follow the footsteps of ancient traders along the historic, mist-covered Silk Route." }
];

const colors = ['flag-blue', 'flag-white', 'flag-red', 'flag-green', 'flag-yellow'];

let cardsHtml = '';
// Create two sets for infinite scroll
for (let i = 0; i < 16; i++) {
    const trek = treksData[i % treksData.length];
    const colorClass = colors[i % colors.length];
    
    // Slight random rotation for natural hanging effect
    const rotation = (i % 2 === 0 ? 1 : -1) * (1 + Math.random() * 2);
    
    cardsHtml += `
                <div class="hanging-card ${colorClass}" style="transform: rotate(${rotation}deg);">
                    <div class="trek-header">
                        <h3 class="trek-title" style="color: inherit;">${trek.title}</h3>
                        <span class="trek-difficulty ${trek.diffClass}">${trek.diff}</span>
                    </div>
                    <div class="trek-region" style="color: inherit; opacity: 0.9;">${trek.region}</div>
                    <p class="hanging-desc">${trek.desc}</p>
                    <div class="trek-ctas hanging-ctas">
                        <button class="btn-primary" style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.3); color: inherit;">Enquire Now &rarr;</button>
                        <button class="btn-secondary" onclick="addToCart('${trek.title}')" style="background: white; color: #333;">🛒 Add</button>
                    </div>
                </div>`;
}

const hangingSection = `
    <!-- ═══════════ HANGING TREKS (PRAYER FLAGS) ═══════════ -->
    <section class="hanging-treks-section">
        <div class="ht-header">
            <div class="section-tag" style="color: var(--ch-gold);">✦ FOR THE BOLD ONES</div>
            <h2 class="section-title" style="color: var(--ch-mist); margin-bottom: 12px;">Himalayan Treks</h2>
            <p style="font-family: var(--font-body); font-size: 18px; color: var(--ch-mist-dim); max-width: 600px; margin: 0 auto;">
                We provide accessibility support for all our guests — easy, moderate, or difficult.
            </p>
        </div>

        <div class="ht-slider-container">
            <!-- The physical rope spanning across -->
            <div class="ht-rope-line"></div>
            
            <div class="ht-slider-track">
                ${cardsHtml}
            </div>
        </div>
    </section>
`;

// Insert after cinematic-packages
const insertPoint = indexHtml.indexOf('</section>', indexHtml.indexOf('class="cinematic-packages"')) + 10;
indexHtml = indexHtml.substring(0, insertPoint) + '\n' + hangingSection + '\n' + indexHtml.substring(insertPoint);

fs.writeFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', indexHtml);

// 3. Append CSS to main.css
const css = `
/* ==========================================================================
   HANGING TREKS (PRAYER FLAGS STYLE)
   ========================================================================== */
.hanging-treks-section {
    background: var(--ch-forest-deep);
    padding: 100px 0 120px 0;
    overflow: hidden;
    position: relative;
}

.ht-header {
    text-align: center;
    margin-bottom: 80px;
    padding: 0 20px;
}

.ht-slider-container {
    width: 100%;
    position: relative;
    padding-top: 20px; /* Space above rope */
}

/* The horizontal curving rope */
.ht-rope-line {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    height: 40px;
    background: url('data:image/svg+xml;utf8,<svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg"><path d="M0,10 Q50,30 100,10 T200,10" fill="none" stroke="%23333" stroke-width="2"/></svg>') repeat-x;
    z-index: 10;
    pointer-events: none;
}

.ht-slider-track {
    display: flex;
    gap: 30px;
    padding-left: 50px;
    width: max-content;
    animation: scrollHangingCards 40s linear infinite;
    position: relative;
    z-index: 5;
}

.ht-slider-track:hover {
    animation-play-state: paused;
}

@keyframes scrollHangingCards {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 15px)); }
}

.hanging-card {
    width: 300px;
    min-height: 380px;
    border-radius: 4px; /* Prayer flags are usually rectangular */
    padding: 40px 30px 30px 30px;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 10px 20px rgba(0,0,0,0.3);
    transition: transform 0.3s ease;
    transform-origin: top center; /* Hang from the top */
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 95%, 0% 100%); /* Slight swallowtail cut at bottom */
}

/* Simulate the flap/fold over the rope */
.hanging-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 25px;
    background: rgba(0,0,0,0.15);
    border-bottom: 1px dashed rgba(255,255,255,0.4);
}

.hanging-card:hover {
    z-index: 20;
    /* On hover, the wind blows it up slightly */
    transform: rotate(0deg) scale(1.05) translateY(-5px) !important;
    box-shadow: 5px 20px 30px rgba(0,0,0,0.5);
}

/* Prayer Flag Colors */
.flag-blue { background: #0d47a1; color: #ffffff; }
.flag-white { background: #f5f5f5; color: #1a1a1a; }
.flag-red { background: #b71c1c; color: #ffffff; }
.flag-green { background: #1b5e20; color: #ffffff; }
.flag-yellow { background: #fbc02d; color: #1a1a1a; }

/* Adjustments for light text on white/yellow flags */
.flag-white .trek-difficulty, .flag-yellow .trek-difficulty {
    color: #1a1a1a;
    border-color: rgba(0,0,0,0.3);
    background: rgba(0,0,0,0.05);
}
.flag-white .hanging-desc, .flag-yellow .hanging-desc {
    color: #333;
}
.flag-white .btn-primary, .flag-yellow .btn-primary {
    border-color: rgba(0,0,0,0.3) !important;
}

.hanging-desc {
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 1.5;
    margin-top: 15px;
    margin-bottom: 25px;
    flex-grow: 1;
    opacity: 0.9;
}

.hanging-ctas {
    margin-top: auto;
    display: flex;
    gap: 10px;
}
.hanging-ctas button {
    flex: 1;
    padding: 10px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}
.hanging-ctas button:hover {
    transform: translateY(-2px);
}
`;

fs.appendFileSync('e:/ACTUAL PROJECTS/calling hills/css/main.css', css);
console.log('Successfully injected hanging treks section');
