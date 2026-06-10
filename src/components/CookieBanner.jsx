import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('vwj_cookie_consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('vwj_cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('vwj_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="glass-panel" style={bannerStyle}>
      <div style={contentStyle}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', textAlign: 'center', lineHeight: '1.4' }}>
          We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. 
          By making a choice, you consent to our use of cookies. <a href="/privacy" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>Read our Privacy Policy</a>.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '10px' }}>
          <button onClick={handleDecline} className="premium-button secondary" style={{ padding: '8px 24px', fontSize: '0.9rem' }}>Decline</button>
          <button onClick={handleAccept} className="premium-button" style={{ padding: '8px 24px', fontSize: '0.9rem' }}>Accept</button>
        </div>
      </div>
    </div>
  );
}

const bannerStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: 'calc(100% - 40px)',
  maxWidth: '450px',
  padding: '20px 25px',
  zIndex: 9999,
  boxSizing: 'border-box'
};

const contentStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px'
};
