import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../data/articles';

export default function ArticlePage() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} - Very Wild Jacks`;
    } else {
      document.title = "Article Not Found - Very Wild Jacks";
    }
  }, [article]);

  if (!article) {
    return (
      <div className="page-container content-page">
        <h1>Article Not Found</h1>
        <p>The article you are looking for does not exist.</p>
        <Link to="/articles">Return to Articles</Link>
      </div>
    );
  }

  return (
    <div className="page-container content-page article-detail-page">
      <Link to="/articles" className="back-link">&larr; Back to Articles</Link>
      <h1>{article.title}</h1>
      <p className="article-date">Published on {article.date}</p>
      
      <div 
        className="article-content" 
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />
    </div>
  );
}
