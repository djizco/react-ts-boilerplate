import React from 'react';

import { render } from '@testing-library/react';

import { history, store } from '_store/index';

import Root from './Root';

describe('Root Component:', () => {
  it('renders without crashing', () => {
    render(<Root store={store} history={history} />);
  });
});
