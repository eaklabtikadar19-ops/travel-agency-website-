const fs = require('fs');

const destPath = 'e:/ACTUAL PROJECTS/calling hills/destinations.html';
let destContent = fs.readFileSync(destPath, 'utf-8');

const summaryHtml = `
                <!-- Animated Summary Text -->
                <div class="dest-summary-text" id="karaoke-text">
                    The Eastern Himalayas offer more than just scenic views — they offer a return to the soul. Whether you seek the mist-laden tea estates of Darjeeling, the quiet orchid trails of Kalimpong, the wild riverbeds of the Dooars, or the sacred high-altitude valleys of Sikkim... every path here tells a story. Where will your journey begin?
                </div>
`;

// Insert the summaryHtml right before the closing </div> of .dest-grid
destContent = destContent.replace(
    /(<\/div>\s*<\/div>\s*<\/section>)/,
    summaryHtml + '\n            $1'
);

// Inject the JS script before closing </body>
const scriptHtml = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const textContainer = document.getElementById('karaoke-text');
            if (!textContainer) return;

            const text = textContainer.innerText.trim();
            const words = text.split(/\\s+/);
            textContainer.innerHTML = '';
            
            words.forEach((word) => {
                const span = document.createElement('span');
                span.className = 'karaoke-word';
                span.innerText = word;
                textContainer.appendChild(span);
                textContainer.appendChild(document.createTextNode(' '));
            });

            const wordSpans = textContainer.querySelectorAll('.karaoke-word');
            
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    let delay = 0;
                    wordSpans.forEach((span, index) => {
                        setTimeout(() => {
                            span.classList.add('active');
                        }, delay);
                        // Randomize typing speed slightly for realism (between 100ms and 250ms per word)
                        delay += Math.random() * 150 + 100; 
                    });
                    observer.disconnect();
                }
            }, { threshold: 0.2 });

            observer.observe(textContainer);
        });
    </script>
`;

destContent = destContent.replace(
    /<\/body>/,
    scriptHtml + '\n</body>'
);

fs.writeFileSync(destPath, destContent, 'utf-8');

// Now update CSS
const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

const cssHtml = `
        /* Karaoke Summary Text */
        .dest-summary-text {
            padding: 24px 40px;
            font-family: var(--font-heading);
            font-size: 26px;
            line-height: 1.5;
            color: rgba(48, 109, 41, 0.3); /* Dimmed green */
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            align-items: center;
        }

        @media (min-width: 1024px) {
            .dest-summary-text {
                grid-column: span 2; /* Fill the remaining 2 columns in a 3-col grid */
            }
        }

        .karaoke-word {
            transition: color 0.3s ease, font-weight 0.3s ease, transform 0.3s ease;
            font-weight: 400;
            display: inline-block;
        }

        .karaoke-word.active {
            color: var(--ch-forest-deep);
            font-weight: 700;
            transform: scale(1.02);
        }
`;

// Insert CSS
cssContent = cssContent.replace(
    /(\.dest-grid\s*\{[\s\S]*?\})/,
    '$1\n' + cssHtml
);

// Cache bust
destContent = destContent.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
fs.writeFileSync(destPath, destContent, 'utf-8');
fs.writeFileSync(cssPath, cssContent, 'utf-8');

console.log("Added karaoke text animation to destinations page.");
