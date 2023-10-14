import React from 'react';

import { render } from '@testing-library/react';

import Footer from './index';

describe('Footer Component:', () => {
  it('renders the home page', async () => {
    render(<Footer />);
  });
});
