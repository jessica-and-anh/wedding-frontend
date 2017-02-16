// TODO move this to a utils file since these aren't constants.
import pick from 'lodash/pick';

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

const VALID_USER_GROUP_FIELDS = [
  'address_line1',
  'address_line2',
  'city',
  'code',
  'notes',
  'lodging_friday',
  'lodging_saturday',
  'lodging_sunday',
  'state',
  'zipcode',
];

const VALID_USER_FIELDS = [
  'email',
  'is_attending',
  'diet',
];

export function sanitizePostData({ userGroup, users }) {
  const usersObject = users.reduce((accumulator, user, i) => {
    accumulator[user.id] = pick(user, VALID_USER_FIELDS);
    return accumulator;
  }, {});

  return {
    user_group: pick(userGroup, VALID_USER_GROUP_FIELDS),
    users: usersObject,
  }
}
