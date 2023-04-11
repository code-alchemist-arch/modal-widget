import styled from 'styled-components';

import options from '../../utils/options';

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
  top: ${(props) => (props.id === 't_bar_container' ? '-300px' : 'unset')};
  bottom: ${(props) => (props.id === 't_bar_container' ? 'unset' : '-300px')};
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
  img {
    width: 30px;
    height: 30px;
  }
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
              <img src={options.iconAndroid} alt="Android Icon" />
            ) : (
              <img src={options.iconIos} alt="iOS Icon" />
            )}
          </FModalIcon>
          <div>
            <FModalAppTitle
              dangerouslySetInnerHTML={{ __html: options.textHeading }}
            />
            <FModalPromoteText>{options.textDescription}</FModalPromoteText>
          </div>
        </ContentWrapper>
        <FModalDownload
          className="f-modal-download"
          href={
            mobileOS === 'Android'
              ? options.buttonLinkAndroid
              : options.buttonLinkIos
          }
          target="_blank"
          download="download.zip"
          style={{
            backgroundColor: options.buttonColor,
          }}
        >
          {options.buttonText}
        </FModalDownload>
        <FModalClose onClick={onCloseWidget}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.707107"
              y="2.18201"
              width="2.08555"
              height="29.8555"
              transform="rotate(-45 0.707107 2.18201)"
              fill="black"
              stroke="black"
              strokeLinejoin="round"
            ></rect>
            <rect
              x="21.8181"
              y="0.707595"
              width="2.08555"
              height="29.8555"
              transform="rotate(45 21.8181 0.707595)"
              fill="black"
              stroke="black"
              strokeLinejoin="round"
            ></rect>
          </svg>
        </FModalClose>
      </WidgetBackground>
    </WidgetContainer>
  );
}
