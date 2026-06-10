import React, { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us - Very Wild Jacks";
  }, []);

  return (
    <div className="page-container content-page">
      <h1>About Us</h1>
      <p>Welcome to Very Wild Jacks! We are passionate about bringing classic board game experiences to the digital world. Our goal is to provide a seamless, fun, and competitive platform for players around the globe.</p>
      
      <h2>Our Mission</h2>
      <p>Our mission is to connect friends and family through engaging online multiplayer games. Very Wild Jacks was born out of a love for strategy and card games, and we've dedicated ourselves to making the best online version of this classic game.</p>
      
      <h2>The Team</h2>
      <p>We are a small team of indie developers and game enthusiasts. We believe that games should be accessible, easy to learn, but hard to master.</p>
      
      <h2>Why Play Very Wild Jacks?</h2>
      <p>Whether you're a seasoned pro or a complete beginner, our platform is designed to give you the best experience possible. Play with friends in private rooms, or challenge the computer. The choice is yours!</p>
    </div>
  );
}
