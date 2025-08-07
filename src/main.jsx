import React from 'react';
import ReactDOM from 'react-dom/client';
import ControlPanel from './control-panel.jsx';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ControlPanel />
  </React.StrictMode>
);
