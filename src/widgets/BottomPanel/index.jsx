import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import useAllowWidgetVisible from '../../hooks/useAllowWidgetVisible';
import useCloseTimeLimit from '../../hooks/useCloseTimeLimit';
import useMobileOS from '../../hooks/useMobileOS';
import { Panel_Closed_Time_Key, Widget_Category } from '../../utils/common';

import CloseSvg from '../../assets/icons/close.svg';
import AppIcon from '../../assets/icons/app_icon_48.png';
import AppIcon1 from '../../assets/icons/app_icon1_48.png';
import './index.scss';

const PanelContainer = ({ onClosePanel, mobileOS }) => {
  return (
    <div id="b_panel_container" className="f-modal">
      <div className="f-modal-background">
        <div className="f-modal-content-wrapper">
          <div className="f-modal-icon">
            {mobileOS === 'Android' ? (
              <picture>
                <img src={AppIcon} alt="Flowers" style={{width: 'auto'}} />
              </picture>
            ) : (
              <picture>
                <img src={AppIcon1} alt="Flowers" style={{width: 'auto'}} />
              </picture>
            )}
          </div>
          <div className="f-modal-content">
            <p className="f-modal-app-title">Promote App</p>
            <p className="f-modal-promote-text">Download for a discount</p>
          </div>
        </div>
        <a
          className="f-modal-download"
          href="/"
          target="_blank"
          download="download.zip"
        >
          Get
        </a>
        <button className="f-modal-btn-close" onClick={onClosePanel}>
          <img src={CloseSvg} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default function BottomPanel() {
  const { isNotWidgetVisible } = useAllowWidgetVisible();
  const { isCloseTimeLimit } = useCloseTimeLimit({
    isModal: Widget_Category.bPanel,
  });
  const { mobileOS } = useMobileOS();

  const onClosePanel = useCallback(() => {
    document.getElementById('b_panel_container').style.bottom = '-300px';
    localStorage.setItem(Panel_Closed_Time_Key, new Date());
  }, []);

  useEffect(() => {
    if (isNotWidgetVisible || isCloseTimeLimit) return;

    const timeId = setTimeout(() => {
      document.getElementById('b_panel_container').style.bottom = '0px';
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isNotWidgetVisible, isCloseTimeLimit]);

  return ReactDOM.createPortal(
    <PanelContainer onClosePanel={onClosePanel} mobileOS={mobileOS} />,
    document.querySelector('#bottom_panel')
  );
}
