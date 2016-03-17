import 'babel-polyfill';
import React from 'react';
import { render } from 'react';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './containters/App';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <App store={store} history={history} />,
  document.getElementById('app')
);