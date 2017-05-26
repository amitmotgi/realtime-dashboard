import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import todoApp from './reducers';
import App from './Components/App';

//const store = createStore(todoApp);

render(
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
);
