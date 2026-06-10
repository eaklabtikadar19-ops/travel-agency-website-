const fs = require('fs');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

const missingCss = `
        .pkg-meta {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 16px;
            font-size: 13px;
            color: var(--ch-text-mid);
        }

        .pkg-meta strong {
            color: var(--ch-forest-deep);
            font-weight: 700;
        }

        .pkg-teaser {
            font-size: 15px;
            line-height: 1.6;
            color: var(--ch-text-mid);
            margin-bottom: 20px;
            font-style: italic;
        }

        .pkg-route {
            font-family: monospace;
            font-size: 12px;
            color: var(--ch-text-mid);
            background: rgba(200, 169, 110, 0.1);
            padding: 8px 12px;
            border-radius: 6px;
            margin-bottom: 24px;
            border: 1px dashed rgba(200, 169, 110, 0.4);
        }

        .pkg-highlights {
            margin-bottom: 24px;
        }

        .pkg-highlights-title {
            font-family: var(--font-heading);
            font-size: 14px;
            font-weight: 700;
            color: var(--ch-forest-deep);
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .pkg-highlights-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .pkg-highlight-pill {
            background: rgba(48, 109, 41, 0.05);
            color: var(--ch-forest);
            font-size: 12px;
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 100px;
            border: 1px solid rgba(48, 109, 41, 0.15);
        }

        .accordion {
            margin-bottom: 24px;
            border: 1px solid rgba(200, 169, 110, 0.3);
            border-radius: 12px;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.5);
        }

        .accordion-btn {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px;
            background: none;
            border: none;
            font-family: var(--font-heading);
            font-size: 16px;
            font-weight: 600;
            color: var(--ch-forest-deep);
            cursor: pointer;
            text-align: left;
            transition: background 0.3s ease;
        }

        .accordion-btn:hover {
            background: rgba(200, 169, 110, 0.1);
        }

        .accordion-icon {
            transition: transform 0.3s ease;
            color: var(--ch-gold);
        }

        .accordion.active .accordion-icon {
            transform: rotate(180deg);
        }

        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .accordion-content-inner {
            padding: 0 20px 20px 20px;
            border-top: 1px dashed rgba(200, 169, 110, 0.3);
            margin-top: 4px;
            padding-top: 16px;
        }

        .day-plan {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .day-plan:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
        }

        .day-title {
            font-family: var(--font-heading);
            font-size: 16px;
            font-weight: 700;
            color: var(--ch-forest-deep);
            margin-bottom: 8px;
        }

        .day-desc {
            font-size: 14px;
            color: var(--ch-text-mid);
            margin-bottom: 12px;
            line-height: 1.5;
        }

        .day-list {
            list-style: none;
            margin-bottom: 12px;
        }

        .day-list li {
            position: relative;
            padding-left: 16px;
            font-size: 13px;
            color: var(--ch-text-mid);
            margin-bottom: 6px;
        }

        .day-list li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--ch-gold);
        }

        .day-meals {
            font-size: 12px;
            font-weight: 600;
            color: var(--ch-forest);
            background: rgba(48, 109, 41, 0.05);
            display: inline-block;
            padding: 4px 10px;
            border-radius: 4px;
        }

        .incl-excl {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 24px;
            background: rgba(255, 255, 255, 0.5);
            padding: 20px;
            border-radius: 8px;
        }

        .incl-excl h4 {
            font-family: var(--font-heading);
            font-size: 14px;
            font-weight: 700;
            color: var(--ch-forest-deep);
            margin-bottom: 12px;
        }

        .incl-excl ul {
            list-style: none;
        }

        .incl-excl li {
            font-size: 13px;
            color: var(--ch-text-mid);
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
        }

        .incl-excl div:first-child li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--ch-green);
            font-weight: bold;
        }

        .incl-excl div:last-child li::before {
            content: "✕";
            position: absolute;
            left: 0;
            color: #d9534f;
            font-weight: bold;
        }

        .pkg-ctas {
            display: flex;
            gap: 12px;
            margin-top: auto;
        }

        .pkg-ctas button {
            flex: 1;
            padding: 14px;
            border-radius: 8px;
            font-family: var(--font-heading);
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .pkg-ctas .btn-primary {
            background: var(--ch-forest);
            color: white;
            border: none;
        }

        .pkg-ctas .btn-primary:hover {
            background: var(--ch-forest-deep);
            transform: translateY(-2px);
        }

        .pkg-ctas .btn-secondary {
            background: white;
            color: var(--ch-forest-deep);
            border: 1px solid rgba(48, 109, 41, 0.2);
        }

        .pkg-ctas .btn-secondary:hover {
            background: rgba(48, 109, 41, 0.05);
            border-color: var(--ch-forest);
            transform: translateY(-2px);
        }

        @media (max-width: 768px) {
            .incl-excl {
                grid-template-columns: 1fr;
            }
            .pkg-ctas {
                flex-direction: column;
            }
        }
`;

// Insert after .pkg-title
cssContent = cssContent.replace(
    /(\.pkg-title\s*\{[\s\S]*?margin-bottom:\s*8px;\s*letter-spacing:\s*-0\.02em;\s*\})/,
    '$1\n' + missingCss
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

console.log("Restored missing CSS classes for packages.");
