import React, { Component, PropTypes } from 'react';
import '../../../../stylesheets/components/modals/rsvp/rsvp-content.css';

import RsvpAttendees from './rsvp-attendees';
import RsvpDetails from './rsvp-details';

class RsvpContent extends Component {
  render() {
    const {
      userGroup,
      users,
      error,
    } = this.props;

    return (
      <aside className="rsvp-content-modal">
        <section className="rsvp-body">
          <RsvpAttendees
            userGroup={userGroup}
            users={users}
            error={error}
          />
          <RsvpDetails
            userGroup={userGroup}
            users={users}
          />
        </section>
      </aside>
    );
  }
}

RsvpContent.propTypes = {
  userGroup: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

export default RsvpContent;
