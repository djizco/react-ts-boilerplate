import React from 'react';
import PropTypes from 'prop-types';

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

export default function LostPage({ classes }) {
  return (
    <div className={classes.root}>
      <Section className="is-full-page">
        <Title className="app-title" size="1">
          404
        </Title>
        <p>
          The page you requested does not exist.
        </p>
      </Section>
    </div>
  );
}

LostPage.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
};
