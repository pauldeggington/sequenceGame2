import os

def patch_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Patched {filepath}")

# 1. Update style.css
css_replacements = [
    # Variables
    (""":root {
    --bg-color: #0d1b1e;
    --board-bg: #0b4d3c;
    --gold: #d4af37;
    --gold-light: #f1e5ac;
    --red-chip: #c0392b;
    --blue-chip: #2980b9;
    --green-chip: #27ae60;
    --glass: rgba(255, 255, 255, 0.08);
    --glass-border: rgba(255, 255, 255, 0.15);
    --text: #e0e0e0;
}""", """:root {
    --bg-color: #0b0c16;
    --board-bg: rgba(25, 25, 45, 0.6);
    --primary: #8a2be2;
    --primary-light: #b366ff;
    --red-chip: #ff3366;
    --blue-chip: #33ccff;
    --green-chip: #00ff99;
    --glass: rgba(20, 20, 40, 0.5);
    --glass-border: rgba(138, 43, 226, 0.3);
    --text: #ffffff;
}"""),
    
    # Body background glow
    ("""body {
    background-color: var(--bg-color);""", """body {
    background-color: var(--bg-color);
}
body::before {
    content: '';
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 50% 30%, rgba(138, 43, 226, 0.15) 0%, transparent 50%);
    pointer-events: none;
    z-index: -2;"""),
    
    # Replace variable usages globally
    ("var(--gold)", "var(--primary)"),
    ("var(--gold-light)", "var(--primary-light)"),
    ("'Playfair Display', serif", "'Outfit', sans-serif"),
    
    # Update buttons
    ("""background: linear-gradient(135deg, var(--primary) 0%, #b8860b 100%);
    border: none;
    color: #332200;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);""", """background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    border: none;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 4px 15px rgba(106, 17, 203, 0.4);"""),
    
    ("""box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);""", """box-shadow: 0 6px 20px rgba(106, 17, 203, 0.6);"""),
    
    ("""background: rgba(212, 175, 55, 0.1);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);""", """background: rgba(138, 43, 226, 0.1);
    box-shadow: 0 0 15px rgba(138, 43, 226, 0.2);"""),
    
    # Glass panel
    ("""background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: 10px;
    padding: 8px 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);""", """background: var(--glass);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 8px 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);"""),
    
    # Setup card
    ("""padding: 30px 25px;
    background: var(--bg-color);
    /* Solid 100% opacity */
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);""", """padding: 30px 25px;
    background: var(--glass);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);"""),
    
    # Replace other hex golds
    ("rgba(212, 175, 55", "rgba(138, 43, 226")
]

patch_file('style.css', css_replacements)

# 2. Update HTML files
html_replacements = [
    ("family=Playfair+Display:ital,wght@0,700;1,700&", ""),
    ("var(--gold)", "var(--primary)")
]
for html_file in ['index.html', 'about.html', 'privacy.html']:
    if os.path.exists(html_file):
        patch_file(html_file, html_replacements)

# 3. Update game.js
if os.path.exists('game.js'):
    patch_file('game.js', [("var(--gold)", "var(--primary)")])

print("Done updating visual identity.")
