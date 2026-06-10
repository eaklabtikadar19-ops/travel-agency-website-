const fs = require('fs');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Restore .pkg-card background
cssContent = cssContent.replace(
    /\.pkg-card\s*\{\s*background:\s*var\(--ch-green\);/g,
    '.pkg-card {\n            background: var(--ch-cream-light);'
);

// Restore .pkg-title
cssContent = cssContent.replace(
    /\.pkg-title\s*\{[\s\S]*?margin-bottom:\s*8px;\s*\}/,
    `.pkg-title {
            font-family: var(--font-heading);
            font-size: 24px;
            font-weight: 600;
            color: var(--ch-text-dark);
            margin-bottom: 8px;
        }`
);

// Restore .pkg-desc
cssContent = cssContent.replace(
    /\.pkg-desc\s*\{[\s\S]*?margin-bottom:\s*24px;\s*\}/,
    `.pkg-desc {
            font-size: 15px;
            line-height: 1.6;
            color: var(--ch-text-mid);
            margin-bottom: 24px;
        }`
);

// Restore .pkg-price amount
cssContent = cssContent.replace(
    /\.pkg-price\s*\.amount\s*\{[\s\S]*?color:\s*var\(--ch-gold\);\s*\}/,
    `.pkg-price .amount {
            font-family: var(--font-heading);
            font-size: 24px;
            font-weight: 700;
            color: var(--ch-text-dark);
        }`
);

// Restore .pkg-price label
cssContent = cssContent.replace(
    /\.pkg-price\s*\.label\s*\{[\s\S]*?letter-spacing:\s*1px;\s*\}/,
    `.pkg-price .label {
            font-size: 12px;
            color: var(--ch-text-mid);
            text-transform: uppercase;
            letter-spacing: 1px;
        }`
);

// Restore .pkg-duration
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

fs.writeFileSync(cssPath, cssContent, 'utf-8');
console.log("Restored package cards to match destination cards.");
