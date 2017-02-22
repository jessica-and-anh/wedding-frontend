import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import '../../../stylesheets/components/rsvp-confirmation.css';

export default function AttendeesList({
  subheader,
  users,
}) {
  if (users.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="space-2">{subheader}</h2>
      <ul className="confirmation-attendee-list">
        {
          users.map((user) => {
            const initial = user.first_name[0].toUpperCase();
            return (
              <li className="confirmation-attendee" key={user.id}>
                <Avatar
                  backgroundColor="#44a5c9"
                  size={50}
                  className="attendee-avatar"
                >
                  {initial}
                </Avatar>

                <div className="attendee-data">
                  <p className="attendee-name">{`${user.first_name} ${user.last_name}`}</p>
                  <p className="attendee-email">{user.email}</p>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

AttendeesList.propTypes = {
  subheader: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  hasDivider: PropTypes.bool,
};
