import React from 'react';

import Typography from '@mui/material/Typography';

import Element from 'react-bulma-companion/lib/Element';
import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

export default function LostPage() {
  return (
    <Element textAlign="center">
      <Section className="is-full-page">
        <Title className="app-title" size="1">
          404
        </Title>
        <Typography>
          The page you requested does not exist.
        </Typography>
      </Section>
    </Element>
  );
}
