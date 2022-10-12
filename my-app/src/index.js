// const React  = require("react") //  common js

import React from 'react'; // es6 module system.
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CustomName from './App';
// import App from './App';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

import { store } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
