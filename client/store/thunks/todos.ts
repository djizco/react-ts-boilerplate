import { addTodo, incrementTodoId } from '_store/actions/todos';

import { AppThunk } from '_store/index';

export const addTodoAndIncrementId = (text: string): AppThunk => (dispatch, getState) => {
  const { nextTodoId } = getState().todos;

  dispatch(addTodo(nextTodoId, text));
  dispatch(incrementTodoId());
};
