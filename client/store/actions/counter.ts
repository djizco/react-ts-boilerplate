import { CounterAction } from '_store/reducers/counter';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment(): CounterAction {
  return {
    type: INCREMENT,
  };
}

export function decrement(): CounterAction {
  return {
    type: DECREMENT,
  };
}
