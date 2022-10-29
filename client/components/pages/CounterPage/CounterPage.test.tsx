import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '_store/index';

import CounterPage from './index';

describe('CounterPage Component:', () => {
  it('renders the counter page', () => {
    render(
      <Provider store={store}>
        <CounterPage />
      </Provider>,
    );
  });
});
