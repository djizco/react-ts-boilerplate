import React, { Fragment, useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import Footer from '_components/layouts/Footer';
import Navbar from '_components/layouts/Navbar';
import CounterPage from '_components/pages/CounterPage';
import HomePage from '_components/pages/HomePage';
import LostPage from '_components/pages/LostPage';
import TodoPage from '_components/pages/TodoPage';

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
