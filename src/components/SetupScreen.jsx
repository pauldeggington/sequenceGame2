import React from 'react';

export default function SetupScreen() {
  return (
    <div id="setup-screen">
        <div className="setup-card glass-panel" style={{ maxWidth: '920px', width: '92%', margin: '0 auto 20px auto' }}>
            <h1 className="logo-title">
                <a href="https://pauldeggington.github.io/sequenceGame2">
                    <img src="VeryWildJacksLogo.svg?v=2" alt="Very Wild Jacks" className="setup-logo" />
                </a>
            </h1>
            <div className="setup-section name-section">
                <label htmlFor="player-name" className="name-label">Your Name</label>
                <input id="player-name" type="text" placeholder="Enter your name..." maxLength="20"
                    autoComplete="off" />
            </div>

            <div id="create-game-section" className="setup-section" style={{ display: 'none', flexDirection: 'column', alignItems: 'center' }}>
                <button id="create-game-btn" className="premium-button" style={{ marginBottom: '15px' }}>Create
                    Multiplayer Game</button>
                <button id="play-single-btn" className="premium-button secondary">Play
                    By Yourself</button>
            </div>

            <div id="setup-connection" className="setup-section">
                <p id="setup-status">Connecting to network...</p>
                <div id="invite-box" style={{ display: 'none' }}>
                    <p className="invite-label">Invite others using the following link:</p>
                    <input id="invite-url" type="text" readOnly />
                </div>
            </div>

            <div id="team-config" className="setup-section" style={{ display: 'none' }}>
                <h3>Game Options</h3>
                <div className="options-row"
                    style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', width: '100%' }}>
                    <div className="layout-select-container"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
                        <span className="toggle-label">Show Board Hints</span>
                        <div className="team-buttons" id="hint-buttons">
                            <button className="team-btn selected" id="hint-on-btn">On</button>
                            <button className="team-btn" id="hint-off-btn">Off</button>
                        </div>
                    </div>
                    <label className="hint-toggle"
                        style={{ justifyContent: 'center', width: '100%', display: 'none' }}>
                        <input type="checkbox" id="wipe-toggle" />
                        <span className="toggle-switch"></span>
                        <span className="toggle-label">Enable "The Wipe"</span>
                    </label>

                    <div className="layout-select-container"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%', marginTop: '5px' }}>
                        <span className="toggle-label" style={{ marginBottom: '-5px' }}>Turn Timer: <span id="timer-val-display" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>No Timer</span></span>
                        <input type="range" id="turn-timer-slider" className="theme-slider" min="0" max="4" defaultValue="0" step="1" style={{ width: '80%', maxWidth: '300px' }} 
                            onChange={(e) => {
                                const vals = ['No Timer', '15s', '30s', '60s', '2m'];
                                document.getElementById('timer-val-display').innerText = vals[e.target.value];
                            }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', maxWidth: '300px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
                            <span>Off</span>
                            <span>15s</span>
                            <span>30s</span>
                            <span>60s</span>
                            <span>2m</span>
                        </div>
                    </div>
                    <div className="layout-select-container"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
                        <span className="toggle-label">Board Layout</span>
                        <div className="team-buttons" id="layout-buttons">
                            <button className="team-btn selected" id="layout-default-btn"
                                data-mode="default">Default</button>
                            <button className="team-btn" id="layout-random-btn"
                                data-mode="random">Randomized</button>
                        </div>
                    </div>
                </div>
                <h3 style={{ textAlign: 'center', width: '100%' }}>Teams</h3>
                <div className="team-buttons">
                    <button className="team-btn selected" data-teams="2">2 Teams</button>
                    <button className="team-btn" data-teams="3">3 Teams</button>
                </div>
                <div id="team-labels" className="team-labels" style={{ justifyContent: 'center' }}>
                    <span className="team-tag red">🔴 Red</span>
                    <span className="team-tag blue">🔵 Blue</span>
                </div>
            </div>

            <div id="player-list" className="setup-section" style={{ display: 'none' }}>
                <h3>Players</h3>
                <div id="players-connected"></div>
            </div>

            <button id="start-game-btn" className="premium-button start-btn" style={{ display: 'none' }}>
                Start Game
            </button>

            <button id="setup-back-btn" className="premium-button secondary"
                style={{ display: 'none', marginTop: '15px' }}>
                Back to Menu
            </button>

            <p id="waiting-msg" className="waiting-text" style={{ display: 'none' }}>Waiting for host to start...
            </p>
        </div>

        <div className="instructions-wrapper">
            <img src="howtoplayhorizontal.png" alt="How to Play" className="instructions-desktop" />
            <img src="howtoplayvertical.png" alt="How to Play" className="instructions-mobile" />
        </div>

        <div className="instructions-wrapper">
            <img src="strategyhorizontal.png" alt="Strategy & Tactics" className="instructions-desktop" />
            <img src="strategyvertical.png" alt="Strategy & Tactics" className="instructions-mobile" />
        </div>

        <div className="mobile-ad">
            
        </div>
    </div>
  );
}