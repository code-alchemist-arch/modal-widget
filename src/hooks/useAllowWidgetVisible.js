import { useMemo } from 'react';

export default function useAllowWidgetVisible() {
  const isNotWidgetVisible = useMemo(() => {
    const isMobile = navigator.userAgentData.mobile;
    const userAgent = window.navigator.userAgent;
    const iOS = !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i);
    const webkit = !!userAgent.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !userAgent.match(/CriOS/i);
    const isContainCanvas = !!userAgent.includes('Canvas');

    return !isMobile || iOSSafari || isContainCanvas;
  }, []);

  return { isNotWidgetVisible };
}
