import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { push } from 'redux-first-history';

import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

interface HomePageProps {
  classes: {
    button: string,
  }
}

export default function HomePage({ classes }: HomePageProps) {
  const dispatch = useDispatch();

  const pushToCounter = () => dispatch(push('/counter'));
  const pushToTodo = () => dispatch(push('/todo'));

  return (
    <div className="home-page">
      <Section className="app-flex">
        <Title size="1">
          React App!
        </Title>
        <Button className={classes.button} variant="contained" color="primary" onClick={pushToCounter}>
          Counter App
          <ArrowForward />
        </Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={pushToTodo}>
          Todo App
          <ArrowForward />
        </Button>
      </Section>
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
};
