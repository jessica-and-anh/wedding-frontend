import { API_DOMAIN } from './paths';

export function apiUrl(path) {
  return `${API_DOMAIN}/${path}`;
};

export function getRsvpGroupUrl(code) {
  return apiUrl(`rsvp/show/${code}`);
};

export function postRsvpGroupUrl(userGroupId) {
  return apiUrl(`user_groups/${userGroupId}`);
};
