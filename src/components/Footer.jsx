import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer({ forceShow }) {
  const location = useLocation();

  if (location.pathname === '/' && !forceShow) {
    return null;
  }

  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" style={{ textAlign: 'center', paddingBottom: '30px', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', background: 'transparent', borderTop: 'none' }}>
      <div className="footer-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <p style={{ margin: 0 }}>&copy; {year} VeryWildJacks.com</p>
        <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link>
        <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link>
        <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
        <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms & Conditions</Link>
      </div>
    </footer>
  );
}
