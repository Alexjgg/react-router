import './App.css';
import React, { useEffect, useState } from 'react';
import { EVENTS } from './consts';
import HomePage from './pages/Home.jsx';  // Importación por defecto
import AboutPage from './pages/About.jsx';


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  //Con estoe scuchamos cuando cambai la url
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    }
  }, [])

  return (
    <div className="App">
      <main>
        {currentPath === '/' && <HomePage />}
        {currentPath === '/about' && <AboutPage />}
      </main>
    </div>
  );
}

export default App;
