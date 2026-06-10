const fs = require('fs');
const path = require('path');

// 1. Copy Logo Image
const sourceLogo = 'C:/Users/User/.gemini/antigravity-ide/brain/b6d5b5df-b31e-4b63-ae5f-ca1cdfbec317/media__1781127302305.png';
const destLogo = 'e:/ACTUAL PROJECTS/calling hills/logo.png';
if (fs.existsSync(sourceLogo)) {
    fs.copyFileSync(sourceLogo, destLogo);
}

// 2. Update all HTML files with new Logo
const dir = 'e:/ACTUAL PROJECTS/calling hills';
const files = fs.readdirSync(dir);

const logoRegex = /<a href="\/index\.html" class="nav-logo">[\s\S]*?<div class="nav-logo-icon">[\s\S]*?<\/svg>\s*<\/div>\s*<span class="nav-logo-text">CallingHills<\/span>\s*<\/a>/g;
const newLogoHtml = `<a href="/index.html" class="nav-logo" style="display: flex; align-items: center;"><img src="/logo.png" alt="CallingHills Logo" style="height: 54px; width: 54px; border-radius: 50%;"></a>`;

files.forEach(file => {
    if (file.endsWith('.html') && !file.includes('dist')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Ensure we replace all instances (navbar and footer)
        if (logoRegex.test(content)) {
            content = content.replace(logoRegex, newLogoHtml);
            fs.writeFileSync(filePath, content, 'utf8');
        }
    }
});

// 3. Fix main.js Cart and Enquiry Event Delegation
const mainJsPath = 'e:/ACTUAL PROJECTS/calling hills/js/main.js';
let mainJs = fs.readFileSync(mainJsPath, 'utf8');

// Replace Add to cart check
mainJs = mainJs.replace(
    /if \(\(btn\.innerText\.includes\('Add to Cart'\) \|\| btn\.innerText\.includes\('🛒 Add'\)\) && !btn\.getAttribute\('onclick'\)\) \{/g,
    `const btnText = btn.textContent || btn.innerText || '';
        if ((btnText.includes('Add to Cart') || btnText.includes('🛒')) && !btn.getAttribute('onclick')) {`
);

// Replace Enquire Now check
mainJs = mainJs.replace(
    /else if \(btn\.innerText\.includes\('Enquire Now'\) && !btn\.getAttribute\('onclick'\)\) \{/g,
    `else if (btnText.includes('Enquire Now') && !btn.getAttribute('onclick')) {`
);

// Ensure phone number is correct just in case
mainJs = mainJs.replace(/const phone = '.*?';/g, "const phone = '919051966561';");

fs.writeFileSync(mainJsPath, mainJs, 'utf8');

console.log("Logo updated and JS fixed.");
