import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '_store';

import Homepage from './index';

describe('Homepage Component:', () => {
  it('renders the home page', () => {
    render(
      <Provider store={store}>
        <Homepage />
      </Provider>,
    );
  });
});
