import BottomPanel from './widgets/BottomPanel';
import FloatModal from './widgets/FloatModal';
import TopBar from './widgets/TopBar';
import TopBanner from './components/TopBanner';

import options from './utils/options';

function App() {
  return (
    <>
      {options.position === 'float' && <FloatModal />}
      {options.position === 'bottom' && <BottomPanel />}
      {options.position === 'top' && <TopBar />}
      {options.position === 'top-banner' && <TopBanner />}
    </>
  );
}

export default App;
