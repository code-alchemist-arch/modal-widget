import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

import Widget from '../../components/Widget';

import useAllowWidgetVisible from '../../hooks/useAllowWidgetVisible';
import useCloseTimeLimit from '../../hooks/useCloseTimeLimit';
import useMobileOS from '../../hooks/useMobileOS';
import usePromotion from '../../hooks/usePromotion';
import { Banner_Closed_Time_Key, Widget_Category } from '../../utils/common';

export default function TopBar() {
  const { isNotWidgetVisible } = useAllowWidgetVisible();
  const { isPromotion } = usePromotion();
  const { isCloseTimeLimit } = useCloseTimeLimit({
    widgetCategory: Widget_Category.tBanner,
  });
  const { mobileOS } = useMobileOS();

  const onClosePanel = useCallback(() => {
    document.getElementById('top_bar_wrapper').style.top = '-300px';
    document.getElementById('root').style.marginTop = '0px';
    localStorage.setItem(Banner_Closed_Time_Key, new Date());
  }, []);

  useEffect(() => {
    if (isNotWidgetVisible || isCloseTimeLimit || isPromotion) return;

    const timeId = setTimeout(() => {
      const tBanner = document.getElementById('top_bar_wrapper');
      const root = document.getElementById('root');
      if (!tBanner || !root) return;
      tBanner.style.top = '0px';
      root.style.marginTop = '100px';
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isNotWidgetVisible, isCloseTimeLimit, isPromotion]);

  if (!document.getElementById('top_bar')) return null;

  return ReactDOM.createPortal(
    <Widget
      onCloseWidget={onClosePanel}
      mobileOS={mobileOS}
      id="top_bar_wrapper"
    />,
    document.getElementById('top_bar')
  );
}
