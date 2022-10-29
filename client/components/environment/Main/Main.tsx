import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from '_components/organisms/Navbar';
import Footer from '_components/organisms/Footer';

import HomePage from '_components/pages/HomePage';
import CounterPage from '_components/pages/CounterPage';
import TodoPage from '_components/pages/TodoPage';
import LostPage from '_components/pages/LostPage';

interface MainProps {
  classes: {
    root: string,
  }
}

export default function Main({ classes }: MainProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <Navbar />
      <div className={classes.root}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="*" element={<LostPage />} />
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
}

Main.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
};
