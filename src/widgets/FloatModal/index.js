import React, { useCallback, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const ModalContainer = ({ onCloseModal }) => {
  return (
    <div id="f_modal_container" className="f-modal">
      <div className="f-modal-icon">
        <img src="favicon.ico" alt="logo" />
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
      <button className="f-modal-btn-close" onClick={onCloseModal}>
        X
      </button>
    </div>
  );
};

export default function FloatModal() {
  const isNotAllow = useMemo(() => {
    const isMobile = window.innerWidth < 576;

    const userAgent = window.navigator.userAgent;
    const iOS = !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i);
    const webkit = !!userAgent.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !userAgent.match(/CriOS/i);
    return !isMobile || iOSSafari;
  }, []);

  const onCloseModal = useCallback(() => {
    document.getElementById('f_modal_container').style.bottom = '-300px';
  }, []);

  useEffect(() => {
    if (isNotAllow) return;

    const timeId = setTimeout(() => {
      document.getElementById('f_modal_container').style.bottom = '20px';
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isNotAllow]);

  return ReactDOM.createPortal(
    <ModalContainer onCloseModal={onCloseModal} />,
    document.querySelector('#float_modal')
  );
}
