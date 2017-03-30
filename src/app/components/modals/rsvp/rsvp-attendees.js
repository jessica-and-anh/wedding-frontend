import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Attendee from './attendee';
import '../../../../stylesheets/components/modals/rsvp/rsvp-attendees.css';

import {
  updateAttendingStatus,
  toggleEmailEditState,
  updateUserEmail,
  toggleAddressEditState,
  updateAddress
} from '../../../actions/rsvp-attendees';

import TextField from 'material-ui/TextField';

class RsvpAttendees extends Component {
  constructor(props) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
    this.onEmailEdit = this.onEmailEdit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onAddressEdit = this.onAddressEdit.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.dispatch = props.dispatch;
  }

  onCheck(evt, isInputChecked) {
    const userId = parseInt(evt.target.dataset.userId, 10);
    this.dispatch(updateAttendingStatus(userId, isInputChecked));
  }

  onEmailEdit(evt) {
    evt.preventDefault();
    const userId = parseInt(evt.target.dataset.userId, 10);
    this.dispatch(toggleEmailEditState(userId));
  }

  onEmailChange(evt, text) {
    const userId = parseInt(evt.target.dataset.userId, 10);
    this.dispatch(updateUserEmail(userId, text));
  }

  onAddressEdit(evt) {
    evt.preventDefault();
    this.dispatch(toggleAddressEditState());
  }

  onAddressChange(evt, text) {
    const field = evt.target.dataset.address;
    this.dispatch(updateAddress(field, text));
  }

  render() {
    const {
      address_line1,
      address_line2,
      city,
      state,
      zipcode,
      isEditing,
      tier,
    } = this.props.userGroup;

    const error = this.props.error;

    const cityInputStyle = {
      width: 150,
    };

    const stateInputStyle = {
      width: 25,
      textAlign: 'center',
    };

    const zipcodeInputStyle = {
      width: 50,
      textAlign: 'center',
    };

    return (
      <section className="rsvp-attendees">
        <p className="rsvp-attendees-prompt">
          Please confirm whether you and your party are attending.
        </p>
        {tier === 0 &&
          <p className="rsvp-attendees-prompt">
            Note: Your presence is required for rehearsal on Friday.
          </p>
        }
        {tier === 1 &&
          <p className="rsvp-attendees-prompt">
            Note: You are exclusively invited to be part of the rehearsal dinner on Friday (optional).
          </p>
        }
        <ul className="rsvp-attendee-list">
          {
            this.props.users.map((user, index) => {
              return (
                <Attendee
                  name={user.first_name + " " + user.last_name}
                  email={user.email}
                  isAttending={user.is_attending}
                  onCheck={this.onCheck}
                  id={user.id}
                  onEmailEdit={this.onEmailEdit}
                  onEmailChange={this.onEmailChange}
                  isEditing={user.isEditing}
                  key={index}
                />
              );
            })
          }
        </ul>
        <div className="group-address">
          <h3 className="address-title">Address</h3>
          {
            isEditing ? <div className="address-fields">
                          <TextField
                            autoFocus
                            defaultValue={address_line1}
                            name="address-line1"
                            className="address-line1"
                            data-address="address_line1"
                            hintText="2089 Pacific Blvd"
                            onChange={this.onAddressChange}
                          />
                          <TextField
                            defaultValue={address_line2}
                            name="address-line2"
                            className="address-line2"
                            data-address="address_line2"
                            hintText="Apt 123"
                            onChange={this.onAddressChange}
                          />
                          <div className="address-line3">
                            <TextField
                              defaultValue={city}
                              name="address-city"
                              className="address-city"
                              data-address="city"
                              style={cityInputStyle}
                              hintText="San Mateo"
                              onChange={this.onAddressChange}
                            />
                            <TextField
                              defaultValue={state}
                              name="address-state"
                              className="address-state"
                              data-address="state"
                              style={stateInputStyle}
                              hintText="CA"
                              onChange={this.onAddressChange}
                            />
                            <TextField
                              defaultValue={zipcode}
                              name="address-zipcode"
                              className="address-zipcode"
                              data-address="zipcode"
                              style={zipcodeInputStyle}
                              hintText="94403"
                              onChange={this.onAddressChange}
                            />
                          </div>
                        </div>

                      : address_line1 ? <div className="address-text">
                                          <p className="address line1">{address_line1}</p>
                                          <p className="address line2">{address_line2}</p>
                                          <p className="address line3">{city}, {state} {zipcode}</p>
                                        </div>

                                      : <div className="address-text">
                                          <p className="address line1">Please enter an address</p>
                                        </div>


          }
          <p className="address edit">
            <a href="#" className="edit-address" onClick={this.onAddressEdit}>
              {isEditing ? 'done' : 'edit'}
            </a>
          </p>
          {
            error &&
            <p className="error">Something went wrong, please try again.</p>
          }
        </div>
      </section>
    );
  }
}

RsvpAttendees.propTypes = {
  userGroup: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

RsvpAttendees = connect()(RsvpAttendees);

export default RsvpAttendees;
