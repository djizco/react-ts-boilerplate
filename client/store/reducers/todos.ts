import update from 'immutability-helper';
import * as R from 'ramda';

import {
  ADD_TODO, DELETE_TODO, INCREMENT_TODO_ID, TodosAction, TOGGLE_COMPLETE_TODO, UPDATE_TODO,
} from '_store/actions/todos';

export interface Todo {
  readonly id: number,
  readonly createdAt: number,
  updatedAt?: number,
  completed: boolean,
  text: string,
}

export interface Todos {
  nextTodoId: number,
  list: Todo[],
}

const initialTodo = { completed: false, id: 0, text: '', createdAt: Date.now() };

export function todo(state: Todo = initialTodo, action: TodosAction) {
  switch (action.type) {
    case ADD_TODO:
      return update(state, {
        id: { $set: action.payload?.id || 0 },
        text: { $set: action.payload?.text || '' },
        createdAt: { $set: action.payload?.createdAt || 0 },
      });
    case TOGGLE_COMPLETE_TODO:
      return update(state, {
        completed: { $apply: x => !x },
      });
    case UPDATE_TODO:
      return update(state, {
        text: { $set: action.payload?.text || '' },
        updatedAt: { $set: action.payload?.updatedAt },
      });
    default:
      return state;
  }
}

export default function todos(state: Todos = { nextTodoId: 1, list: [] }, action: TodosAction) {
  const index: number = R.findIndex(R.propEq(action.payload?.id, 'id'), state.list);

  switch (action.type) {
    case INCREMENT_TODO_ID:
      return update(state, { nextTodoId: { $apply: R.inc } });
    case ADD_TODO:
      return update(state, { list: { $push: [todo(undefined, action)] } });
    case TOGGLE_COMPLETE_TODO:
      return update(state, { list: { $splice: [[index, 1, todo(state.list[index], action)]] } });
    case UPDATE_TODO:
      return update(state, { list: { $splice: [[index, 1, todo(state.list[index], action)]] } });
    case DELETE_TODO:
      return update(state, { list: { $splice: [[index, 1]] } });
    default:
      return state;
  }
}
