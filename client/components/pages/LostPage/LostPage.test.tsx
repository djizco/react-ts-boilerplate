import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '_store/index';

import Lostpage from './index';

describe('Lostpage Component:', () => {
  it('renders the lost page', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Lostpage />
      </Provider>,
    );

    expect(getByText('The page you requested does not exist.')).toBeInTheDocument();
  });
});
