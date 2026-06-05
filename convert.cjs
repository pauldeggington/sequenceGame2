const fs = require('fs');

const html = fs.readFileSync('legacy/index.html', 'utf8');

function htmlToJsx(htmlStr) {
    let jsx = htmlStr
        .replace(/class="/g, 'className="')
        .replace(/for="/g, 'htmlFor="')
        .replace(/style="([^"]*)"/g, (match, p1) => {
            // Convert inline styles to React style objects roughly
            const rules = p1.split(';').filter(r => r.trim());
            const styleObj = {};
            rules.forEach(rule => {
                const [key, val] = rule.split(':');
                if (key && val) {
                    const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                    styleObj[camelKey] = val.trim();
                }
            });
            return `style={{ ${Object.entries(styleObj).map(([k, v]) => `${k}: '${v}'`).join(', ')} }}`;
        })
        .replace(/<img([^>]+[^\/])>/g, '<img$1 />')
        .replace(/<input([^>]+[^\/])>/g, '<input$1 />')
        .replace(/<br([^>]*[^\/])>/g, '<br$1 />')
        .replace(/<hr([^>]*[^\/])>/g, '<hr$1 />')
        .replace(/<!--[\s\S]*?-->/g, ''); // Remove HTML comments which break JSX
    
    return jsx;
}

const setupStart = html.indexOf('<div id="setup-screen">');
const setupEnd = html.indexOf('<!-- ══════════ GAME SCREEN ══════════ -->');
const setupHtml = html.substring(setupStart, setupEnd);

const gameStart = html.indexOf('<div id="game-screen"');
const gameEnd = html.indexOf('<script src="riffwave.js">');
const gameHtml = html.substring(gameStart, gameEnd);

fs.writeFileSync('src/components/SetupScreen.jsx', `import React from 'react';\n\nexport default function SetupScreen() {\n  return (\n    ${htmlToJsx(setupHtml)}\n  );\n}`);

fs.writeFileSync('src/components/GameScreen.jsx', `import React from 'react';\n\nexport default function GameScreen() {\n  return (\n    <>\n${htmlToJsx(gameHtml)}\n    </>\n  );\n}`);

console.log('Conversion complete!');
