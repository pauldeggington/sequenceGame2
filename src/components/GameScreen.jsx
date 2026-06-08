import React, { useEffect } from 'react';

export default function GameScreen() {


  return (
    <>
      <div id="game-screen" style={{ display: 'none' }}>
          
          <div id="turn-overlay" className="turn-overlay" style={{ display: 'none' }}>
              <div className="turn-overlay-text">Your Turn</div>
          </div>

          <div className="sidebar-wrapper">
              <div className="sidebar sidebar-left">
                  <ins className="adsbygoogle"
                       style={{ display: 'block' }}
                       data-ad-client="ca-pub-4922815922422305"
                       data-ad-slot="4651030442"
                       data-ad-format="auto"
                       data-full-width-responsive="true"></ins>
              </div>

              <div id="game-container">
                  <header className="game-header">
                  <div className="header-left">
                      <div id="host-dropped-warning" style={{ display: 'none' }}>
                          <span style={{ fontWeight: 'bold' }}>⚠ Host Connection Lost!</span>
                          <span id="host-reconnect-timer">Attempting to reconnect...</span>
                          <button id="take-over-host-btn" className="premium-button secondary"
                              style={{ display: 'none' }}>
                              Take Over as Host
                          </button>
                      </div>
                  </div>
                  
                  <div className="header-center">
                      <h1 id="game-title" style={{ cursor: 'pointer' }}>
                          <img src="/VeryWildJacksLogo.svg?v=2" alt="Very Wild Jacks" className="header-logo" />
                      </h1>
                  </div>
                  
                  <div className="header-right">
                      <div id="player-roster" className="player-roster">
                          {/* Dynamically populated by game.js */}
                      </div>
                  </div>
              </header>

              <div id="game-layout">
                  <div id="board-container" style={{ position: 'relative' }}>
                      <div id="emoji-menu"
                          style={{ display: 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', padding: '12px 12px 6px 12px', borderRadius: '12px', background: 'rgba(20, 20, 35, 0.98)', border: '1px solid var(--primary)', boxShadow: '0 8px 32px rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', zIndex: '10000' }}>
                          <div className="emoji-grid">
                              <span className="emoji-opt">👏</span>
                              <span className="emoji-opt">🔥</span>
                              <span className="emoji-opt">😂</span>
                              <span className="emoji-opt">🤯</span>
                              <span className="emoji-opt">😭</span>
                              <span className="emoji-opt">👀</span>
                              <span className="emoji-opt">👎</span>
                              <span className="emoji-opt">🤫</span>
                              <span className="emoji-opt">🎉</span>
                          </div>
                          <div className="chat-list">
                              <div className="chat-opt" data-msg="Good move!">Good move!</div>
                              <div className="chat-opt" data-msg="Oops!">Oops!</div>
                              <div className="chat-opt" data-msg="Nice Sequence!">Nice Sequence!</div>
                              <div className="chat-opt" data-msg="Hurry up!">Hurry up!</div>
                              <div className="chat-opt" data-msg="Good game!">Good game!</div>
                              <div className="chat-opt" data-msg="I will eat you!">I will eat you!</div>
                          </div>
                      </div>
                      <div id="game-board" className="board">
                          <svg id="sequence-lines" className="sequence-svg"></svg>
                          <div id="wipe-target-container"
                              style={{ display: 'none', position: 'absolute', inset: '0', pointerEvents: 'none', zIndex: '10' }}>
                              
                          </div>

                          <div id="wipe-action-panel" className="wipe-overlay-panel" style={{ display: 'none' }}>
                              <button id="wipe-action-btn" className="premium-button wipe-trigger-btn">
                                  💥 Trigger Wipe (Sacrifice 2 Jacks) 💥
                              </button>
                              <button id="wipe-cancel-btn" className="premium-button wipe-cancel-btn">
                                  ✖
                              </button>
                          </div>
                      </div>
                      
                      <div id="emoji-float-container"></div>
                  </div>

                  <div id="hand-panel">
                      <div style={{ display: 'grid', placeItems: 'center' }}>
                          <div id="jack-hint" className="jack-hint-panel"
                              style={{ visibility: 'hidden', gridArea: '1/1', width: '100%' }}></div>
                          <div id="dead-hint" className="jack-hint-panel"
                              style={{ visibility: 'hidden', gridArea: '1/1', width: '100%', background: 'rgba(150, 150, 150, 0.15)', borderColor: 'rgba(150, 150, 150, 0.4)', color: '#ccc' }}>
                          </div>
                      </div>
                      <div id="player-hand" className="hand"></div>
                  </div>
              </div>

              <div className="footer-row">
                  <div id="game-log">
                      <div id="log-content"></div>
                  </div>

                  
                  <div id="emoji-picker-container">
                      <button id="emoji-trigger" aria-label="Emoji Menu"></button>
                  </div>
                  <button id="mute-btn" className="icon-button" aria-label="Toggle Sound" style={{ fontSize: '1.5rem', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', color: 'white', cursor: 'pointer', flexShrink: 0 }}>
                      🔊
                  </button>
              </div>
              </div>
              <div className="sidebar sidebar-right">
                  <ins className="adsbygoogle"
                       style={{ display: 'block' }}
                       data-ad-client="ca-pub-4922815922422305"
                       data-ad-slot="5676483291"
                       data-ad-format="auto"
                       data-full-width-responsive="true"></ins>
              </div>
          </div>
      </div>

      <div id="sequence-popup-overlay" className="sequence-popup-overlay" style={{ display: 'none' }}>
          <div className="turn-overlay-text" id="seq-popup-title">🎉 Sequence Formed!</div>
          <div id="seq-popup-subtitle"
              style={{ fontSize: '1.5rem', marginTop: '20px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)', fontWeight: '600' }}>
          </div>
      </div>

      <div id="game-over-overlay" className="win-popup-overlay" style={{ display: 'none' }}>
          <div className="win-content">
              <div id="winner-text" className="turn-overlay-text">Red Team Wins!</div>
              <p id="win-subtitle">Congratulations!</p>
              <div className="win-actions">
                  <button id="play-again-btn" className="premium-button">Play Again</button>
                  <button id="home-btn" className="premium-button secondary">Home</button>
              </div>
              <p id="play-again-waiting" style={{ display: 'none', color: 'white', marginTop: '10px' }}>Waiting for host...</p>
          </div>
      </div>
    </>
  );
}