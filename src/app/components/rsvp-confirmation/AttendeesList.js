import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
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
      <List className="flex">
        {
          users.map((user) => {
            const initial = user.first_name[0].toUpperCase();
            return (
              <div className="attendee spacing-right" key={user.id}>
                <ListItem
                  leftAvatar={
                      <Avatar
                        backgroundColor="#44a5c9"
                        size={50}
                      >
                      {initial}
                    </Avatar>
                  }
                  primaryText={`${user.first_name} ${user.last_name}`}
                  secondaryText={user.email}
                />
              </div>
            );
          })
        }
      </List>
    </div>
  );
}

AttendeesList.propTypes = {
  subheader: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  hasDivider: PropTypes.bool,
};
