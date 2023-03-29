import styled from 'styled-components';

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
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 70.51"
              >
                <defs>
                  <style>.cls-1</style>
                </defs>
                <title>ecommerce website</title>
                <path
                  class="cls-1"
                  d="M2.54,65.44H15.13a2.19,2.19,0,0,1-1.63-2.1V2.17A2.18,2.18,0,0,1,15.67,0h91a2.18,2.18,0,0,1,2.17,2.17V63.33a2.17,2.17,0,0,1-1.63,2.1h13.16A2.54,2.54,0,0,1,122.88,68h0a2.54,2.54,0,0,1-2.54,2.54H2.54A2.54,2.54,0,0,1,0,68H0a2.54,2.54,0,0,1,2.54-2.53Zm84.7-50.2h9.89a.77.77,0,0,1,.77.77v2.26a.76.76,0,0,1-.77.77H87.24a.77.77,0,0,1-.77-.77V16a.78.78,0,0,1,.77-.77Zm-16.7,0H80a.77.77,0,0,1,.77.77v2.26A.76.76,0,0,1,80,19H70.54a.77.77,0,0,1-.77-.77V16a.78.78,0,0,1,.77-.77Zm-19,0H62.36a.78.78,0,0,1,.77.77v2.26a.77.77,0,0,1-.77.77H51.51a.76.76,0,0,1-.77-.77V16a.77.77,0,0,1,.77-.77ZM83,56.58a1.72,1.72,0,0,1,0-3.44h8.71a1.72,1.72,0,0,1,0,3.44Zm-25.87,0a1.72,1.72,0,0,1,0-3.44h8.7a1.72,1.72,0,0,1,0,3.44Zm-25.88,0a1.72,1.72,0,0,1,0-3.44h8.71a1.72,1.72,0,0,1,0,3.44ZM76.74,27H97.9V48.24H76.74V27ZM87.28,41.63a.88.88,0,1,1-1.75,0,.87.87,0,0,1,1.75,0ZM81.91,33a.36.36,0,0,1,.36-.35h.53a1.66,1.66,0,0,1,.87.23,1.32,1.32,0,0,1,.59.83,0,0,0,0,0,0,0l.09.36h8a.36.36,0,0,1,.36.36.43.43,0,0,1,0,.11l-.93,3.76a.36.36,0,0,1-.35.27H85.56c.13.48.26.74.43.85a2.35,2.35,0,0,0,1.19.14h4.15a.36.36,0,0,1,0,.72H87.19a2.84,2.84,0,0,1-1.6-.26,2.34,2.34,0,0,1-.78-1.49h0L83.58,34s0,0,0,0a.64.64,0,0,0-.27-.41,1,1,0,0,0-.51-.12h-.26c-.26,0-.62,0-.62-.37Zm9.23,8.6a.88.88,0,0,1-1.76,0,.88.88,0,0,1,1.76,0ZM50.86,27H72V48.24H50.86V27ZM61.41,41.63a.88.88,0,0,1-1.76,0,.87.87,0,0,1,1.76,0ZM56,33a.35.35,0,0,1,.35-.35h.54a1.6,1.6,0,0,1,.86.23,1.32,1.32,0,0,1,.59.83,0,0,0,0,0,0,0l.09.36h8a.36.36,0,0,1,.35.36.43.43,0,0,1,0,.11l-.93,3.76a.35.35,0,0,1-.35.27H59.69c.13.48.25.74.43.85a2.33,2.33,0,0,0,1.19.14h4.14a.36.36,0,1,1,0,.72H61.32a2.82,2.82,0,0,1-1.6-.26,2.3,2.3,0,0,1-.79-1.49h0L57.7,34s0,0,0,0a.6.6,0,0,0-.27-.41,1,1,0,0,0-.5-.12h-.26c-.26,0-.62,0-.62-.37Zm9.22,8.6a.88.88,0,1,1-1.76,0,.87.87,0,0,1,1.76,0ZM25,27H46.14V48.24H25V27ZM35.53,41.63a.88.88,0,0,1-1.76,0,.87.87,0,0,1,1.76,0ZM30.16,33a.36.36,0,0,1,.36-.35h.53a1.57,1.57,0,0,1,.87.23,1.34,1.34,0,0,1,.58.83,0,0,0,0,0,0,0l.09.36h8a.36.36,0,0,1,.36.36.43.43,0,0,1,0,.11L40,38.36a.34.34,0,0,1-.34.27H33.81a1.48,1.48,0,0,0,.43.85,2.35,2.35,0,0,0,1.19.14h4.14a.36.36,0,0,1,0,.72H35.44a2.82,2.82,0,0,1-1.6-.26,2.3,2.3,0,0,1-.79-1.49h0L31.83,34s0,0,0,0a.65.65,0,0,0-.28-.41,1,1,0,0,0-.5-.12h-.25c-.26,0-.63,0-.63-.37Zm9.22,8.6a.88.88,0,1,1-1.75,0,.87.87,0,0,1,1.75,0ZM27.79,5.21a1.73,1.73,0,1,1-1.72,1.73,1.73,1.73,0,0,1,1.72-1.73Zm5.84,0a1.73,1.73,0,1,1-1.72,1.73,1.73,1.73,0,0,1,1.72-1.73ZM22,5.21a1.73,1.73,0,1,1-1.72,1.73A1.73,1.73,0,0,1,22,5.21Zm-4.74,6H105.4V62.72H17.21V11.16ZM57.87,66.39H65a1.22,1.22,0,0,1,1.22,1.22h0A1.22,1.22,0,0,1,65,68.83H57.87a1.22,1.22,0,0,1-1.22-1.22h0a1.22,1.22,0,0,1,1.22-1.22Z"
                />
              </svg>
            ) : (
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 70.51"
              >
                <defs>
                  <style>.cls-1</style>
                </defs>
                Another
                <title>ecommerce website</title>
                <path
                  class="cls-1"
                  d="M2.54,65.44H15.13a2.19,2.19,0,0,1-1.63-2.1V2.17A2.18,2.18,0,0,1,15.67,0h91a2.18,2.18,0,0,1,2.17,2.17V63.33a2.17,2.17,0,0,1-1.63,2.1h13.16A2.54,2.54,0,0,1,122.88,68h0a2.54,2.54,0,0,1-2.54,2.54H2.54A2.54,2.54,0,0,1,0,68H0a2.54,2.54,0,0,1,2.54-2.53Zm84.7-50.2h9.89a.77.77,0,0,1,.77.77v2.26a.76.76,0,0,1-.77.77H87.24a.77.77,0,0,1-.77-.77V16a.78.78,0,0,1,.77-.77Zm-16.7,0H80a.77.77,0,0,1,.77.77v2.26A.76.76,0,0,1,80,19H70.54a.77.77,0,0,1-.77-.77V16a.78.78,0,0,1,.77-.77Zm-19,0H62.36a.78.78,0,0,1,.77.77v2.26a.77.77,0,0,1-.77.77H51.51a.76.76,0,0,1-.77-.77V16a.77.77,0,0,1,.77-.77ZM83,56.58a1.72,1.72,0,0,1,0-3.44h8.71a1.72,1.72,0,0,1,0,3.44Zm-25.87,0a1.72,1.72,0,0,1,0-3.44h8.7a1.72,1.72,0,0,1,0,3.44Zm-25.88,0a1.72,1.72,0,0,1,0-3.44h8.71a1.72,1.72,0,0,1,0,3.44ZM76.74,27H97.9V48.24H76.74V27ZM87.28,41.63a.88.88,0,1,1-1.75,0,.87.87,0,0,1,1.75,0ZM81.91,33a.36.36,0,0,1,.36-.35h.53a1.66,1.66,0,0,1,.87.23,1.32,1.32,0,0,1,.59.83,0,0,0,0,0,0,0l.09.36h8a.36.36,0,0,1,.36.36.43.43,0,0,1,0,.11l-.93,3.76a.36.36,0,0,1-.35.27H85.56c.13.48.26.74.43.85a2.35,2.35,0,0,0,1.19.14h4.15a.36.36,0,0,1,0,.72H87.19a2.84,2.84,0,0,1-1.6-.26,2.34,2.34,0,0,1-.78-1.49h0L83.58,34s0,0,0,0a.64.64,0,0,0-.27-.41,1,1,0,0,0-.51-.12h-.26c-.26,0-.62,0-.62-.37Zm9.23,8.6a.88.88,0,0,1-1.76,0,.88.88,0,0,1,1.76,0ZM50.86,27H72V48.24H50.86V27ZM61.41,41.63a.88.88,0,0,1-1.76,0,.87.87,0,0,1,1.76,0ZM56,33a.35.35,0,0,1,.35-.35h.54a1.6,1.6,0,0,1,.86.23,1.32,1.32,0,0,1,.59.83,0,0,0,0,0,0,0l.09.36h8a.36.36,0,0,1,.35.36.43.43,0,0,1,0,.11l-.93,3.76a.35.35,0,0,1-.35.27H59.69c.13.48.25.74.43.85a2.33,2.33,0,0,0,1.19.14h4.14a.36.36,0,1,1,0,.72H61.32a2.82,2.82,0,0,1-1.6-.26,2.3,2.3,0,0,1-.79-1.49h0L57.7,34s0,0,0,0a.6.6,0,0,0-.27-.41,1,1,0,0,0-.5-.12h-.26c-.26,0-.62,0-.62-.37Zm9.22,8.6a.88.88,0,1,1-1.76,0,.87.87,0,0,1,1.76,0ZM25,27H46.14V48.24H25V27ZM35.53,41.63a.88.88,0,0,1-1.76,0,.87.87,0,0,1,1.76,0ZM30.16,33a.36.36,0,0,1,.36-.35h.53a1.57,1.57,0,0,1,.87.23,1.34,1.34,0,0,1,.58.83,0,0,0,0,0,0,0l.09.36h8a.36.36,0,0,1,.36.36.43.43,0,0,1,0,.11L40,38.36a.34.34,0,0,1-.34.27H33.81a1.48,1.48,0,0,0,.43.85,2.35,2.35,0,0,0,1.19.14h4.14a.36.36,0,0,1,0,.72H35.44a2.82,2.82,0,0,1-1.6-.26,2.3,2.3,0,0,1-.79-1.49h0L31.83,34s0,0,0,0a.65.65,0,0,0-.28-.41,1,1,0,0,0-.5-.12h-.25c-.26,0-.63,0-.63-.37Zm9.22,8.6a.88.88,0,1,1-1.75,0,.87.87,0,0,1,1.75,0ZM27.79,5.21a1.73,1.73,0,1,1-1.72,1.73,1.73,1.73,0,0,1,1.72-1.73Zm5.84,0a1.73,1.73,0,1,1-1.72,1.73,1.73,1.73,0,0,1,1.72-1.73ZM22,5.21a1.73,1.73,0,1,1-1.72,1.73A1.73,1.73,0,0,1,22,5.21Zm-4.74,6H105.4V62.72H17.21V11.16ZM57.87,66.39H65a1.22,1.22,0,0,1,1.22,1.22h0A1.22,1.22,0,0,1,65,68.83H57.87a1.22,1.22,0,0,1-1.22-1.22h0a1.22,1.22,0,0,1,1.22-1.22Z"
                />
              </svg>
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
              stroke-linejoin="round"
            ></rect>
            <rect
              x="21.8181"
              y="0.707595"
              width="2.08555"
              height="29.8555"
              transform="rotate(45 21.8181 0.707595)"
              fill="black"
              stroke="black"
              stroke-linejoin="round"
            ></rect>
          </svg>
        </FModalClose>
      </WidgetBackground>
    </WidgetContainer>
  );
}
