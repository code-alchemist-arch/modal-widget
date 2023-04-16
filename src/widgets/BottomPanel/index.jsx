import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Widget from '../../components/Widget';

import useAllowWidgetVisible from '../../hooks/useAllowWidgetVisible';
import useCloseTimeLimit from '../../hooks/useCloseTimeLimit';
import useMobileOS from '../../hooks/useMobileOS';
import usePromotion from '../../hooks/usePromotion';
import { Panel_Closed_Time_Key, Widget_Category } from '../../utils/common';

export default function BottomPanel() {
  const { isNotWidgetVisible } = useAllowWidgetVisible();
  const { isPromotion } = usePromotion();
  const { isCloseTimeLimit } = useCloseTimeLimit({
    widgetCategory: Widget_Category.bPanel,
  });
  const { mobileOS } = useMobileOS();

  const onClosePanel = useCallback(() => {
    document.getElementById('bottom_panel_wrapper').style.bottom = '-300px';
    localStorage.setItem(Panel_Closed_Time_Key, new Date());
  }, []);

  useEffect(() => {
    if (isNotWidgetVisible || isCloseTimeLimit || isPromotion) return;

    const timeId = setTimeout(() => {
      const bPanel = document.getElementById('bottom_panel_wrapper');
      if (!bPanel) return;
      bPanel.style.bottom = '0px';
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isNotWidgetVisible, isCloseTimeLimit, isPromotion]);

  if (!document.getElementById('bottom_panel')) return null;

  return ReactDOM.createPortal(
    <Widget
      onCloseWidget={onClosePanel}
      mobileOS={mobileOS}
      id="bottom_panel_wrapper"
    />,
    document.getElementById('bottom_panel')
  );
}
