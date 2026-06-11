import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles';

export default function BlogPage() {
  useEffect(() => {
    document.title = "Articles & Strategy - Very Wild Jacks";
  }, []);

  return (
    <div className="page-container content-page">
      <h1>Articles & Blog</h1>
      <p>Discover strategies, game rules, history, and tips to improve your Very Wild Jacks experience.</p>
      
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <h2>{article.title}</h2>
            <p className="article-date">{article.date}</p>
            <p className="article-excerpt">{article.excerpt}</p>
            <Link to={`/articles/${article.id}`} className="read-more-link">
              Read Full Article &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
