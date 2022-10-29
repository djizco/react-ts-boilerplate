import { TodosAction } from '_store/reducers/todos';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const INCREMENT_TODO_ID = 'INCREMENT_TODO_ID';

export const incrementTodoId = (): TodosAction => ({
  type: INCREMENT_TODO_ID,
});

export function addTodo(id: number, text: string): TodosAction {
  return {
    type: ADD_TODO,
    createdAt: Date.now(),
    id,
    text,
  };
}

export function toggleCompleteTodo(id: number): TodosAction {
  return {
    type: TOGGLE_COMPLETE_TODO,
    id,
  };
}

export function updateTodo(id: number, text: string): TodosAction {
  return {
    type: UPDATE_TODO,
    updatedAt: Date.now(),
    text,
    id,
  };
}

export function deleteTodo(id: number): TodosAction {
  return {
    type: DELETE_TODO,
    id,
  };
}
