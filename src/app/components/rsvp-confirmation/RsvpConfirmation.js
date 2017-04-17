import React, { Component, PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import _ from 'lodash';

import RsvpHero from './rsvp-hero';
import AttendeesList from './AttendeesList';
import LodgingDetails from './lodging-details.js';
import Lodging from './Lodging';
import TipsToPrepare from './TipsToPrepare';
import RaisedButton from 'material-ui/RaisedButton';
import '../../../stylesheets/components/rsvp-confirmation.css';

export default class RsvpConfirmation extends Component {
  constructor(props) {
    super(props);
    this.onChangeRsvp = this.onChangeRsvp.bind(this);
  }

  onChangeRsvp() {
    const {
      onRsvpClick,
      userGroup,
      users,
    } = this.props;
    onRsvpClick(userGroup, users);
  }

  componentWillMount() {
    const { users, code, onLoadWithRsvpCode, onRouteToHomepage } = this.props;

    if (code) {
      onLoadWithRsvpCode(code);
    } else if (users.length === 0) {
      onRouteToHomepage();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { userGroup, users, lodging } = this.props;
    if (users.length === 0) return null;

    const totalAttendees = users
      .map(user => user.is_attending)
      .reduce(function(a, b) { return a + b });
    const isAnyoneAttending = totalAttendees > 0;
    const guestsAttending = users.filter((user) => { return user.is_attending });
    const guestsNotAttending = users.filter((user) => { return !user.is_attending });

    const {
      lodging_friday: friday,
      lodging_saturday: saturday,
      lodging_sunday: sunday,
    } = userGroup;
    const lodgingDays = {
      friday,
      saturday,
      sunday,
    };

    const requestedLodgingDays = _.values(lodgingDays).filter((day) => { return day });
    const isRequestingLodging = requestedLodgingDays > 0;

    const buttonStyle = {
      paddingLeft: '10px',
      paddingRight: '10px',
    };

    return (
      <div>
        <div>
          <RsvpHero isAnyoneAttending={isAnyoneAttending}/>
          <section className="rsvp-confirmation max-width">
            <h1 className="text-center space-top-4 space-5">Here’s a summary of what you told us:</h1>
            <div className="attendees-and-lodging-confirmation">
              <div className="attendees-container">
                <AttendeesList
                  subheader="ATTENDING"
                  users={guestsAttending}
                />
                {guestsAttending.length > 0 && guestsNotAttending.length > 0 &&
                  <hr className="attendee-hr" />}
                <AttendeesList
                  subheader="NOT ATTENDING"
                  users={guestsNotAttending}
                  hasDivider
                />
                {isRequestingLodging && !isAnyoneAttending &&
                  <p className="error">
                    You have requested lodging days, but no confirmed attendees. Please tell us who is joining.
                  </p>
                }
              </div>
              {(isRequestingLodging || isAnyoneAttending) &&
                <Lodging
                  lodgingDays={lodgingDays}
                  requestedLodgingDays={requestedLodgingDays}
                  userGroup={userGroup}
                  lodging={lodging}
                  guestsAttending={guestsAttending}
                />
              }
            </div>
            <div>
              <LodgingDetails
                guestsAttending={guestsAttending}
                guestsNotAttending={guestsNotAttending}
                lodging={lodging}
                requestedLodgingDays={requestedLodgingDays}
                userGroup={userGroup}
              />
            </div>
            <div className="space-top-4 text-center">
              <RaisedButton
                onClick={this.onChangeRsvp}
                buttonStyle={buttonStyle}
                default
              >
                Want to change something?
              </RaisedButton>
            </div>
          </section>
        </div>
        <hr className="space-top-3 space-3 max-width" />
        <TipsToPrepare />
        <MediaQuery maxDeviceWidth={1224}>
          <RaisedButton
            label="Back"
            href="/"
            fullWidth={true}
          />
        </MediaQuery>
      </div>
    );
  }
}

RsvpConfirmation.propTypes = {
  userGroup: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  lodging: PropTypes.object,
  onRsvpClick: PropTypes.func.isRequired,
  onRouteToHomepage: PropTypes.func.isRequired,
};
