import React from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import { history, store } from '_store/index';

import Navbar from './index';

describe('Navbar Component:', () => {
  it('renders the home page', async () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Navbar />
        </Router>
      </Provider>,
    );
  });
});
