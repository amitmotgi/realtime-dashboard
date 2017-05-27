import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';

const store = configureStore()

render(
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
);
