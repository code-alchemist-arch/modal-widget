import { useMemo } from 'react';

export default function usePromotion() {
  const isPromotion = useMemo(() => {
    const userAgent = window.navigator.userAgent;
    const isContainCanvas = !!userAgent.toLowerCase().includes('canvas');
    console.log('userAgent', userAgent);
    return isContainCanvas;
  }, []);

  return { isPromotion };
}
