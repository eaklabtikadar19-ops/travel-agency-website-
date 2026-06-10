const fs = require('fs');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Change .pkg-card back to brand green
cssContent = cssContent.replace(
    /\.pkg-card\s*\{\s*background:\s*var\(--ch-cream-light\);/g,
    '.pkg-card {\n            background: var(--ch-green);'
);

// Update text colors to light again
cssContent = cssContent.replace(
    /\.pkg-title\s*\{[\s\S]*?color:\s*var\(--ch-text-dark\);\s*\}/,
    `.pkg-title {
            font-family: var(--font-heading);
            font-size: 24px;
            font-weight: 600;
            color: var(--ch-mist);
        }`
);

cssContent = cssContent.replace(
    /\.pkg-desc\s*\{[\s\S]*?color:\s*var\(--ch-text-mid\);\s*\}/,
    `.pkg-desc {
            font-size: 15px;
            line-height: 1.6;
            color: var(--ch-mist-dim);
        }`
);

cssContent = cssContent.replace(
    /\.pkg-price\s*\.amount\s*\{[\s\S]*?color:\s*var\(--ch-text-dark\);\s*\}/,
    `.pkg-price .amount {
            font-family: var(--font-heading);
            font-size: 24px;
            font-weight: 700;
            color: var(--ch-gold);
        }`
);

cssContent = cssContent.replace(
    /\.pkg-price\s*\.label\s*\{[\s\S]*?color:\s*var\(--ch-text-mid\);\s*\}/,
    `.pkg-price .label {
            font-size: 12px;
            color: var(--ch-mist-dim);
            text-transform: uppercase;
            letter-spacing: 1px;
        }`
);

cssContent = cssContent.replace(
    /\.pkg-duration\s*\{[\s\S]*?background:\s*rgba\(48,\s*109,\s*41,\s*0\.08\);\s*\}/,
    `.pkg-duration {
            font-family: var(--font-body);
            font-size: 13px;
            font-weight: 600;
            color: var(--ch-mist);
            background: rgba(255, 255, 255, 0.1);
        }`
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');
console.log("Restored green package cards.");
