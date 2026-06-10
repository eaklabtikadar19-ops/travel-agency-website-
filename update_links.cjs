const fs = require('fs');

const dir = 'e:/ACTUAL PROJECTS/calling hills';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const replacements = {
    'href="#about"': 'href="/about.html"',
    'href="#destinations"': 'href="/destinations.html"',
    'href="#packages"': 'href="/packages.html"',
    'href="#experiences"': 'href="/treks.html"', // I assume experiences is treks
    'href="#services"': 'href="/about.html#services"', // We don't have services page, map to about or keep on index
    'href="#gallery"': 'href="/about.html#gallery"', 
    'href="#contact"': 'href="/contact.html"',
};

files.forEach(file => {
    let html = fs.readFileSync(`${dir}/${file}`, 'utf8');
    for (const [key, value] of Object.entries(replacements)) {
        html = html.replace(new RegExp(key, 'g'), value);
    }
    fs.writeFileSync(`${dir}/${file}`, html);
});

console.log('Updated navigation links!');
