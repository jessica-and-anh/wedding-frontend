import axios from 'axios';
import { push } from 'react-router-redux';
import {
  GET_RSVP_GROUP,
  GET_SUCCESS_RSVP_GROUP,
  POST_RSVP_GROUP,
  POST_SUCCESS_RSVP_GROUP,
  ERROR_RSVP_GROUP
} from './constants';
import fetch from 'isomorphic-fetch';
import { apiUrl, getRsvpGroupUrl, postRsvpGroupUrl } from '../constants/helpers';
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

export const postRsvpGroup = () => {
  return {
    type: POST_RSVP_GROUP,
  };
};

export const postSuccessRsvpGroup = ({ user_group, users }) => {
  return {
    type: POST_SUCCESS_RSVP_GROUP,
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
    axios.post(POST_URL, {
        id,
        userGroup,
        users,
      })
      .then(response => response.json())
      .then(json => dispatch(postSuccessRsvpGroup(json)))
      .then(json => {
        dispatch(push('/rsvp-confirmation'));
      })
      .catch(err => dispatch(errorRsvpGroup(err)));
  }

  return dispatch => {
    dispatch(postRsvpGroup());
    return postData(dispatch);
  }
}
