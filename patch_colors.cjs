const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');

// Read file (it might be utf16le if created by cmd `type`)
let content = fs.readFileSync(cssPath);

// Detect if it's utf16le (BOM FE FF or FF FE)
let strContent;
if (content[0] === 0xff && content[1] === 0xfe) {
    strContent = content.toString('utf16le');
} else {
    strContent = content.toString('utf8');
}

// Replace exact purple RGB components with cyan RGB components
// Purple: 138, 43, 226
// Cyan: 0, 210, 255
const updated = strContent.replace(/138,\s*43,\s*226/g, '0, 210, 255');

fs.writeFileSync(cssPath, updated, 'utf8');
console.log("CSS color replacement complete. Converted to UTF-8.");
