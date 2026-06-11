import React, { useEffect } from 'react';
import SetupScreen from '../components/SetupScreen';
import GameScreen from '../components/GameScreen';

export default function GamePage() {
  useEffect(() => {
    document.title = "Very Wild Jacks | Play Online";
    
    // Guard against double initialization (HMR, StrictMode, etc.)
    if (window._gameLoading || window.game) {
      console.warn("Game engine already loading or loaded, skipping duplicate init.");
      return;
    }
    window._gameLoading = true;
    
    let gameInstance = null;
    let cancelled = false;
    
    import('../engine/game.js').then((module) => {
      if (cancelled) {
        window._gameLoading = false;
        return;
      }
      const SequenceGame = module.default;
      gameInstance = new SequenceGame();
      window.game = gameInstance;
      window._gameLoading = false;
      console.log("Game engine loaded and bound to React DOM.");
    }).catch(err => {
      window._gameLoading = false;
      console.error("Failed to load game engine:", err);
    });

    return () => {
      cancelled = true;
      window._gameLoading = false;
      // Cleanup the game instance if React unmounts to prevent zombie PeerJS connections
      if (gameInstance) {
        if (gameInstance.peer && !gameInstance.peer.destroyed) {
          gameInstance.peer.destroy();
        }
        // Also close all active connections
        if (gameInstance.connections) {
          Object.values(gameInstance.connections).forEach(conn => {
            if (conn && conn.open) conn.close();
          });
        }
        if (gameInstance.hostConnection && gameInstance.hostConnection.open) {
          gameInstance.hostConnection.close();
        }
        gameInstance = null;
        delete window.game;
      }
    };
  }, []);

  return (
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
  );
}
