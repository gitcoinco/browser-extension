// https://github.com/diegohaz/arc/wiki/Redux-modules
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware, routerActions } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';
import { createHashHistory } from 'history';
import middlewares from '../departments/middlewares'
import rootReducer from '../departments/reducer'
import sagas from '../departments/sagas'

const history = createHashHistory();

const configureStore = (initialState, services = {}) => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  middleware.push(...middlewares);

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  middleware.push(logger);

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    ...routerActions,
  };

   // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators,
    })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  initialState = {}

  const store = createStore(rootReducer, initialState, enhancer);
  let sagaTask = sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('../departments/reducer', () => {
      const nextReducer = require('../departments/reducer').default
      store.replaceReducer(nextReducer)
    })
    module.hot.accept('../departments/sagas', () => {
      const nextSagas = require('../departments/sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas)
      })
    })
  }

  return store
}

export default { configureStore, history }
