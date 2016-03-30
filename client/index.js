import 'babel-polyfill';
import React from 'react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { getStoredToken } from './middleware/auth';
import { loginUserSuccess } from './actions';


import './style/style.less';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

// authenticate if token available
const storedToken = getStoredToken();
if (storedToken) {
  store.dispatch(loginUserSuccess(storedToken));
}

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
