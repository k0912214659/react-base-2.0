import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { createGlobalReducer } from './global';

async function createStore(params) {
  const { initialState } = params;
  return reduxCreateStore(
    combineReducers({
      global: createGlobalReducer({
        initialState: initialState.global,
      }),
    }),
    applyMiddleware(thunk),
  );
}

export default createStore;
