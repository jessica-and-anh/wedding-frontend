import { combineReducers } from 'redux';
import users from './users';
import userGroup from './user-group';
import {
  GET_RSVP_GROUP,
  GET_SUCCESS_RSVP_GROUP,
  POST_RSVP_GROUP,
  POST_SUCCESS_RSVP_GROUP,
  ERROR_RSVP_GROUP
} from '../actions/constants';

const initialState = {
  isFetching: false,
  error: false,
};

const request = (state = initialState, action) => {
  switch (action.type) {
    case GET_RSVP_GROUP:
    case POST_RSVP_GROUP:
      return Object.assign({}, state, {
        isFetching: true,
        error: false,
      });

    case GET_SUCCESS_RSVP_GROUP:
    case POST_SUCCESS_RSVP_GROUP:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
      });

    case ERROR_RSVP_GROUP:
      return Object.assign({}, state, {
        error: true,
        isFetching: false,
      });

    default:
      return Object.assign({}, state, {
        error: false,
      });
  }
}

const rsvp = combineReducers({
  request,
  userGroup,
  users,
});

export default rsvp;
