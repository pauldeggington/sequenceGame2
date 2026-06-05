import React, { useEffect } from 'react';
import SetupScreen from './components/SetupScreen';
import GameScreen from './components/GameScreen';
import './index.css';

export default function App() {
  useEffect(() => {
    // The game engine will attach to the DOM nodes here.
    // We will dynamically import the game logic so it runs AFTER the React DOM is painted.
    import('./engine/game.js').then((module) => {
      console.log("Game engine loaded into React.");
    }).catch(err => console.error("Failed to load game engine:", err));
  }, []);

  return (
    <>
      <div id="bg-cards" className="bg-cards"></div>
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
