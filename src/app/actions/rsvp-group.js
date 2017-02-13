import {
  REQUEST_RSVP_GROUP,
  RECEIVE_RSVP_GROUP,
  ERROR_RSVP_GROUP
} from './constants';
import fetch from 'isomorphic-fetch';
import { apiUrl } from '../constants/helpers';
import { showRsvpContentModal } from './show-rsvp-modal';

export const requestRsvpGroup = () => {
  return {
    type: REQUEST_RSVP_GROUP,
  };
};

export const receiveRsvpGroup = ({ user_group, users }) => {
  return {
    type: RECEIVE_RSVP_GROUP,
    userGroup: user_group,
    users,
  };
};

export const errorRsvpGroup = (err) => {
  return {
    type: ERROR_RSVP_GROUP,
  };
};

function canShowRsvpContent(json, dispatch) {
  if (Object.keys(json.userGroup).length > 0) {
    dispatch(showRsvpContentModal());
  }
}

export const fetchRsvpGroup = (code, showModal = true) => {
  const FETCH_URL = apiUrl(`rsvp/show/${code}`);

  function fetchData(dispatch) {
    return fetch(FETCH_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveRsvpGroup(json)))
      .then(json => {
        if (showModal) {
          canShowRsvpContent(json, dispatch)
        }
      })
      .catch(err => dispatch(errorRsvpGroup(err)));
  }

  return dispatch => {
    dispatch(requestRsvpGroup());
    return setTimeout(fetchData.bind(this, dispatch), 1000);
  };
}
