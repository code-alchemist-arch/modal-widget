import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Widget from '../../components/Widget';

import useAllowWidgetVisible from '../../hooks/useAllowWidgetVisible';
import useCloseTimeLimit from '../../hooks/useCloseTimeLimit';
import useMobileOS from '../../hooks/useMobileOS';
import { Panel_Closed_Time_Key, Widget_Category } from '../../utils/common';

import './index.scss';

export default function BottomPanel() {
  const { isNotWidgetVisible } = useAllowWidgetVisible();
  const { isCloseTimeLimit } = useCloseTimeLimit({
    widgetCategory: Widget_Category.bPanel,
  });
  const { mobileOS } = useMobileOS();

  const onClosePanel = useCallback(() => {
    document.getElementById('b_panel_container').style.bottom = '-300px';
    localStorage.setItem(Panel_Closed_Time_Key, new Date());
  }, []);

  useEffect(() => {
    if (isNotWidgetVisible || isCloseTimeLimit) return;

    const timeId = setTimeout(() => {
      const bPanel = document.getElementById('b_panel_container');
      if (!bPanel) return;
      bPanel.style.bottom = '0px';
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isNotWidgetVisible, isCloseTimeLimit]);

  if (!document.getElementById('bottom_panel')) return null;

  return ReactDOM.createPortal(
    <Widget
      onCloseWidget={onClosePanel}
      mobileOS={mobileOS}
      id="b_panel_container"
    />,
    document.getElementById('bottom_panel')
  );
}
