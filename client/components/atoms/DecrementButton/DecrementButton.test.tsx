import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { store } from '_store';

import DecrementButton from './DecrementButton';

describe('DecrementButton Component:', () => {
  it('decrements the counter', async () => {
    render(
      <Provider store={store}>
        <DecrementButton />
      </Provider>,
    );

    expect(store.getState().counter).toEqual(0);

    await userEvent.click(screen.getByText('Decrement'));

    expect(store.getState().counter).toEqual(-1);
  });
});
