const fs = require('fs');

const destPath = 'e:/ACTUAL PROJECTS/calling hills/destinations.html';
let destContent = fs.readFileSync(destPath, 'utf-8');

const newTextHtml = `
                <!-- Animated Summary Text -->
                <div class="dest-summary-text" id="karaoke-text">
                    <p>Darjeeling Hills, Kalimpong Hills, Dooars, and Sikkim together offer a unique blend of natural beauty, culture, wildlife, and adventure in the Eastern Himalayas. The Darjeeling Hills are famous for their rolling tea gardens, colonial heritage, stunning views of Kanchenjunga, and the historic Darjeeling Himalayan Railway. Visitors can explore monasteries, bustling markets, and experience the region’s rich Himalayan culture.</p>
                    <p>The Kalimpong Hills provide a peaceful mountain retreat with scenic viewpoints, flower nurseries, monasteries, and charming villages, making it an ideal destination for relaxation and nature lovers.</p>
                    <p>The Dooars, located in the Himalayan foothills, is known for its lush forests, tea estates, rivers, and abundant wildlife. Attractions such as Jaldapara National Park and Gorumara National Park offer exciting wildlife experiences.</p>
                    <p>Meanwhile, Sikkim enchants travelers with snow-capped peaks, alpine lakes, Buddhist monasteries, and breathtaking landscapes. Together, these destinations create a complete Himalayan experience suitable for families, couples, nature enthusiasts, and adventure seekers throughout the year.</p>
                </div>
`;

// Replace the old #karaoke-text div entirely
destContent = destContent.replace(
    /<!-- Animated Summary Text -->\s*<div class="dest-summary-text" id="karaoke-text">[\s\S]*?<\/div>/,
    newTextHtml.trim()
);

// Update the delay in the script block
destContent = destContent.replace(
    /delay \+= 15;/g,
    'delay += 80; // Slower reveal'
);

// Cache bust
destContent = destContent.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
fs.writeFileSync(destPath, destContent, 'utf-8');

console.log("Updated karaoke text to the concise version and slowed down animation.");
