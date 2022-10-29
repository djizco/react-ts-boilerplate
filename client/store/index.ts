import { createStore, applyMiddleware, compose, Middleware, Action, AnyAction } from 'redux';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { createLogger } from 'redux-logger';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

import createRootReducer from './reducers';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const middlewares: Middleware[] = [routerMiddleware, thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true, diff: true });
  middlewares.push(logger);
}

const middleware = compose(
  applyMiddleware(...middlewares),
  autoRehydrate(),
);

const rootReducer = createRootReducer(routerReducer);

export const store = createStore(
  rootReducer,
  middleware,
);

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof rootReducer>;

export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, any, Action>;
