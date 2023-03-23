import styled from 'styled-components';

import CloseSvg from '../../assets/icons/close.svg';
import AppIcon from '../../assets/icons/app_icon_48.png';
import AppIcon1 from '../../assets/icons/app_icon1_48.png';

const FModal = styled.div`
  position: fixed;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: all 0.3s ease;
`;

const WidgetContainer = styled(FModal)`
  z-index: ${(props) => (props.id === 'b_panel_container' ? 9998 : 9999)};
  width: ${(props) => (props.id !== 'f_modal_container' ? '100vw' : '90vw')};
  left: ${(props) => (props.id !== 'f_modal_container' ? '0' : '5vw')};
  border-radius: ${(props) =>
    props.id !== 'f_modal_container' ? '0' : '0.75rem'};
  top: ${(props) => (props.id === 't_banner_container' ? '-300px' : 'unset')};
  bottom: ${(props) =>
    props.id === 't_banner_container' ? 'unset' : '-300px'};
`;

const FModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

const WidgetBackground = styled(FModalBackground)`
  width: ${(props) =>
    props.widgetId === 'b_panel_container' ? '85vw' : '80vw'};
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FModalIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FModalAppTitle = styled.p`
  font-family: Beatrice, sans-serif;
  margin: 0;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const FModalPromoteText = styled.p`
  font-family: Beatrice, sans-serif;
  margin: 0;
  line-height: 1.25;
  font-size: 0.625rem;
`;

const FModalDownload = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  line-height: 1;
  color: white;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  text-align: center;
  background-color: black;
  border-radius: 0.25rem;
  height: 20px;
  text-decoration: inherit;
`;

const FModalClose = styled.button`
  position: absolute;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: white;
  top: 0;
  right: 0;
`;

export default function Widget({ onCloseWidget, mobileOS, id }) {
  return (
    <WidgetContainer id={id}>
      <WidgetBackground widgetId={id}>
        <ContentWrapper>
          <FModalIcon>
            {mobileOS === 'Android' ? (
              <picture>
                <img src={AppIcon} alt="logo" style={{ width: 'auto' }} />
              </picture>
            ) : (
              <picture>
                <img src={AppIcon1} alt="logo" style={{ width: 'auto' }} />
              </picture>
            )}
          </FModalIcon>
          <div>
            <FModalAppTitle>Promote App</FModalAppTitle>
            <FModalPromoteText>Download for a discount</FModalPromoteText>
          </div>
        </ContentWrapper>
        <FModalDownload
          className="f-modal-download"
          href="/"
          target="_blank"
          download="download.zip"
        >
          Get
        </FModalDownload>
        <FModalClose onClick={onCloseWidget}>
          <img src={CloseSvg} alt="close" />
        </FModalClose>
      </WidgetBackground>
    </WidgetContainer>
  );
}
