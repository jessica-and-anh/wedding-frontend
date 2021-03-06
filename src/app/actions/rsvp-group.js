import axios from 'axios';
import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import {
  GET_RSVP_GROUP,
  GET_SUCCESS_RSVP_GROUP,
  POST_RSVP_GROUP,
  POST_SUCCESS_RSVP_GROUP,
  ERROR_RSVP_GROUP,
  RESET_RSVP_GROUP,
} from './constants';
import { API_DOMAIN } from '../constants/paths';
import { getRsvpGroupUrl, postRsvpGroupUrl, sanitizePostData } from '../constants/helpers';
import { showRsvpContentModal } from './show-rsvp-modal';
import { hideModal } from './modal';

export const getRsvpGroup = () => {
  return {
    type: GET_RSVP_GROUP,
  };
};

export const getSuccessRsvpGroup = ({ user_group, users, lodging }) => {
  return {
    type: GET_SUCCESS_RSVP_GROUP,
    userGroup: user_group,
    users,
    lodging,
  };
};

export const postRsvpGroup = () => {
  return {
    type: POST_RSVP_GROUP,
  };
};

export const postSuccessRsvpGroup = ({ user_group, users, lodging }) => {
  return {
    type: POST_SUCCESS_RSVP_GROUP,
    userGroup: user_group,
    users,
    lodging,
  };
};

export const errorRsvpGroup = (err) => {
  return {
    type: ERROR_RSVP_GROUP,
  };
};

export const resetUsersToInitialState = ( user_group, users ) => {
  return {
    type: RESET_RSVP_GROUP,
    userGroup: user_group,
    users,
  };
};

function canShowRsvpContent(json, dispatch) {
  if (Object.keys(json.userGroup).length > 0) {
    dispatch(showRsvpContentModal(json));
  }
}

export const fetchRsvpGroup = (code, showModal = true) => {
  const FETCH_URL = getRsvpGroupUrl(code);

  function getData(dispatch) {
    return fetch(FETCH_URL)
      .then(response => response.json())
      .then(json => dispatch(getSuccessRsvpGroup(json)))
      .then(json => {
        if (showModal) {
          canShowRsvpContent(json, dispatch)
        }
      })
      .catch(err => dispatch(errorRsvpGroup(err)));
  }

  return dispatch => {
    dispatch(getRsvpGroup());
    return setTimeout(getData.bind(this, dispatch), 100);
  };
}

export const submitPostRsvpGroup = (userGroup, users) => {
  const { id } = userGroup;
  const POST_URL = postRsvpGroupUrl(id);

  function postData(dispatch) {
    axios({
      url: POST_URL,
      method: 'put',
      data: sanitizePostData({ userGroup, users }),
      headers: {
        'Access-Control-Allow-Origin': API_DOMAIN,
        'Access-Control-Allow-Methods': 'PUT',
        'Access-Control-Allow-Headers': 'Content-Type',
      }

    })
      .then(response => response.data)
      .then(json => dispatch(postSuccessRsvpGroup(json)))
      .then((json) => {
        dispatch(push(`/rsvp-confirmation/${json.userGroup.code}`));
      })
      .then(dispatch(hideModal()))
      .catch(err => dispatch(errorRsvpGroup(err)));
  }

  return dispatch => {
    dispatch(postRsvpGroup());
    return postData(dispatch);
  }
}
