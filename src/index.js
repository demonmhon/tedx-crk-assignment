import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import store from './redux/store/index';
import './scss/styles.scss';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Rubik:300,400,500', 'sans-serif'],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
