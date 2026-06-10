const fs = require('fs');
const path = require('path');

const filePath = 'e:/ACTUAL PROJECTS/calling hills/gallery.html';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Change "View Our Products" to "Curated Moments"
content = content.replace(
    /<h2 class="section-title"([^>]*)>View Our Products<\/h2>/,
    '<h2 class="section-title"$1>Curated Moments</h2>'
);

// 2. Enhance the "Memories in Motion" text with glowing animations
const oldTextSection = `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; z-index: 10; pointer-events: none; width: 100%;">
            <div class="section-tag" style="color: var(--ch-gold); margin-bottom: 8px;">✦ INTERACTIVE</div>
            <h2 style="color: var(--ch-mist); font-family: var(--font-heading); font-size: 42px; margin-bottom: 8px;">Memories in Motion</h2>
            <p style="color: var(--ch-mist-dim); font-size: 18px;">Move your mouse or drag across this dark area to reveal hidden moments.</p>
        </div>`;

const newTextSection = `<style>
        .glowing-interactive-text {
            font-family: var(--font-heading);
            font-size: 56px;
            margin-bottom: 12px;
            background: linear-gradient(90deg, #C8A96E, #ffffff, #C8A96E);
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: text-shine 4s linear infinite, text-float 4s ease-in-out infinite;
            text-shadow: 0 0 30px rgba(200, 169, 110, 0.3);
            font-weight: 400;
        }

        .interactive-subtitle {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 300;
            letter-spacing: 0.5px;
            animation: text-pulse 3s ease-in-out infinite;
            text-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }

        @keyframes text-shine {
            to { background-position: 200% center; }
        }

        @keyframes text-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }

        @keyframes text-pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
        
        .mouse-icon {
            display: inline-block;
            width: 24px;
            height: 36px;
            border: 2px solid rgba(255,255,255,0.6);
            border-radius: 12px;
            position: relative;
            margin-top: 24px;
            animation: text-float 4s ease-in-out infinite reverse;
        }
        .mouse-icon::before {
            content: '';
            position: absolute;
            top: 6px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 6px;
            background: var(--ch-gold);
            border-radius: 2px;
            animation: scroll-wheel 2s infinite;
        }
        @keyframes scroll-wheel {
            0% { top: 6px; opacity: 1; }
            100% { top: 16px; opacity: 0; }
        }
        </style>
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; z-index: 10; pointer-events: none; width: 100%;">
            <div class="section-tag" style="color: var(--ch-gold); margin-bottom: 16px; letter-spacing: 3px;">✦ INTERACTIVE</div>
            <h2 class="glowing-interactive-text">Memories in Motion</h2>
            <p class="interactive-subtitle">Move your mouse or drag across the dark canvas to reveal hidden moments</p>
            <div class="mouse-icon"></div>
        </div>`;

content = content.replace(oldTextSection, newTextSection);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Enhanced interactive text.");
