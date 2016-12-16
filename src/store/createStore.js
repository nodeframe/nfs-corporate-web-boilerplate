import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/root.reducer';
import sweetAlertMiddleware from './middlewares/sweetAlertMiddleware'

export default function configureStore(preloadedState = {}) {

  const enhancer = compose(
    applyMiddleware(
      //promiseMiddleware,
      thunkMiddleware,
      //apiMiddleware,
      sweetAlertMiddleware,
      // loggerMiddleware,
      //persistState
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore( rootReducer, preloadedState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers/root.reducer', () => {
      const reducers = require('../reducers/root.reducer').default;
      store.replaceReducer(reducers);
    });
  }
  return store;
}
