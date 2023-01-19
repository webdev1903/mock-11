import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./auth/auth.reducer";
import { bugReducer } from "./bugs/bugs.reducer";

// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export const store = legacy_createStore(
  combineReducers({
    auth: authReducer,
    bugs: bugReducer,
  }),
  compose(applyMiddleware(thunk))
);
