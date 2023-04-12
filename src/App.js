import BottomPanel from './widgets/BottomPanel';
import FloatModal from './widgets/FloatModal';
import TopBar from './widgets/TopBar';
import TopBanner from './components/TopBanner';
import AppContext from './context/app';

function App() {
  const smartAppBanner = {
    _comment_: 'position has `float`, `bottom`, `top`, `top-banner`',
    position: 'top',
    iconIos: 'https://svgshare.com/i/ryz.svg',
    iconAndroid: 'https://svgshare.com/i/rzS.svg',
    textHeading: '<strong>Download now!</strong>',
    textDescription: 'Try it now, download today',
    buttonText: 'Download',
    buttonColor: '#000000',
    buttonLinkIos: 'https://appstore.com/app',
    buttonLinkAndroid: 'https://playstore.com/app',
    couponTextHeading: 'Get a discount on your first purchase',
    couponTextDescription: 'Use coupon <strong>10OFF</strong>',
    couponBackgroundColor: '#000',
    couponTextColor: '#FFF',
  };

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
