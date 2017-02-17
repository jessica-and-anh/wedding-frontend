// TODO move this to a utils file since these aren't constants.
import omit from 'lodash/omit';

import { API_DOMAIN } from './paths';

export function apiUrl(path) {
  return `${API_DOMAIN}/${path}`;
};

export function getRsvpGroupUrl(code) {
  return apiUrl(`rsvp/show/${code}`);
};

export function postRsvpGroupUrl(userGroupId) {
  return apiUrl(`rsvp/${userGroupId}`);
};

const INVALID_USER_FIELDS = ['isEditing'];

export function sanitizePostData({ userGroup, users }) {
  const usersObject = users.reduce((accumulator, user) => {
    accumulator[user.id] = omit(user, INVALID_USER_FIELDS);
    return accumulator;
  }, {});

  return {
    user_group: userGroup,
    users: usersObject,
  };
}
