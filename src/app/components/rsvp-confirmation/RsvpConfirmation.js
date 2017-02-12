import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RsvpHero from '../rsvp-hero';
import AttendeesList from './AttendeesList';
import Lodging from './Lodging';
import '../../../stylesheets/components/rsvp-confirmation.css';

export default class RsvpConfirmation extends Component {
  componentWillMount() {
    const { users, onRouteToHomepage } = this.props;
    if (users.length === 0) {
      onRouteToHomepage();
    }
  }

  render() {
    const { userGroup, users, onRsvpClick } = this.props;
    if (users.length === 0) return null;

    const totalAttendees = users
      .map(user => user.is_attending)
      .reduce(function(a, b) { return a + b });
    const isAnyoneAttending = totalAttendees > 0;
    const guestsAttending = users.filter((user) => { return user.is_attending });
    const guestsNotAttending = users.filter((user) => { return !user.is_attending });

    return (
      <div>
        <div className="max-width">
          <RsvpHero isAnyoneAttending={isAnyoneAttending}/>
          <section className="rsvp-confirmation">
            <h1 className="text-center space-top-2 space-5">Here’s a summary of what you told us:</h1>

            <div className="flex">
              <div className="confirmation-details-container attendees-container">
                <AttendeesList
                  subheader="ATTENDING"
                  users={guestsAttending}
                />
                {guestsAttending.length > 0 && guestsNotAttending.length > 0 &&
                  <hr className="space-top-2 space-2 attendee-hr" />}
                <AttendeesList
                  subheader="NOT ATTENDING"
                  users={guestsNotAttending}
                  hasDivider
                />
              </div>

              {isAnyoneAttending &&
                <Lodging userGroup={userGroup} />
              }
            </div>
            <div className="text-center">
              <FlatButton
                onClick={onRsvpClick}
                primary
              >
                Want to change something?
              </FlatButton>
            </div>
          </section>
        </div>
        <hr className="space-top-3 space-3" />
      </div>
    );
  }
}

RsvpConfirmation.propTypes = {
  userGroup: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  onRsvpClick: PropTypes.func.isRequired,
  onRouteToHomepage: PropTypes.func.isRequired,
};
