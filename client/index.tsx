import React from 'react';
import { render } from 'react-dom';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Root from '_components/environment/Root';

render(
  <Root />,
  document.getElementById('app'),
);
