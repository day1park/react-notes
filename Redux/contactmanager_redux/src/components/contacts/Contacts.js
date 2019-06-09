import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";

// when we have an action or bring in from redux state its called in as a prop
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

//if we want to fire off an action
// const mapDispatchToProps = dispatch => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// });

//inside connect parameter 1. anything we want to map from the redux state to props in the component 2. anything we want to dispatch

//so pass mapstatetoprops and mapdispatchtoprops into connect
export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { getContacts }
)(Contacts);
