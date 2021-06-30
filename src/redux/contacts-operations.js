/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

import actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3004';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(actions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.deleteContactError(error.message));
  }
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
