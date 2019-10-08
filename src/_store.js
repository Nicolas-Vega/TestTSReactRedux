import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import localForage from 'localforage';
const reducers = {};

const config = {
  key: 'primary',
  storage: localForage,
  blacklist: ['router', 'context', 'headerBar', 'navigation', 'loading'],
};

const combineReducers = (history) => persistCombineReducers(config, {
  ...reducers,
  router: connectRouter(history),
});

export const history = createBrowserHistory()

const appliedMiddlewares = applyMiddleware(
  routerMiddleware(history)
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  appliedMiddlewares,
);

const initialState = {};

const store = createStore(
  combineReducers(history), initialState, enhancer,
);

export const persistedStore = persistStore(store, null);

export default store;