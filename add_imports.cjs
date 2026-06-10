const fs = require('fs');
const content = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/js/main.js', 'utf8');
const newContent = "import * as THREE from 'three';\nimport gsap from 'gsap';\nimport { ScrollTrigger } from 'gsap/ScrollTrigger';\ngsap.registerPlugin(ScrollTrigger);\n\n" + content;
fs.writeFileSync('e:/ACTUAL PROJECTS/calling hills/js/main.js', newContent);
console.log('Imports added!');
