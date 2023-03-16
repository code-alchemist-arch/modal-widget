import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import useAllowWidgetVisible from '../../hooks/useAllowWidgetVisible';
import useMobileOS from '../../hooks/useMobileOS';
import useCloseTimeLimit from '../../hooks/useCloseTimeLimit';
import { Modal_Closed_Time_Key, Widget_Category } from '../../utils/common';

import CloseSvg from '../../assets/icons/close.svg';
import AppIcon from '../../assets/icons/app_icon_48.png';
import AppIcon1 from '../../assets/icons/app_icon1_48.png';
import './index.scss';

const ModalContainer = ({ onCloseModal, mobileOS }) => {
  return (
    <div id="f_modal_container" className="f-modal">
      <div className="f-modal-background">
        <div className="f-modal-content-wrapper">
          <div className="f-modal-icon">
            {mobileOS === 'Android' ? (
              <picture>
                <img src={AppIcon} alt="logo" style={{width: 'auto'}} />
              </picture>
            ) : (
              <picture>
                <img src={AppIcon1} alt="logo" style={{width: 'auto'}} />
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
        <button className="f-modal-btn-close" onClick={onCloseModal}>
          <img src={CloseSvg} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default function FloatModal() {
  const { isNotWidgetVisible } = useAllowWidgetVisible();
  const { isCloseTimeLimit } = useCloseTimeLimit({
    widgetCategory: Widget_Category.fModal,
  });
  const { mobileOS } = useMobileOS();

  const onCloseModal = useCallback(() => {
    document.getElementById('f_modal_container').style.bottom = '-300px';
    localStorage.setItem(Modal_Closed_Time_Key, new Date());
  }, []);

  useEffect(() => {
    if (isNotWidgetVisible || isCloseTimeLimit) return;

    const timeId = setTimeout(() => {
      document.getElementById('f_modal_container').style.bottom = '20px';
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isNotWidgetVisible, isCloseTimeLimit]);

  return ReactDOM.createPortal(
    <ModalContainer onCloseModal={onCloseModal} mobileOS={mobileOS} />,
    document.querySelector('#float_modal')
  );
}
