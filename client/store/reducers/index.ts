import { combineReducers, Reducer } from 'redux';

import counter from './counter';
import todos from './todos';

const createRootReducer = (routerReducer: Reducer) => combineReducers({
  router: routerReducer,
  counter,
  todos,
});

export default createRootReducer;
