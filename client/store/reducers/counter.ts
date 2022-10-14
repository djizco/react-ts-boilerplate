import R from 'ramda';
import { INCREMENT, DECREMENT } from '_store/actions/counter';

export type CounterState = number;

export interface CounterAction {
  type?: string,
}

export default function counter(state: CounterState = 0, action: CounterAction) {
  switch (action.type) {
    case INCREMENT:
      return R.inc(state);
    case DECREMENT:
      return R.dec(state);
    default:
      return state;
  }
}
