import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Widget from '../../components/Widget';

import useAllowWidgetVisible from '../../hooks/useAllowWidgetVisible';
import useMobileOS from '../../hooks/useMobileOS';
import useCloseTimeLimit from '../../hooks/useCloseTimeLimit';
import usePromotion from '../../hooks/usePromotion';
import { Modal_Closed_Time_Key, Widget_Category } from '../../utils/common';

export default function FloatModal() {
  const { isNotWidgetVisible } = useAllowWidgetVisible();
  const { isPromotion } = usePromotion();
  const { isCloseTimeLimit } = useCloseTimeLimit({
    widgetCategory: Widget_Category.fModal,
  });
  const { mobileOS } = useMobileOS();

  const onCloseModal = useCallback(() => {
    document.getElementById('f_modal_container').style.bottom = '-300px';
    localStorage.setItem(Modal_Closed_Time_Key, new Date());
  }, []);

  useEffect(() => {
    if (isNotWidgetVisible || isCloseTimeLimit || isPromotion) return;

    const timeId = setTimeout(() => {
      const fModal = document.getElementById('f_modal_container');
      if (!fModal) return;
      fModal.style.bottom = '20px';
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isNotWidgetVisible, isCloseTimeLimit, isPromotion]);

  if (!document.getElementById('float_modal')) return null;

  return ReactDOM.createPortal(
    <Widget
      onCloseWidget={onCloseModal}
      mobileOS={mobileOS}
      id="f_modal_container"
    />,
    document.getElementById('float_modal')
  );
}
