import React from 'react';
import { render } from 'react-dom';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { store, history } from '_store/index';

import Root from '_components/environment/Root';

render(
  <Root store={store} history={history} />,
  document.getElementById('app'),
);
