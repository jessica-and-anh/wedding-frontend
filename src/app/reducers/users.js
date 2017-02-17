import {
  GET_SUCCESS_RSVP_GROUP,
  UPDATE_ATTENDING_STATUS,
  TOGGLE_EMAIL_EDIT_STATE,
  UPDATE_USER_EMAIL
} from '../actions/constants';

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUCCESS_RSVP_GROUP:
      return action.users.map((user) => {
        return Object.assign({}, user, {
          isEditing: false,
        });
      });

    case UPDATE_ATTENDING_STATUS:
      return state.map((user) => {
        if (user.id === action.userId) {
          return Object.assign({}, user, {
            is_attending: action.status,
          });
        }
        return user;
      });

    case TOGGLE_EMAIL_EDIT_STATE:
      return state.map((user) => {
        if (user.id === action.userId) {
          return Object.assign({}, user, {
            isEditing: !user.isEditing,
          });
        }
        return user;
      });

    case UPDATE_USER_EMAIL:
      return state.map((user) => {
        if (user.id === action.userId) {
          return Object.assign({}, user, {
            email: action.text,
          });
        }
        return user;
      });

    default:
      return state;
  }
}

export default users;
