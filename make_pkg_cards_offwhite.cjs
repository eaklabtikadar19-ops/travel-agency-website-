const fs = require('fs');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Change .pkg-card back to off-white
cssContent = cssContent.replace(
    /\.pkg-card\s*\{\s*background:\s*var\(--ch-green\);/g,
    '.pkg-card {\n            background: var(--ch-mist);'
);

// Update text colors to dark again
cssContent = cssContent.replace(
    /\.pkg-title\s*\{[\s\S]*?color:\s*var\(--ch-mist\);\s*\}/,
    `.pkg-title {
            font-family: var(--font-heading);
            font-size: 24px;
            font-weight: 600;
            color: var(--ch-text-dark);
        }`
);

cssContent = cssContent.replace(
    /\.pkg-desc\s*\{[\s\S]*?color:\s*var\(--ch-mist-dim\);\s*\}/,
    `.pkg-desc {
            font-size: 15px;
            line-height: 1.6;
            color: var(--ch-text-mid);
        }`
);

cssContent = cssContent.replace(
    /\.pkg-price\s*\.amount\s*\{[\s\S]*?color:\s*var\(--ch-gold\);\s*\}/,
    `.pkg-price .amount {
            font-family: var(--font-heading);
            font-size: 24px;
            font-weight: 700;
            color: var(--ch-text-dark);
        }`
);

cssContent = cssContent.replace(
    /\.pkg-price\s*\.label\s*\{[\s\S]*?color:\s*var\(--ch-mist-dim\);\s*\}/,
    `.pkg-price .label {
            font-size: 12px;
            color: var(--ch-text-mid);
            text-transform: uppercase;
            letter-spacing: 1px;
        }`
);

cssContent = cssContent.replace(
    /\.pkg-duration\s*\{[\s\S]*?background:\s*rgba\(255,\s*255,\s*255,\s*0\.1\);\s*\}/,
    `.pkg-duration {
            font-family: var(--font-body);
            font-size: 13px;
            font-weight: 600;
            color: var(--ch-green);
            background: rgba(48, 109, 41, 0.08);
        }`
);

// Reduce branches opacity
cssContent = cssContent.replace(
    /opacity:\s*0\.15;\s*\/\*\s*Reduced opacity as requested\s*\*\//g,
    'opacity: 0.07; /* Significantly reduced opacity for extreme subtlety */'
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');
console.log("Restored off-white package cards and lowered branch opacity.");
