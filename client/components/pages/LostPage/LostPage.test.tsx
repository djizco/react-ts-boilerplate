import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '_store';

import Lostpage from './index';

describe('Lostpage Component:', () => {
  it('renders the lost page', async () => {
    render(
      <Provider store={store}>
        <Lostpage />
      </Provider>,
    );
  });
});
