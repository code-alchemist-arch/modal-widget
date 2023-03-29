import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

import Widget from '../../components/Widget';

import useAllowWidgetVisible from '../../hooks/useAllowWidgetVisible';
import useCloseTimeLimit from '../../hooks/useCloseTimeLimit';
import useMobileOS from '../../hooks/useMobileOS';
import { Banner_Closed_Time_Key, Widget_Category } from '../../utils/common';

export default function TopBar() {
  const { isNotWidgetVisible } = useAllowWidgetVisible();
  const { isCloseTimeLimit } = useCloseTimeLimit({
    widgetCategory: Widget_Category.tBanner,
  });
  const { mobileOS } = useMobileOS();

  const onClosePanel = useCallback(() => {
    document.getElementById('t_bar_container').style.top = '-300px';
    document.getElementById('root').style.marginTop = '0px';
    localStorage.setItem(Banner_Closed_Time_Key, new Date());
  }, []);

  useEffect(() => {
    if (isNotWidgetVisible || isCloseTimeLimit) return;

    const timeId = setTimeout(() => {
      const tBanner = document.getElementById('t_bar_container');
      const root = document.getElementById('root');
      if (!tBanner || !root) return;
      tBanner.style.top = '0px';
      root.style.marginTop = '100px';
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isNotWidgetVisible, isCloseTimeLimit]);

  if (!document.getElementById('top_bar')) return null;

  return ReactDOM.createPortal(
    <Widget
      onCloseWidget={onClosePanel}
      mobileOS={mobileOS}
      id="t_bar_container"
    />,
    document.getElementById('top_bar')
  );
}
