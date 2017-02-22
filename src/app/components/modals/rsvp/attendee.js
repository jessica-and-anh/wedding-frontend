import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

class Attendee extends Component {
  render() {
    const {
      name,
      email,
      isAttending,
      onCheck,
      id,
      onEmailEdit,
      onEmailChange,
      isEditing,
    } = this.props;

    const initial = name[0].toUpperCase();
    const checkboxName = `user-${id}`;
    const emailInputName = `email-${id}`;
    const inputStyle = {
      fontSize: 13,
      width: 200,
      height: 38,
    };

    let emailEditText = '';
    if (isEditing) {
      emailEditText = 'done';
    } else {
      emailEditText = email ? 'edit' : 'add email';
    }

    return (
      <li className={cx('rsvp-attendee', { attending: isAttending })}>
        <Avatar
          backgroundColor="#44a5c9"
          size={50}
          className="attendee-avatar"
        >
          {initial}
        </Avatar>

        <div className="attendee-data">
          {
            !isEditing && <p className="attendee-name">{name}</p>
          }
          {
            isEditing ? <TextField
                          defaultValue={email}
                          className="attendee-email-edit"
                          name={emailInputName}
                          data-user-id={id}
                          style={inputStyle}
                          onChange={onEmailChange}
                          autoFocus
                        />
                      : <p className="attendee-email">{email}</p>
          }

          <p className={cx('email edit', { editing: isEditing })}>
            <a
              href="#"
              className="edit-email"
              onClick={onEmailEdit}
              data-user-id={id}
            >
              {emailEditText}
            </a>
          </p>
        </div>

        {!isEditing &&
          <div className="attendee-going">
            <Checkbox
              defaultChecked={isAttending}
              onCheck={onCheck}
              data-user-id={id}
              name={checkboxName}
            />
          </div>
        }
      </li>
    );
  }
}

Attendee.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  isAttending: PropTypes.bool,
  onCheck: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onEmailEdit: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
};

Attendee.defaultProps = {
  email: '',
  isAttending: false,
  isEditing: false,
}

export default Attendee;
