import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable webpack hot module replacemente for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReduer(nextRootReducer);
    });
  }

  return store;
}