import {
  UPDATE_ATTENDING_STATUS,
  TOGGLE_EMAIL_EDIT_STATE,
  UPDATE_USER_EMAIL,
  TOGGLE_ADDRESS_EDIT_STATE,
  UPDATE_ADDRESS
} from './constants';

export const updateAttendingStatus = (userId, status) => {
  return {
    type: UPDATE_ATTENDING_STATUS,
    userId,
    status,
  };
};

export const toggleEmailEditState = (userId) => {
  return {
    type: TOGGLE_EMAIL_EDIT_STATE,
    userId,
  };
};

export const updateUserEmail = (userId, text) => {
  return {
    type: UPDATE_USER_EMAIL,
    userId,
    text,
  };
};

export const toggleAddressEditState = () => {
  return {
    type: TOGGLE_ADDRESS_EDIT_STATE,
  };
};

export const updateAddress = (field, text) => {
  return {
    type: UPDATE_ADDRESS,
    field,
    text,
  };
}
