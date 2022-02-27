import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { saveState } from './config/localStorage';
import {store} from './config/store'
store.subscribe

ReactDOM.render(
  <Provider store={store}>
    
    <App />

  </Provider>,
  document.getElementById('root')
);

