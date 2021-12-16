import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MessengerPopupContext } from './components/Navbar/PopupMessenger/store/MessengerPopupContext';
ReactDOM.render(
  <BrowserRouter>
    <MessengerPopupContext>
      <App />
    </MessengerPopupContext>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
