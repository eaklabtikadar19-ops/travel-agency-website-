const fs = require('fs');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Replace .pkg-card and hover
cssContent = cssContent.replace(
    /\.pkg-card\s*\{[\s\S]*?box-shadow:\s*0\s*20px\s*48px\s*rgba\(13,\s*83,\s*14,\s*0\.08\);\s*border-color:\s*rgba\(48,\s*109,\s*41,\s*0\.3\);\s*\}/,
    `.pkg-card {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 1);
            display: flex;
            flex-direction: column;
            transition: all 0.5s var(--ease-out-expo);
            box-shadow: inset 0 1px 0 rgba(255,255,255,1), 0 16px 40px rgba(200, 169, 110, 0.15), 0 4px 12px rgba(0,0,0,0.04);
            position: relative;
            z-index: 2;
        }

        .pkg-card:hover {
            transform: translateY(-8px);
            box-shadow: inset 0 1px 0 rgba(255,255,255,1), 0 24px 60px rgba(200, 169, 110, 0.25), 0 8px 20px rgba(0,0,0,0.06);
            border-color: var(--ch-gold-light);
        }`
);

// Fix title color
cssContent = cssContent.replace(
    /\.pkg-title\s*\{[\s\S]*?margin-bottom:\s*8px;\s*\}/,
    `.pkg-title {
            font-family: var(--font-heading);
            font-size: 24px;
            font-weight: 700;
            color: var(--ch-forest-deep);
            margin-bottom: 8px;
            letter-spacing: -0.02em;
        }`
);

// Fix description color
cssContent = cssContent.replace(
    /\.pkg-desc\s*\{[\s\S]*?margin-bottom:\s*24px;\s*\}/,
    `.pkg-desc {
            font-size: 15px;
            line-height: 1.6;
            color: var(--ch-text-mid);
            margin-bottom: 24px;
        }`
);

// Fix duration badge
cssContent = cssContent.replace(
    /\.pkg-duration\s*\{[\s\S]*?border-radius:\s*100px;\s*\}/,
    `.pkg-duration {
            font-family: var(--font-body);
            font-size: 13px;
            font-weight: 700;
            color: var(--ch-green-deep);
            background: rgba(200, 169, 110, 0.25);
            padding: 6px 14px;
            border-radius: 100px;
            border: 1px solid rgba(200, 169, 110, 0.4);
        }`
);

// Fix price amounts
cssContent = cssContent.replace(
    /\.pkg-price\s*\.amount\s*\{[\s\S]*?color:\s*var\(--ch-text-dark\);\s*\}/,
    `.pkg-price .amount {
            font-family: var(--font-heading);
            font-size: 24px;
            font-weight: 700;
            color: var(--ch-forest-deep);
        }`
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');

// Cache bust all HTML files
const htmlFiles = [
    'e:/ACTUAL PROJECTS/calling hills/index.html',
    'e:/ACTUAL PROJECTS/calling hills/about.html',
    'e:/ACTUAL PROJECTS/calling hills/packages.html',
    'e:/ACTUAL PROJECTS/calling hills/destinations.html',
    'e:/ACTUAL PROJECTS/calling hills/gallery.html',
    'e:/ACTUAL PROJECTS/calling hills/contact.html'
];

htmlFiles.forEach(htmlPath => {
    if (fs.existsSync(htmlPath)) {
        let content = fs.readFileSync(htmlPath, 'utf-8');
        content = content.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
        fs.writeFileSync(htmlPath, content, 'utf-8');
    }
});

console.log("Upgraded pkg cards to premium glassmorphism design.");
