import { AnyAction } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface CounterAction extends AnyAction {}

export function increment(): CounterAction {
  return {
    type: INCREMENT,
    payload: {},
  };
}

export function decrement(): CounterAction {
  return {
    type: DECREMENT,
    payload: {},
  };
}
