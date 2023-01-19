import { SIGNUP, LOGIN, LOGIN_ERROR } from "./auth.types";
import axios from "axios";

export const signup = (user) => async (dispatch) => {
  return axios
    .post("/signup", user)
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: SIGNUP, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login = (user) => async (dispatch) => {
  return axios
    .post("/login", user)
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: LOGIN, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: LOGIN_ERROR, payload: err });
      console.log(err);
    });
};
