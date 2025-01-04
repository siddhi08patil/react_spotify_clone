import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter as Router } from 'react-router-dom';  // Use HashRouter
import PlayerContextProvider from './context/PlayerContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </Router>
  </StrictMode>
);
