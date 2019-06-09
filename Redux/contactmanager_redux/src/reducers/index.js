import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

export default combineReducers({
  // when bringing in application state from redux into a component this is going to be available in the props, how we would access the contact state would be 'this.props.contact'
  contact: contactReducer
});
