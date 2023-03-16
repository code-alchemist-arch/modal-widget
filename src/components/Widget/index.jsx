import CloseSvg from '../../assets/icons/close.svg';
import AppIcon from '../../assets/icons/app_icon_48.png';
import AppIcon1 from '../../assets/icons/app_icon1_48.png';

import './index.scss';

export default function Widget({ onCloseWidget, mobileOS, id }) {
  return (
    <div id={id} className="f-modal">
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
        <button className="f-modal-btn-close" onClick={onCloseWidget}>
          <img src={CloseSvg} alt="close" />
        </button>
      </div>
    </div>
  );
};