import { useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: #14a7ed;
  height: 36px;
  text-align: center;
  padding: 10px;
`;

const DiscountCode = styled.p`
  font-size: 14px;
  margin: 0px;
`;

const Code = styled.p`
  font-size: 12px;
  margin: 5px 0 0 0;
`;

export default function TopBanner() {
  const isVisible = useMemo(() => {
    const userAgent = window.navigator.userAgent;
    return !!userAgent.toLowerCase().includes('canvas');
  }, []);

  useEffect(() => {
    if (!isVisible.current) return;

    const timeId = setTimeout(() => {
      const fModal = document.getElementById('t_banner_container');
      if (!fModal) return;
      fModal.style.bottom = '20px';
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isVisible]);

  if (!document.getElementById('top_banner')) return null;

  return ReactDOM.createPortal(
    <BannerContainer id="t_banner_container">
      <DiscountCode>Get 10% Off your first in app purchase</DiscountCode>
      <Code>Use Code: APP10</Code>
    </BannerContainer>,
    document.getElementById('top_banner')
  );
}
