import {
  GET_SUCCESS_RSVP_GROUP,
  UPDATE_ATTENDING_DAY,
  UPDATE_NOTE,
  UPDATE_DIET,
  TOGGLE_ADDRESS_EDIT_STATE,
  UPDATE_ADDRESS,
  RESET_RSVP_GROUP,
} from '../actions/constants';

const initialState = {
  isEditing: false,
};

const userGroup = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUCCESS_RSVP_GROUP:
      return Object.assign({}, state, action.userGroup);

    case UPDATE_ATTENDING_DAY:
      return Object.assign({}, state, {
        [`lodging_${action.day}`]: action.status,
      });

    case UPDATE_NOTE:
      return Object.assign({}, state, {
        notes: action.text,
      });

    case UPDATE_DIET:
      return Object.assign({}, state, {
        diet: action.count,
      });

    case TOGGLE_ADDRESS_EDIT_STATE:
      return Object.assign({}, state, {
        isEditing: !state.isEditing,
      });

    case UPDATE_ADDRESS:
      return Object.assign({}, state, {
        [action.field]: action.text,
      });

    case RESET_RSVP_GROUP:
      return Object.assign({}, action.userGroup);

    default:
      return state;
  }
}

export default userGroup;
