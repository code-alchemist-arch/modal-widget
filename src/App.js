import { useState, useEffect } from 'react';

import BottomPanel from './widgets/BottomPanel';
import FloatModal from './widgets/FloatModal';
import TopBar from './widgets/TopBar';
import TopBanner from './components/TopBanner';
import AppContext from './context/app';

function App() {
  const [options, setOptions] = useState({});

  useEffect(() => {
    const loadJson = (FILE_URL) => {
      fetch(FILE_URL, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setOptions(json);
        });
    };

    loadJson('options.json');
  }, []);

  return (
    <AppContext.Provider value={options}>
      {options.position === 'float' && <FloatModal />}
      {options.position === 'bottom' && <BottomPanel />}
      {options.position === 'top' && <TopBar />}
      {options.position === 'top-banner' && <TopBanner />}
    </AppContext.Provider>
  );
}

export default App;
