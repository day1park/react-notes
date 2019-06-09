import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from "./types";
import axios from "axios";

export const getContacts = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  // request to json placeholder, get response and add that as a payload to get contacts
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};

export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};
