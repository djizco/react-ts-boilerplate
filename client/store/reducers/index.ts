import { combineReducers, Reducer } from 'redux';

import counter from './counter';

const createRootReducer = (routerReducer: Reducer) => combineReducers({
  router: routerReducer,
  counter,
});

export default createRootReducer;
