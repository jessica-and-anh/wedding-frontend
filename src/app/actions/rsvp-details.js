import {
  UPDATE_ATTENDING_DAY,
  UPDATE_NOTE,
  UPDATE_DIET
} from './constants';

export const updateAttendingDay = (day, status) => {
  return {
    type: UPDATE_ATTENDING_DAY,
    day,
    status,
  };
};

export const updateNote = (text) => {
  return {
    type: UPDATE_NOTE,
    text,
  };
};

export const updateDiet = (count) => {
  return {
    type: UPDATE_DIET,
    count,
  };
};

// TODO does this belong here?
export const LODGING_REQUESTED = 'REQUESTED';
