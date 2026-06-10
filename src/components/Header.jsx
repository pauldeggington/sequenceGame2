import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ArticlesIcon, AboutIcon, ContactIcon } from './NavIcons';

export default function Header({ forceShow }) {
  const location = useLocation();

  if (location.pathname === '/' && !forceShow) {
    return null;
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <nav className="main-nav">
          <ul style={{ gap: '30px' }}>
            <li><Link to="/" title="Home"><HomeIcon /></Link></li>
            <li><Link to="/articles" title="Articles & Blog"><ArticlesIcon /></Link></li>
            <li><Link to="/about" title="About Us"><AboutIcon /></Link></li>
            <li><Link to="/contact" title="Contact"><ContactIcon /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
