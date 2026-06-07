import React, { useEffect } from 'react';
import SetupScreen from './components/SetupScreen';
import GameScreen from './components/GameScreen';
import './index.css';

export default function App() {
  useEffect(() => {
    // The game engine will attach to the DOM nodes here.
    let gameInstance = null;
    
    import('./engine/game.js').then((module) => {
      const SequenceGame = module.default;
      gameInstance = new SequenceGame();
      window.game = gameInstance;
      console.log("Game engine loaded and bound to React DOM.");
    }).catch(err => console.error("Failed to load game engine:", err));

    return () => {
      // Cleanup the game instance if React unmounts to prevent zombie PeerJS connections
      if (gameInstance) {
        if (gameInstance.peer && !gameInstance.peer.destroyed) {
          gameInstance.peer.destroy();
        }
        delete window.game;
      }
    };
  }, []);

  return (
    <>
      <div id="global-layout">
        <div className="sidebar-wrapper">
          <aside className="sidebar sidebar-left">
            {/* Sidebar content / ads go here */}
          </aside>

          <main id="main-content">
             <SetupScreen />
             <GameScreen />
          </main>
          
          <aside className="sidebar sidebar-right">
             {/* Right sidebar content */}
          </aside>
        </div>
      </div>
    </>
  );
}
