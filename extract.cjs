const fs = require('fs');
const html = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', 'utf8');

let newHtml = html;

// Extract style
const styleRegex = /<style>([\s\S]*?)<\/style>/i;
const styleMatch = newHtml.match(styleRegex);
if (styleMatch) {
    fs.writeFileSync('e:/ACTUAL PROJECTS/calling hills/css/main.css', styleMatch[1]);
    newHtml = newHtml.replace(styleRegex, '<link rel="stylesheet" href="/css/main.css">');
}

// Extract script
const scriptMatches = Array.from(newHtml.matchAll(/<script>([\s\S]*?)<\/script>/gi));
if (scriptMatches.length > 0) {
    const lastScript = scriptMatches[scriptMatches.length - 1];
    fs.writeFileSync('e:/ACTUAL PROJECTS/calling hills/js/main.js', lastScript[1]);
    newHtml = newHtml.replace(lastScript[0], '<script type="module" src="/js/main.js"></script>');
}

fs.writeFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', newHtml);
console.log('Extracted successfully!');
