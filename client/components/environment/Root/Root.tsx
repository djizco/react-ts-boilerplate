import React, { useEffect, useState } from 'react';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { History } from 'history';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { persistStore } from 'redux-persist';

import theme from '_client/styles/ts/theme';

import Main from '_components/environment/Main';

export interface RootProps {
  history: History,
  store: Store,
}

export default function Root({ history, store }: RootProps) {
  const [rehydrated, setRehydrated] = useState(false);

  const rehydrate = () => setRehydrated(true);

  useEffect(() => {
    const reduxPersistOptions = {
      whitelist: ['counter', 'todos'],
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
