import React from 'react';

import Button from 'react-bulma-companion/lib/Button';

import { useAppDispatch } from '_store/hooks';
import { decrement } from '_store/actions/counter';

export default function DecrementButton() {
  const dispatch = useAppDispatch();

  const handleDecrement = () => dispatch(decrement());

  return (
    <Button color="danger" onClick={handleDecrement}>
      Decrement
    </Button>
  );
}
