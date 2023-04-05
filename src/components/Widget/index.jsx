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
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M 33.375 0 C 30.539063 0.191406 27.503906 1.878906 25.625 4.15625 C 23.980469 6.160156 22.601563 9.101563 23.125 12.15625 C 22.65625 12.011719 22.230469 11.996094 21.71875 11.8125 C 20.324219 11.316406 18.730469 10.78125 16.75 10.78125 C 12.816406 10.78125 8.789063 13.121094 6.25 17.03125 C 2.554688 22.710938 3.296875 32.707031 8.90625 41.25 C 9.894531 42.75 11.046875 44.386719 12.46875 45.6875 C 13.890625 46.988281 15.609375 47.980469 17.625 48 C 19.347656 48.019531 20.546875 47.445313 21.625 46.96875 C 22.703125 46.492188 23.707031 46.070313 25.59375 46.0625 C 25.605469 46.0625 25.613281 46.0625 25.625 46.0625 C 27.503906 46.046875 28.476563 46.460938 29.53125 46.9375 C 30.585938 47.414063 31.773438 48.015625 33.5 48 C 35.554688 47.984375 37.300781 46.859375 38.75 45.46875 C 40.199219 44.078125 41.390625 42.371094 42.375 40.875 C 43.785156 38.726563 44.351563 37.554688 45.4375 35.15625 C 45.550781 34.90625 45.554688 34.617188 45.445313 34.363281 C 45.339844 34.109375 45.132813 33.910156 44.875 33.8125 C 41.320313 32.46875 39.292969 29.324219 39 26 C 38.707031 22.675781 40.113281 19.253906 43.65625 17.3125 C 43.917969 17.171875 44.101563 16.925781 44.164063 16.636719 C 44.222656 16.347656 44.152344 16.042969 43.96875 15.8125 C 41.425781 12.652344 37.847656 10.78125 34.34375 10.78125 C 32.109375 10.78125 30.46875 11.308594 29.125 11.8125 C 28.902344 11.898438 28.738281 11.890625 28.53125 11.96875 C 29.894531 11.25 31.097656 10.253906 32 9.09375 C 33.640625 6.988281 34.90625 3.992188 34.4375 0.84375 C 34.359375 0.328125 33.894531 -0.0390625 33.375 0 Z M 32.3125 2.375 C 32.246094 4.394531 31.554688 6.371094 30.40625 7.84375 C 29.203125 9.390625 27.179688 10.460938 25.21875 10.78125 C 25.253906 8.839844 26.019531 6.828125 27.1875 5.40625 C 28.414063 3.921875 30.445313 2.851563 32.3125 2.375 Z M 16.75 12.78125 C 18.363281 12.78125 19.65625 13.199219 21.03125 13.6875 C 22.40625 14.175781 23.855469 14.75 25.5625 14.75 C 27.230469 14.75 28.550781 14.171875 29.84375 13.6875 C 31.136719 13.203125 32.425781 12.78125 34.34375 12.78125 C 36.847656 12.78125 39.554688 14.082031 41.6875 16.34375 C 38.273438 18.753906 36.675781 22.511719 37 26.15625 C 37.324219 29.839844 39.542969 33.335938 43.1875 35.15625 C 42.398438 36.875 41.878906 38.011719 40.71875 39.78125 C 39.761719 41.238281 38.625 42.832031 37.375 44.03125 C 36.125 45.230469 34.800781 45.988281 33.46875 46 C 32.183594 46.011719 31.453125 45.628906 30.34375 45.125 C 29.234375 44.621094 27.800781 44.042969 25.59375 44.0625 C 23.390625 44.074219 21.9375 44.628906 20.8125 45.125 C 19.6875 45.621094 18.949219 46.011719 17.65625 46 C 16.289063 45.988281 15.019531 45.324219 13.8125 44.21875 C 12.605469 43.113281 11.515625 41.605469 10.5625 40.15625 C 5.3125 32.15625 4.890625 22.757813 7.90625 18.125 C 10.117188 14.722656 13.628906 12.78125 16.75 12.78125 Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 41.196476 43.978663 41.386759 43.943359 41.572266 C 38.994538 37.046731 31.881358 34.318147 26.021484 34.029297 C 26.120478 31.144783 26.666667 28.114232 27.738281 25.335938 C 30.252407 26.462152 32.60058 25.941588 34.201172 25.087891 C 35.874787 24.19524 36.874189 22.975889 36.902344 22.941406 L 36.904297 22.9375 C 41.0837 18.129574 40.998047 11.087891 40.998047 11.087891 A 1.0001 1.0001 0 0 0 40.105469 10.091797 C 34.894231 9.5362733 28.500238 11.34856 25.34375 15.423828 C 24.104445 17.023972 23.854987 18.75226 24.076172 20.15625 A 1.0005565 1.0005565 0 0 0 26.052734 19.84375 C 25.899919 18.87374 26.013134 17.824293 26.923828 16.648438 C 29.237957 13.660721 34.487189 11.949981 38.869141 12.097656 C 38.796741 13.469976 38.438831 18.12702 35.392578 21.628906 A 1.0001 1.0001 0 0 0 35.373047 21.652344 C 35.373047 21.652344 34.57444 22.621062 33.259766 23.322266 C 32.013908 23.986764 30.448304 24.3887 28.53125 23.505859 C 29.896591 20.758933 31.854771 18.391328 34.5 16.865234 A 1.0001 1.0001 0 0 0 33.945312 14.994141 A 1.0001 1.0001 0 0 0 33.5 15.134766 C 28.4807 18.030515 25.767166 23.325981 24.640625 28.769531 C 23.504533 26.767223 21.552651 24.284381 18.355469 23.066406 A 1.0001 1.0001 0 0 0 17.964844 22.994141 A 1.0001 1.0001 0 0 0 17.644531 24.933594 C 19.098323 25.487419 20.263964 26.401336 21.181641 27.400391 C 21.116389 27.470384 20.894161 27.692212 20.333984 27.882812 C 19.679329 28.10556 18.686258 28.218067 17.134766 27.427734 C 15.711125 26.702124 14.616843 25.074915 13.933594 23.574219 C 13.454272 22.521431 13.386358 22.093034 13.263672 21.623047 C 14.140391 21.284954 15.899011 20.715943 18.291016 21.228516 C 20.388181 21.677587 21.212996 22.583419 21.644531 23.447266 A 1.0009902 1.0009902 0 1 0 23.435547 22.552734 C 22.755082 21.190581 21.281819 19.822413 18.708984 19.271484 C 17.738589 19.063543 16.806019 19.011641 15.953125 19.050781 C 13.394444 19.168201 11.552734 20.105469 11.552734 20.105469 A 1.0001 1.0001 0 0 0 11.021484 21.207031 C 11.021484 21.207031 11.334031 22.69079 12.113281 24.402344 C 12.892532 26.113898 14.140203 28.145595 16.226562 29.208984 A 1.0001 1.0001 0 0 0 16.226562 29.210938 C 18.18507 30.208604 19.850671 30.161096 20.978516 29.777344 C 21.665648 29.543545 22.098686 29.229236 22.392578 28.978516 C 23.541431 30.713189 24.039062 32.279297 24.039062 32.279297 A 1.0007041 1.0007041 0 0 0 24.109375 32.453125 C 24.065639 32.988319 24.037609 33.518982 24.021484 34.044922 C 15.571175 34.449385 8.2651923 39.852287 6.0703125 41.640625 C 6.0259879 41.433949 6 41.220781 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 25.134766 36.003906 C 30.634307 36.047799 38.127873 38.825166 42.884766 43.324219 C 42.369889 43.741173 41.72093 44 41 44 L 9 44 C 8.2942367 44 7.6583434 43.750823 7.1484375 43.349609 C 9.0727371 41.797142 16.731502 36.06101 24.882812 36.005859 A 1.0001 1.0001 0 0 0 25.134766 36.003906 z" />
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
