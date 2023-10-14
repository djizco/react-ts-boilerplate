import { decrement, increment } from '_store/actions/counter';
import reducer from '_store/reducers/counter';

describe('Counter Reducer:', () => {
  const initialState = 3;

  test('Is 0 by default', () => {
    expect(reducer(undefined, { type: '' })).toEqual(0);
  });

  test('Increment', () => {
    const state = reducer(initialState, increment());

    expect(state).toEqual(4);
  });

  test('Decrement', () => {
    let state = reducer(initialState, decrement());

    expect(state).toEqual(2);

    state = reducer(state, decrement());

    expect(state).toEqual(1);
  });
});
