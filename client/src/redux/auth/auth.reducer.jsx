import { SIGNUP, LOGIN, LOGIN_ERROR } from "./auth.types";

const initState = {
  token: "",
  login: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, token: payload.token, login: true };
    case SIGNUP:
      return state;
    case LOGIN_ERROR:
      return state;
    default:
      return state;
  }
};
