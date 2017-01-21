import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import reducers from 'reducers';
import { loadState } from './localStorage';

const persistedState = loadState();
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);
export default createStoreWithMiddleware(reducers, persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
