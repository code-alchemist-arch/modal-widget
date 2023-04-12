import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.React = React;

const existingRootDOM = document.getElementById('root');
if (existingRootDOM) document.body.removeChild(existingRootDOM);
const existingFloatModal = document.getElementById('float_modal');
if (existingFloatModal) document.body.removeChild(existingFloatModal);
const existingBottomPanel = document.getElementById('bottom_panel');
if (existingBottomPanel) document.body.removeChild(existingBottomPanel);
const existingTopBar = document.getElementById('top_bar');
if (existingTopBar) document.body.removeChild(existingTopBar);
const existingTopBanner = document.getElementById('top_banner');
if (existingTopBanner) document.body.removeChild(existingTopBanner);

const rootDOM = document.createElement('div');
rootDOM.id = 'root';
const floatModal = document.createElement('div');
floatModal.id = 'float_modal';
const bottomModal = document.createElement('div');
bottomModal.id = 'bottom_panel';
const topBar = document.createElement('div');
topBar.id = 'top_bar';
const topBanner = document.createElement('div');
topBanner.id = 'top_banner';

document.body.appendChild(rootDOM);
document.body.appendChild(floatModal);
document.body.appendChild(bottomModal);
document.body.appendChild(topBar);
document.body.appendChild(topBanner);

const root = ReactDOM.createRoot(rootDOM);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
