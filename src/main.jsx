import React from 'react';
import ReactDOM from 'react-dom/client';
import ControlPanel from './control-panel.jsx';
import './styles.css';
import Cards from './cv-cards.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ControlPanel />
    <Cards />
  </React.StrictMode>
);
