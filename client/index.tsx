import React from 'react';

import { createRoot } from 'react-dom/client';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Root from '_components/environment/Root';

import { history, store } from '_store/index';

createRoot(document.getElementById('app')!)
  .render(<Root history={history} store={store} />);
