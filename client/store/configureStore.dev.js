import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import rootSaga from '../sagas';
import { routerMiddleware } from 'react-router-redux';

const sagaMiddleware = createSagaMiddleware()
export default function configureStore(history, initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      applyMiddleware(routerMiddleware(history)),
      //applyMiddleware(createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
    )
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable webpack hot module replacemente for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReduer(nextRootReducer);
    });
  }

  return store;
}
