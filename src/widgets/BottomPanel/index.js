import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BiX, BiMobile, BiMobileVibration } from 'react-icons/bi';

import useAllowWidgetVisible from '../../hooks/useAllowWidgetVisible';
import useCloseTimeLimit from '../../hooks/useCloseTimeLimit';
import useMobileOS from '../../hooks/useMobileOS';
import { Panel_Closed_Time_Key, Widget_Category } from '../../utils/common';

import './index.scss';

const PanelContainer = ({ onClosePanel, mobileOS }) => {
  return (
    <div id="b_panel_container" className="f-modal">
      <div className="f-modal-background">
        <div className="f-modal-icon">
          {mobileOS === 'Android' ? (
            <BiMobile color="#234567" size={30} />
          ) : (
            <BiMobileVibration color="#234567" size={30} />
          )}
        </div>
        <div className="f-modal-content">
          <p className="f-modal-promote-text">Download for a discount</p>
          {
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              className="f-modal-download"
              href="#"
              target="_blank"
              download="download.zip"
            >
              Download link
            </a>
          }
        </div>
        <button className="f-modal-btn-close" onClick={onClosePanel}>
          <BiX size={24} color="#808080" />
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
