import { ADD_BUG, REMOVE_BUG, RESET } from "./bugs.types";

const initState = {
  critical: [],
  major: [],
  medium: [],
  low: [],
};

export const bugReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_BUG: {
      let x = payload.type;
      //   if(state.x.length == 5){
      //     return state;
      //   }
      let temp;
      if (x == "critical") temp = state.critical;
      else if (x == "major") temp = state.major;
      else if (x == "medium") temp = state.medium;
      else temp = state.low;
      return { ...state, [payload.type]: [...temp, payload.bug] };
    }
    case REMOVE_BUG: {
      let x = payload.type;
      let temp;
      if (x == "critical") temp = state.critical;
      else if (x == "major") temp = state.major;
      else if (x == "medium") temp = state.medium;
      else temp = state.low;
      const newData = temp.filter((e, i) => i != payload.bug);
      return { ...state, [payload.type]: newData };
    }
    case RESET: {
      return { ...state, [payload.type]: payload.bug };
    }
    default:
      return state;
  }
};
