import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { store } from '_store/index';

import IncrementButton from './IncrementButton';

describe('IncrementButton Component:', () => {
  it('increments the counter', async () => {
    render(
      <Provider store={store}>
        <IncrementButton />
      </Provider>,
    );

    expect(store.getState().counter).toEqual(0);

    await userEvent.click(screen.getByText('Increment'));

    expect(store.getState().counter).toEqual(1);
  });
});
