import { useState } from 'react';
import ControlPanel from './control-panel.jsx';
import Cards from './cv-cards.jsx';

function App() {
  const [settings, setSettings] = useState({
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    includePhoto: false,
  });

  const handleSettingsChange = (newSetting) => {
    setSettings((prev) => ({
      ...prev,
      ...newSetting,
    }));
  };

  return (
    <>
      <ControlPanel onSettingsChange={handleSettingsChange} />
      <Cards settings={settings} />
    </>
  );
}

export default App;
