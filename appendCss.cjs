const fs = require('fs');

const cssToAppend = `
/* ══════════════════════════════════════════
   HEADER & FOOTER (GLOBAL LAYOUT)
   ══════════════════════════════════════════ */
.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.site-header {
    background: rgba(10, 20, 40, 0.95);
    border-bottom: 1px solid var(--primary);
    padding: 10px 20px;
    z-index: 100;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-link {
    text-decoration: none;
    color: var(--primary);
}

.logo-link h1 {
    font-size: 1.5rem;
    margin: 0;
    text-shadow: 0 0 10px rgba(0, 210, 255, 0.4);
}

.main-nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.main-nav a {
    color: var(--text);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
}

.main-nav a:hover {
    color: var(--primary);
}

.site-footer {
    background: rgba(5, 10, 20, 0.95);
    border-top: 1px solid rgba(0, 210, 255, 0.3);
    padding: 20px;
    margin-top: auto;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.footer-links {
    display: flex;
    gap: 15px;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: var(--primary);
}

/* ══════════════════════════════════════════
   CONTENT PAGES (ABOUT, CONTACT, ARTICLES)
   ══════════════════════════════════════════ */
.content-page {
    max-width: 800px;
    margin: 40px auto;
    padding: 30px;
    background: rgba(10, 25, 50, 0.85);
    border: 1px solid var(--primary);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    color: #e0e0e0;
    line-height: 1.6;
}

.content-page h1 {
    color: var(--primary);
    margin-bottom: 20px;
    text-align: center;
    font-size: 2.5rem;
}

.content-page h2 {
    color: var(--primary-light);
    margin-top: 30px;
    margin-bottom: 15px;
}

.content-page p {
    margin-bottom: 15px;
}

.content-page ul {
    margin-bottom: 20px;
    padding-left: 20px;
}

.content-page a {
    color: var(--primary);
    text-decoration: none;
}

.content-page a:hover {
    text-decoration: underline;
}

/* Contact Form */
.contact-form-placeholder {
    margin-top: 30px;
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    color: var(--primary-light);
}

.form-group input, .form-group textarea {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: #fff;
    font-family: inherit;
}

.form-group input:focus, .form-group textarea:focus {
    border-color: var(--primary);
    outline: none;
}

.btn-primary {
    background: var(--primary);
    color: #000;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
}

.btn-primary:hover {
    background: var(--primary-light);
}

/* Articles Grid */
.articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.article-card {
    background: rgba(0, 0, 0, 0.4);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s, border-color 0.3s;
}

.article-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
}

.article-card h2 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 10px;
}

.article-date {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 10px;
}

.read-more-link {
    display: inline-block;
    margin-top: 15px;
    font-weight: bold;
}

/* Article Detail Page */
.article-detail-page {
    max-width: 900px;
}

.back-link {
    display: inline-block;
    margin-bottom: 20px;
    color: #aaa;
}

.article-content {
    margin-top: 30px;
    font-size: 1.1rem;
    line-height: 1.8;
}

.article-content p {
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        gap: 10px;
    }
    
    .footer-container {
        flex-direction: column;
        text-align: center;
    }
}
`;

fs.appendFileSync('./src/index.css', cssToAppend);
console.log('CSS appended successfully');
