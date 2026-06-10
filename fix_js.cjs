const fs = require('fs');

const jsPath = 'e:/ACTUAL PROJECTS/calling hills/js/main.js';
let jsContent = fs.readFileSync(jsPath, 'utf-8');

// 1. Replace the modal injection HTML with nothing, we don't need the modal HTML anymore.
jsContent = jsContent.replace(
    /const modalFormContainer = document\.getElementById\('modal-form-container'\);[\s\S]*?\}\s*/,
    ''
);

// 2. Rewrite window.openEnquiryModal to redirect to WhatsApp
jsContent = jsContent.replace(
    /window\.openEnquiryModal = function\(prefillMessage = ''\) \{[\s\S]*?window\.closeEnquiryModal = function\(\) \{[\s\S]*?\};/,
    `window.openEnquiryModal = function(prefillMessage = '') {
        const phone = '919051966561';
        let message = prefillMessage || "Hello CallingHills, I am interested in planning a trip. Please provide more details.";
        window.open(\`https://wa.me/\${phone}?text=\${encodeURIComponent(message)}\`, '_blank');
    };
    
    window.closeEnquiryModal = function() {
        // No longer used, but kept for compatibility if called anywhere
    };`
);

// 3. Rewrite window.addToCart to not fail on event.currentTarget
jsContent = jsContent.replace(
    /window\.addToCart = function\(title, dest\) \{[\s\S]*?setTimeout\(\(\) => \{ btn\.innerHTML = originalText; \}, 2000\);\s*\};/,
    `window.addToCart = function(title, dest) {
        cart.push({ title, dest: dest || '', id: Date.now() });
        updateCartUI();
        
        try {
            const btn = window.event && window.event.currentTarget ? window.event.currentTarget : null;
            if (btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = '✔ Added';
                setTimeout(() => { btn.innerHTML = originalText; }, 2000);
            }
        } catch(e) {}
    };`
);

// 4. Replace the old static document.querySelectorAll('button').forEach with global event delegation
jsContent = jsContent.replace(
    /document\.querySelectorAll\('button'\)\.forEach\(btn => \{[\s\S]*?\}\);/g,
    `document.addEventListener('click', function(e) {
        const btn = e.target.closest('button');
        if (!btn) return;
        
        // Handle "Add to Cart" dynamically if it doesn't have an inline onclick
        if ((btn.innerText.includes('Add to Cart') || btn.innerText.includes('🛒 Add')) && !btn.getAttribute('onclick')) {
            const card = btn.closest('.dest-card, .pkg-card, .trek-card, .hanging-card');
            if (card) {
                const titleEl = card.querySelector('h3, .trek-title');
                const destEl = card.querySelector('.dest-tagline, .pkg-duration, .trek-region');
                const title = titleEl ? titleEl.innerText : 'Unknown Package';
                const dest = destEl ? destEl.innerText.replace('📍 ', '') : '';
                
                window.addToCart(title, dest);
                
                const originalText = btn.innerHTML;
                btn.innerHTML = '✔ Added';
                setTimeout(() => { btn.innerHTML = originalText; }, 2000);
            }
        } 
        // Handle "Enquire Now" dynamically if it doesn't have an inline onclick
        else if (btn.innerText.includes('Enquire Now') && !btn.getAttribute('onclick')) {
            const card = btn.closest('.dest-card, .pkg-card, .trek-card, .hanging-card');
            let itemName = 'Custom Trip';
            if (card) {
                const titleEl = card.querySelector('h3, .trek-title');
                if (titleEl) itemName = titleEl.innerText;
            }
            window.openEnquiryModal(\`Hello CallingHills, I am interested in knowing more about: \${itemName}. Please provide more details.\`);
        }
    });`
);

fs.writeFileSync(jsPath, jsContent, 'utf-8');

console.log("main.js updated with WhatsApp redirection and global cart delegation.");
