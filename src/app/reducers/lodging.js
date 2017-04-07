import {
  GET_SUCCESS_RSVP_GROUP,
  ERROR_RSVP_GROUP,
} from '../actions/constants';
const initialState = {};

const lodging = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUCCESS_RSVP_GROUP:
      return action.lodging;
    case ERROR_RSVP_GROUP:
      return initialState;
    default:
      return state;
  }
}

export default lodging;
