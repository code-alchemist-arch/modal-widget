import BottomPanel from './widgets/BottomPanel';
import FloatModal from './widgets/FloatModal';
import TopBar from './widgets/TopBar';
import TopBanner from './components/TopBanner';
import AppContext from './context/app';

function App() {
  const smartAppBanner = window._DEFAULT_DATA ?? {};

  return (
    <AppContext.Provider value={smartAppBanner}>
      {smartAppBanner.position === 'float' && <FloatModal />}
      {smartAppBanner.position === 'bottom' && <BottomPanel />}
      {smartAppBanner.position === 'top' && <TopBar />}
      {smartAppBanner.position === 'top-banner' && <TopBanner />}
    </AppContext.Provider>
  );
}

export default App;
