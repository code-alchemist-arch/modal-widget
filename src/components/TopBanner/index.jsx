import { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import useAllowWidgetVisible from '../../hooks/useAllowWidgetVisible';
import usePromotion from '../../hooks/usePromotion';

import AppContext from '../../context/app';

const BannerContainer = styled.div`
  font-family: 'Open Sans', Arial, sans-serif;
  background-color: #14a7ed;
  text-align: center;
  padding: 10px;
`;

const DiscountCode = styled.p`
  font-size: 14px;
  margin: 0px;
`;

export default function TopBanner() {
  const { isNotWidgetVisible } = useAllowWidgetVisible();
  const { isPromotion } = usePromotion();
  const [isExistTopBanner, setIsExistTopBanner] = useState(false);
  const options = useContext(AppContext);

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
    <BannerContainer
      id="top_banner_wrapper"
      style={{
        backgroundColor: options.couponBackgroundColor,
        color: options.couponTextColor,
      }}
    >
      <DiscountCode
        className="coupon-content"
        dangerouslySetInnerHTML={{ __html: options.couponContent }}
      />
    </BannerContainer>,
    document.getElementById('top_banner')
  );
}
