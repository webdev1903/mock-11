// import {
//   ADD_CRITICAL_BUG,
//   REMOVE_CRITICAL_BUG,
//   ADD_MAJOR_BUG,
//   REMOVE_MAJOR_BUG,
//   ADD_MEDIUM_BUG,
//   REMOVE_MEDIUM_BUG,
//   ADD_LONG_BUG,
//   REMOVE_LONG_BUG,
// } from "./bugs.types";
import { ADD_BUG, REMOVE_BUG, RESET } from "./bugs.types";

export const addBug = (bug, type) => {
  return { type: ADD_BUG, payload: { bug, type } };
};
export const removeBug = (bug, type) => {
  return { type: REMOVE_BUG, payload: { bug, type } };
};

export const reset = (bug, type) => {
  return { type: RESET, payload: { bug, type } };
};
