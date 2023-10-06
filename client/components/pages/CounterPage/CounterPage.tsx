import React from 'react';

import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

import { useAppSelector } from '_store/hooks';

import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';

export default function CounterPage() {
  const counter = useAppSelector(state => state.counter);

  return (
    <div className="counter-page">
      <Section className="counter-section app-flex">
        <Title textAlign="center" size="1">
          Counter:
        </Title>
        <div className="counter">
          {counter}
        </div>
        <Columns>
          <Column size="6">
            <IncrementButton />
          </Column>
          <Column size="6">
            <DecrementButton />
          </Column>
        </Columns>
      </Section>
    </div>
  );
}
