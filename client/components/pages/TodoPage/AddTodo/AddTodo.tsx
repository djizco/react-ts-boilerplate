import React, { ChangeEvent, useState } from 'react';

import Button from 'react-bulma-companion/lib/Button';
import Column from 'react-bulma-companion/lib/Column';
import Columns from 'react-bulma-companion/lib/Columns';
import Input from 'react-bulma-companion/lib/Input';

import { useAppDispatch } from '_store/hooks';
import { addTodoAndIncrementId } from '_store/thunks/todos';

import useKeyPress from '_hooks/useKeyPress';

export default function AddTodo() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');

  const updateText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodoAndIncrementId(text));
      setText('');
    }
  };

  useKeyPress('Enter', handleAddTodo);

  return (
    <Columns className="add-todo" gapless>
      <Column size="10">
        <Input value={text} onChange={updateText} />
      </Column>
      <Column size="2">
        <Button onClick={handleAddTodo} color="success" fullwidth>
          Add
        </Button>
      </Column>
    </Columns>
  );
}
