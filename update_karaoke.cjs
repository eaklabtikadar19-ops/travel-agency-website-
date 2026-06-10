const fs = require('fs');

const destPath = 'e:/ACTUAL PROJECTS/calling hills/destinations.html';
let destContent = fs.readFileSync(destPath, 'utf-8');

const newTextHtml = `
                <!-- Animated Summary Text -->
                <div class="dest-summary-text" id="karaoke-text">
                    <p>Darjeeling Hills, Kalimpong Hills, Dooars, and Sikkim together create one of the most diverse and captivating travel regions in the eastern Himalayas. The Darjeeling Hills are renowned for their world-famous tea estates, colonial-era charm, panoramic views of Kanchenjunga and the iconic Darjeeling Himalayan Railway. Visitors can experience mist-covered mountains, Buddhist monasteries, vibrant local markets, and a unique blend of Nepali, Tibetan, Bengali, and Himalayan cultures.</p>
                    <p>Kalimpong Hills, located east of Darjeeling, offer a quieter and more relaxed mountain atmosphere. Known for its scenic ridges, flower nurseries, monasteries, and viewpoints, Kalimpong is ideal for travelers seeking peace, nature, and cultural exploration. The town serves as a gateway to several offbeat Himalayan villages and trekking routes.</p>
                    <p>In contrast, the Dooars region stretches across the foothills of the eastern Himalayas and is celebrated for its lush forests, tea gardens, rivers, and wildlife. National parks such as Jaldapara National Park and Gorumara National Park attract nature lovers with opportunities to spot rhinoceroses, elephants, bison, deer, and numerous bird species. The Dooars provide a refreshing blend of wilderness, adventure, and tea-country hospitality.</p>
                    <p>Sikkim completes this Himalayan circuit with its dramatic landscapes, snow-capped peaks, alpine lakes, Buddhist heritage, and eco-friendly tourism. Destinations such as Gangtok, Tsomgo Lake, Nathula Pass, and the valleys of North Sikkim offer unforgettable experiences ranging from spirituality and culture to high-altitude adventure. Together, these four destinations present a remarkable combination of mountains, forests, wildlife, tea estates, and Himalayan culture, making the region a complete year-round travel experience for families, couples, nature enthusiasts, and adventure seekers alike.</p>
                </div>
`;

// Replace the old #karaoke-text div entirely
destContent = destContent.replace(
    /<!-- Animated Summary Text -->\s*<div class="dest-summary-text" id="karaoke-text">[\s\S]*?<\/div>/,
    newTextHtml.trim()
);

const newScriptHtml = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const textContainer = document.getElementById('karaoke-text');
            if (!textContainer) return;

            const paragraphs = Array.from(textContainer.querySelectorAll('p'));
            
            paragraphs.forEach(p => {
                const text = p.innerText.trim();
                const words = text.split(/\\s+/);
                p.innerHTML = '';
                words.forEach(word => {
                    const span = document.createElement('span');
                    span.className = 'karaoke-word';
                    span.innerText = word;
                    p.appendChild(span);
                    p.appendChild(document.createTextNode(' '));
                });
            });

            const wordSpans = textContainer.querySelectorAll('.karaoke-word');
            
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    let delay = 0;
                    wordSpans.forEach((span, index) => {
                        setTimeout(() => {
                            span.classList.add('active');
                        }, delay);
                        // Very fast typing since text is extremely long
                        delay += 15; 
                    });
                    observer.disconnect();
                }
            }, { threshold: 0.1 });

            observer.observe(textContainer);
        });
    </script>
`;

destContent = destContent.replace(
    /<script>[\s\S]*?<\/script>\s*<\/body>/,
    newScriptHtml.trim() + '\n</body>'
);

fs.writeFileSync(destPath, destContent, 'utf-8');

// Now update CSS
const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Update CSS rules for the karaoke text
cssContent = cssContent.replace(
    /\/\*\s*Karaoke Summary Text\s*\*\/[\s\S]*?\.karaoke-word\.active\s*\{[\s\S]*?\}/,
    `/* Karaoke Summary Text */
        .dest-summary-text {
            padding: 24px;
            font-family: var(--font-body);
            font-size: 16px;
            line-height: 1.6;
            color: var(--ch-text-mid); 
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        @media (min-width: 1024px) {
            .dest-summary-text {
                grid-column: span 2; 
                padding: 40px;
                font-size: 18px;
            }
        }

        .karaoke-word {
            transition: opacity 0.4s ease;
            opacity: 0;
            display: inline-block;
        }

        .karaoke-word.active {
            opacity: 1;
        }`
);

// Cache bust
destContent = destContent.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
fs.writeFileSync(destPath, destContent, 'utf-8');
fs.writeFileSync(cssPath, cssContent, 'utf-8');

console.log("Updated karaoke text and animation style.");
