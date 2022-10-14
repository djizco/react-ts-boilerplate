import React, { useState, useEffect } from 'react';
import { Store } from 'redux';
import { History } from 'history';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { persistStore } from 'redux-persist';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import Main from '_components/environment/Main';

import theme from '_client/styles/js/theme';

export interface RootProps {
  history: History,
  store: Store,
}

export default function Root({ history, store }: RootProps) {
  const [rehydrated, setRehydrated] = useState(false);

  const rehydrate = () => setRehydrated(true);

  useEffect(() => {
    const reduxPersistOptions = {
      whitelist: ['counter', 'todo'],
      keyPrefix: '',
    };

    persistStore(store, reduxPersistOptions, rehydrate);
  }, [store]);

  return rehydrated ? (
    <Provider store={store}>
      <Router history={history}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Main />
          </ThemeProvider>
        </StyledEngineProvider>
      </Router>
    </Provider>
  ) : null;
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
