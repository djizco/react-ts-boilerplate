import { AnyAction } from 'redux';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const INCREMENT_TODO_ID = 'INCREMENT_TODO_ID';

export interface TodosAction extends AnyAction {
  payload: {
    id?: number;
    text?: string;
    createdAt?: number;
    updatedAt?: number;
  }
}

export const incrementTodoId = (): TodosAction => ({
  type: INCREMENT_TODO_ID,
  payload: {},
});

export function addTodo(id: number, text: string): TodosAction {
  return {
    type: ADD_TODO,
    payload: {
      createdAt: Date.now(),
      id,
      text,
    },
  };
}

export function toggleCompleteTodo(id: number): TodosAction {
  return {
    type: TOGGLE_COMPLETE_TODO,
    payload: {
      id,
    },
  };
}

export function updateTodo(id: number, text: string): TodosAction {
  return {
    type: UPDATE_TODO,
    payload: {
      updatedAt: Date.now(),
      text,
      id,
    },
  };
}

export function deleteTodo(id: number): TodosAction {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
}
