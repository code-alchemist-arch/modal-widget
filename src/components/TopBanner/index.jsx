import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import useAllowWidgetVisible from '../../hooks/useAllowWidgetVisible';
import usePromotion from '../../hooks/usePromotion';

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
  const { isNotWidgetVisible } = useAllowWidgetVisible();
  const { isPromotion } = usePromotion();
  const [isExistTopBanner, setIsExistTopBanner] = useState(false);

  useEffect(() => {
    const existingTopBanner = document.getElementById('top_banner');
    if (existingTopBanner) document.body.removeChild(existingTopBanner);

    if (isNotWidgetVisible || !isPromotion) {
      setIsExistTopBanner(false);
      return;
    }

    const topBanner = document.createElement('div');
    topBanner.id = 'top_banner';
    document.body.insertBefore(topBanner, document.body.firstChild);
    setIsExistTopBanner(true);
  }, [isNotWidgetVisible, isPromotion]);

  if (!isExistTopBanner) return null;

  return ReactDOM.createPortal(
    <BannerContainer id="t_banner_container">
      <DiscountCode>Get 10% Off your first in app purchase</DiscountCode>
      <Code>Use Code: APP10</Code>
    </BannerContainer>,
    document.getElementById('top_banner')
  );
}
