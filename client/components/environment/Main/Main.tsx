import React, { useEffect, Fragment } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from '_components/organisms/Navbar';
import Footer from '_components/organisms/Footer';

import HomePage from '_components/pages/HomePage';
import CounterPage from '_components/pages/CounterPage';
import TodoPage from '_components/pages/TodoPage';
import LostPage from '_components/pages/LostPage';

import { useStyles } from './styles';

export default function Main() {
  const { pathname } = useLocation();
  const { classes } = useStyles();

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
