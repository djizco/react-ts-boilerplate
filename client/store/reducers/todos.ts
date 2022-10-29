import update from 'immutability-helper';
import R from 'ramda';

import {
  ADD_TODO, TOGGLE_COMPLETE_TODO, UPDATE_TODO, DELETE_TODO, INCREMENT_TODO_ID,
} from '_store/actions/todos';

export interface TodoState {
  readonly id: number,
  readonly createdAt: number,
  updatedAt?: number,
  completed: boolean,
  text: string,
}

export interface TodosState {
  nextTodoId: number,
  list: TodoState[],
}

export interface TodosAction {
  type?: string,
  id?: number,
  text?: string,
  createdAt?: number,
  updatedAt?: number,
}

const initialTodo = { completed: false, id: 0, text: '', createdAt: Date.now() };

export function todo(state: TodoState = initialTodo, action: TodosAction) {
  switch (action.type) {
    case ADD_TODO:
      return update(state, {
        id: { $set: action.id || 0 },
        text: { $set: action.text || '' },
        createdAt: { $set: action.createdAt || 0 },
      });
    case TOGGLE_COMPLETE_TODO:
      return update(state, {
        completed: { $apply: x => !x },
      });
    case UPDATE_TODO:
      return update(state, {
        text: { $set: action.text || '' },
        updatedAt: { $set: action.updatedAt },
      });
    default:
      return state;
  }
}

export default function todos(state: TodosState = { nextTodoId: 1, list: [] }, action: TodosAction) {
  const index: number = R.findIndex(R.propEq('id', action.id), state.list);

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
