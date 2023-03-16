import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import useAllowWidgetVisible from '../../hooks/useAllowWidgetVisible';

import './index.scss';

const BannerContainer = () => {
  return (
    <div id="t_banner_container" className="t-banner">
      <section className="t-banner-inner">
        <p className="t-banner-title">
          <b>Free shipping* </b>
          on all orders!
        </p>
      </section>
    </div>
  );
};

export default function TopBanner() {
  const { isNotWidgetVisible } = useAllowWidgetVisible();

  useEffect(() => {
    if (isNotWidgetVisible) return;

    const timeId = setTimeout(() => {
      document.getElementById('t_banner_container').style.top = '0px';
      document.getElementById('root').style.marginTop = '60px';
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isNotWidgetVisible]);

  return ReactDOM.createPortal(
    <BannerContainer />,
    document.querySelector('#top_banner')
  );
}
