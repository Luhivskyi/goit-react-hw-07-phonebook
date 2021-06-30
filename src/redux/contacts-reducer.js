import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const error = createReducer(false, {
  [actions.fetchContactRequest]: () => false,
  [actions.fetchContactSuccess]: () => false,
  [actions.fetchContactError]: () => true,

  [actions.addContactRequest]: () => false,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => true,

  [actions.deleteContactRequest]: () => false,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => true,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  error,
});
