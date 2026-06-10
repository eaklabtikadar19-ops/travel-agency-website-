const fs = require('fs');
const path = require('path');

// 1. Add CSS for Contact
const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

const contactCSS = `
/* ═══════════════════════════════════════════
   CONTACT SECTION RESTORE
═══════════════════════════════════════════ */
.contact-section {
    padding: 80px 20px 120px 20px;
    background: transparent;
    position: relative;
    z-index: 2;
}

.cta-strip {
    max-width: 1200px;
    margin: 0 auto 80px auto;
    background: linear-gradient(135deg, var(--ch-gold) 0%, #a68449 100%);
    border-radius: 24px;
    padding: 40px 60px;
    color: var(--ch-forest-deep);
}

.cta-strip-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
}

.cta-strip-text {
    font-family: var(--font-heading);
    font-size: 36px;
    line-height: 1.2;
    font-weight: 600;
}

.cta-strip-btns {
    display: flex;
    gap: 16px;
}

.contact-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 60px;
    backdrop-filter: blur(12px);
}

.contact-info h2 {
    font-family: var(--font-heading);
    font-size: 42px;
    color: var(--ch-gold);
    margin-bottom: 12px;
}

.contact-info p {
    font-size: 18px;
    color: var(--ch-mist);
    margin-bottom: 40px;
}

.contact-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
}

.contact-list-item {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 16px;
    color: white;
}

.contact-list-icon {
    font-size: 24px;
}

.contact-offices {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
}

.office h4 {
    color: var(--ch-gold);
    margin-bottom: 8px;
    font-size: 18px;
}
.office p {
    color: var(--ch-mist);
    font-size: 15px;
    margin-bottom: 0;
}

.contact-trust {
    font-size: 14px;
    color: var(--ch-mist);
    line-height: 1.6;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 20px;
}

.map-container {
    margin-top: 40px;
    width: 100%;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
}

.map-container iframe {
    width: 100%;
    height: 100%;
    border: none;
}

@media (max-width: 992px) {
    .contact-container {
        grid-template-columns: 1fr;
        padding: 40px 20px;
    }
    .cta-strip-inner {
        flex-direction: column;
        text-align: center;
    }
}
`;

if (!cssContent.includes('CONTACT SECTION RESTORE')) {
    cssContent += '\n' + contactCSS;
    fs.writeFileSync(cssPath, cssContent, 'utf-8');
}

// 2. Add Map to Contact page
const contactHtmlPath = 'e:/ACTUAL PROJECTS/calling hills/contact.html';
let contactHtml = fs.readFileSync(contactHtmlPath, 'utf-8');

const mapHTML = `
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113619.66442651478!2d88.1924527960113!3d27.033190892095404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e42e654cf501bb%3A0x4175555979d4702a!2sDarjeeling%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1701382400000!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
`;

if (!contactHtml.includes('map-container')) {
    contactHtml = contactHtml.replace(
        /<div class="contact-form-container">/,
        mapHTML + '\n            <div class="contact-form-container">'
    );
    fs.writeFileSync(contactHtmlPath, contactHtml, 'utf-8');
}

// 3. Inject ambient gradient into ALL pages
const dir = 'e:/ACTUAL PROJECTS/calling hills';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith('.html')) {
        let htmlContent = fs.readFileSync(path.join(dir, file), 'utf-8');
        
        // Add shader if missing
        if (!htmlContent.includes('<div class="ambient-gradient-bg"></div>')) {
            htmlContent = htmlContent.replace(
                /<body[^>]*>/,
                '$&\n    <!-- Global Shader Background -->\n    <div class="ambient-gradient-bg"></div>'
            );
        }
        
        // Cache bust
        htmlContent = htmlContent.replace(/href="\/css\/main\.css(\?v=\d+)?"/g, 'href="/css/main.css?v=' + Date.now() + '"');
        
        fs.writeFileSync(path.join(dir, file), htmlContent, 'utf-8');
    }
});

console.log("Restored contact CSS, added map, and injected shader globally.");
