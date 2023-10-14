import React from 'react';

import Button from 'react-bulma-companion/lib/Button';

import { increment } from '_store/actions/counter';
import { useAppDispatch } from '_store/hooks';

export default function IncrementButton() {
  const dispatch = useAppDispatch();

  const handleIncrement = () => dispatch(increment());

  return (
    <Button color="success" onClick={handleIncrement}>
      Increment
    </Button>
  );
}
