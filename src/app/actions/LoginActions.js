import {
  GET_RSVP_GROUP,
  GET_SUCCESS_RSVP_GROUP,
  ERROR_RSVP_GROUP
} from './constants';
import fetch from 'isomorphic-fetch';
import { apiUrl } from '../constants/helpers';
import { showRsvpContentModal } from './show-rsvp-modal';

export const getRsvpGroup = () => {
  return {
    type: GET_RSVP_GROUP,
  };
};

export const getSuccessRsvpGroup = ({ user_group, users }) => {
  return {
    type: GET_SUCCESS_RSVP_GROUP,
    userGroup: user_group,
    users,
  };
};

export const errorLogin = (error) => {
  return { error };
};

function canShowRsvpContent(json, dispatch) {
  if (Object.keys(json.userGroup).length > 0) {
    dispatch(showRsvpContentModal());
  }
}

export const fetchRsvpGroup = (email) => {
  const POST_URL = apiUrl('sessions');

  function fetchData(dispatch) {
    return fetch(POST_URL, {
        method: 'POST',
        body: { session: { email } },
      })
      .then((response) => {
        if (response.user_id) {
          dispatch(getSuccessRsvpGroup(json))
        } else {
          dispatch(errorLogin('Invalid email address'))
        }
      })
      .catch(err => dispatch(errorLogin(err)));
  }

  return dispatch => {
    dispatch(getRsvpGroup());
    return setTimeout(fetchData.bind(this, dispatch), 1000);
  };
}
