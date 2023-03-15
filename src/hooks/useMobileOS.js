import { useMemo } from 'react';

export default function useMobileOS() {
  const mobileOS = useMemo(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) return 'Windows Phone';
    if (/android/i.test(userAgent)) return 'Android';
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'iOS';
    return 'unknown';
  }, []);

  return { mobileOS };
}
